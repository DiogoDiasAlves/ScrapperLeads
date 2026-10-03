# Padrão dos sites de demonstração (lojas de veículos)

Cada site é uma demonstração feita **antes** do contato: o dono da loja recebe o site dele já
pronto, mais bonito e moderno do que o que ele tem hoje. Por isso o site tem que parecer da loja
(logo, cores, fotos e carros reais dela) e tem que abrir rápido no celular, porque o link vai
chegar pelo WhatsApp.

## Estrutura

```
sites/<slug>/
  index.html
  css/style.css
  js/main.js
  assets/img/        imagens otimizadas (WebP), baixadas para a pasta; nunca link direto de outro site
  preview/           desktop.jpg e mobile.jpg (prints da página inteira, servem para mandar no zap)
  NOTAS.md           de onde veio cada coisa, o que é real e o que é mock, o que confirmar com o dono
```

- HTML + CSS + JavaScript puro. Sem framework, sem etapa de build, sem biblioteca JS externa.
- Só caminhos relativos: o site tem que funcionar abrindo o `index.html` direto e em qualquer
  hospedagem estática (Vercel, Netlify, GitHub Pages).
- Fontes: no máximo 2 famílias do Google Fonts com `display=swap`, ou fontes do sistema.

## Conteúdo e imagens

- **Fonte das imagens, em ordem:** site atual da loja → Instagram → Linktree / portal de anúncios
  (ex.: Kleber Carros) → ficha do Google Maps. Use o logo, as cores e as fotos de carros que
  aparecerem lá.
- Só se não achar foto real da loja: use fotos reais de banco de imagens livre (Unsplash, Pexels),
  baixadas para `assets/img/`, do modelo de carro mais parecido possível. Nunca ilustração ou
  imagem gerada.
- **Estoque:** prefira os carros que a loja anuncia de verdade (Instagram, portal, site). Se não
  tiver, monte um estoque mock plausível para um seminovos de Criciúma/SC (6 a 9 carros).
- Não invente fatos sobre a loja (anos de mercado, número de carros vendidos, garantia
  específica). Se precisar de um texto assim, escreva neutro ou deixe marcado em `NOTAS.md` como
  "confirmar com o dono".
- Nota e número de avaliações do Google: usar os números reais da planilha. Depoimentos: reais se
  achar; se forem mock, registrar em `NOTAS.md`.
- Texto todo em português do Brasil, direto e vendedor, sem clichê de template.

## Seções

1. Topo fixo: logo, menu, botão de WhatsApp.
2. Hero: frase forte, foto de impacto, botões "Ver estoque" e "Falar no WhatsApp", selo com a nota
   do Google.
3. Estoque: cards com foto, modelo, ano, km, câmbio/combustível, preço (ou "Consulte") e botão
   "Tenho interesse" que abre o WhatsApp com mensagem pronta citando o carro. Filtro simples
   (busca por texto, marca, faixa de preço) em JS.
4. Diferenciais: procedência, financiamento, aceita troca, etc.
5. Simulação de financiamento simples (valor, entrada, prazo → parcela estimada), com aviso de que
   é só uma simulação.
6. Avaliações: nota do Google e depoimentos.
7. Sobre a loja.
8. Localização: mapa do Google embutido (iframe com `loading="lazy"`), endereço, horário, botão
   "Como chegar".
9. Rodapé: contatos, Instagram, endereço.
10. Botão flutuante de WhatsApp.

Se a loja só tem telefone fixo, use o WhatsApp do Linktree/Instagram; se não achar nenhum, use o
fixo em `tel:` e deixe o WhatsApp marcado como "confirmar" em `NOTAS.md`.

## Design

- Moderno e com cara de loja premium, mas com a identidade da loja (cores do logo). Cada site tem
  que ser diferente dos outros; nada de template genérico.
- Feito primeiro para celular (390px), depois desktop. Sem rolagem horizontal.
- Contraste legível, foco visível, `alt` em todas as imagens.

## Desempenho e SEO

- Imagens em WebP, redimensionadas (hero até 1600px de largura, cards até 800px), com `width` e
  `height` no HTML. `loading="lazy"` em tudo que fica abaixo da dobra; `fetchpriority="high"` e
  preload na imagem do hero.
- Pasta inteira do site com menos de ~8 MB.
- `<title>` e meta description com nome da loja + "seminovos em Criciúma".
- Open Graph (`og:title`, `og:description`, `og:image`): é o que gera a prévia do link no
  WhatsApp.
- JSON-LD `AutoDealer` com nome, endereço, telefone, nota e número de avaliações.
- Favicon (pode ser o logo).

## Verificação antes de entregar

- Servir a pasta localmente (`python3 -m http.server`) e abrir com Playwright
  (`NODE_PATH=$(npm root -g) node script.js`, o Chromium já está instalado; não rode
  `playwright install`).
- Prints de página inteira: desktop 1440×900 e celular 390×844, salvos em `preview/` como JPEG.
  Olhar os prints e corrigir o que estiver feio ou quebrado.
- Sem erro no console, nenhuma imagem quebrada, sem rolagem horizontal no celular, links de
  WhatsApp e mapa funcionando.
