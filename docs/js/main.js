const v=document.querySelector(".js-div-container__form"),k=document.querySelector(".js-fieldset-diseña");document.querySelector(".js-nubes");document.querySelector(".js-espacio");document.querySelector(".js-forky");document.querySelector(".js-legend-design");const i=document.querySelector(".js-form-design"),u=document.querySelector(".js-arrow"),w=e=>{e.target.id==="nubes"?(t.classList.add("card-background-nubes"),t.id="nubes",t.classList.remove("card-background-espacio"),t.classList.remove("card-background-forky")):e.target.id==="espacio"?(t.classList.add("card-background-espacio"),t.id="espacio",t.classList.remove("card-background-nubes"),t.classList.remove("card-background-forky")):e.target.id==="forky"&&(t.classList.add("card-background-forky"),t.id="forky",t.classList.remove("card-background-espacio"),t.classList.remove("card-background-nubes"))};k.addEventListener("click",w);const C=document.querySelector(".js-fieldset-rellena"),T=document.querySelector(".js-input-nameAddressee"),I=document.querySelector(".js-input-message");document.querySelector(".js-input-img");const l=document.querySelector(".js-input-phone"),$=document.querySelector(".js-input-nameSender"),H=document.querySelector(".js-input-insta");document.querySelector(".js-legend-fillout");const m=document.querySelector(".js-arrow-fillout"),g=document.querySelector(".js-form-fillout");l.addEventListener("input",M);function M(){l.value=l.value.replace(/[^0-9]/g,"")}const E=document.querySelectorAll(".js-legend"),P=e=>{e.currentTarget.classList.contains("js-legend-design")?(i.classList.toggle("collapse"),u.classList.toggle("rotate"),g.classList.add("collapse"),m.classList.remove("rotate"),f.classList.add("collapse"),p.classList.remove("rotate")):e.currentTarget.classList.contains("js-legend-fillout")?(g.classList.toggle("collapse"),m.classList.toggle("rotate"),i.classList.add("collapse"),u.classList.remove("rotate"),f.classList.add("collapse"),p.classList.remove("rotate")):e.currentTarget.classList.contains("js-legend-share")&&(f.classList.toggle("collapse"),p.classList.toggle("rotate"),i.classList.add("collapse"),u.classList.remove("rotate"),g.classList.add("collapse"),m.classList.remove("rotate"))};for(const e of E)e.addEventListener("click",P);const c=new FileReader,A=document.querySelector(".js__profile-upload-btn"),q=document.querySelector(".js__profile-image"),F=document.querySelector(".js-card-photo-img");function x(e){const o=e.currentTarget.files[0];c.addEventListener("load",D),c.readAsDataURL(o)}function D(){q.style.backgroundImage=`url(${c.result})`,F.style.backgroundImage=`url(${c.result})`}A.addEventListener("change",x);document.querySelector(".js-card");const t=document.querySelector(".js-card-found-img"),y=document.querySelector(".js-card-nameAddressee"),h=document.querySelector(".js-card-message"),b=document.querySelector(".js-card-photo-img"),j=document.querySelector(".js-card-phone"),L=document.querySelector(".js-card-nameSender"),S=document.querySelector(".js-card-insta"),_=document.querySelector(".js-button-reset");function a(e,o,n){e.target.id===o&&(n.innerHTML=e.target.value)}C.addEventListener("input",e=>{a(e,"nameAddressee",y),a(e,"message",h),a(e,"phone",j),a(e,"nameSender",L),a(e,"insta",S)});_.addEventListener("click",()=>{y.textContent="To: Woody",h.textContent="Te voy a echar mucho de menos",j.textContent="612345678",L.textContent="Mr. Potato",S.textContent="@mrpotato",b.style.backgroundImage='url("images/mr-potato.png")',t.classList.add("card-background-nubes"),t.classList.remove("card-background-espacio"),t.classList.remove("card-background-forky"),v.reset(),q.style.backgroundImage=""});document.querySelector(".js-legend-share");const f=document.querySelector(".js-form-share"),p=document.querySelector(".js-icon-arrow-share"),N=document.querySelector(".js-card-create"),R=document.querySelector(".js-share-open"),s=document.querySelector(".js-link");let d=document.querySelector(".js-urlCard");const O=document.querySelector(".js-twitter"),U=document.querySelector(".js-whatsapp"),W=document.querySelector(".js-email"),r={field1:1,field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",photo:""},B=()=>{r.field2=T.value,r.field3=I.value,r.field4=l.value,r.field5=$.value,r.field6=H.value,r.field7=`/images/${t.id}.jpg`,r.photo=c.result};function J(e){e.preventDefault(),B(),fetch("https://dev.adalab.es/api/info/data",{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"application/json"}}).then(o=>o.json()).then(o=>{const n=o.infoID;s.classList.remove("collapse"),n===void 0?(d.style.color="red",d.innerHTML="Ha ocurrido un error, inténtalo de nuevo"):(s.href=`./cardDetails.html?id=${n}`,d.style.color="nubes",d.innerHTML=s.href,R.classList.remove("collapse"),O.href=`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20para%20que%20no%20te%20olvides%20de%20mi,%20${r.field2}&url=${s.href}`,U.href=`https://api.whatsapp.com/send?text=He%20creado%20esta%20tarjeta%20para%20que%20no%20te%20olvides%20de%20mi,%20${r.field2}%20${s.href}`,W.href=`mailto:?subject=Tarjeta%20hay%20un%20amigo%20en%20mi&body=He%20creado%20esta%20tarjeta%20para%20que%20no%20te%20olvides%20de%20mi,%20${r.field2}:%20${s.href}`)})}N.addEventListener("click",J);const z=new URLSearchParams(window.location.search),G=z.get("id");fetch(`https://dev.adalab.es/api/info/${G}`).then(e=>e.json()).then(e=>{const o=e.data;console.log(o),y.innerHTML=o.field2,h.innerHTML=o.field3,b.style.backgroundImage=`url(${o.photo})`,j.innerHTML=o.field4,L.innerHTML=o.field5,S.innerHTML=o.field6,t.style.backgroundImage=`url(${o.field7})`});
//# sourceMappingURL=main.js.map
