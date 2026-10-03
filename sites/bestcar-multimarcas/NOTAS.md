# BestCar Multimarcas: notas do site de demonstração

Seminovos em Criciúma/SC · Av. Luiz Lazzarin, 1650, Vila Floresta II · WhatsApp/fixo (48) 3478-7854
Pesquisa e montagem em 03/10/2026.

## Atenção: a loja já tem site

A planilha diz "só Linktree + Instagram, sem site", mas a loja tem o
**bestcarmultimarcas.com.br**, num template antigo da Simples Veículo. Quase tudo que é real neste
demo saiu de lá. O gancho de abordagem no fim deste arquivo já leva isso em conta.

## De onde veio cada coisa

| Item | Fonte | Real ou mock |
|---|---|---|
| Logo (branco e escuro, fundo transparente) | `logo_1784720170.jpeg` do site atual, recortado e convertido. O Linktree tem a mesma arte em 320 px | Real |
| Favicon (bandeira quadriculada) | Redesenhado a partir dos quadrados do logo | Derivado do logo |
| Cores | Preto, grafite e branco do logo e do Linktree (`#333030`). Verde só nos botões de WhatsApp | Real |
| Foto da fachada (hero, og:image) | Banner do site atual (`uploads/763/site/250/...`) | Real |
| Foto do showroom (Mustang GT) | Fundo do site atual (`media/img/content/bgs/bg_1784720170.jpeg`) | Real (o Mustang provavelmente já foi vendido; a foto está ali só como ambiente) |
| 24 carros: fotos, preço, ano, km, cor, opcionais e descrição | Anúncios do site atual (`/veiculos` e `/veiculo/<id>`), 4 fotos por carro | Real |
| WhatsApp 55 48 3478-7854 | Linktree (`wa.me/+554834787854`), site atual (`data-whatsnumber="554834787854"`) e letreiro da fachada (ícone do WhatsApp + 48 3478 7854) | Confirmado em 3 fontes. É o mesmo número do fixo (WhatsApp Business) |
| Nota 4,9 com 271 avaliações | Planilha. O mapa do Google embutido mostra o mesmo: 4.9 (271) | Real |
| "Vem, que aqui dá negócio!" e "especializada em veículos populares, antigos, luxuosos e esportivos" | Bio do Linktree | Real |
| 14 mil seguidores no Instagram | Prévia do perfil @bestcarmultimarcascriciuma (14K seguidores, 153 posts) | Real em 03/10/2026 |
| E-mail bestcarcriciuma@gmail.com | Página `/contato` do site atual | Real |
| "Próximo à lombada eletrônica" | Rodapé do site atual | Real |
| Horário: seg a sex 8h às 18h30, sáb 8h às 12h | Guias online (locaisdobrasil, que copia do Google) | **Confirmar com o dono** |
| Depoimentos (Rafael M., Juliana S., Anderson P.) | Escritos por nós | **MOCK: trocar por avaliações reais do Google antes de publicar** |
| Taxa do simulador (1,99% a.m.) | Referência nossa, com aviso de simulação | Mock com aviso |

Não usei nada do Instagram além do número de seguidores: o Instagram bloqueia a leitura dos posts
sem login. Não foi preciso, porque o site atual já tem fotos reais de todos os carros.

## Estoque

- O site atual tinha **28 anúncios** em 03/10/2026. Usei os **24 que têm foto**. Ficaram de fora,
  porque não têm foto: Renault Sandero Authentique 2018 (R$ 43.900), Sandero Stepway 2015 (R$ 45.900),
  Duster Oroch 2016 de repasse (R$ 59.900, "sem garantia e não aceita troca") e BMW X1 sDrive20i 2020
  (R$ 139.900).
- Os nomes foram reescritos para ficarem legíveis e fáceis de achar no Google. Exemplo:
  "320iA Modern/Sport TB 2.0/A.Flex/GP 4p" virou "BMW 320i · Sport 2.0 Turbo Flex". Preço, km, ano e
  cor estão iguais aos dos anúncios.
- O anúncio mostra só um ano (provavelmente o ano-modelo). O site mostra esse ano.
- Selos: "Único dono" vem do anúncio, "IPVA 2026 pago" vem da descrição do anúncio e "Baixa km" é
  critério nosso (até 40 mil km). A classificação SUV, picape, sedã e hatch também é nossa.
- O estoque é uma foto do dia 03/10/2026. Antes de mandar o link, vale conferir se algum carro já
  foi vendido. O texto do hero ("Do Kwid 2025 à Hilux SW4 Diamond") cita carros do estoque.
