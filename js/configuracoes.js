document.addEventListener('DOMContentLoaded',()=>{
  const body=document.body;let size=0;
  document.querySelector('#font-up').addEventListener('click',()=>{size=Math.min(2,size+1);body.classList.toggle('font-large',size===2);body.classList.toggle('font-small',size===-1);});
  document.querySelector('#font-down').addEventListener('click',()=>{size=Math.max(-1,size-1);body.classList.toggle('font-large',size===2);body.classList.toggle('font-small',size===-1);});
  const voice=document.querySelector('#voice-toggle');voice.addEventListener('change',()=>{alert(voice.checked?'Preferência de controle por voz ativada visualmente. O reconhecimento de voz ainda não está implementado.':'Preferência de controle por voz desativada.');});
  const mono=document.querySelector('#mono-toggle');mono.addEventListener('change',()=>body.classList.toggle('mono-mode',mono.checked));
  document.querySelector('#reset-settings').addEventListener('click',()=>{size=0;body.classList.remove('font-large','font-small','mono-mode');voice.checked=false;mono.checked=false;});
});
