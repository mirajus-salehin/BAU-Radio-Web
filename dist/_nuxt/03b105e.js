(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2],{245:function(t,e,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("4ee05478",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";r(245)},247:function(t,e,r){var o=r(43)((function(i){return i[1]}));o.push([t.i,'.tab-content[data-v-6026148b]{max-height:0;transition:max-height .35s}.tab input:checked~.tab-content[data-v-6026148b]{max-height:100vh}.tab input:checked+label[data-v-6026148b]{border-left-width:2px;--tw-border-opacity:1;border-color:rgba(134, 186, 182, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));padding:1.25rem;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(4, 120, 87, var(--tw-text-opacity))}.tab label[data-v-6026148b]:after{float:right;right:0;top:0;display:block;width:1.5em;height:1.5em;line-height:1.5;font-size:1.25rem;text-align:center;transition:all .35s}.tab input[type=checkbox]+label[data-v-6026148b]:after{content:"+"}.tab input[type=checkbox]+label[data-v-6026148b]:after,.tab input[type=radio]+label[data-v-6026148b]:after{font-weight:700;border-width:1px;border-radius:9999px;border-color:#b8c2cc}.tab input[type=radio]+label[data-v-6026148b]:after{content:"\\25BE"}.tab input[type=checkbox]:checked+label[data-v-6026148b]:after{transform:rotate(315deg);background-color:#297880;color:#f8fafc}.tab input[type=radio]:checked+label[data-v-6026148b]:after{transform:rotateX(180deg);background-color:#297880;color:#f8fafc}',""]),o.locals={},t.exports=o},251:function(t,e,r){"use strict";r.r(e);var o={props:{id:{type:String},q:{type:String},answer:{type:String}}},n=(r(246),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab w-full overflow-hidden border-t"},[r("input",{staticClass:"absolute opacity-0",attrs:{id:t.id,type:"checkbox",name:"tabs"}}),t._v(" "),r("label",{staticClass:"block p-5 leading-normal cursor-pointer",attrs:{for:t.id}},[t._v(t._s(t.q))]),t._v(" "),r("div",{staticClass:"\n      tab-content\n      overflow-hidden\n      border-l-2\n      bg-gray-100\n      border-green-500\n      leading-normal\n    "},[r("p",{staticClass:"p-5"},[t._v("\n      "+t._s(t.answer)+"\n    ")])])])}),[],!1,null,"6026148b",null);e.default=component.exports},286:function(t,e,r){"use strict";r.r(e);var o={components:{faqcard:r(251).default},data:function(){return{questions:[{id:"tab-multi-one",for:"tab-multi-one",qs:"Question number 1",ans:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque."},{id:"tab-multi-two",for:"tab-multi-two",qs:"Question number 2",ans:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque."},{id:"tab-multi-three",for:"tab-multi-three",qs:"Question number 3",ans:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque."},{id:"tab-multi-four",for:"tab-multi-four",qs:"Question number 4",ans:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque."},{id:"tab-multi-five",for:"tab-multi-five",qs:"Question number 5",ans:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque."},{id:"tab-multi-six",for:"tab-multi-six",qs:"Question number 6",ans:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque."}]}}},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"w-full md:w-3/5 mx-auto p-8 min-h-screen"},[r("div",{staticClass:"shadow-md"},t._l(t.questions,(function(t){return r("faqcard",{key:t,attrs:{q:t.qs,answer:t.ans,id:t.id,for:t.for}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Faqcard:r(251).default})}}]);