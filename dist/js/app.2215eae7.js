(function(t){function e(e){for(var i,r,l=e[0],n=e[1],c=e[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);v&&v(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,l=1;l<a.length;l++){var n=a[l];0!==s[n]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vuefirebase/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var v=n;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1311:function(t,e,a){"use strict";var i=a("9173"),s=a.n(i);s.a},"2fe3":function(t,e,a){"use strict";var i=a("a492"),s=a.n(i);s.a},3651:function(t,e,a){},3708:function(t,e,a){"use strict";var i=a("3651"),s=a.n(i);s.a},5129:function(t,e,a){"use strict";var i=a("d523"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("Navbar"),a("v-content",{staticClass:" mb-4"},[a("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-snackbar",{attrs:{color:"black",timeout:"1000"},model:{value:t.cookiesnackbar,callback:function(e){t.cookiesnackbar=e},expression:"cookiesnackbar"}},[t._v(" We use cookies to personalise content and ads, "),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.cookiesnackbar=!1}}},[t._v(" Close ")])],1),a("v-app-bar",{staticClass:"d-sm-none d-block",staticStyle:{position:"fixed",bottom:"0","z-index":"5"},attrs:{color:"grey lighten-5",bottom:"",height:"84"}},[a("v-row",[a("v-col",{staticClass:"mb-4",attrs:{cols:"2"}},[a("li",[a("a",[a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{text:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-home")])],1)],1)],1)])]),a("v-col",{staticClass:"mb-4",attrs:{cols:"2"}},[a("li",[a("a",[a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{text:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-magnify")])],1)],1)],1)])]),a("v-col",{staticClass:"mb-4",attrs:{cols:"4"}},[a("v-btn",{staticClass:"ml-1",attrs:{text:"",color:"white"}},[a("popup",{on:{projectAdded:function(e){t.snackbar=!0}}})],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"2"}},[a("li",[a("a",[a("router-link",{attrs:{to:"/Like"}},[a("v-btn",{attrs:{text:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-heart-outline")])],1)],1)],1)])]),a("v-col",{staticClass:"mb-4",attrs:{cols:"2"}},[a("li",[a("a",[a("router-link",{attrs:{to:"/Project"}},[a("v-btn",{attrs:{text:""}},[a("v-avatar",{attrs:{size:"25"}},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1485921040253-3601b55d50aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80",alt:""}})])],1)],1)],1)])])],1)],1),a("v-app-bar",{attrs:{flat:"",app:"",color:"white"}},[a("li",[a("a",[a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"text-uppercase black--text d-sm-block d-none subtitle-2"},[a("v-icon",{staticClass:"mx-2",attrs:{color:"black"}},[t._v("mdi-gesture")]),t._v("Inclusive ")],1)],1)],1)]),a("v-icon",{staticClass:"black--text d-sm-none d-block"},[t._v("mdi-camera-outline")]),a("v-spacer"),a("v-text-field",{staticClass:"d-sm-block d-none my-10 grey",staticStyle:{"max-width":"250px","border-radius":"2px"},attrs:{"append-icon":"mdi-microphone",flat:"",solo:"","hide-details":"",placeholder:"Search","prepend-inner-icon":"mdi-magnify"}}),a("li",[a("a",[a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"text-uppercase black--text d-sm-none d-block subtitle-1 ml-7"},[a("v-icon",{staticClass:"mx-1",attrs:{color:"black"}},[t._v("mdi-gesture")]),t._v("Inclusive ")],1)],1)],1)]),a("v-spacer"),a("li",[a("a",[a("router-link",{attrs:{to:"/team"}},[a("v-btn",{staticClass:"d-sm-none d-block",attrs:{text:""}},[a("v-icon",{staticClass:"ml-2",attrs:{color:"black"}},[t._v("mdi-telegram")])],1)],1)],1)]),a("li",[a("a",[a("router-link",{attrs:{to:"/team"}},[a("v-btn",{staticClass:"d-none d-sm-block",attrs:{text:""}},[a("v-icon",{staticClass:"ml-2",attrs:{color:"black"}},[t._v("mdi-compass")])],1)],1)],1)]),a("li",[a("a",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"d-none d-sm-block",attrs:{color:"black",text:""}},i),[a("v-icon",[t._v("mdi-heart")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-card",[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"caption font-weight-bold"},[t._v("Luia")]),a("v-list-item-subtitle",[t._v("Start to follow you "),a("span",{staticClass:"caption grey--text"},[t._v("1 days ago")])])],1)],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("img",{attrs:{src:"https://images.unsplash.com/photo-1489980721706-f487dab89c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80",alt:"John"}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"caption font-weight-bold"},[t._v("John Leider")]),a("v-list-item-subtitle",[t._v("Start to follow you "),a("span",{staticClass:"caption grey--text"},[t._v("1 days ago")])])],1)],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("img",{attrs:{src:"https://images.unsplash.com/photo-1576280314550-773c50583407?ixlib=rb-1.2.1&auto=format&fit=crop&w=2792&q=80",alt:"John"}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"caption font-weight-bold"},[t._v("KAl Viusal")]),a("v-list-item-subtitle",[t._v("Start to follow you "),a("span",{staticClass:"caption grey--text"},[t._v("1 days ago")])])],1)],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("img",{attrs:{src:"https://images.unsplash.com/photo-1489913590284-9269438bb411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExNjMwfQ&auto=format&fit=crop&w=934&q=80",alt:"John"}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"caption font-weight-bold"},[t._v("Jakob Owens")]),a("v-list-item-subtitle",[t._v("Start to follow you "),a("span",{staticClass:"caption grey--text"},[t._v("1 days ago")])])],1)],1)],1)],1)],1)],1)]),a("li",[a("a",[a("router-link",{attrs:{to:"/project"}},[a("v-btn",{staticClass:"d-none d-sm-block",attrs:{text:""}},[a("v-icon",{staticClass:"ml-2",attrs:{color:"black"}},[t._v("mdi-account")])],1)],1)],1)])],1)],1)},l=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{text:"",color:"white"}},i),[a("v-icon",{staticClass:"mx-1",attrs:{size:"30",color:"black"}},[t._v("mdi-plus-box-outline")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"black white--text"}},[t._v(" Post "),a("v-spacer"),[a("v-icon",{staticClass:"white--text",on:{click:function(e){t.dialog=!1}}},[t._v("mdi-close")])]],2),a("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,height:"8",color:"black"}}),a("v-card-text",[a("v-form",{ref:"form"},[a("div",{staticClass:"d-flex justify-center mt-2"},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-avatar",{staticClass:"white ma-2",attrs:{size:"120"},on:{click:t.onPickFile}},[a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.elementVisible,expression:"elementVisible"}],staticClass:"white--text",attrs:{size:200,height:"30",color:"black accent-4",value:t.value}},[t._v(" "+t._s(t.value)+" % ")]),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.elementVisible,expression:"!elementVisible"}],attrs:{src:t.imgUrl}}),a("v-fade-transition",[i?a("v-overlay",{attrs:{absolute:"",color:"black"}},[a("v-btn",[t._v("Upload Image "),a("v-icon",[t._v("mdi-camera")])],1)],1):t._e()],1)],1)]}}])}),t.imgUrl.length<1048487?a("div",{directives:[{name:"show",rawName:"v-show",value:t.avatarvalid,expression:"avatarvalid"}],staticClass:"green--text subtitle-1"},[a("p",{staticClass:"mt-12"},[a("v-icon",{staticClass:"mx-2",attrs:{small:"",color:"green"}},[t._v("mdi-check-circle")]),t._v(" Success! ")],1)]):a("div",{directives:[{name:"show",rawName:"v-show",value:t.avatarvalid,expression:"avatarvalid"}],staticClass:"error--text subtitle-1"},[a("p",{staticClass:"mt-12"},[a("v-icon",{staticClass:"mx-2",attrs:{small:"",color:"red"}},[t._v("mdi-close-circle")]),t._v(" Image size should be less than 1 MB!")],1)])],1),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}}),a("input",{ref:"postInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.postPicked}}),a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"mt-5",attrs:{placeholder:"Upload an avatar image","prepend-icon":"mdi-image",id:"imgUrl",rules:t.filerules,label:"Avatar"},model:{value:t.imgUrl,callback:function(e){t.imgUrl=e},expression:"imgUrl"}}),a("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account",rules:t.inputRules},model:{value:t.person,callback:function(e){t.person=e},expression:"person"}}),a("v-text-field",{attrs:{label:"Tag","prepend-icon":"#"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{placeholder:"Type some thoughts..","prepend-icon":" mdi-content-copy",rules:t.inputRules},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-menu",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-text-field",t._g({attrs:{rules:t.dateRules,value:t.formattedDate,label:"Publish Date","prepend-icon":"mdi-calendar-range"}},i))]}}])},[a("v-date-picker",{model:{value:t.due,callback:function(e){t.due=e},expression:"due"}})],1),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[t.validVisible?a("v-img",{attrs:{width:"200",height:"150",src:t.postUrl,alt:""},on:{click:t.PostFile}},[t.postVisible?a("div",{staticStyle:{width:"200px",height:"150px"}},[a("v-progress-linear",{staticClass:"white--text",attrs:{size:200,height:"150",color:"#191414",value:t.postvalue}},[t._v(" "+t._s(t.postvalue)+" % ")])],1):t._e(),a("v-fade-transition",[i?a("v-overlay",{attrs:{absolute:"",color:"black"}},[a("v-btn",[t._v("Upload Image "),a("v-icon",[t._v("mdi-camera")])],1)],1):t._e()],1)],1):t._e()]}}])}),t.postUrl.length<1048487?a("div",{directives:[{name:"show",rawName:"v-show",value:t.validVisible,expression:"validVisible"}],staticClass:"green--text subtitle-1"},[a("p",{staticClass:"mt-3"},[a("v-icon",{staticClass:"mx-2",attrs:{small:"",color:"green"}},[t._v("mdi-check-circle")]),t._v(" Success! ")],1)]):a("div",{directives:[{name:"show",rawName:"v-show",value:t.validVisible,expression:"validVisible"}],staticClass:"error--text subtitle-1"},[a("p",{staticClass:"mt-3"},[a("v-icon",{staticClass:"mx-2",attrs:{small:"",color:"red"}},[t._v("mdi-close-circle")]),t._v(" Image size should be less than 1 MB!")],1)]),a("v-card-actions",[a("v-btn",{staticClass:"grey lighten-5",attrs:{text:""},on:{click:t.PostFile}},[a("v-icon",{staticClass:"mx-1"},[t._v("mdi-image")]),t._v("Image or video ")],1),a("v-spacer"),a("v-btn",{attrs:{text:"",loading:t.loading},on:{click:function(e){return t.submit()}}},[t._v("Publish")])],1)],1)],1),a("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,height:"2",color:"black"}})],1)],1)],1)},c=[],v=(a("baa5"),a("b0c0"),a("b166")),d=a("e3ee"),m=a("59ca"),u=a.n(m),p=(a("e71f"),{apiKey:"AIzaSyB8DVPSiAyXAM-aSNnLOgUYhAi56tU3mOY",authDomain:"shoppingproject-a1190.firebaseapp.com",databaseURL:"https://shoppingproject-a1190.firebaseio.com",projectId:"shoppingproject-a1190",storageBucket:"gs://shoppingproject-a1190.appspot.com",messagingSenderId:"821207239819",appId:"1:821207239819:web:5ec7f11c87ba8b03f3588e"});u.a.initializeApp(p);var b=u.a.firestore(),f={data:function(){return{person:"",title:"",content:"",due:null,imgUrl:"./avatar-6.png",modalUrl:"./modalbg.png",postUrl:"",inputRules:[function(t){return t.length>=3||"Min length is 4 character"}],dateRules:[function(t){return t.length>=3||"Please choose a date"}],validVisible:!1,avatarvalid:!1,loading:!1,fileuploading:!1,elementVisible:!1,postVisible:!1,dialog:!1,image:null,postimage:null,interval:{},value:0,snackbar:!1,postvalue:0,filerules:[function(t){return t.length<=1048487||"Avatar size should be less than 2 MB!"}]}},beforeDestroy:function(){clearInterval(this.interval)},methods:{PostFile:function(){this.$refs.postInput.click()},onPickFile:function(){this.$refs.fileInput.click()},postPicked:function(t){var e=this;this.interval=setInterval((function(){100===e.postvalue&&(e.postVisible=!1),e.postvalue+=10}),80),this.postvalue=0,this.postVisible=!0,this.validVisible=!0;var a=t.target.files,i=a[0].name;if(i.lastIndexOf(".")<=0)return alert("Please add a vaild file!");var s=new FileReader;s.addEventListener("load",(function(){e.postUrl=s.result})),s.readAsDataURL(a[0]),this.postimage=a[0]},onFilePicked:function(t){var e=this;this.interval=setInterval((function(){100===e.value&&(e.elementVisible=!1),e.value+=10}),80),this.value=0,this.elementVisible=!0,this.avatarvalid=!0;var a=t.target.files,i=a[0].name;if(i.lastIndexOf(".")<=0)return alert("Please add a vaild file!");var s=new FileReader;s.addEventListener("load",(function(){e.imgUrl=s.result})),s.readAsDataURL(a[0]),this.image=a[0]},submit:function(){var t=this;if(this.$refs.form.validate()){this.loading=!0;var e={title:this.title,content:this.content,imgUrl:this.imgUrl,postUrl:this.postUrl,due:Object(v["a"])(Object(d["a"])(this.due),"MMM d yyyy"),person:this.person,status:"ongoing"};b.collection("projects").add(e).then((function(){t.loading=!1,t.dialog=!1,t.$emit("projectAdded")}))}}},computed:{formattedDate:function(){return this.due?Object(v["a"])(Object(d["a"])(this.due),"MMM d yyyy"):""}}},g=f,h=(a("88c8"),a("2877")),x=a("6544"),_=a.n(x),y=a("8212"),k=a("8336"),w=a("b0af"),C=a("99d9"),V=a("2e4b"),j=a("169a"),O=a("0789"),S=a("4bd4"),P=a("ce87"),I=a("132d"),U=a("adda"),L=a("e449"),A=a("a797"),D=a("8e36"),M=a("2fa4"),T=a("8654"),F=a("a844"),B=a("71d9"),R=Object(h["a"])(g,n,c,!1,null,null,null),E=R.exports;_()(R,{VAvatar:y["a"],VBtn:k["a"],VCard:w["a"],VCardActions:C["a"],VCardText:C["b"],VDatePicker:V["a"],VDialog:j["a"],VFadeTransition:O["b"],VForm:S["a"],VHover:P["a"],VIcon:I["a"],VImg:U["a"],VMenu:L["a"],VOverlay:A["a"],VProgressLinear:D["a"],VSpacer:M["a"],VTextField:T["a"],VTextarea:F["a"],VToolbar:B["a"]});var J={components:{Popup:E},data:function(){return{drawer:!1,links:[{icon:"mdi-compass-outline",text:"Sign Out",route:"/"},{icon:"mdi-heart-outline",text:"Team",route:"/team"},{icon:"mdi-account-outline",text:"My activity",route:"/project"}],snackbar:!0,cookiesnackbar:!0,fav:!0,menu:!1,message:!1,hints:!0}}},z=J,N=(a("5dfc"),a("40dc")),q=a("62ad"),$=a("ce7e"),H=a("8860"),W=a("da13"),Q=a("8270"),Y=a("5d23"),K=a("0fd9"),X=a("2db4"),G=a("2a7f"),Z=Object(h["a"])(z,r,l,!1,null,null,null),tt=Z.exports;_()(Z,{VAppBar:N["a"],VAvatar:y["a"],VBtn:k["a"],VCard:w["a"],VCol:q["a"],VDivider:$["a"],VIcon:I["a"],VList:H["a"],VListItem:W["a"],VListItemAvatar:Q["a"],VListItemContent:Y["a"],VListItemSubtitle:Y["b"],VListItemTitle:Y["c"],VMenu:L["a"],VRow:K["a"],VSnackbar:X["a"],VSpacer:M["a"],VTextField:T["a"],VToolbarTitle:G["a"]});var et={name:"App",components:{Navbar:tt},data:function(){return{}}},at=et,it=a("7496"),st=a("a75b"),ot=Object(h["a"])(at,s,o,!1,null,null,null),rt=ot.exports;_()(ot,{VApp:it["a"],VContent:st["a"]});var lt=a("8c4f"),nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-snackbar",{attrs:{timeout:2e3,top:"",color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("img",{attrs:{width:"120",src:t.modalUrl,alt:""}}),a("p",{staticClass:"subtitle-2 mt-4"},[t._v("Awesome! You just added a new post.")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("v-snackbar",{attrs:{timeout:2e3,top:"",color:"red"},model:{value:t.delsnackbar,callback:function(e){t.delsnackbar=e},expression:"delsnackbar"}},[a("img",{attrs:{width:"120",src:t.deleteUrl,alt:""}}),a("p",{staticClass:"subtitle-2 mt-4"},[t._v("You Just delete a new project!")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.delsnackbar=!1}}},[t._v("Close")])],1),a("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,height:"3",color:"black accent-4"}}),t.loading?a("div",{staticClass:"d-flex justify-center loadingeffect"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),a("v-container",{staticClass:"drageffect2 mb-12",staticStyle:{"max-width":"550px"}},[t._l(4,(function(e){return a("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],key:e,staticClass:"mx-4  d-inline-block mt-5",attrs:{loading:t.loading,type:"avatar"}},[a("card")],1)})),t._l(t.numbers,(function(e){return a("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],key:e,staticClass:"mt-10",attrs:{loading:t.loading,type:"list-item-avatar-two-line,image,image,actions"}},[a("v-card")],1)})),t.loading?t._e():a("v-tabs",{attrs:{height:"76","background-color":"grey lighten-5","show-arrows":""}},[a("v-tabs-slider",{staticStyle:{display:"none"},attrs:{color:"white lighten-3"}}),t._l(t.projects,(function(e){return a("v-tab",{key:e.id,staticClass:"white--text mx-0"},[a("v-dialog",{attrs:{"overlay-color":"#212121","overlay-opacity":"1",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on;return[a("v-avatar",t._g({staticStyle:{cursor:"pointer"},attrs:{size:"70",color:"white"}},s),[a("img",{staticClass:"avatarborder",attrs:{src:e.imgUrl,alt:"alt"}})])]}}],null,!0),model:{value:t.cirlcedialog,callback:function(e){t.cirlcedialog=e},expression:"cirlcedialog"}},[a("v-card",[a("v-list-item",{staticStyle:{background:"#212121"}},[a("v-list-item-avatar",{attrs:{color:"grey"}},[a("img",{attrs:{src:e.imgUrl}})]),a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"white--text text-lowercase"},[t._v(" by "+t._s(e.person)+" "),a("span",{staticClass:"mx-2 caption grey--text"},[t._v(t._s(e.due))])])],1),a("v-spacer"),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-dots-horizontal")])],1),a("v-progress-linear",{staticClass:"white--text",attrs:{height:"2",rounded:"",color:"grey darken-2",indeterminate:!0,timeout:"1000"}}),a("v-img",{attrs:{height:"600",src:e.postUrl}})],1)],1)],1)}))],2),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mt-5",attrs:{text:""}},i),[t._v(" Filters "),a("v-icon",{staticClass:"mx-2",attrs:{small:""}},[t._v("mdi-sort")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.deleteProjects(t.project.id)}}},[a("v-list-item-title",[a("v-btn",t._g({attrs:{small:"",text:"",color:"gray"},on:{click:function(e){return t.sortBy("title")}}},t.on),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-filter-variant")]),a("span",{staticClass:"caption text--lowercase"},[t._v("Project name")])],1)],1)],1),a("v-list-item",[a("v-list-item-title",[a("v-btn",{attrs:{small:"",text:"",color:"gray"},on:{click:function(e){return t.sortBy("due")}}},[a("span",{staticClass:"caption text--lowercase"},[t._v("By Time")])])],1)],1)],1)],1),t.loading?a("div",{staticClass:"d-flex justify-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t._l(t.projects,(function(e){return a("v-card",{key:e.title,staticClass:"mt-5 grey lighten-5"},[a("v-list-item",[a("v-list-item-avatar",{attrs:{color:"grey"}},[a("img",{attrs:{src:e.imgUrl}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold text-lowercase"},[t._v(" "+t._s(e.person))])],1),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({},i),[t._v("mdi-dots-horizontal")])]}}],null,!0)},[a("v-list",[a("v-list-item",{on:{click:function(a){return a.preventDefault(),t.deleteProjects(e.id)}}},[a("v-list-item-title",[a("v-icon",[t._v("mdi-delete")]),t._v(" Delete")],1)],1),a("v-list-item",[a("v-list-item-title",[a("v-icon",[t._v("mdi-share")]),t._v(" Report")],1)],1)],1)],1)],1),a("v-dialog",{attrs:{transition:"slide-x-transition",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on;return[a("v-parallax",t._g({staticClass:"d-md-block d-none",staticStyle:{cursor:"pointer"},attrs:{height:"600",src:e.postUrl}},s)),a("v-img",t._g({staticClass:"d-md-none d-block",staticStyle:{cursor:"pointer"},attrs:{height:"400",src:e.postUrl}},s))]}}],null,!0),model:{value:t.insidesddialog,callback:function(e){t.insidesddialog=e},expression:"insidesddialog"}},[a("v-card",[a("v-list-item",[a("v-list-item-avatar",{attrs:{color:"grey"}},[a("img",{attrs:{src:e.imgUrl}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-2 text-lowercase"},[t._v(" "+t._s(e.person))])],1),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({},i),[t._v("mdi-dots-horizontal")])]}}],null,!0)},[a("v-list",[a("v-list-item",{on:{click:function(a){return a.preventDefault(),t.deleteProjects(e.id)}}},[a("v-list-item-title",[a("v-icon",[t._v("mdi-delete")]),t._v(" Delete")],1)],1),a("v-list-item",[a("v-list-item-title",[a("v-icon",[t._v("mdi-share")]),t._v(" Report")],1)],1)],1)],1)],1),a("v-img",{attrs:{height:"450",src:e.postUrl}}),a("v-card-actions",{staticClass:"my-4"},[a("v-icon",{staticClass:"grey--text mx-2"},[t._v("mdi-heart-outline")]),a("v-icon",{staticClass:"grey--text mx-3"},[t._v("mdi-message-outline")]),a("v-icon",{staticClass:"grey--text mx-4"},[t._v("mdi-send")])],1),a("p",{staticClass:"mx-3 mt-2"},[a("span",{staticClass:"font-weight-bold black--text text-lowercase"},[t._v(" "+t._s(e.person))]),t._v(" and "),a("span",{staticClass:"font-weight-bold black--text"},[t._v(" millions of others")]),t._v(" like this post ")]),a("p",{staticClass:"subtitle-1 font-weight-bold black--text mx-3 text-lowercase"},[t._v(" "+t._s(e.person)+" "),a("span",{staticClass:"font-weight-regular"},[a("read-more",{attrs:{"more-str":"Read more",text:e.content,link:"#","less-str":"Read less","max-chars":120}})],1),a("strong",{staticClass:"d-block font-weight-regular",staticStyle:{color:"#003569"}},[t._v("#"+t._s(e.title))]),a("span",{staticClass:"caption grey--text"},[t._v(t._s(e.due))])])],1)],1),a("v-card-actions",{staticClass:"my-4"},[a("v-icon",{staticClass:"grey--text mx-2"},[t._v("mdi-heart-outline")]),a("v-icon",{staticClass:"grey--text mx-3"},[t._v("mdi-message-outline")]),a("v-icon",{staticClass:"grey--text mx-4"},[t._v("mdi-send")])],1),a("p",{staticClass:"mx-4 mt-2"},[a("span",{staticClass:"font-weight-bold black--text text-lowercase"},[t._v(" "+t._s(e.person))]),t._v(" and "),a("span",{staticClass:"font-weight-bold black--text"},[t._v(" millions of others")]),t._v(" like this post ")]),a("p",{staticClass:"subtitle-1 font-weight-bold black--text mx-4"},[a("v-avatar",{attrs:{size:"20"}},[a("img",{attrs:{src:e.imgUrl}})]),t._v(" "),a("span",{staticClass:"text-lowercase"},[t._v(t._s(e.person))]),a("span",{staticClass:"font-weight-regular subtitle-1",staticStyle:{"line-height":"1mm"}},[t._v(" "+t._s(e.content)+" ")]),a("strong",{staticClass:"d-block font-weight-regular mt-4",staticStyle:{color:"#003569"}},[t._v("#"+t._s(e.title))]),a("br"),a("span",{staticClass:"caption grey--text"},[t._v(t._s(e.due))])],1)],1)}))],2)],1)},ct=[],vt=(a("a4d3"),a("4de4"),a("4e827"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3"));function dt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function mt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(a),!0).forEach((function(e){Object(vt["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var ut={data:function(){return{projects:[],loading:!0,numbers:[1,2,3,4,5],delsnackbar:!1,snackbar:!1,overlay:!1,power:null,insidedialog:!1,circledialog:!1,commentvalue:"",insvalue:0,interval:{},modalUrl:"./successpost.svg",deleteUrl:"./delete.svg",vertical:!0}},methods:{sortBy:function(t){var e=this;e.projects.sort((function(e,a){return e[t]<a[t]?-1:1}))},deleteProjects:function(t){var e=this;b.collection("projects").doc(t).delete().then((function(){e.projects=e.projects.filter((function(e){return e.id!=t})),e.loading=!1,e.delsnackbar=!0}))}},created:function(){var t=this;b.collection("projects").onSnapshot((function(e){t.loading=!0,t.power=1;var a=e.docChanges();a.forEach((function(e){"added"==e.type&&t.projects.unshift(mt({},e.doc.data(),{id:e.doc.id})),t.loading=!1,t.power=100}))}))}},pt=ut,bt=(a("2fe3"),a("a523")),ft=a("8b9c"),gt=a("490a"),ht=a("3129"),xt=a("71a3"),_t=a("fe57"),yt=a("9a96"),kt=Object(h["a"])(pt,nt,ct,!1,null,null,null),wt=kt.exports;_()(kt,{VAvatar:y["a"],VBtn:k["a"],VCard:w["a"],VCardActions:C["a"],VContainer:bt["a"],VDialog:j["a"],VIcon:I["a"],VImg:U["a"],VList:H["a"],VListItem:W["a"],VListItemAvatar:Q["a"],VListItemContent:Y["a"],VListItemSubtitle:Y["b"],VListItemTitle:Y["c"],VMenu:L["a"],VParallax:ft["a"],VProgressCircular:gt["a"],VProgressLinear:D["a"],VSkeletonLoader:ht["a"],VSnackbar:X["a"],VSpacer:M["a"],VTab:xt["a"],VTabs:_t["a"],VTabsSlider:yt["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-container",{staticClass:"my-5",staticStyle:{"max-width":"800px"}},[t._l(t.myProjects.slice(0,1),(function(e){return a("div",{key:e.title,staticClass:"mx-2"},[a("div",{attrs:{color:"grey lighten-5"}},[a("v-avatar",{staticClass:"d-sm-block d-none",attrs:{size:"120"}},[a("v-img",{attrs:{src:e.imgUrl}})],1),a("v-avatar",{staticClass:"d-block d-sm-none",attrs:{size:"60"}},[a("v-img",{attrs:{src:e.imgUrl}})],1),a("p",{staticClass:"font-weight-bold subtitle-1 mt-8"},[t._v(t._s(e.person))]),a("v-row",[a("v-col",{attrs:{md:"2",cols:"4"}},[a("span",{staticClass:"font-weight-bold text-left"},[t._v(t._s(t.myProjects.length))]),t._v(" Post ")]),a("v-col",{attrs:{md:"3",cols:"4"}},[a("span",{staticClass:"font-weight-bold "},[t._v(" 1,349 ")]),t._v("Followers ")]),a("v-col",{attrs:{md:"4",cols:"4"}},[a("span",{staticClass:"font-weight-bold "},[t._v(" 10,349 ")]),t._v("Following ")])],1)],1)])})),a("v-row",{staticClass:"mt-8",attrs:{"no-gutters":""}},t._l(t.myProjects,(function(t){return a("v-col",{key:t.title,attrs:{cols:"4",md:"4"}},[a("v-img",{staticStyle:{border:"0.8px solid white"},attrs:{src:t.postUrl,"aspect-ratio":"1"}})],1)})),1)],2)],1)},Vt=[];function jt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function Ot(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(a),!0).forEach((function(e){Object(vt["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):jt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var St={data:function(){return{projects:[]}},computed:{myProjects:function(){return this.projects.filter((function(t){return"rex-taiwan"==t.person}))}},created:function(){var t=this;b.collection("projects").onSnapshot((function(e){var a=e.docChanges();a.forEach((function(e){"added"==e.type&&t.projects.push(Ot({},e.doc.data(),{id:e.doc.id}))}))}))}},Pt=St,It=Object(h["a"])(Pt,Ct,Vt,!1,null,null,null),Ut=It.exports;_()(It,{VAvatar:y["a"],VCol:q["a"],VContainer:bt["a"],VImg:U["a"],VRow:K["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{color:"grey lighten-4 black--text",flat:"",app:"",dark:""}},[a("li",[a("a",[a("router-link",{attrs:{to:"/"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-chevron-left")])],1)],1)]),a("v-spacer"),t._v(" rex-taiwan "),a("v-icon",{attrs:{color:"black"}},[t._v("mdi-chevron-down")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-video-outline")])],1),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-pencil-box-outline")])],1)]}}])})],1),a("div",{staticClass:"mx-auto drageffect"},[a("v-text-field",{staticClass:"mx-4",staticStyle:{"border-radius":"4px"},attrs:{"append-icon":"mdi-microphone",flat:"","hide-details":"",label:"Search","prepend-inner-icon":"mdi-magnify",solo:"",height:"15","background-color":"grey lighten-3"}}),a("v-list",{staticClass:"grey lighten-5",attrs:{subheader:""}},[a("v-subheader",[t._v("Recent chat")]),t._l(t.items,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("p",{staticClass:"font-weight-bold",attrs:{color:"grey"}},[t._v("2 new messages")])],1),a("v-list-item-icon",[a("v-icon",[t._v("mdi-camera-outline")])],1)],1)}))],2),a("v-divider"),a("v-list",{staticClass:"grey lighten-5",attrs:{subheader:""}},[a("v-subheader",[t._v("Previous chats")]),t._l(t.items2,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("p",{staticClass:"font-weight-bold",attrs:{color:"grey"}},[t._v("5 new messages")])],1),a("v-list-item-icon",[a("v-icon",[t._v("mdi-camera-outline")])],1)],1)}))],2)],1)],1)},At=[],Dt={data:function(){return{items:[{active:!0,title:"Jason Oner",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},{active:!0,title:"Ranee Carlson",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg"},{title:"Cindy Baker",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg"},{title:"Ali Connors",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg"}],items2:[{title:"Travis Howard",avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg"},{title:"SF Louis",avatar:"https://images.unsplash.com/photo-1489512827632-6e52aecf88bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{title:"Richard Ro",avatar:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"},{title:"Steven Hsu",avatar:"https://images.unsplash.com/photo-1489980721706-f487dab89c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"}]}}},Mt=Dt,Tt=(a("3708"),a("1311"),a("34c3")),Ft=a("e0c7"),Bt=Object(h["a"])(Mt,Lt,At,!1,null,null,null),Rt=Bt.exports;_()(Bt,{VAppBar:N["a"],VBtn:k["a"],VDivider:$["a"],VIcon:I["a"],VImg:U["a"],VList:H["a"],VListItem:W["a"],VListItemAvatar:Q["a"],VListItemContent:Y["a"],VListItemIcon:Tt["a"],VListItemTitle:Y["c"],VMenu:L["a"],VSpacer:M["a"],VSubheader:Ft["a"],VTextField:T["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mx-auto"},[a("v-app-bar",{attrs:{color:"grey lighten-5",app:"",flat:""}},[a("v-spacer"),a("span",{staticClass:"black--text font-weight-medium"},[t._v("Activity")]),a("v-spacer")],1),a("v-list",{staticClass:"drageffect mb-12",attrs:{"two-line":"",subheader:""}},[a("v-list-item",[a("v-list-item-avatar",{staticClass:"white"},[a("v-icon",{staticClass:"avatarborder"},[t._v("mdi-chart-line-variant")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Promotions")]),a("v-list-item-subtitle",[t._v("Recent activity from your promotions")])],1)],1),a("v-divider",{attrs:{inset:""}}),a("p",{staticClass:"font-weight-bold mx-4 mt-4"},[t._v("Yesterday")]),t._l(t.items2,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("img",{attrs:{src:e.image,alt:""}})]),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{staticClass:"success",attrs:{text:"",small:""}},[t._v(" Follow ")])],1)],1)}))],2),a("v-list",{attrs:{"two-line":"",subheader:""}},[a("p",{staticClass:"font-weight-bold mx-4 mt-4"},[t._v("This Month")]),t._l(t.items,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("img",{attrs:{src:e.image,alt:""}})]),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{staticClass:"success",attrs:{text:"",small:""}},[t._v(" Follow ")])],1)],1)})),a("v-divider",{attrs:{inset:""}}),a("v-subheader",{attrs:{inset:""}},[t._v("This month")]),t._l(t.items2,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("img",{attrs:{src:e.image,alt:""}})]),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{staticClass:"success",attrs:{text:"",small:""}},[t._v(" Follow ")])],1)],1)}))],2)],1)])},Jt=[],zt={data:function(){return{items:[{image:"https://images.unsplash.com/photo-1576280314550-773c50583407?ixlib=rb-1.2.1&auto=format&fit=crop&w=2792&q=80",iconClass:"grey lighten-1 white--text",title:"Photos",subtitle:"Jan 9, 2014"},{image:"https://images.unsplash.com/photo-1468817967762-7af5be2aacf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",iconClass:"grey lighten-1 white--text",title:"Recipes",subtitle:"Jan 17, 2014"},{image:"https://images.unsplash.com/photo-1485921040253-3601b55d50aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",iconClass:"grey lighten-1 white--text",title:"Work",subtitle:"Jan 28, 2014"}],items2:[{image:"https://images.unsplash.com/photo-1527047614336-194da60dacd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",iconClass:"blue white--text",title:"Vacation itinerary",subtitle:"Jan 20, 2014"},{image:"https://images.unsplash.com/photo-1505262933601-3e5deed74427?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",iconClass:"amber white--text",title:"Kitchen remodel",subtitle:"Jan 10, 2014"}]}}},Nt=zt,qt=(a("5129"),a("1800")),$t=Object(h["a"])(Nt,Et,Jt,!1,null,null,null),Ht=$t.exports;_()($t,{VAppBar:N["a"],VBtn:k["a"],VDivider:$["a"],VIcon:I["a"],VList:H["a"],VListItem:W["a"],VListItemAction:qt["a"],VListItemAvatar:Q["a"],VListItemContent:Y["a"],VListItemSubtitle:Y["b"],VListItemTitle:Y["c"],VSpacer:M["a"],VSubheader:Ft["a"]}),i["a"].use(lt["a"]);var Wt=[{path:"/",name:"dashboard",component:wt},{path:"/project",name:"project",component:Ut},{path:"/team",name:"team",component:Rt},{path:"/like",name:"like",component:Ht}],Qt=new lt["a"]({mode:"history",base:"/vuefirebase/",routes:Wt}),Yt=Qt,Kt=a("2f62");i["a"].use(Kt["a"]);var Xt=new Kt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Gt=a("f309");i["a"].use(Gt["a"]);var Zt=new Gt["a"]({icons:{iconfont:"mdiSvg"},theme:{themes:{light:{primary:"#191414",success:"#448AFF",info:"#ffaa2c",error:"#F44336"}}}}),te=a("0ff2"),ee=a("f684");i["a"].use(te),i["a"].use(ee["a"]),i["a"].config.productionTip=!1,new i["a"]({router:Yt,store:Xt,vuetify:Zt,render:function(t){return t(rt)}}).$mount("#app")},"5dfc":function(t,e,a){"use strict";var i=a("d50a"),s=a.n(i);s.a},"88c8":function(t,e,a){"use strict";var i=a("ad27"),s=a.n(i);s.a},9173:function(t,e,a){},a492:function(t,e,a){},ad27:function(t,e,a){},d50a:function(t,e,a){},d523:function(t,e,a){}});
//# sourceMappingURL=app.2215eae7.js.map