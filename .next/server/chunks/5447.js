"use strict";exports.id=5447,exports.ids=[5447],exports.modules={76782:(e,a,t)=>{t.d(a,{G:()=>l,Of:()=>d,jt:()=>r,yX:()=>s}),t(70391),t(53009);var c=t(61324),s=(0,c.$)("38b23658ea60de106c38e60f027acfeff8120b76");(0,c.$)("47c778af0c569cf9ff49a6af049f8278387c263e");var r=(0,c.$)("2670d5e6893dc4acec799dd2489606fbd7eec1b8"),d=(0,c.$)("66af08863d17293c58c290da2a4e7b765bae9ef5"),l=(0,c.$)("66a08c61097290635a7e67f797a6de0391f71d33")},30282:(e,a,t)=>{t.d(a,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var c=t(48144),s=t(75042),r=t.n(s),d=t(44602),l=t.n(d);t(53830);let __WEBPACK_DEFAULT_EXPORT__=({imgUrl:e,alt:a,value:t,title:s,href:d,textStyles:n,isAuthor:f})=>{let i=(0,c.jsxs)(c.Fragment,{children:[c.jsx(r(),{src:e,width:16,height:16,alt:a,className:`object-contain ${d?"rounded-full":""}`}),(0,c.jsxs)("p",{className:`${n} flex items-center gap-1`,children:[t,c.jsx("span",{className:`small-regular line-clamp-1 ${f?"max-sm:hidden":""}`,children:s})]})]});return d?(0,c.jsxs)(l(),{href:d,className:"flex-center  gap-1",children:[i," Hello"]}):c.jsx("div",{className:"flex-center flex-wrap gap-1",children:i})}},92825:(e,a,t)=>{t.d(a,{default:()=>d});var c=t(11185);let s=new c.Schema({user:{type:c.Schema.Types.ObjectId,ref:"User",required:!0},action:{type:String,required:!0},question:{type:c.Schema.Types.ObjectId,ref:"Question"},answer:{type:c.Schema.Types.ObjectId,ref:"Answer"},tags:[{type:c.Schema.Types.ObjectId,ref:"Tag"}],createdAt:{type:Date,default:Date.now}}),r=c.models.Interaction||(0,c.model)("Interaction",s),d=r}};