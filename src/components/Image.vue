<template>
  <div>
    <section class="filter">
      <div class="py-5 container">
        <div class="row align-items-start">
          <div class="col-md-7">
            <div class="card">
              <div class="card-header">
                <div v-if="!image" class="form-group pt-3">
                  <input
                    type="file"
                    @change="changeImage"
                    class="form-control"
                  />
                </div>
                <div v-else class="form-group m-0 clearfix">
                  <button @click="image = null" class="btn btn-primary btn-sm">
                    <i class="fa fa-image fa-fw"></i> New image
                  </button>
                  <button
                    class="btn btn-sm btn-success float-right"
                    @click="download"
                  >
                    <i class="fa fa-download fa-fw"></i> Download
                  </button>
                </div>
              </div>

              <!-- Image -->
              <div v-show="image" class="card-body px-2 py-2 text-center">
                <img
                  ref="img"
                  crossOrigin="Anonymous"
                  id="image"
                  :src="image"
                  class="img-fluid"
                  :style="filters"
                  data-original-width="760"
                  data-original-height="476"
                />
              </div>
            </div>
          </div>

          <div class="col-md-5 sticky-top">
            <div class="card mb-2 bg-dark">
              <div class="card-body" id="copy-code">
                <pre>img {<br>&nbsp;&nbsp;filter: {{filters.filter}}; <br>}</pre>
                <button
                  @click="textCopied = !textCopied"
                  :disabled="!image"
                  data-clipboard-target="#copy-code"
                  class="btn btn-sm btn-dark"
                >
                  <span v-if="textCopied">Copied</span>
                  <span v-else>Copy code</span>
                </button>
              </div>
            </div>
            <div class="card">
              <div class="card-header clearfix">
                <h5 class="card-title float-left m-0">Adjust the filter</h5>
                <button
                  type="button"
                  class="btn btn-danger btn-sm float-right"
                  @click="setToDefault()"
                  :disabled="!image"
                >
                  <i class="fa fa-undo fa-fw"></i> Reset
                </button>
              </div>
              <div class="card-body row">
                <div class="col-md-6" :data-filter-disabled="!image">
                  <div class="form-group p-0">
                    <label>Grayscale ({{ filterFunctions.grayscale }})</label>
                    <input
                      type="range"
                      class="form-control"
                      step="0.1"
                      min="0"
                      max="1"
                      v-model="filterFunctions.grayscale"
                      :disabled="!image"
                    />
                  </div>
                  <div class="form-group p-0">
                    <label>Blur ({{ filterFunctions.blur }}px)</label>
                    <input
                      type="range"
                      class="form-control"
                      step="1"
                      min="0"
                      max="50"
                      v-model="filterFunctions.blur"
                      :disabled="!image"
                    />
                  </div>
                  <div class="form-group p-0">
                    <label>Sepia ({{ filterFunctions.sepia }})</label>
                    <input
                      type="range"
                      class="form-control"
                      step="0.1"
                      min="0"
                      max="1"
                      v-model="filterFunctions.sepia"
                      :disabled="!image"
                    />
                  </div>
                  <div class="form-group p-0">
                    <label>Saturate ({{ filterFunctions.saturate }})</label>
                    <input
                      type="range"
                      class="form-control"
                      step="0.1"
                      min="0"
                      max="2"
                      v-model="filterFunctions.saturate"
                      :disabled="!image"
                    />
                  </div>
                  <div class="form-group p-0">
                    <label>Opacity ({{ filterFunctions.opacity }})</label>
                    <input
                      type="range"
                      class="form-control"
                      step="0.1"
                      min="0"
                      max="1"
                      v-model="filterFunctions.opacity"
                      :disabled="!image"
                    />
                  </div>
                </div>
                <div class="col-md-6" :data-filter-disabled="!image">
                  <div class="form-group p-0">
                    <label>Brightness ({{ filterFunctions.brightness }})</label>
                    <input
                      type="range"
                      class="form-control"
                      step="0.01"
                      min="0"
                      max="5"
                      v-model="filterFunctions.brightness"
                      :disabled="!image"
                    />
                  </div>
                  <div class="form-group p-0">
                    <label>Contrast ({{ filterFunctions.contrast }})</label>
                    <input
                      type="range"
                      class="form-control"
                      step="0.01"
                      min="0"
                      max="10"
                      v-model="filterFunctions.contrast"
                      :disabled="!image"
                    />
                  </div>
                  <div class="form-group p-0">
                    <label
                      >Hue-rotate ({{ filterFunctions.hueRotate }}deg)</label
                    >
                    <input
                      type="range"
                      class="form-control"
                      step="1"
                      min="-360"
                      max="360"
                      v-model="filterFunctions.hueRotate"
                      :disabled="!image"
                    />
                  </div>
                  <div class="form-group p-0">
                    <label>Invert ({{ filterFunctions.invert }})</label>
                    <input
                      type="range"
                      class="form-control"
                      step="0.1"
                      min="0"
                      max="2"
                      v-model="filterFunctions.invert"
                      :disabled="!image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ImageFilterApp',

  data() {
    return {
      image: null,
      filterFunctions: null,
      width: 0,
      height: 0,
      selectedPreset: null,
      textCopied: false,
    };
  },
  created() {
    this.filterFunctions = this.defaultValues();
  },
  watch: {
    textCopied() {
      setTimeout(
        function() {
          if (this.textCopied == true) {
            this.textCopied = false;
          }
        }.bind(this),
        350,
      );
    },
  },
  computed: {
    filters() {
      return this.makeFilter();
    },
  },
  methods: {
    makeFilter(filterSet) {
      if (!filterSet) {
        filterSet = this.filterFunctions;
      }

      var filterString = '';
      var defaultValues = this.defaultValues();
      for (var filterFunc in filterSet) {
        if (filterSet[filterFunc] !== defaultValues[filterFunc]) {
          if (filterFunc == 'hueRotate') {
            filterString =
              filterString + 'hue-rotate(' + filterSet[filterFunc] + 'deg) ';
          } else if (filterFunc == 'blur') {
            filterString =
              filterString + filterFunc + '(' + filterSet[filterFunc] + 'px) ';
          } else {
            filterString =
              filterString + filterFunc + '(' + filterSet[filterFunc] + ') ';
          }
        }
      }

      return { filter: filterString };
    },
    setToDefault() {
      this.filterFunctions = this.defaultValues();
    },
    defaultValues() {
      return {
        grayscale: 0,
        sepia: 0,
        saturate: 1,
        hueRotate: 0,
        invert: 0,
        brightness: 1,
        contrast: 1,
        blur: 0,
        opacity: 1,
      };
    },
  },
};
</script>

