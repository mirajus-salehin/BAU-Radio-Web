(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{253:function(t,e,n){var map={"./etiquette-great-or-do-regret.png":254};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=253},254:function(t,e,n){t.exports=n.p+"img/etiquette-great-or-do-regret.464c518.png"},270:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("6b2217ad",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";n(270)},279:function(t,e,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,".card[data-v-27fab9de]{transform:var(--tw-transform);border-radius:0.75rem;padding:1rem;--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}.card[data-v-27fab9de]:hover{--tw-translate-y:-0.5rem;transform:var(--tw-transform);border-width:2px;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}",""]),r.locals={},t.exports=r},305:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(40),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).only(["title","description","slug","read","date","img"]).sortBy("date","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Blog",meta:[{hid:"description",name:"description",content:"BAU Radio Blog"},{hid:"og:title",name:"og:title",content:"BAU Radio Blog"},{hid:"og:description",name:"og:description",content:"Official blog site of BAU Radio. Get the latest news about BAU Radio here."}]}}}),l=(n(278),n(20)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",{staticClass:"\n      mt-10\n      font-bold\n      text-3xl\n      lg:text-5xl\n      py-4\n      md:py-8\n      px-10\n      md:pl-10\n      tracking-widest\n      mx-auto\n      text-center\n    "},[t._v("\n    Latest Posts\n  ")]),t._v(" "),r("div",{staticClass:"\n      grid grid-cols-1\n      md:grid-cols-2\n      xl:grid-cols-3\n      gap-6\n      p-6\n      min-h-screen\n    "},t._l(t.articles,(function(article){return r("div",{key:article.slug},[r("nuxt-link",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[r("div",{staticClass:"card flex flex-col space-y-4"},[r("div",[r("img",{attrs:{src:n(253)("./"+article.img),alt:""}})]),t._v(" "),r("div",{staticClass:"my-auto px-6"},[r("h3",{staticClass:"text-brand-green text-xl font-semibold py-4"},[t._v("\n              "+t._s(article.title)+"\n            ")]),t._v(" "),r("p",{staticClass:"text-base font-light"},[t._v(t._s(article.description))]),t._v(" "),r("div",{staticClass:"\n                pt-4\n                flex flex-col\n                md:flex-row\n                gap-2\n                md:gap-6\n                flex-wrap\n                justify-items-center\n              "},[r("div",{staticClass:"flex gap-2"},[r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}})]),t._v(" "),r("p",{staticClass:"font-extralight"},[t._v(t._s(article.read))])]),t._v(" "),r("div",{staticClass:"flex gap-2"},[r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"}})]),t._v(" "),r("p",{staticClass:"font-extralight"},[t._v("Published at "+t._s(article.date))])])])])])])],1)})),0)])}),[],!1,null,"27fab9de",null);e.default=component.exports}}]);