# Excellency Motors: notas do site demo

Revendedora de seminovos em Criciúma/SC: Av. Centenário, 3725, Centro (ao lado do Banco do Brasil).
Google: **4,9 ★ com 135 avaliações**. WhatsApp principal: (48) 99944-7004 (Tiago).

## Gancho para abordagem

- **Hoje:** o botão "Site" da ficha do Google leva para `excellency-motors.negocio.site`, que dá
  **erro 404**. O Google desligou os sites "negocio.site" em 2024. Quem vê a nota 4,9 e toca em
  "Site" cai numa página de erro do Google (print em `preview/site-atual-404.jpg`).
  O estoque só aparece no Kleber Carros, numa página do portal com as logos de dezenas de lojas
  concorrentes na lateral, e no Instagram.
- **Site novo:** página própria com o logo e as cores da loja (preto, laranja e prata do letreiro),
  a foto real da fachada e os **18 veículos reais** que eles anunciam, com foto, preço, km e ano.
  Tem busca e filtro, e o botão "Tenho interesse" abre o WhatsApp com a mensagem pronta citando o
  carro. Também tem simulador de parcela que manda a simulação no WhatsApp, a nota 4,9 em
  destaque, mapa, horário e os três vendedores (Tiago, Alison e Sidnei) com WhatsApp direto.
- Sugestão de mensagem: *"Oi, Tiago! Vi que o link de site de vocês no Google está dando erro
  (o Google desligou esses sites). Montei uma versão nova da Excellency, já com os carros de
  vocês. Dá uma olhada: [link]"*. Mandar junto o print do 404 e o `preview/mobile-topo.jpg`.

## De onde veio cada coisa (real × mock)

| Item | Status | Fonte |
|---|---|---|
| Logo (asas + caixa "eXCELLENCY MOTORS") | **Real** | Logo do anúncio da loja no Kleber Carros (`klebercarros.com/fotog/d64e6fe29530d88f.jpg`). Recortei e tirei o fundo preto; o arquivo original também trazia os telefones. Versões: `logo-excellency.webp` (horizontal) e `logo-excellency-vertical.webp`. |
| Cores | **Real** | Tiradas do logo: laranja `#F37216`, prata `#B3B5B8`, preto. |
| Foto da fachada (hero e og:image) | **Real** | Foto da ficha da loja no Google Maps (letreiro aceso ao entardecer). |
| Estoque (18 veículos) | **Real** | Anúncios da loja em `klebercarros.com/Excellency`, coletados em 03/10/2026: modelo, versão, ano/modelo, km, cor, preço e etiquetas "Único dono"/"Revisado". |
| Fotos dos carros | **Real** | Capa de cada anúncio, tirada no pátio da loja. Têm a marca d'água "KleberCarros.com" no canto. |
| Vendedores | **Real** | Tiago (48) 99944-7004, Alison (48) 99601-5680, Sidnei (48) 99978-1438. Estão no Kleber Carros, no logo e no letreiro. |
| Slogan "Excelência em fazer negócios" | **Real** | Bio do Instagram. |
| Instagram @excellencymotors | **Real** | Aparece no letreiro da fachada e na busca (cerca de 5,1 mil seguidores e 321 posts). Não consegui baixar posts: o Instagram bloqueou com 429/login. |
| "Ao lado do Banco do Brasil" | **Real** | Endereço da loja no Kleber Carros. |
| Horário | **Parcial** | Pelo Google Maps: sábado 8h30–12h, domingo fechado, segunda abre às 8h30. Não achei o horário de fechamento de seg. a sex. No site está "Segunda a sexta: a partir das 8h30". |
| Nota 4,9 / 135 avaliações | **Real** | Planilha e Google Maps. |
| Depoimentos (Mariana S., Rodrigo P., Carlos M.) | **MOCK** | Textos e nomes fictícios. Trocar por avaliações reais do Google antes de publicar. |
| Diferenciais (financiamento, troca, procedência) | Texto genérico | Escrevi sem números nem promessas específicas. Confirmar que fazem financiamento e aceitam troca. |
| Taxa do simulador (1,79% a.m.) | Suposição | Só para ilustrar, com aviso na tela. Ajustar se o dono quiser. |

Outras buscas:
- Wayback Machine: não tem nenhum snapshot de `excellency-motors.negocio.site`.
- Facebook: achei duas páginas com o nome da loja, `facebook.com/tiagopereiraveiculos` e
  `facebook.com/p/Excellency-Motors-61552987606257`. Não coloquei no site; confirmar qual é a oficial.
- Post da loja no Google (12/09/2026): "Obrigado ao casal Sérgio e Luisa de Urubici!". Eles postam
  fotos de entregas. Ideia para a versão final: uma seção "Clientes Excellency" com essas fotos do
  Instagram.

## Confirmar com o dono

1. Horário de fechamento de segunda a sexta.
2. Se fazem financiamento e aceitam usado na troca (textos dos diferenciais e do simulador).
3. Depoimentos: substituir os mock por avaliações reais do Google.
4. Estoque: confere com o pátio de hoje? Carros vendidos saem do site.
5. Dados que conferi pelo anúncio:
   - **HB20 2014**: o anúncio não informa câmbio. Coloquei "Manual" pela foto do painel.
   - **HB20 2014 e Biz 125**: o campo combustível do anúncio diz "Gasolina", mas os dois modelos
     são flex (o título da Biz diz "FLEX"). No site está "Flex".
   - **Tiguan Allspace**: anúncio sem "AUT" no título, mas tem câmbio borboleta e é a versão
     250 TSI Comfortline, que é automática. No site está "Automático".
6. Pedir as fotos originais dos carros (sem a marca d'água do Kleber Carros) e, se tiver, fotos
   do pátio e da equipe.
7. Qual WhatsApp recebe os contatos do site. Hoje todos os botões vão para o Tiago (99944-7004),
   e o Alison e o Sidnei aparecem na seção "A loja" e no rodapé.

## Técnico

- HTML + CSS + JS puro, sem build. Funciona abrindo o `index.html` direto. Pasta com cerca de 5,3 MB
  (assets 1,9 MB; o resto são os prints em `preview/`).
- Os cards do estoque estão escritos direto no `index.html` (`<article class="car" data-...>`).
  Para atualizar um carro, edite o card e troque a imagem em `assets/img/estoque/` (WebP 800×600).
  O filtro, a ordenação, o "Simular parcela" e o link do WhatsApp leem os atributos `data-*`.
- **Antes de publicar:** trocar `og:image` e os campos `image`/`logo` do JSON-LD por URL absoluta
  (ex.: `https://dominio/assets/img/og-excellency.jpg`). O WhatsApp só mostra a prévia do link
  com URL absoluta. Também adicionar `og:url` e `<link rel="canonical">`.
- O mapa é o embed público do Google Maps (sem chave de API) e mostra a ficha da loja com a nota
  4,9 (135).
- Prints em `preview/`:
  - `desktop.jpg`: página inteira em 1440 px.
  - `mobile.jpg`: página inteira em 390 px, @2x.
  - `mobile-topo.jpg`: primeira tela no celular.
  - `site-atual-404.jpg`: o 404 de hoje no celular.
  - `site-atual-404-desktop.jpg`: o 404 de hoje no desktop.