- Para atualizar: os cards estão no `index.html` (`<article class="carro">`). Os dados da ficha
  ficam no `<script id="dados-carros">` e os do Google no JSON-LD. Os três foram gerados juntos a partir
  da mesma lista.

## Confirmar com o dono

1. Horário de funcionamento.
2. CEP: o Google diz 88817-000 e o site atual diz 88817-045. O site novo usa 88817-000.
3. Facebook: o Linktree aponta para `facebook.com/people/BestCar-Multimarcas/100066829575404` e o site
   atual para outra página (`bestcarcriciuma-110970306925256`). Usei a do Linktree.
4. O letreiro da fachada mostra "@BESTCARCRICIUMA", mas o perfil ativo é @bestcarmultimarcascriciuma.
5. Depoimentos reais (os do site são mock).
6. Se trabalham com financiamento por banco e avaliação de usado na troca. O site atual fala em
   "compra, venda e troca" e tem link de "ficha cadastral", então o texto parte disso.
7. Se quer o CNPJ no rodapé. Os guias mostram 36.968.623/0001-08 (Moliner Galdino Comércio de Veículos
   Ltda), mas não conferimos e ele não está no site.

## Técnico

- HTML, CSS e JS puros, só com caminhos relativos. O site funciona abrindo o `index.html` direto.
- Fontes Saira (títulos, larga como o logo) e Inter (texto), do Google Fonts. Os arquivos woff2
  estão em `assets/fonts` com `font-display: swap`, então não há request externo.
- Imagens em WebP: cards em 720×540, fotos da ficha com até 600×800 e fachada em 1076 px. O hero tem
  preload e `fetchpriority="high"`. O resto usa lazy-load.
- Pasta com cerca de 3,6 MB sem `preview/` e 5,7 MB com.
- SEO: título e description com "seminovos em Criciúma"; Open Graph; JSON-LD `AutoDealer` com
  endereço, telefone, horário e nota 4.9 (271); `ItemList` com os 24 carros como `Car` + `Offer`
  (marca, modelo, versão, ano, km, câmbio, combustível, cor e preço). Cada carro tem título e `alt`
  descritivos e um link próprio (`index.html#carro-bmw-x4-2019` abre a ficha).
- **Ao publicar:** trocar `og:image` (e as imagens do JSON-LD) por URL absoluta do domínio final, porque
  a prévia do WhatsApp não funciona com caminho relativo. Também vale adicionar `<link rel="canonical">`.
- O "Tenho interesse" abre o WhatsApp com a mensagem pronta citando carro e preço. Quando o site
  está publicado em http(s), a mensagem também leva o link do carro.
- Simulador: tabela Price com 1,99% a.m. e prazos de 24 a 60x. O botão manda a simulação pelo
  WhatsApp. A ficha do carro tem o botão "Simular parcela", que preenche o simulador.
- Verificação feita com Playwright (1440×900 e 390×844): sem erro no console, sem imagem quebrada e
  sem rolagem horizontal. Filtros (busca, marca, preço, tipo, ordenação), ficha com galeria, simulador,
  menu mobile, links de WhatsApp e mapa foram testados. Prints em `preview/desktop.jpg` e
  `preview/mobile.jpg`.

## Gancho para abordagem

O site atual da BestCar é um template genérico, e os carros não aparecem no Google:

- Todas as páginas de carro têm o mesmo título ("BestCar Multimarcas - Criciúma/SC"), sem o modelo.
  Quem pesquisa "Hilux SW4 Diamond Criciúma" ou "Commander usado Criciúma" não acha a loja. No site
  novo, cada um dos 24 carros tem nome, versão, ano e preço no texto e nos dados estruturados do Google.
- O site é configurado para tela de 320 px (celular antigo) e a página inicial tem cerca de 700 KB
  só de HTML. O menu "Sobre" abre uma página vazia e o telefone aparece como "(48) 34787-854".
- O 4,9 com 271 avaliações, o maior trunfo da loja, não aparece em lugar nenhum do site atual. O
  Linktree, usado junto com o Instagram de 14 mil seguidores, nem tem link para o site.
- O site novo usa as fotos que eles já tiram no showroom com a parede da BestCar e a cara preta e
  branca da marca. Tem filtro por marca, preço e tipo, ficha com fotos, "Tenho interesse" que abre o
  WhatsApp com o carro escolhido e simulador de parcela.

Frase para o WhatsApp: *"Vi que os carros de vocês não aparecem quando alguém pesquisa o modelo no
Google, e o 4,9 com 271 avaliações nem aparece no site. Montei uma versão nova com o estoque de vocês
e o botão de WhatsApp em cada carro. Dá uma olhada no celular:"* (link)
