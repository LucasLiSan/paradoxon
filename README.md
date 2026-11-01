# PARADOXON — Independent Technology Ecosystem

Landing page institucional estática, construída com HTML5 semântico, CSS3 e JavaScript Vanilla. Não utiliza React, TypeScript, Tailwind, bundlers ou dependências npm e pode ser publicada diretamente no GitHub Pages.

## Estrutura

```text
/
├── index.html
├── css/style.css
├── js/main.js
├── assets/images/
│   ├── paradoxon-symbol.svg
│   └── paradoxon-social.svg
├── favicon.svg
└── README.md
```

## Visualização local

Abra `index.html` diretamente no navegador ou utilize qualquer servidor HTTP estático. Nenhum processo de build ou instalação é necessário.

## Personalização

### Dados institucionais

Edite o conteúdo semântico em `index.html`. Mantenha um único `h1` e preserve a ordem dos níveis de títulos.

### Contato e redes

No início de `js/main.js`, preencha apenas os endereços confirmados:

```js
const SITE_CONFIG = {
  contactUrl: "",
  proposalUrl: "",
  professionalNetworkUrl: "",
};
```

Enquanto os valores estiverem vazios, os botões não são exibidos e a página informa claramente que os canais ainda serão configurados.

### Cores e tipografia

As variáveis de identidade estão no início de `css/style.css`, dentro de `:root`. A paleta oficial usa:

- Grafite `#17151D`
- Violeta `#392A4D`
- Magenta `#B13C82`
- Cinza mineral `#B6A7A0`
- Marfim `#D9D0BF`

As fontes Cormorant Garamond e Manrope são carregadas pelo Google Fonts e possuem alternativas de sistema. Para funcionamento totalmente offline, baixe arquivos WOFF2 licenciados, coloque-os em `assets/fonts/` e substitua a importação por regras `@font-face`.

### Símbolo

Substitua `assets/images/paradoxon-symbol.svg` mantendo o mesmo nome, proporção quadrada e fundo transparente. O arquivo atual é uma construção geométrica original preparada como símbolo provisório, pois a arte proprietária de referência não acompanha este repositório. O símbolo também aparece no favicon e na imagem social; atualize esses dois arquivos ao adotar a arte oficial.

### Imagens

Adicione novas imagens em `assets/images/`. Use caminhos relativos, dimensões explícitas, formatos otimizados e `loading="lazy"` para imagens abaixo da primeira dobra.

### SEO

Antes de publicar:

1. Defina o domínio oficial em `canonical` e `og:url` no `index.html`.
2. Troque `https://example.com/` em `sitemap.xml`.
3. Descomente e atualize a linha `Sitemap` em `robots.txt`.
4. Atualize a imagem `assets/images/paradoxon-social.svg` se necessário.

## Publicação no GitHub Pages

1. Crie um repositório no GitHub e envie todos os arquivos da raiz.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch principal e a pasta `/ (root)`.
5. Salve e aguarde a publicação.
6. Use a URL fornecida pelo GitHub para atualizar os campos de SEO descritos acima.

Todos os caminhos da página são relativos, portanto funcionam tanto em domínio próprio quanto em um repositório de projeto do GitHub Pages.

## Atualizações futuras

- Preserve as variáveis de design e a hierarquia semântica.
- Teste em 320, 375, 768, 1366 e 1920 pixels.
- Verifique navegação por teclado, foco visível e modo `prefers-reduced-motion`.
- Não adicione dados institucionais, certificações, clientes ou canais que não tenham sido confirmados.
