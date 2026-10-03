# VIP CAR+ Seminovos (Vip Car Veículos Ltda), Criciúma/SC

Site demonstrativo feito antes do contato. Pasta: `sites/vipcar-veiculos/`.
Abre direto pelo `index.html` ou em qualquer hospedagem estática. Peso total ~5 MB (com os prints).

## Gancho para a abordagem

> "O site de vocês hoje (seminovosvipcar.com.br) ainda está com o texto padrão do construtor e não
> mostra nenhum carro. Montei uma versão com o estoque real de vocês: 12 carros com as fotos do
> showroom, preço, filtro por marca/preço/categoria, galeria de fotos, simulador de parcela e um
> botão 'Tenho interesse' que já abre o WhatsApp com o nome e o preço do carro. Tudo com a cara da
> VIP CAR+ (logo, preto e branco, 'Mais confiança. Mais procedência.') e pensado para o celular."

Ponto extra para checar antes de usar: daqui (fora do Brasil) o site atual responde
**"Your country is not allowed to access this resource"** (bloqueio por país na CDN da Hostinger).
O robô do Google rastreia a partir dos EUA, então esse bloqueio pode estar impedindo o Google de
indexar o site. Se o Diogo confirmar (por exemplo no Search Console ou com uma VPN fora do Brasil),
é um argumento forte.

## De onde veio cada coisa

| Item | Fonte | Real ou mock |
|---|---|---|
| Logo "VIP CAR+" (branco, fundo transparente) | Logo do perfil da loja na Mobiauto (1080 px, igual ao avatar do Instagram), recortado | Real |
| Favicon / ícone | Mesmo logo, quadrado preto | Real |
| Cores | Identidade preto e branco do logo, das placas "VIP CAR+" e da fachada | Real |
| Slogan "Mais confiança. Mais procedência." | Legendas do Instagram @seminovosvipcar | Real |
| Foto do hero (desktop) | Anúncio do Eclipse Cross na Mobiauto (foto do showroom) | Real |
| Foto do hero (celular) | Post do Bronco Sport no Instagram | Real |
| Fachada (seção "A loja") | Foto da fachada no perfil da loja na Mobiauto | Real |
| Grade do Instagram (6 fotos) | Posts recentes do Instagram | Real |
| Estoque (12 carros, 5 fotos cada) | 4 do Instagram + 8 da Mobiauto (ver tabela abaixo) | Real |
| Nota 4,3 e 173 avaliações | Planilha de leads | Real |
| Depoimentos (Rafael M., Juliana S., Marcos T.) | Escritos para a demonstração | **MOCK**: trocar por avaliações reais do Google |
| 16,9 mil seguidores | Perfil do Instagram (03/10/2026) | Real |
| Telefone, e-mail, endereço | Planilha + Mobiauto | Real |
| Horário (seg a sex 9h às 18h, sáb 9h às 13h) | Perfil da loja na Mobiauto | Real, mas **confirmar**: um guia antigo diz 8h às 18h |
| Mapa | Embed do Google Maps pelo endereço (o pino cai na Av. Centenário, 5820) | Real |

Fontes: Montserrat (títulos, parecida com a letra do logo) e Inter (texto), ambas do Google Fonts.
Os arquivos `.woff2` ficam na própria pasta (`assets/fonts/`), então o site não depende de servidor externo.

### Estoque usado (anúncios conferidos em 03/10/2026)

| Carro | Ano | Km | Preço | Fonte |
|---|---|---|---|---|
| Ford Bronco Sport Wildtrak 2.0 Turbo 4x4 | 2023 | 59.900 | R$ 179.900 | Instagram |
| VW Tera High 1.0 170 TSI Flex Aut. | 2026 | 19.000 | R$ 140.000 | Instagram |
| Toyota Hilux SRX 2.8 Diesel 4x4 CD | 2024/2024 | 79.000 | R$ 290.000 | Mobiauto |
| Mitsubishi Eclipse Cross HPE Black | 2025/2026 | 200 | R$ 185.000 | Mobiauto |
| Toyota Corolla XEi 2.0 | 2023/2024 | 34.000 | R$ 150.000 | Mobiauto |
| Citroën C4 Cactus Shine Pack 1.6 THP Aut. | 2024 | 14.000 | R$ 99.000 | Instagram |
| VW T-Cross Highline 1.4 TSI Aut. | 2025 | 56.000 | R$ 145.000 | Instagram |
| VW Tiguan Allspace R-Line 2.0 TSI | 2023/2024 | 37.160 | R$ 230.000 | Mobiauto |
| Chevrolet Tracker LTZ 1.0 Turbo | 2024/2025 | 15.000 | R$ 130.000 | Mobiauto |
| Honda City Hatchback EX 1.5 | 2024/2024 | 3.400 | R$ 120.000 | Mobiauto |
| VW Gol Last Edition 1.0 | 2022/2023 | 7.000 | R$ 100.000 | Mobiauto |
| Hyundai HB20 Comfort Plus 1.0 | 2025/2025 | 20.100 | R$ 80.000 | Mobiauto |

