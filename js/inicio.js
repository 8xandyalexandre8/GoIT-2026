const demoContent = {
  recent: [
    {type:'tratativa',title:'Rotina visual para antecipar atividades',desc:'Organize a sequência do dia com pistas visuais claras.',icon:'▦',tag:'Organização',id:'rotina'},
    {type:'pergunta',title:'Como apoiar um aluno em momentos de sobrecarga?',desc:'Ideias iniciais para acolher e adaptar o ambiente.',icon:'♡',tag:'Acolhimento',id:'sobrecarga'},
    {type:'tratativa',title:'Instruções curtas e objetivas',desc:'Divida tarefas em etapas que sejam fáceis de acompanhar.',icon:'☷',tag:'Comunicação',id:'instrucoes'}
  ],
  questions: [
    {type:'pergunta',title:'Como adaptar uma atividade sem excluir ninguém?',desc:'Princípios para oferecer diferentes formas de participação.',icon:'?',tag:'Adaptação',id:'atividade'},
    {type:'pergunta',title:'Como conversar com a família?',desc:'Uma abordagem colaborativa, respeitosa e sem julgamentos.',icon:'☏',tag:'Parceria',id:'familia'},
    {type:'pergunta',title:'O que fazer quando uma instrução não funciona?',desc:'Observe, ajuste e tente outra forma de comunicação.',icon:'↻',tag:'Estratégias',id:'instrucoes'}
  ],
  featured: [
    {type:'tratativa',title:'Ofereça opções de resposta',desc:'Permita que o estudante demonstre o que sabe de diferentes maneiras.',icon:'◇',tag:'Participação',id:'opcoes'},
    {type:'tratativa',title:'Planeje pausas combinadas',desc:'Preveja pausas e combine como pedir ajuda ou descanso.',icon:'◷',tag:'Autorregulação',id:'pausas'},
    {type:'tratativa',title:'Use linguagem direta',desc:'Dê uma instrução de cada vez e confira se ficou clara.',icon:'Aa',tag:'Comunicação',id:'instrucoes'}
  ]
};
function cardHTML(item) {
  const page = item.type === 'pergunta' ? 'pergunta.html' : 'tratativa.html';
  return `<a class="content-card" href="${page}?id=${encodeURIComponent(item.id)}"><div class="card-art" aria-hidden="true">${item.icon}</div><div class="card-body"><span class="card-tag">${item.tag}</span><h3>${item.title}</h3><p>${item.desc}</p><span class="card-link">Explorar conteúdo →</span></div></a>`;
}
document.addEventListener('DOMContentLoaded', () => {
  const map = [['recent-list','recent'],['questions-list','questions'],['featured-list','featured']];
  map.forEach(([id,key]) => { const el = document.getElementById(id); if (el) el.innerHTML = demoContent[key].map(cardHTML).join(''); });
  const main = document.querySelector('.home-content');
  if (main) { const note = document.createElement('p'); note.id='search-feedback'; note.className='prototype-note'; note.setAttribute('aria-live','polite'); note.hidden=true; const search=document.querySelector('#site-search'); if(search) search.addEventListener('input',()=>{note.hidden=!search.value.trim();}); main.insertBefore(note, main.children[1]); }
});
