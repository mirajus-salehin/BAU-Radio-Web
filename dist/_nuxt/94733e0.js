(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5],{251:function(e,t,n){"use strict";n.r(t);var m={props:{name:{type:String},img:{type:String}}},r=n(20),component=Object(r.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-4 w-full h-full flex flex-col gap-5 place-items-center justify-items-center"},[n("img",{staticClass:"w-36 h-36 rounded-full mx-auto",attrs:{src:e.img,alt:""}}),e._v(" "),n("div",{staticClass:"mx-auto"},[e._v("\n      "+e._s(e.name)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},314:function(e,t,n){"use strict";n.r(t);var m={components:{membercard:n(251).default},data:function(){return{members:{teamName:"IT",subtitle:"The geeks of technolgy",logo:"/team/logos/logo_it.svg",slug:"information-and-technology-team",head:{name:"Mirazus Salehin",img:"https://i.imgur.com/onsegbH.jpg"},members:[]}}}},r=n(20),component=Object(r.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mt-10 mb-10 min-h-screen"},[n("div",{staticClass:"flex flex-col place-items-center justify-items-center pb-10"},[n("h1",{staticClass:"text-center text-xl lg:text-5xl font-bold my-10 tracking-widest"},[e._v("\n      Meet our "+e._s(e.members.teamName)+" team\n    ")]),e._v(" "),n("h3",{staticClass:"text-center text-xl my-10 tracking-widest text-brand-green"},[e._v("\n      "+e._s(e.members.subtitle)+"\n    ")])]),e._v(" "),n("div",{staticClass:"flex place-items-stretch justify-items-center mb-10"},[n("div",{staticClass:"mx-auto"},[n("p",{staticClass:"tracking-wide font-bold text-brand-green text-center"},[e._v("\n        Head of "+e._s(e.members.teamName)+"\n      ")]),e._v(" "),n("membercard",{attrs:{img:e.members.head.img,name:e.members.head.name}})],1)]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"\n      mx-auto\n      grid grid-cols-1\n      gap-4\n      place-items-center\n      justify-items-center\n      max-w-7xl\n    "},e._l(e.members.members,(function(e){return n("div",{key:e},[n("membercard",{attrs:{img:e.img,name:e.name}})],1)})),0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-auto max-w-7xl mb-10 mt-10"},[n("p",{staticClass:"tracking-wide font-bold text-brand-green text-center"},[e._v("\n      Genaral Members\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Membercard:n(251).default})}}]);