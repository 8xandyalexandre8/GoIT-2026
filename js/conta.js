document.addEventListener('DOMContentLoaded', () => {
  const defaults = {name:'Professor(a) Exemplo',email:'professor@exemplo.com',phone:''};
  let profile = {};
  try { profile = {...defaults, ...(JSON.parse(sessionStorage.getItem('helpeopleProfile') || 'null') || {})}; } catch { profile = {...defaults}; }
  const fields = {name:{title:'Alterar nome completo',label:'Novo nome',type:'text'},email:{title:'Alterar e-mail',label:'Novo e-mail',type:'email'},phone:{title:'Alterar telefone',label:'Novo telefone',type:'tel'}};
  const dialog = document.querySelector('#edit-dialog'), form=document.querySelector('#edit-form'), input=document.querySelector('#dialog-input');
  let currentField = null;
  function render() {
    document.querySelector('#profile-name').textContent=profile.name || defaults.name;
    document.querySelector('#profile-email').textContent=profile.email || defaults.email;
    document.querySelector('#name-value').textContent=profile.name || 'Não informado';
    document.querySelector('#email-value').textContent=profile.email || 'Não informado';
    document.querySelector('#phone-value').textContent=profile.phone || 'Não informado';
    const avatar=document.querySelector('#avatar-preview');
    if (!avatar.style.backgroundImage) avatar.textContent=(profile.name || 'P').trim().charAt(0).toUpperCase();
  }
  function save(){sessionStorage.setItem('helpeopleProfile',JSON.stringify(profile));render();}
  render();
  document.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click',()=>{
    currentField=button.dataset.field;const cfg=fields[currentField];
    document.querySelector('#dialog-title').textContent=cfg.title;document.querySelector('#dialog-label').textContent=cfg.label;
    input.type=cfg.type;input.value=profile[currentField] || '';input.required=currentField!=='phone';dialog.showModal();input.focus();
  }));
  form.addEventListener('submit',e=>{e.preventDefault();if(!currentField)return;profile[currentField]=input.value.trim();save();dialog.close();});
  document.querySelector('#cancel-edit').addEventListener('click',()=>dialog.close());
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  document.querySelector('#photo-input').addEventListener('change',e=>{
    const file=e.target.files && e.target.files[0];if(!file)return;
    if(!file.type.startsWith('image/')){alert('Selecione um arquivo de imagem.');return;}
    const reader=new FileReader();reader.onload=()=>{const avatar=document.querySelector('#avatar-preview');avatar.style.backgroundImage=`url("${reader.result}")`;avatar.textContent='';};reader.readAsDataURL(file);
  });
});
