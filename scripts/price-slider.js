var o=[0,900],n=document.querySelector(".form__range-slider"),r=document.querySelector('.form__control-input[name="price-min"]'),i=document.querySelector('.form__control-input[name="price-max"]'),l=()=>noUiSlider.create(n,{range:{min:0,max:1e3},step:1,start:o,connect:!0}),d=(e,t)=>{let c=[r,i];c[t].value=Number(e[t])},a=({target:e})=>n.noUiSlider.set([e.value,null]),s=({target:e})=>n.noUiSlider.set([null,e.value]),u=()=>{l(),n.noUiSlider.on("update",d),r.addEventListener("change",a),i.addEventListener("change",s)};export{u as initPriceSlider};