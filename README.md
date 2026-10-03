# ScrapperLeads

Ferramenta para buscar leads no Google Maps: você diz **o que** vende e **onde**, e ela devolve
uma planilha com nome, telefone, WhatsApp, e-mail, site, categoria, endereço, nota e número de
avaliações (e, se quiser, Instagram, Facebook e LinkedIn).

Roda **na sua máquina**, com Docker. É baseada no
[Google Maps Scraper Kit](https://github.com/Mahanaicoach/google-maps-scraper-kit) e no motor
[gosom/google-maps-scraper](https://github.com/gosom/google-maps-scraper), ambos com licença MIT
(veja [CREDITS.md](CREDITS.md)).

## Antes de começar

- **Docker Desktop** instalado e aberto (espere ficar verde): https://www.docker.com/products/docker-desktop
- **Python 3** (no Mac já vem; no Windows: https://www.python.org/downloads/, use `py` no lugar de `python3`)
- **Terminal**: no Mac é o Terminal, no Windows é o PowerShell.

## Passo a passo

### 1. Baixe o projeto
```bash
git clone https://github.com/DiogoDiasAlves/ScrapperLeads.git
cd ScrapperLeads
```

### 2. Suba o scraper
```bash
docker compose up -d
```
Na primeira vez ele baixa a imagem (algumas centenas de MB).

> **Mac M1/M2/M3:** se o container não subir, descomente a linha `platform: linux/amd64` no
> `docker-compose.yml` e rode de novo.

### 3. Confira se está de pé
```bash
curl http://localhost:8080/api/v1/jobs
```
A resposta esperada é `[]` ou `null`: o scraper está rodando e ainda não tem busca nenhuma.
Se der erro de porta ocupada, é outro programa usando a 8080.

Também dá para abrir http://localhost:8080 no navegador.

### 4. Rode a primeira busca
```bash
python3 scripts/scrape.py "dentistas em São Paulo SP" --city "São Paulo, SP" --depth 5
```

Troque pelo seu nicho: academias em Belo Horizonte, pet shop em Natal, escritório de advocacia em
Curitiba… Coloque a cidade dentro da busca **e** no `--city`.

### 5. O que volta
Um arquivo `.csv` na pasta `leads/`, que abre no Excel, Numbers ou Google Planilhas, com as colunas:

| coluna | o que é |
|---|---|
| `nome` | nome do negócio |
| `telefone` | telefone do Google Maps |
| `whatsapp` | link `wa.me` pronto, quando o telefone é celular |
| `email` | e-mails achados no site do negócio |
| `site` | site |
| `categoria` | categoria no Maps |
| `endereco` | endereço |
| `nota` / `avaliacoes` | nota média e número de avaliações |
| `instagram` / `facebook` / `linkedin` | só com `--socials` |

Os negócios repetidos já saem removidos.

## Opções úteis

| opção | o que faz |
|---|---|
| `--depth 5` | profundidade (quanto rola a lista do Maps). Comece com 5. |
| `--socials` | entra no site de cada negócio atrás de Instagram/Facebook/LinkedIn (mais lento) |
| `--no-email` | não procura e-mail (bem mais rápido) |
| `--keywords-file arquivo.txt` | várias buscas num job só (uma por linha), veja `examples/buscas.exemplo.txt` |
| `--radius 10000` | raio em metros em volta da cidade |
| `--sep ","` | CSV com vírgula (o padrão é `;`, que o Excel em português abre certinho) |
| `--json` | salva JSON em vez de CSV |
| `--full` | mantém todas as 34 colunas brutas do scraper |
| `--proxy socks5://user:senha@host:porta` | usa proxy (pode repetir); ajuda em buscas grandes |

Várias buscas de uma vez:
```bash
python3 scripts/scrape.py --keywords-file examples/buscas.exemplo.txt --city "Curitiba, PR"
```

## Com o Claude Code

Abra a pasta no Claude Code e peça em português, por exemplo:
*"sobe o scraper e me traz os dentistas de São Paulo com telefone e site"*.
O Claude lê este README e roda o `scripts/scrape.py` com as opções certas.

## Use com cabeça

- **Uma busca por vez.** Comece com profundidade 5. Rodar muita coisa junto faz o Google limitar o seu
  IP por algumas horas (os jobs voltam vazios ou falham). Passa sozinho, mas atrapalha. Para buscas
  grandes ou repetidas, use `--proxy`.
- **E-mail deixa mais lento.** Para achar e-mail ele visita o site de cada negócio. Se quiser
  velocidade, rode com `--no-email`.
- **Dado de pessoa é dado de pessoa.** Telefone e e-mail de empresa são para você entrar em contato,
  não para revender lista. Respeite a LGPD e o descadastro de quem pedir. Fazer scraping do Google
  Maps vai contra os Termos do Google: mantenha volume moderado.
- O scraper só escuta em `127.0.0.1` (não tem senha). Não exponha a porta 8080 para a internet.
- A pasta `leads/` e os `.csv` ficam fora do git, porque têm dados de contato.

## Problemas comuns

| sintoma | o que fazer |
|---|---|
| `Scraper fora do ar` | rode `docker compose up -d` e espere uns 10 segundos |
| porta 8080 ocupada | feche o outro programa ou troque a porta no `docker-compose.yml` e no `.env` |
| `Não achei as coordenadas` | escreva a cidade como `"Cidade, UF"` ou passe lat/lon direto |
| job fica `working` muito tempo | baixe a profundidade, aumente `--max-time`, ou o IP pode estar limitado |
| CSV vazio | busca muito específica ou cidade errada: aumente `--radius` |
| job `failed` repetido | o Google pode estar limitando seu IP: espere algumas horas ou use proxy |

## Comandos do Docker

```bash
docker compose ps      # está rodando?
docker compose logs    # ver o que o scraper está fazendo
docker compose down    # desligar
```
