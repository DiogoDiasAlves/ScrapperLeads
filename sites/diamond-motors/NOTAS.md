# Diamond Motors Criciúma: notas do site demo

Site demo feito em 03/10/2026. É HTML, CSS e JS puro e abre direto pelo `index.html`.

## Atenção: a loja já tem site próprio

A planilha dizia que a loja não tinha domínio próprio, mas tem: **https://diamondcriciuma.com.br** (WordPress com tema
de concessionária e estoque puxado do sistema Boom Sistemas). Além dele, a loja tem a página no portal
**https://www.klebercarros.com/DIAMOND-MOTORS** e o Instagram **@diamondcriciuma**. Por isso o gancho de abordagem
lá embaixo trata das duas coisas: o portal e o site atual.

Prints do que existe hoje, para usar na abordagem:
- `preview/site-atual.jpg`: página da loja no portal Kleber Carros.
- `preview/site-atual-dominio.jpg`: site atual diamondcriciuma.com.br.

## De onde veio cada coisa

| Item | Origem | Real ou mock |
|---|---|---|
| Logo (diamante + DIAMOND MOTORS) | og:image da página no Kleber Carros (`fotog/57f34a543113c655.jpg`). É o mesmo logo do site próprio. Recortei, deixei o fundo transparente e fiz uma versão branca. | Real |
| Cores | Preto e branco do logo, com detalhes em prata. O verde aparece só nos botões de WhatsApp. | Real (identidade do logo) |
| Favicon | Diamante do próprio logo | Real |
| Estoque (35 veículos) | Página da loja no Kleber Carros (2 páginas de listagem e as 35 páginas individuais): modelo, versão, ano/modelo, km, cor, combustível, preço, descrição e opcionais | **Real**: 31 carros e 4 motos |
| Câmbio | Tirado do nome do anúncio ("Aut." = automático, "Mec." ou nada = manual; motos = manual) | Deduzido |
| Fotos dos veículos (4 por veículo) | 28 veículos com as fotos originais **sem marca d'água**, do sistema Boom que alimenta o site próprio. 5 veículos com fotos do portal Kleber Carros, **com a marca d'água do portal**: Gol 2022, Compass Limited, Sandero Life 2021, ASX 2015 preto e Airtrek. Em 2 veículos (Yaris XL Sedan 2023 e BMW F 850 GS) a foto principal é original e as outras vêm do portal. | Real |
| Foto do hero e imagem de compartilhamento | Range Rover Evoque do estoque, foto original | Real |
| Foto da fachada à noite | Site próprio (imagem enviada pelo WhatsApp em 18/08/2025) | Real |
| Fotos de "entregas recentes" | Site próprio (posts "Vendido para…": BMW X1 2021, Honda HR-V 2016 e HB20 2015) | Real |
| Nota 4,9 com 31 avaliações | Planilha. Conferi no Google Maps e bate. | Real |
| "+14 anos de mercado" e "+1.000 carros vendidos" | Bio do Instagram @diamondcriciuma. O Instagram bloqueou o acesso direto (429/login), então só vi o texto pelo resultado de busca. | Real, **confirmar** |
| Horário (seg a sex 8h30–18h30, sáb 8h30–13h) | Site próprio. O Google confirma a abertura às 8h30. | Real |
| Endereços (2 unidades) | Site próprio, portal e Google | Real (ver divergências) |
| Telefones | (48) 98842-7462 (planilha, Google e portal) e (48) 99191-1025 do Felipe (site próprio e bio do Instagram) | Real |
| E-mail | Planilha e portal | Real |
| Mapa | Google Maps embutido da ficha "Diamond Motors Criciúma" | Real |
| Simulação de financiamento | Calcula pela tabela Price com uma **taxa ilustrativa de 1,99% a.m.** que o visitante pode mudar. O aviso de que é só simulação aparece na tela. | Mock (cálculo) |
| Textos dos diferenciais e do "Sobre" | Escritos por mim a partir do "Compra · Vende · Troca · Financia" da fachada. Não citam garantia, banco parceiro nem número inventado. | Texto novo, sem fato inventado |
| Depoimentos | **Não usei depoimento escrito.** O Google Maps sem login não mostra as avaliações. Os dois depoimentos do site atual ("Marcos A." e "Paula S.") parecem texto de modelo, então também ficaram de fora. No lugar deles entraram a nota do Google e as fotos reais de entregas. | Nenhum mock |

Não usei o banner da fachada do site atual (`2026/09/87660c2a….png`). Ele parece uma imagem tratada ou gerada (os
carros estão deformados), e o padrão é não usar imagem gerada.

## Confirmar com o dono

1. Se os 35 veículos continuam disponíveis. O estoque foi copiado do portal em 03/10/2026. No site próprio, o Yaris XL
   Sedan 2023 e a BMW F 850 GS dão página 404 (podem ter sido vendidos). Já o site próprio ainda lista Picanto 2009,
   C3 2007 e 208 2015, que não aparecem no portal.
2. "+14 anos" e "+1.000 carros vendidos", que vieram da bio do Instagram.
3. Qual número deve receber o WhatsApp do site. Usei o **(48) 98842-7462** em todos os botões. O site atual usa o
   (48) 99191-1025 (Felipe) como principal, e a fachada mostra também (48) 99959-8014.
4. Endereço da 2ª unidade: o site próprio diz R. Mário Gregório dos Reis, **116**, e o portal diz R. Mario Gregorio,
   **120** (esquina com a Construtora Fontana). Usei 116, que é o número que aparece na grade numa das fotos.
5. CEP da R. Domênico Sônego, 320: o Google e a planilha dizem 88804-240, e o site próprio e o portal dizem 88804-050.
   No JSON-LD ficou 88804-240. Na tela não mostro CEP.
