"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[532],{9055:function(n,t,e){e.d(t,{x:function(){return c}});var r=e(6444),a=e(407),c=(0,r.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.FK,a.cp)},5532:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,c,u,i,o=e(885),s=e(2791),p=e(6871),f=e(9055),d=e(2180),h=e(168),l=e(6444),g=l.ZP.ul(r||(r=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  gap: 32px;\n  "]))),v=l.ZP.img(a||(a=(0,h.Z)(["\n    width: 250px;\n  "]))),x=l.ZP.p(c||(c=(0,h.Z)(["\n    margin-top: 12px;\n    font-weight: bold;\n  "]))),m=l.ZP.p(u||(u=(0,h.Z)(["\n    margin-top: 12px;\n    border-bottom: 1px solid #000;\n  "]))),b=e(184),w=function(n){var t=n.cast;return console.log(t),(0,b.jsxs)(b.Fragment,{children:[t&&t.length>0&&(0,b.jsx)(g,{children:t.map((function(n){return(0,b.jsxs)("li",{children:[(0,b.jsx)(v,{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://as1.ftcdn.net/v2/jpg/00/64/67/80/1000_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg",alt:"",width:"250"}),(0,b.jsx)(x,{children:n.name}),(0,b.jsx)(m,{children:n.character})]},n.id)}))}),t&&0===t.length&&(0,b.jsx)("p",{children:" We don't have any cast for this movie"})]})},y=l.ZP.h2(i||(i=(0,h.Z)(["\ncolor: green;\nmargin-bottom: 24px;\n"]))),Z=e(7793),_=function(){var n=(0,s.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)(),c=(0,s.useState)(!1),u=(0,o.Z)(c,2),i=u[0],h=u[1];return(0,s.useEffect)((function(){h(!0),(0,d.y)(a.id).then((function(n){r(n.cast)})).catch((function(n){return console.log(n)})).finally((function(){return h(!1)}))}),[a.id]),(0,b.jsxs)(f.x,{as:"section",padding:"10px",textAlign:"center",children:[i&&(0,b.jsx)(Z.a,{}),(0,b.jsx)(y,{children:"Cast List"}),(0,b.jsx)(w,{cast:e})]})}},2180:function(n,t,e){e.d(t,{Bt:function(){return h},KS:function(){return s},bs:function(){return p},y:function(){return d},yW:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var o="b1ed6db84db5d6eba5aed4dde918fe90",s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/week?api_key=".concat(o,"&page=").concat(t,"&language=en"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data.results,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=532.eca93ce8.chunk.js.map