# Helpeople — protótipo front-end

Protótipo responsivo para explorar estratégias de educação inclusiva. Feito com HTML, CSS e JavaScript sem frameworks e sem banco de dados.

## Executar localmente
1. Baixe e extraia os arquivos.
2. Abra a pasta no Visual Studio Code.
3. Recomendado: use a extensão **Live Server** e clique em “Go Live”. Também é possível abrir `index.html` diretamente, embora um servidor local evite algumas diferenças entre navegadores.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub e envie todos os arquivos mantendo a estrutura de pastas.
2. Abra **Settings → Pages**.
3. Em *Build and deployment*, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
5. Aguarde a publicação e abra o endereço informado pelo GitHub Pages.

## Páginas
- `index.html`: boas-vindas e escolha de acesso.
- `cadastro.html` e `login.html`: formulários demonstrativos.
- `inicio.html`: adições recentes, perguntas frequentes e tratativas em destaque.
- `conta.html`: edição local de perfil e seleção de foto.
- `configuracoes.html`: preferências visuais e opção demonstrativa de voz.
- `tratativa.html` e `pergunta.html`: modelos de conteúdo e respostas.

## Como editar os conteúdos
Os dados de exemplo ficam no começo de `js/inicio.js` e no objeto `articles` em `js/conteudo.js`. Os cartões usam `?id=...` para abrir o conteúdo correspondente. Para criar um conteúdo, adicione uma entrada nesses objetos e um cartão na lista desejada.

## Limitações importantes
- Cadastro/login não são autenticação real. O protótipo não verifica credenciais contra um servidor e não deve receber senhas reais.
- O perfil e respostas são temporários e ficam em `sessionStorage` ou na página atual.
- A foto selecionada só aparece na sessão da página; não é enviada nem salva em servidor.
- Controle por voz é apenas uma preferência demonstrativa, sem reconhecimento de fala.
- A busca filtra os cartões que já estão renderizados; não consulta uma base de dados.
- O protótipo usa uma fonte externa do Google Fonts, com fontes de sistema como alternativa.

## Antes de usar em uma escola
Para uma versão real, será necessário implementar autenticação segura, banco de dados, moderação das contribuições, privacidade e proteção de dados, acessibilidade testada com usuários e revisão pedagógica dos conteúdos.