6. Pequenas diferenças entre o portal e o sistema Boom. No site ficaram os valores do portal:
   - Duster 2019/2020 (R$ 73.900): o portal chama de "Duster Expression" e o Boom de "**Duster Oroch** Expression".
     Usei Oroch, que é o que a foto mostra (picape).
   - Yaris XL 2024 (R$ 81.900): o portal diz "Sedan 4p" e o Boom diz "5p" (hatch). Usei a versão do Boom (hatch).
   - Km: Kwid (45.000 no portal, 40.000 no Boom, "44.000" na descrição), Spin (49.000 / 49.600), Compass Longitude
     (92.000 / 90.000), Sandero 2014 (120.000 / 121.000).
7. Se a loja trabalha com algum banco parceiro e qual taxa média quer mostrar no simulador.
8. Fotos originais sem marca d'água dos 5 veículos que vieram do portal. No site definitivo, todas as fotos devem ser
   as da loja.
9. Se pode mostrar o primeiro nome dos clientes nas fotos de entrega. Essas fotos já estão publicadas no site atual.

## Gancho para abordagem

**Portal Kleber Carros.** Quem procura "Diamond Motors" no Google cai no portal, porque o site cadastrado na ficha do
Google Maps é o klebercarros.com. Lá o estoque aparece dentro do layout do portal, com a marca Kleber Carros no topo,
marca d'água do portal nas fotos e uma coluna lateral com banners de mais de 50 lojas concorrentes ("Clique nas lojas
abaixo para ver seu estoque"). O cliente que veio atrás da Diamond recebe a vitrine dos concorrentes. Num site
próprio só aparecem os carros da Diamond, a marca é a da Diamond e cada botão leva direto ao WhatsApp da loja.

**Site atual (diamondcriciuma.com.br).** Ele existe, mas tem cara de modelo pronto que não foi terminado:
- Sobrou texto de modelo em inglês ("Hello world!", "Request car price", "Schedule a Test Drive", "Trade in") e um
  contador "+ Years" sem número.
- A foto do Compass Limited está quebrada no estoque.
- O estoque está fora de sincronia com o portal: 3 veículos dão página 404 e faltam os mais novos (Gol 2022, Sandero
  Life, ASX, Airtrek).
- O SEO é fraco: não tem meta description, o título é "DIAMOND MOTORS CRICIÚMA -" e não há imagem de prévia para o
  WhatsApp.
- O banner principal é um PNG de 1,9 MB, que pesa no 4G.
- Não tem filtro por marca ou preço, nem simulador, e não mostra a nota 4,9 do Google.

**O que a demo entrega.** Abre rápido no celular, fala "seminovos em Criciúma" no Google, mostra a nota 4,9, deixa
filtrar por marca, preço e tipo, abre a ficha de cada carro com fotos e opcionais, manda a mensagem pronta citando o
carro no WhatsApp e tem um simulador de parcela que já envia a simulação para a loja.

Sugestão de mensagem: *"Felipe, montei uma versão nova do site da Diamond com os 35 carros que estão no Kleber Carros,
com as fotos de vocês, a nota 4,9 do Google e o botão de WhatsApp em cada carro. Hoje o Google manda o cliente para o
portal, onde aparecem os banners de mais de 50 outras lojas. Dá uma olhada no celular: [link]"*

## Técnico

- Estrutura: `index.html`, `css/style.css`, `js/main.js`, `assets/img/` (WebP), `preview/`.
- Fontes: Outfit (títulos) e Manrope (texto), do Google Fonts com `display=swap`.
- **Atualizar o estoque:** edite o array `ESTOQUE` no topo de `js/main.js`, com um objeto por veículo. As fotos ficam em
  `assets/img/estoque/<código-em-minúsculas>-1.webp` até `-4.webp`. A foto 1 tem 720×540 e as outras 560×420.
- A ordem "Destaques" do estoque fica no array `DESTAQUES` em `js/main.js`.
- Link direto para um carro: `index.html#veiculo-K340986` abre a ficha do carro.
- Ao publicar, troque `og:image` (e `image` e `logo` no JSON-LD) pela **URL absoluta** do domínio. O WhatsApp só monta a
  prévia com URL absoluta.
- Tamanho da pasta: cerca de 7,7 MB, sendo 4,3 MB das fotos do estoque e 2,8 MB dos prints em `preview/`. A página em si
  carrega cerca de 0,5 MB antes de rolar, porque as fotos do estoque usam lazy-load.
- Verificado com Playwright em 1440×900 e 390×844 (e também 360, 768 e 1024): sem erro no console, sem imagem quebrada,
  sem rolagem horizontal. Filtros, ficha do veículo, simulador, menu do celular, links de WhatsApp e mapa funcionando.
  O site também abre direto pelo `file://`.
- Nos prints de página inteira, o Chromium não desenha o iframe do mapa. Por isso o mapa dos arquivos em `preview/`
  foi capturado com ele visível na tela e colado no lugar. No navegador o mapa carrega normalmente.

## Reaproveitar para a Motor Premium SC

O mesmo dono (mesmo e-mail) tem a Motor Premium SC (http://klebercarros.com/MotorPremium). Dá para reaproveitar esta
estrutura inteira (HTML, CSS, JS, filtro, ficha, simulador e o processo de raspar o portal e as páginas individuais).
Basta trocar o logo, as cores (variáveis no topo do `style.css`), o array `ESTOQUE`, os contatos e os endereços. Quem
está fazendo essa loja é o sócio do Diogo. Mandar as duas juntas pode ser um bom argumento ("um site para cada loja").