A loja tem 18 carros na Mobiauto (https://www.mobiauto.com.br/comprar/estoque/vip-car-14998).
Escolhi 12 com faixas de preço e categorias variadas. Os itens de série que aparecem na galeria
(Bronco, Tera, C4 Cactus, T-Cross) foram copiados das legendas do Instagram. Nos outros carros a
galeria pede a lista pelo WhatsApp. A versão "1.5 Turbo" do Eclipse Cross e o combustível
"Gasolina" do Bronco são dados de fábrica do modelo, não vieram do anúncio.

## WhatsApp

**(48) 99183-5650** (`wa.me/5548991835650`), usado em todos os botões.
- Aparece como WhatsApp/celular da "Vip Car Veículos Ltda" na Napista e como telefone do
  "Grupo Vip Car" no Bombando Carros, com o mesmo e-mail da planilha (seminovos@vipcarcri.com.br).
- **Não confirmado** no Instagram nem no site atual (a bio do Instagram não abre sem login e o site
  está bloqueado daqui). **Confirmar com o dono** se é o número do comercial de seminovos.
- O fixo (48) 3433-7000 está no botão "Ligar agora" (`tel:`).

## Confirmar com o dono

1. Número de WhatsApp do comercial (acima).
2. Horário de atendimento (9h ou 8h? sábado até 13h?).
3. Se os 12 carros ainda estão disponíveis e se os preços continuam valendo.
4. Texto da seção "A loja": escrevi "a loja de seminovos da Vip Car em Criciúma" (o e-mail
   @vipcarcri é do grupo Vip Car, que também tem a concessionária Renault). Confirmar se querem
   citar o grupo e se há algum dado que gostariam de usar (anos de mercado, garantia, laudo cautelar).
   Nada disso foi inventado.
5. Financiamento: o site diz que ajudam a montar entrada e prazo. Confirmar com quais bancos
   trabalham. O simulador usa taxa de referência de 1,99% a.m. só para ilustrar; dá para trocar
   em `js/main.js` (`var TAXA = 0.0199`).
6. Depoimentos: os três são mock. Trocar por avaliações reais do Google (com autorização).

## Site atual (o que ele tem hoje)

- seminovosvipcar.com.br fica atrás da CDN da Hostinger, que daqui devolve 403 com
  "Your country is not allowed to access this resource". O Playwright, o curl, o WebFetch, o
  Wayback Machine e serviços de screenshot foram bloqueados (pelo país ou pelo proxy deste
  ambiente). Por isso **não foi possível gerar `preview/site-atual.jpg`**. O Diogo precisa tirar
  esse print do Brasil, no celular ou no PC.
- O que se sabe (pela planilha e pelas buscas): a home está com o texto padrão do construtor, não
  mostra estoque e tem pixel da Meta (agência Odd Marketing). No índice do Google ainda aparecem
  páginas antigas de veículos (/seminovo/...).

## Estrutura e manutenção

```
index.html            página única; os 12 cards do estoque estão escritos direto no HTML
css/style.css         estilos (mobile primeiro; desktop a partir de 761 px e de 1000 px)
js/main.js            filtros, galeria, simulador, menu; objeto CARROS com os dados da galeria
assets/img/           logo, hero, fachada, og-image.jpg, favicon
assets/img/carros/    <slug>-capa.webp (800x600) + <slug>-1..4.webp (galeria)
assets/img/insta/     6 fotos do Instagram
assets/fonts/         Montserrat e Inter (woff2)
preview/              desktop.jpg (1440 px) e mobile.jpg (390 px), página inteira
```

Para trocar um carro: editar o card no `index.html` (data-* do `<article>`, textos e link do
WhatsApp), a entrada correspondente em `CARROS` no `js/main.js` e as 5 imagens em
`assets/img/carros/`.

Depois de publicar:
- Trocar `og:image` para URL absoluta (ex.: `https://dominio/assets/img/og-image.jpg`). O WhatsApp
  só mostra a prévia com URL absoluta.
- `canonical` e JSON-LD apontam para https://seminovosvipcar.com.br/. Ajustar se o site for
  publicado em outro domínio.

## Verificação feita

- Servido com `python3 -m http.server` e testado com Playwright em 1440x900 e 390x844.
- Sem erro de console do site e nenhuma imagem quebrada. Sem rolagem horizontal no celular
  (scrollWidth = 390). Também abre direto pelo `index.html` (file://) sem erro.
- Testados: busca, marca, faixa de preço, categoria, ordenação, "Ver todos", estado vazio,
  galeria (abrir, avançar, Esc), "Simular parcela" do card, simulador (prazo/entrada) e link do
  WhatsApp com a simulação, links "Tenho interesse" com o carro e o preço, menu do celular.
- Mapa do Google carregando com o pino no endereço. O único erro durante os testes foi um tile
  do mapa que o proxy deste ambiente devolveu com 502, sem relação com o site.
- Imagens em WebP, hero com preload e `fetchpriority="high"`, o resto com `loading="lazy"`.
  JSON-LD `AutoDealer` com nota e avaliações, Open Graph com imagem 1200x630.
