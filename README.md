# Helpeople — Protótipo front-end

Protótipo responsivo com HTML, CSS e JavaScript puro, sem banco de dados.

## Executar
1. Extraia o ZIP e abra a pasta `helpeople` no Visual Studio Code.
2. Use a extensão Live Server e abra `index.html`.

## Publicar no GitHub Pages
Envie os arquivos para um repositório GitHub. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.

## Páginas
- `index.html`: entrada com cadastro e login (sem acesso anônimo).
- `cadastro.html`: cadastro com instituição opcional.
- `login.html`: login demonstrativo.
- `inicio.html`: conteúdos recentes, perguntas e tratativas em destaque, além de atalhos inferiores.
- `banco-tratativas.html`: catálogo com filtro por tipo de deficiência sensorial.
- `postagens.html`: perguntas predefinidas e formulário para criar perguntas.
- `conta.html`: edição de nome, e-mail, telefone, instituição e foto.
- `configuracoes.html`: opções visuais.
- `tratativa.html` e `pergunta.html`: modelos de conteúdo com classificação sensorial e respostas sugeridas.

## Onde editar conteúdo
- `js/home.js`: cartões na página inicial.
- `js/catalog.js`: catálogo e tipos sensoriais.
- `js/posts.js`: perguntas de exemplo e comportamento de novas postagens.
- `js/content.js`: conteúdo detalhado das tratativas e perguntas.

## Limitações
Cadastro/login não são autenticação real; não use senhas reais. O perfil usa `sessionStorage`. Perguntas e respostas são temporárias e não são compartilhadas entre visitantes. Controle por voz é apenas demonstrativo. Categorias sensoriais são organizacionais e não substituem avaliação individual ou orientação especializada.