<style>
pre {
  color: rgb(76, 186, 135);
  font-size: 18px;
  font-weight: bolder;
}

input[type='range'] {
  padding: 0;
  border: none;
}

[data-filter-disabled='true'],
button[disabled='true'],
button[disabled='disabled'],
[data-filter-disabled='true'] input {
  background: #f1f1f1;
  cursor: not-allowed;
}

#copy-code {
  position: relative;
}
#copy-code .btn {
  position: absolute;
  top: 0;
  right: 0;
}

#image {
  transition: 0.6s;
  max-height: 400px;
}
.card-presets .card,
.card-presets {
  border-radius: 0;
}
.card-presets {
  width: 100%;
  /*
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 10000;
	*/
}
.card-presets .card {
  transition: 0.3s;
}
.card-presets .card > .card-body {
  overflow: hidden;
}
.card-presets img {
  max-height: 50px;
}

.owl-nav .owl-prev,
.owl-nav .owl-next {
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  z-index: 1;
  text-align: center;
  background: rgba(52, 58, 64, 0.75);
}

.owl-nav .owl-next {
  right: 0;
}
.owl-nav .owl-prev {
  left: 0;
}
.owl-carousel .owl-item img {
  width: auto !important;
  margin: auto;
  height: 100px;
}

.owl-nav > .disabled {
  color: #aaa;
}
</style>
