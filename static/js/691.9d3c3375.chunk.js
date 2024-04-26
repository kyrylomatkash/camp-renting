"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{3691:(n,e,r)=>{r.d(e,{A:()=>Ie});var i,o=r(5043),t=r(3003),a=r(122),s=r(3547),l=r(1261),d=r(7528),c=r(5903);const p=c.A.ul(i||(i=(0,d.A)(["\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n\n  li {\n    padding: 12px 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    border-radius: 100px;\n    background-color: var(--feature-background-color);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.25;\n    color: var(--primary-color);\n    animation: fadeIn 0.5s ease forwards;\n\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n        transform: translateY(-20px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    &.capitalize {\n      text-transform: capitalize;\n    }\n  }\n\n  svg {\n    fill: var(--primary-color);\n    stroke: var(--primary-color);\n  }\n"])));var h=r(3845),x=r(579);const g=n=>{let{data:e}=n;return(0,x.jsxs)(p,{children:[(0,x.jsxs)("li",{children:[(0,x.jsx)(l.A,{icon:"icon-adults",width:20,height:20}),e.adults," adults"]}),(0,x.jsxs)("li",{className:"capitalized",children:[(0,x.jsx)(l.A,{icon:"icon-transmission",width:20,height:20}),e.transmission]}),(0,x.jsxs)("li",{className:"capitalized",children:[(0,x.jsx)(l.A,{icon:"icon-petrol",width:20,height:20}),e.engine]}),e.details.kitchen>=1&&(0,x.jsxs)("li",{children:[(0,x.jsx)(l.A,{icon:"icon-kitchen",width:20,height:20}),"Kitchen"]}),(0,x.jsxs)("li",{children:[(0,x.jsx)(l.A,{icon:"icon-bed",width:20,height:20}),e.details.beds," beds",(0,x.jsx)(h.A,{label:(r=e.details.beds,r<=2?"Suitable for small company or family":3===r||4===r?"Suitable for average family":6===r?"Suitable for big company":"Number of beds not specified"),size:"small"})]}),e.details.airConditioner>=1&&(0,x.jsxs)("li",{children:[(0,x.jsx)(l.A,{icon:"icon-ac",width:20,height:20}),"AC"]})]});var r};var m,f=r(7950);const b=c.A.div(m||(m=(0,d.A)(["\n   position: fixed;\n   top: 0;\n   left: 0;\n\n   width: 100vw;\n   height: 100vh;\n   z-index: 999;\n\n   display: flex;\n   justify-content: center;\n   align-items: center;\n\n   background-color: rgba(17, 18, 19, 0.4);\n"]))),u=document.querySelector("#modal-root"),v=n=>{let{onClose:e,children:r}=n;(0,o.useEffect)((()=>{const n=n=>{"Escape"===n.code&&e()};return document.body.style.overflow="hidden",window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n),document.body.style.overflow="visible"}}),[e]);return(0,f.createPortal)((0,x.jsx)(b,{onClick:n=>{n.currentTarget===n.target&&e()},children:r}),u)},j=n=>n.charAt(0).toUpperCase()+n.slice(1);var w,A,y=r(6446);const k=c.A.ul(w||(w=(0,d.A)(["\n  display: flex;\n  width: 100%;\n  gap: 8px;\n  flex-wrap: wrap;\n  animation: fadeIn 0.5s ease forwards;\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),C=c.A.li(A||(A=(0,d.A)(["\n  background-color: var(--feature-background-color);\n  padding: 12px 18px;\n  border-radius: 100px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n  color: var(--primary-color);\n  display: flex;\n  gap: 8px;\n  animation: slideIn 0.5s ease forwards;\n\n  @keyframes slideIn {\n    from {\n      transform: translateY(10px);\n      opacity: 0;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n\n  svg {\n    fill: transparent;\n    stroke: var(--primary-color);\n  }\n"]))),z=n=>{let{details:e}=n;const r={AC:"icon-ac",adults:"icon-adults","air conditioner":"icon-air-conditioner",kitchen:"icon-kitchen",beds:"icon-bed",TV:"icon-tv",CD:"icon-cd",radio:"icon-radio",shower:"icon-shower",toilet:"icon-toilet",freezer:"icon-freezer",hob:"icon-hob",microwave:"icon-microwave",gas:"icon-gas",water:"icon-water",transmission:"icon-transmission",engine:"icon-petrol"},i=[];for(const o in e)"bathroom"!==o&&("transmission"!==o&&"engine"!==o&&0===Number.parseInt(e[o])||("airConditioner"===o?(i.splice(2,0,"AC"),i.push("air conditioner")):i.push(o)));return(0,x.jsx)(y.A,{p:2,boxShadow:.5,borderRadius:4,bgcolor:"background.paper",border:1,borderColor:"grey.300",children:(0,x.jsx)(k,{children:i.map(((n,i)=>(0,x.jsxs)(C,{children:[(0,x.jsx)(l.A,{icon:r[n],width:20,height:20}),(0,x.jsxs)("span",{children:["airConditioner"===n||"beds"===n||"hob"===n||"adults"===n?e[n]:"","transmission"===n||"engine"===n?j(e[n]):" ".concat(n)]})]},i)))})})};var I,S;const Y=c.A.div(I||(I=(0,d.A)(["\n  width: 430px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\n  }\n"]))),D=c.A.div(S||(S=(0,d.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  border-radius: 6px;\n  background-color: #f9f9f9;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n\n  p {\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 1.33333;\n  }\n"]))),_=n=>{let{item:e}=n;return(0,x.jsx)(Y,{children:(0,x.jsxs)(y.A,{p:2,boxShadow:.5,borderRadius:4,bgcolor:"background.paper",border:1,borderColor:"grey.300",children:[(0,x.jsxs)(D,{children:[(0,x.jsx)("p",{children:"Form"}),(0,x.jsx)("p",{children:j(e.form)})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)("p",{children:"Length"}),(0,x.jsx)("p",{children:e.length})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)("p",{children:"Width"}),(0,x.jsx)("p",{children:e.width})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)("p",{children:"Height"}),(0,x.jsx)("p",{children:e.height})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)("p",{children:"Tank"}),(0,x.jsx)("p",{children:e.tank})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)("p",{children:"Consumption"}),(0,x.jsx)("p",{children:e.consumption})]})]})})};var F,T,R;const q=c.A.div(F||(F=(0,d.A)(["\n   width: 430px;\n   display: flex;\n   flex-direction: column;\n   gap: 44px;\n"]))),E=c.A.div(T||(T=(0,d.A)(["\n   width: 430px;\n   display: flex;\n   flex-direction: column;\n\n   h3 {\n      font-weight: 600;\n      font-size: 20px;\n      line-height: 1.2;\n   }\n"]))),N=c.A.hr(R||(R=(0,d.A)(["\n   margin: 24px 0;\n   border: none;\n   height: 1px;\n   background-color: rgba(16, 24, 40, 0.2);\n   position: relative;\n   transition: background-color 0.3s ease;\n"]))),B=n=>{let{item:e}=n;const{adults:r,transmission:i,engine:o}=e,t={adults:r,transmission:i,engine:o,...e.details};return(0,x.jsxs)(q,{children:[(0,x.jsx)(z,{details:t}),(0,x.jsxs)(E,{children:[(0,x.jsx)("h3",{children:"Vehicle details"}),(0,x.jsx)(N,{}),(0,x.jsx)(_,{item:e})]})]})};var V,M,P,L=r(3712);const U=c.A.div(V||(V=(0,d.A)(["\n   display: flex;\n   gap: 4px;\n"]))),$=c.A.div(M||(M=(0,d.A)(["\n   svg {\n      fill: var(--rating-color);\n   }\n"]))),K=c.A.div(P||(P=(0,d.A)(["\n   svg {\n      fill: var(--feature-background-color);\n   }\n"]))),O=n=>{let{rating:e}=n;return(0,x.jsx)(U,{children:[...Array(5)].map(((n,r)=>r<e?(0,x.jsx)($,{children:(0,x.jsx)(l.A,{icon:"icon-star",width:16,height:16})},r):(0,x.jsx)(K,{children:(0,x.jsx)(l.A,{icon:"icon-star",width:16,height:16})},r)))})};var W,X,G,H,J;const Q=c.A.li(W||(W=(0,d.A)(["\n   display: flex;\n   flex-direction: column;\n   gap: 16px;\n"]))),Z=c.A.div(X||(X=(0,d.A)(["\n   display: flex;\n   gap: 16px;\n"]))),nn=c.A.span(G||(G=(0,d.A)(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n\n   width: 60px;\n   height: 60px;\n   background-color: var(--input-background-color);\n   border-radius: 60px;\n\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 1.25;\n   color: var(--button-color);\n"]))),en=c.A.div(H||(H=(0,d.A)(["\n   padding-top: 8px;\n   padding-bottom: 8px;\n\n   h4 {\n      font-weight: 600;\n      font-size: 18px;\n      line-height: 1.33333;\n   }\n"]))),rn=c.A.div(J||(J=(0,d.A)(["\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 1.5;\n   color: var(--secondary-color);\n"]))),on=n=>{let{review:e}=n;const{comment:r,reviewer_name:i,reviewer_rating:o}=e,t=i.charAt(0).toUpperCase();return(0,x.jsx)(Q,{children:(0,x.jsxs)(y.A,{p:2,boxShadow:.5,borderRadius:4,bgcolor:"background.paper",border:1,borderColor:"grey.300",children:[(0,x.jsxs)(Z,{children:[(0,x.jsx)(nn,{children:t}),(0,x.jsxs)(en,{children:[(0,x.jsx)("h4",{children:i}),(0,x.jsx)(O,{rating:o})]})]}),(0,x.jsx)(rn,{children:r})]})})};var tn;const an=c.A.div(tn||(tn=(0,d.A)(["\n   margin-top: 44px;\n   width: 430px;\n   display: flex;\n   flex-direction: column;\n   gap: 24px;\n\n   list-style-type: none;\n"]))),sn=n=>{let{reviews:e}=n;return(0,x.jsx)(an,{children:e&&e.length>0?e.map((n=>(0,x.jsx)(on,{review:n},(0,L.Ak)()))):(0,x.jsx)("p",{children:"No reviews available."})})};var ln=r(3516),dn=r(899),cn=r(1121),pn=r(1899),hn=r.n(pn);r(5116);const xn=()=>{const{setFieldValue:n}=(0,ln.j7)(),[e]=(0,ln.Mt)("startDate");return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(hn(),{...e,minDate:new Date,name:"startDate",calendarStartDay:1,dateFormat:"dd mmm yyyy",selected:e.value,onChange:r=>{n(e.name,r)},placeholderText:"Booking date",autoComplete:"off"})})};var gn,mn,fn,bn,un,vn,jn;const wn=(0,c.A)(ln.lV)(gn||(gn=(0,d.A)(["\n  width: 448px;\n  height: 532px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  border-radius: 10px;\n  padding: 24px;\n  animation: fadeIn 0.5s ease forwards;\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  p {\n    font-size: 16px;\n    line-height: 1.5;\n    color: var(--secondary-color);\n    padding-bottom: 24px;\n  }\n"]))),An=(0,c.A)(ln.D0)(mn||(mn=(0,d.A)(["\n  margin-bottom: 15px;\n  border-radius: 10px;\n  font-size: 16px;\n  line-height: 1.25;\n  background-color: var(--input-background-color);\n  padding: 18px;\n  width: 100%;\n  border: none;\n  outline: none;\n  animation: slideIn 0.5s ease forwards;\n\n  @keyframes slideIn {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"]))),yn=(0,c.A)(ln.D0)(fn||(fn=(0,d.A)(["\n  resize: none;\n  width: 100%;\n  height: 114px;\n  margin-bottom: 24px;\n  border-radius: 10px;\n  font-size: 16px;\n  line-height: 1.25;\n  background-color: var(--input-background-color);\n  padding: 18px;\n  width: 100%;\n  border: none;\n  outline: none;\n  animation: slideIn 0.5s ease forwards;\n\n  @keyframes slideIn {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"]))),kn=c.A.button(bn||(bn=(0,d.A)(["\n  align-self: flex-start;\n  background-color: var(--button-color);\n  border: none;\n  outline: none;\n  padding: 16px 60px;\n  border-radius: 200px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.01em;\n  color: #fff;\n  transition: background-color 250ms linear;\n  animation: fadeIn 0.5s ease forwards;\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  &:hover {\n    background-color: #d84343;\n  }\n"]))),Cn=c.A.label(un||(un=(0,d.A)(["\n  position: relative;\n\n  svg {\n    position: absolute;\n    top: 20px;\n    right: 18px;\n    z-index: 2;\n    fill: #fff;\n    stroke: var(--primary-color);\n  }\n\n  input {\n    margin-bottom: 15px;\n    border-radius: 10px;\n    font-size: 16px;\n    line-height: 1.25;\n    background-color: var(--input-background-color);\n    padding: 18px;\n    width: 400px;\n    border: none;\n    outline: none;\n\n    &:not(:placeholder-shown) {\n      background-color: var(--input-background-color);\n    }\n  }\n"]))),zn=(0,c.A)(ln.Kw)(vn||(vn=(0,d.A)(["\n  color: var(--button-color);\n"]))),In=c.A.h4(jn||(jn=(0,d.A)(["\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.2;\n  padding-bottom: 8px;\n"]))),Sn=dn.Ik().shape({name:dn.Yj().required("User name is required"),email:dn.Yj().email("Enter a valid email address").required("Email is required"),startDate:dn.p6().required("Start date is required")}),Yn=()=>{const n=(0,t.wA)();return(0,x.jsx)(ln.l1,{initialValues:{name:"",email:"",startDate:"",comment:""},validationSchema:Sn,onSubmit:(e,r)=>{let{name:i,email:o,startDate:t,comment:s}=e;const l={name:i,email:o,startDate:(0,cn.GP)(new Date(t),"yyyy-MM-dd"),comment:s};n((0,a.Bx)(l)),r.resetForm()},children:n=>{let{isSubmitting:e}=n;return(0,x.jsxs)(wn,{children:[(0,x.jsx)(In,{children:"Book your campervan now"}),(0,x.jsx)("p",{children:"Stay connected! We are always ready to help you."}),(0,x.jsx)(An,{type:"text",name:"name",placeholder:"Name"}),(0,x.jsx)(zn,{name:"name",component:"div"}),(0,x.jsx)(An,{type:"email",name:"email",placeholder:"Email"}),(0,x.jsx)(zn,{name:"email",component:"div"}),(0,x.jsxs)(Cn,{children:[(0,x.jsx)(l.A,{icon:"icon-calendar",width:20,height:20}),(0,x.jsx)(xn,{}),(0,x.jsx)(zn,{name:"startDate",component:"div"})]}),(0,x.jsx)(yn,{as:"textarea",name:"comment",placeholder:"Comment"}),(0,x.jsx)(kn,{type:"submit",disabled:e,children:e?"Sending...":"Send"})]})}})};var Dn,_n,Fn,Tn,Rn,qn,En,Nn,Bn,Vn,Mn,Pn,Ln;const Un=c.A.li(Dn||(Dn=(0,d.A)(["\n  display: flex;\n  gap: 24px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  border-radius: 20px;\n  padding: 24px;\n  width: 888px;\n  height: 358px;\n  animation: fadeIn 0.5s ease forwards;\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"]))),$n=c.A.div(_n||(_n=(0,d.A)(["\n  border-radius: 10px;\n  overflow: hidden;\n  width: 290px;\n  height: 310px;\n\n  img {\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),Kn=c.A.div(Fn||(Fn=(0,d.A)(["\n  width: 526px;\n  animation: fadeInInfoBox 0.5s ease forwards;\n\n  @keyframes fadeInInfoBox {\n    from {\n      opacity: 0;\n      transform: translateX(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n"]))),On=c.A.div(Tn||(Tn=(0,d.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"]))),Wn=c.A.h3(Rn||(Rn=(0,d.A)(["\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.25;\n  color: var(--primary-color);\n"]))),Xn=c.A.div(qn||(qn=(0,d.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  animation: fadeInPrice 0.5s ease forwards;\n\n  @keyframes fadeInPrice {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"]))),Gn=c.A.p(En||(En=(0,d.A)(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.25;\n  color: var(--primary-color);\n"]))),Hn=c.A.button(Nn||(Nn=(0,d.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n\n  svg {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.3s ease, stroke 0.3s ease;\n\n    &:hover {\n      fill: transparent;\n      stroke: var(--button-color);\n    }\n  }\n"])),(n=>{let{$favorite:e}=n;return e?"var( --button-color)":"transparent"}),(n=>{let{$favorite:e}=n;return e?"var( --button-color)":"var(--primary-color)"})),Jn=c.A.div(Bn||(Bn=(0,d.A)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  gap: 16px;\n  margin-bottom: 24px;\n"]))),Qn=c.A.div(Vn||(Vn=(0,d.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  svg {\n    fill: var(--rating-color);\n  }\n\n  button {\n    padding: 0;\n    border: none;\n    background-color: transparent;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.5;\n    text-decoration: underline;\n    transition: color 0.3s ease;\n\n    &:hover {\n      color: var(--rating-color);\n      border-color: var(--rating-color);\n    }\n  }\n"]))),Zn=c.A.div(Mn||(Mn=(0,d.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  line-height: 1.5;\n\n  svg {\n    fill: transparent;\n    stroke: var(--primary-color);\n  }\n"]))),ne=c.A.p(Pn||(Pn=(0,d.A)(["\n  max-width: 100%;\n  margin-bottom: 24px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  line-height: 1.5;\n  color: var(--secondary-color);\n"]))),ee=c.A.button(Ln||(Ln=(0,d.A)(["\n  padding: 16px 40px;\n  border: none;\n  outline: none;\n  border-radius: 200px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.01em;\n\n  color: #fff;\n  background-color: var(--button-color);\n\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #d84343;\n  }\n"])));var re,ie,oe,te,ae,se,le,de,ce,pe,he,xe;const ge=c.A.div(re||(re=(0,d.A)(["\n  position: fixed;\n  top: 20px;\n  border-radius: 20px;\n  padding: 40px;\n  width: 982px;\n  max-height: calc(100vh - 5%);\n  background-color: #fff;\n  overflow-y: auto;\n\n  ::-webkit-scrollbar {\n    width: 0;\n  }\n"]))),me=c.A.button(ie||(ie=(0,d.A)(["\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    stroke: var(--primary-color);\n    transition: stroke 0.3s ease;\n\n    &:hover {\n      stroke: var(--button-color);\n    }\n  }\n"]))),fe=c.A.h3(oe||(oe=(0,d.A)(["\n  margin-bottom: 8px;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.25;\n  color: var(--primary-color);\n"]))),be=c.A.div(te||(te=(0,d.A)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  gap: 16px;\n  margin-bottom: 16px;\n"]))),ue=c.A.p(ae||(ae=(0,d.A)(["\n  margin-bottom: 24px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.25;\n  color: var(--primary-color);\n"]))),ve=c.A.div(se||(se=(0,d.A)(["\n  margin-right: -20px;\n  height: 450px;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    margin-left: 30px;\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 7px;\n    background-color: #d9d9d9;\n  }\n\n  div {\n    width: 902px;\n  }\n"]))),je=c.A.div(le||(le=(0,d.A)(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n"]))),we=c.A.p(de||(de=(0,d.A)(["\n  max-width: 100%;\n  margin-bottom: 24px;\n\n  line-height: 1.5;\n  color: var(--secondary-color);\n"]))),Ae=c.A.div(ce||(ce=(0,d.A)(["\n  margin-top: 44px;\n  display: flex;\n  gap: 40px;\n"]))),ye=c.A.button(pe||(pe=(0,d.A)(["\n  padding-bottom: 24px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.2;\n  position: relative;\n\n  &:hover {\n    color: var(--button-color);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 4px;\n    background-color: transparent;\n    transition: background-color 0.3s ease;\n    margin-bottom: -2px;\n  }\n\n  ","\n"])),(n=>{let{isActive:e}=n;return e&&"\n      &::after {\n         background-color: var( --button-color)\n      }\n   "})),ke=c.A.hr(he||(he=(0,d.A)(["\n  margin: 0;\n  border: none;\n  height: 1px;\n  background-color: rgba(16, 24, 40, 0.2);\n  position: relative;\n  transition: background-color 0.3s ease;\n"]))),Ce=c.A.div(xe||(xe=(0,d.A)(["\n  margin-top: 44px;\n  display: flex;\n  gap: 24px;\n"]))),ze=n=>{let{item:e,onClose:r,activeTab:i,setActiveTab:o}=n;const t=n=>{o(n)};return e?(0,x.jsxs)(ge,{children:[(0,x.jsx)(me,{type:"button",onClick:r,children:(0,x.jsx)(l.A,{icon:"icon-close",width:32,height:32})}),(0,x.jsx)(fe,{children:e.name}),(0,x.jsxs)(be,{children:[(0,x.jsxs)(Qn,{children:[(0,x.jsx)(l.A,{icon:"icon-star",width:16,height:16}),(0,x.jsx)("button",{type:"button","aria-label":"Open reviews",onClick:()=>t(2),children:"".concat(e.rating,"(").concat(e.reviews.length," Reviews)")})]}),(0,x.jsx)(y.A,{p:2,boxShadow:.5,borderRadius:4,bgcolor:"background.paper",border:1,borderColor:"grey.300",children:(0,x.jsxs)(Zn,{children:[(0,x.jsx)(l.A,{icon:"icon-location",width:16,height:16}),(0,x.jsx)("p",{children:e.location.split(",").reverse().join(", ")})]})})]}),(0,x.jsxs)(ue,{children:["\u20ac",e.price.toFixed(2)]}),(0,x.jsx)(ve,{children:(0,x.jsxs)("div",{children:[(0,x.jsx)(je,{children:e.gallery.map(((n,r)=>(0,x.jsx)($n,{children:(0,x.jsx)("img",{src:n,alt:e.name})},r)))}),(0,x.jsx)(y.A,{p:2,boxShadow:.5,borderRadius:4,bgcolor:"background.paper",border:1,borderColor:"grey.300",children:(0,x.jsxs)(we,{children:["Description: ",e.description]})})]})}),(0,x.jsxs)(Ae,{children:[(0,x.jsx)(ye,{active:1===i,onClick:()=>t(1),isActive:1===i,children:"Features"}),(0,x.jsx)(ye,{active:2===i,onClick:()=>t(2),isActive:2===i,children:"Reviews"})]}),(0,x.jsx)(ke,{}),(0,x.jsxs)(Ce,{children:[(0,x.jsxs)("div",{children:[1===i&&(0,x.jsx)(B,{item:e}),2===i&&(0,x.jsx)(sn,{reviews:e.reviews})]}),0!==i&&(0,x.jsx)(Yn,{})]})]}):null},Ie=n=>{let{item:e}=n;const r=(0,t.wA)(),i=(0,t.d4)(s.Cp),d=(0,o.useMemo)((()=>i.find((n=>n._id===e._id))),[i,e._id]),[c,p]=(0,o.useState)(!1),[h,m]=(0,o.useState)(0),f=()=>{p(!c)};return(0,x.jsxs)(Un,{children:[(0,x.jsx)($n,{children:(0,x.jsx)("img",{src:e.gallery[0],alt:e.name})}),(0,x.jsxs)(Kn,{children:[(0,x.jsxs)(On,{children:[(0,x.jsx)(Wn,{children:e.name}),(0,x.jsxs)(Xn,{children:[(0,x.jsxs)(Gn,{children:["\u20ac",e.price.toFixed(2)]}),(0,x.jsx)(Hn,{type:"button","aria-label":"Toggle Favorites",onClick:()=>{r(d?(0,a.wy)(e._id):(0,a._J)(e))},$favorite:!!d,children:(0,x.jsx)(l.A,{icon:"icon-heart",width:24,height:24})})]})]}),(0,x.jsxs)(Jn,{children:[(0,x.jsxs)(Qn,{children:[(0,x.jsx)(l.A,{icon:"icon-star",width:16,height:16}),(0,x.jsx)("button",{type:"button","aria-label":"Open reviews",onClick:()=>{p(!0),m(2)},children:"".concat(e.rating,"(").concat(e.reviews.length," Reviews)")})]}),(0,x.jsxs)(Zn,{children:[(0,x.jsx)(l.A,{icon:"icon-location",width:16,height:16}),(0,x.jsx)("p",{children:e.location.split(",").reverse().join(", ")})]})]}),(0,x.jsx)(ne,{children:e.description}),(0,x.jsx)(g,{data:e}),(0,x.jsx)(ee,{type:"button","aria-label":"Show more details",onClick:f,children:"Show more"})]}),c&&(0,x.jsx)(v,{onClose:f,children:(0,x.jsx)(ze,{item:e,onClose:f,activeTab:h,setActiveTab:m})})]})}},1261:(n,e,r)=>{r.d(e,{A:()=>t});r(5043);const i=r.p+"static/media/sprite.e7c0e09ece34ae3c72072c9deb921b54.svg";var o=r(579);const t=n=>{let{icon:e,width:r,height:t}=n;return(0,o.jsx)("svg",{width:r,height:t,children:(0,o.jsx)("use",{href:"".concat(i,"#").concat(e)})})}},3547:(n,e,r)=>{r.d(e,{Co:()=>i,Cp:()=>o,dx:()=>t});const i=n=>{let{adverts:e}=n;return e.adverts},o=n=>{let{adverts:e}=n;return e.favorites},t=n=>{let{filter:e}=n;return e}}}]);
//# sourceMappingURL=691.9d3c3375.chunk.js.map