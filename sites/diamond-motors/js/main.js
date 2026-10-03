/* Diamond Motors Criciúma — estoque real (fonte: klebercarros.com/DIAMOND-MOTORS, outubro/2026) e interações do site. */

const ESTOQUE = [
  {"id": "K345003", "marca": "MXF", "modelo": "270 FI", "versao": "Moto 270cc", "cat": "moto", "ano": "2026/2026", "km": 200, "cambio": "Manual", "comb": "Gasolina", "cor": "Vermelho", "preco": 25900, "desc": "MXF 270 FI! Suspensão invertida, manete retrátil, protetor quadro, protetor cárter, faróis led, sinaleira led, painel digital, rodas exccel Dino.", "opc": [], "fotos": 4},
  {"id": "K340008", "marca": "Chevrolet", "modelo": "Spin Premier", "versao": "1.8 Econo.Flex 5p Aut.", "cat": "minivan", "ano": "2024/2025", "km": 49000, "cambio": "Automático", "comb": "Flex", "cor": "Branco", "preco": 111900, "desc": "Spin Premier 1.8 Aut! Versão top de linha, ar condicionado digital, airbag frontal e lateral, alerta de colisão e ponto cego, bancos em couro, central multimídia Mylink e Apple CarPlay, câmera de ré, piloto automático, rodas de liga aro 16, sensor de estacionamento, 7 lugares.", "opc": ["ABS", "Airbag", "Alarme", "Alerta de ponto cego", "Ar-condicionado", "Ar-condicionado digital", "Bancos de couro", "Câmera de ré", "Central multimídia", "Chave cópia", "Chave presencial", "Computador de bordo", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Sensor de estacionamento", "Sensor de estacionamento dianteiro", "Start/Stop", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K342024", "marca": "Toyota", "modelo": "Yaris XL", "versao": "1.5 Flex 16V 5p Aut.", "cat": "hatch", "ano": "2024/2024", "km": 75000, "cambio": "Automático", "comb": "Flex", "cor": "Branco", "preco": 81900, "desc": "Yaris XL 1.5 Aut! Ar condicionado digital, airbag, central multimídia com bluetooth, controle de som no volante, controle de tração, direção elétrica, modos de direção, retrovisores elétricos, vidros e travas elétricas.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Ar-condicionado digital", "Ar quente", "Central multimídia", "Direção elétrica", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K344391", "marca": "Renault", "modelo": "Kwid Outsider", "versao": "1.0 Flex 12V 5p Mec.", "cat": "hatch", "ano": "2023/2024", "km": 45000, "cambio": "Manual", "comb": "Flex", "cor": "Preto", "preco": 55900, "desc": "Apenas 44.000 km, único dono, todas as revisões efetuadas na concessionária, retirado zero em Criciúma. Top de linha, ar condicionado, airbag, abs, central multimídia, direção elétrica, vidros elétricos, rodas de liga.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar quente", "Câmera de ré", "Central multimídia", "Chave cópia", "Computador de bordo", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K340152", "marca": "Toyota", "modelo": "Yaris XL Sedan", "versao": "1.5 Flex 16V 4p Aut.", "cat": "seda", "ano": "2022/2023", "km": 74000, "cambio": "Automático", "comb": "Flex", "cor": "Branco", "preco": 79900, "desc": "Yaris Sedan XL 1.5 Aut! Ar condicionado, airbag, bancos em couro, central multimídia, controle de som no volante, direção elétrica, rodas de liga leve, vidros e travas elétricas.", "opc": ["Airbag", "Ar-condicionado", "Bancos de couro", "Central multimídia", "Computador de bordo", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K346008", "marca": "Volkswagen", "modelo": "Gol MSI", "versao": "1.6 Flex 8V 5p Mec.", "cat": "hatch", "ano": "2021/2022", "km": 78000, "cambio": "Manual", "comb": "Flex", "cor": "Branco", "preco": 57900, "desc": "Gol 1.6 Mec! Apenas 78.000 km, ar condicionado, airbag, direção hidráulica, som original de fábrica, vidros elétricos.", "opc": ["Airbag", "Ar-condicionado", "Direção hidráulica", "Vidros elétricos"], "fotos": 4},
  {"id": "K343866", "marca": "Jeep", "modelo": "Compass Limited", "versao": "2.0 4x4 Diesel 16V Aut.", "cat": "suv", "ano": "2020/2021", "km": 98000, "cambio": "Automático", "comb": "Diesel", "cor": "Branco", "preco": 109900, "desc": "Compass Limited 2.0 4x4 Diesel! Apenas 98.000 km, ar condicionado digital dual zone, airbag frontal e lateral, bancos em couro com ajuste elétrico, central multimídia, direção elétrica, piloto automático, sensor de estacionamento frontal e traseiro, vidros e travas elétricas. Revisada, manual e chave cópia, emplacada 2026.", "opc": ["Tração 4x4", "ABS", "Airbag", "Airbag lateral", "Airbag lateral dianteiro", "Airbag lateral traseiro", "Alarme", "Ar-condicionado", "Ar-condicionado dual zone", "Ar quente", "Banco elétrico", "Bancos de couro", "Câmera de ré", "Central multimídia", "Chave presencial", "Computador de bordo", "Controle de som no volante", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Sensor de estacionamento", "Sensor de estacionamento dianteiro", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K345619", "marca": "Yamaha", "modelo": "Fazer FZ25", "versao": "250cc Flex", "cat": "moto", "ano": "2020/2021", "km": 40000, "cambio": "Manual", "comb": "Flex", "cor": "Azul", "preco": 20900, "desc": "Fazer 250cc! Farol de led, freio a disco nas 2 rodas, óleo e filtro trocado, protetor de tanque, partida elétrica.", "opc": [], "fotos": 4},
  {"id": "K345901", "marca": "Renault", "modelo": "Sandero Life", "versao": "1.0 Flex 12V 5p Mec.", "cat": "hatch", "ano": "2020/2021", "km": 90000, "cambio": "Manual", "comb": "Flex", "cor": "Prata", "preco": 39900, "desc": "Sandero Life 1.0 Mec! Repasse, ar condicionado, airbag, central multimídia, direção hidráulica, vidros e travas elétricas.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar quente", "Central multimídia", "Direção hidráulica", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K343930", "marca": "Honda", "modelo": "Civic EXL", "versao": "2.0 Flex 16V Aut. 4p", "cat": "seda", "ano": "2020/2020", "km": 66000, "cambio": "Automático", "comb": "Flex", "cor": "Azul", "preco": 114900, "desc": "Civic EXL 2.0 Aut! Versão top de linha, apenas 66.000 km, ar condicionado digital dual zone, airbag frontal e lateral, bancos em couro, chave de presença, câmbio borboleta, central multimídia com câmera de ré e GPS integrado e sistema Bluetooth, controle de som no volante, piloto automático, sensor de estacionamento.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar-condicionado dual zone", "Ar quente", "Bancos de couro", "Câmera de ré", "Central multimídia", "Chave presencial", "Computador de bordo", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Sensor de estacionamento", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K340986", "marca": "Land Rover", "modelo": "Range Rover Evoque", "versao": "SE Si4 R-Dynamic 2.0 Aut.", "cat": "suv", "ano": "2019/2020", "km": 49000, "cambio": "Automático", "comb": "Flex", "cor": "Preto", "preco": 199900, "desc": "Evoque SE Dyn 2.0 Turbo Aut! Apenas 49.000 km, ar condicionado digital dual zone, alerta de colisão e ponto cego, bancos em couro com ajuste elétrico, central multimídia com câmera de ré e gps, controle de tração, piloto automático, rodas de liga aro 20, sensor de estacionamento frontal e traseiro, teto solar panorâmico.", "opc": ["ABS", "Airbag", "Airbag duplo", "Alarme", "Ar-condicionado", "Ar-condicionado dual zone", "Ar quente", "Banco elétrico", "Bancos de couro", "Câmera de ré", "Central multimídia", "Chave presencial", "Computador de bordo", "Controle de som no volante", "Controle de tração", "Direção elétrica", "Piloto automático", "Retrovisor elétrico", "Rodas de liga leve", "Sensor de estacionamento", "Start/Stop", "Teto solar", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K343776", "marca": "Renault", "modelo": "Duster Oroch Expression", "versao": "1.6 Flex 16V Mec.", "cat": "picape", "ano": "2019/2020", "km": 95000, "cambio": "Manual", "comb": "Flex", "cor": "Branco", "preco": 73900, "desc": "Carro impecável! Ar condicionado, airbag, direção hidráulica, vidros e travas elétricas. Retirado zero em SC, 4 pneus novos.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Direção hidráulica", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K345274", "marca": "Renault", "modelo": "Captur Intense", "versao": "2.0 Flex 16V 5p Aut.", "cat": "suv", "ano": "2019/2020", "km": 99000, "cambio": "Automático", "comb": "Flex", "cor": "Prata", "preco": 71900, "desc": "Captur Intense 2.0 Aut! Versão top de linha, apenas 99.000 km, possui manual, chave cópia, 4 pneus novos, ar condicionado digital, airbag, chave de presença, central multimídia com câmera de ré e Bluetooth, controle de som no volante, direção elétrica, rodas de liga leve, sensor de estacionamento, vidros e travas elétricas.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Ar-condicionado digital", "Bancos de couro", "Central multimídia", "Chave cópia", "Chave presencial", "Computador de bordo", "Direção elétrica", "Rodas de liga leve", "Sensor de estacionamento", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K338641", "marca": "Renault", "modelo": "Duster Expression", "versao": "1.6 Flex 16V Aut.", "cat": "suv", "ano": "2018/2019", "km": 108000, "cambio": "Automático", "comb": "Flex", "cor": "Prata", "preco": 64900, "desc": "Carro impecável! Ar condicionado, airbag, direção hidráulica, rodas de liga, vidros e travas elétricas.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Direção hidráulica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K338303", "marca": "BMW", "modelo": "F 850 GS", "versao": "Adventure Premium", "cat": "moto", "ano": "2019/2019", "km": 35000, "cambio": "Manual", "comb": "Gasolina", "cor": "Cinza", "preco": 54900, "desc": "F 850 GS Adventure Premium! Apenas 35.000 km, aquecedor de punho, freios abs, piloto automático. Toda revisada na concessionária.", "opc": [], "fotos": 4},
  {"id": "K345170", "marca": "BMW", "modelo": "X1 xDrive25i Sport", "versao": "2.0 Turbo Flex Aut.", "cat": "suv", "ano": "2019/2019", "km": 99000, "cambio": "Automático", "comb": "Flex", "cor": "Cinza", "preco": 125900, "desc": "X1 XDrive 25i Sport, motor 2.0 turbo! Versão top de linha, interior gelo com apenas 99.000 km, ar condicionado digital dual zone, airbag frontal, lateral, cortina, bancos em couro com ajuste elétrico e memória, câmbio borboleta de 8 velocidades, central multimídia com bluetooth, GPS, câmera de ré, modos de direção, chave de presença, teto solar elétrico panorâmico, rodas de liga aro 19, sensor de estacionamento.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar-condicionado dual zone", "Câmera de ré", "Central multimídia", "Chave presencial", "Computador de bordo", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Sensor de estacionamento", "Start/Stop", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K344026", "marca": "Lifan", "modelo": "X60 VIP", "versao": "1.8 16V 5p Aut.", "cat": "suv", "ano": "2017/2018", "km": 111000, "cambio": "Automático", "comb": "Gasolina", "cor": "Cinza", "preco": 49900, "desc": "X60 VIP 1.8 Aut! Apenas 111.000 km, ar condicionado, airbag, bancos em couro, central multimídia com câmera de ré, direção elétrica, rodas de liga leve, sensor de estacionamento, vidros e travas elétricas.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar quente", "Bancos de couro", "Câmera de ré", "Central multimídia", "Computador de bordo", "Controle de som no volante", "Direção elétrica", "Rodas de liga leve", "Sensor de estacionamento", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K341535", "marca": "Jeep", "modelo": "Renegade Sport", "versao": "2.0 4x4 Turbodiesel Aut.", "cat": "suv", "ano": "2017/2017", "km": 129000, "cambio": "Automático", "comb": "Diesel", "cor": "Branco", "preco": 69900, "desc": "Renegade Sport TB 4x4 Diesel! Airbag, ar condicionado, câmera de ré, computador de bordo, controle de tração, controle de som no volante, direção elétrica, piloto automático, retrovisor elétrico, rodas de liga leve, turbo, vidros e travas elétricas. Emplacada 2026, 4 pneus zero, corrêa dentada trocada recente.", "opc": ["Tração 4x4", "ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar quente", "Banco bipartido", "Câmera de ré", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K338543", "marca": "Chevrolet", "modelo": "Cruze LTZ", "versao": "1.4 Turbo Flex 4p Aut.", "cat": "seda", "ano": "2016/2017", "km": 115000, "cambio": "Automático", "comb": "Flex", "cor": "Preto", "preco": 79900, "desc": "Cruze LTZ 1.4 Turbo Aut. Versão top de linha, veículo impecável, ar condicionado digital, bancos em couro, botão start/stop, chave de presença, central multimídia com gps e câmera de ré, controle de som no volante, direção elétrica, piloto automático, rodas de liga, sensor de estacionamento, vidros e travas elétricas.", "opc": ["Ar-condicionado digital", "Bancos de couro", "Câmera de ré", "Central multimídia", "Chave presencial", "Computador de bordo", "Controle de som no volante", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Sensor de estacionamento", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K345241", "marca": "Renault", "modelo": "Duster Dakar", "versao": "2.0 Hi-Flex 16V 4x2 Aut.", "cat": "suv", "ano": "2017/2017", "km": 148000, "cambio": "Automático", "comb": "Flex", "cor": "Prata", "preco": 63900, "desc": "Duster Dakar 4x2 2.0 Aut! Ar condicionado, airbag, central multimídia com câmera de ré e GPS, controle de som no volante, direção elétrica, rodas de liga, sensor de estacionamento, vidros e travas elétricas.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Ar quente", "Câmera de ré", "Central multimídia", "Computador de bordo", "Controle de som no volante", "Direção elétrica", "Rodas de liga leve", "Sensor de estacionamento", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K338587", "marca": "Jeep", "modelo": "Compass Longitude", "versao": "2.0 Flex 16V 4x2 Aut.", "cat": "suv", "ano": "2017/2017", "km": 92000, "cambio": "Automático", "comb": "Flex", "cor": "Cinza", "preco": 79900, "desc": "Compass Longitude 2.0 4x2 Aut! Apenas 90.000 km, ar condicionado digital dual zone, bancos em couro, central multimídia com Apple Car play e câmera de ré, controle de tração, chave de presença, piloto automático, rodas de liga, sensor de estacionamento.", "opc": ["Ar-condicionado dual zone", "Bancos de couro", "Câmera de ré", "Central multimídia", "Chave presencial", "Computador de bordo", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Sensor de estacionamento", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K343712", "marca": "Chevrolet", "modelo": "Onix LTZ", "versao": "1.4 FlexPower 5p Mec.", "cat": "hatch", "ano": "2015/2016", "km": 100000, "cambio": "Manual", "comb": "Flex", "cor": "Branco", "preco": 54900, "desc": "Onix LTZ 1.4 Mec! Versão top de linha com apenas 100.000 km, ar condicionado, airbag, controle de som no volante, central multimídia MyLink, direção elétrica, rodas de liga leve, vidros e travas elétricas.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Central multimídia", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K342128", "marca": "Nissan", "modelo": "Sentra SL", "versao": "2.0 Flex Fuel 16V Aut.", "cat": "seda", "ano": "2015/2016", "km": 120000, "cambio": "Automático", "comb": "Flex", "cor": "Preto", "preco": 60900, "desc": "Sentra SL 2.0 Aut! Versão top de linha com apenas 120.000 km, ar condicionado digital dual zone, airbag, bancos em couro, botão start/stop, central multimídia com Bluetooth e câmera de ré, direção elétrica, rodas de liga leve, teto solar, vidros e travas elétricas.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar-condicionado dual zone", "Bancos de couro", "Câmera de ré", "Central multimídia", "Chave cópia", "Chave presencial", "Computador de bordo", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K345650", "marca": "Renault", "modelo": "Sandero Expression", "versao": "1.0 Hi-Power 16V 5p Mec.", "cat": "hatch", "ano": "2015/2016", "km": 124000, "cambio": "Manual", "comb": "Flex", "cor": "Preto", "preco": 37900, "desc": "Carro impecável! Ar condicionado, airbag, central multimídia, direção hidráulica, vidros e travas elétricas.", "opc": ["Ar-condicionado", "Central multimídia", "Direção hidráulica", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K337179", "marca": "Mitsubishi", "modelo": "ASX", "versao": "2.0 16V 160cv Aut.", "cat": "suv", "ano": "2014/2015", "km": 130000, "cambio": "Automático", "comb": "Gasolina", "cor": "Preto", "preco": 63900, "desc": "Carro impecável! Ar condicionado, airbag, bancos em couro, central multimídia com bluetooth e câmera de ré, direção elétrica, rodas de liga leve aro 18, sensor de estacionamento, vidros e travas elétricas.", "opc": ["ABS", "Airbag", "Ar-condicionado", "Bancos de couro", "Central multimídia", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K337941", "marca": "Mitsubishi", "modelo": "ASX 4x4", "versao": "2.0 16V 160cv Aut.", "cat": "suv", "ano": "2014/2015", "km": 120000, "cambio": "Automático", "comb": "Gasolina", "cor": "Prata", "preco": 74900, "desc": "ASX 2.0 4X4 Aut! Ar condicionado, airbag, bancos em couro, central multimídia, chave de presença, direção elétrica, rodas de liga leve, vidros e travas elétricas.", "opc": ["Tração 4x4", "ABS", "Airbag", "Ar-condicionado", "Central multimídia", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K344571", "marca": "Mitsubishi", "modelo": "ASX 4x4", "versao": "2.0 16V 160cv Aut.", "cat": "suv", "ano": "2014/2015", "km": 135000, "cambio": "Automático", "comb": "Gasolina", "cor": "Preto", "preco": 71900, "desc": "ASX 2.0 4x4 Aut! Kit premium, ar condicionado, airbag frontal e lateral, bancos em couro com ajuste elétrico, controle de tração, câmbio borboleta CVC de 6 velocidades, central multimídia, piloto automático, rodas de liga aro 19, vidros e travas elétricas.", "opc": ["Tração 4x4", "ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar quente", "Câmera de ré", "Central multimídia", "Chave presencial", "Computador de bordo", "Controle de som no volante", "Direção elétrica", "Piloto automático", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K343979", "marca": "Hyundai", "modelo": "HB20 Comfort", "versao": "1.0 Flex 12V 5p Mec.", "cat": "hatch", "ano": "2013/2014", "km": 140000, "cambio": "Manual", "comb": "Flex", "cor": "Branco", "preco": 41900, "desc": "Carro impecável! Ar condicionado, airbag, computador de bordo, direção hidráulica, rodas de liga leve, vidros e travas elétricas.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Ar quente", "Computador de bordo", "Direção hidráulica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K340082", "marca": "Renault", "modelo": "Sandero Expression", "versao": "1.0 Hi-Flex 16V 5p Mec.", "cat": "hatch", "ano": "2013/2014", "km": 120000, "cambio": "Manual", "comb": "Flex", "cor": "Prata", "preco": 32900, "desc": "Carro impecável! Apenas 120.000 km, ar condicionado, airbag, controle de som no volante, direção hidráulica, vidros e travas elétricas.", "opc": ["Ar-condicionado", "Direção hidráulica", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K345865", "marca": "Honda", "modelo": "Civic LXR", "versao": "2.0 FlexOne 16V Aut. 4p", "cat": "seda", "ano": "2013/2014", "km": 112000, "cambio": "Automático", "comb": "Flex", "cor": "Branco", "preco": 69900, "desc": "Civic LXR 2.0 Aut! Apenas 112.000 km, placa M, manual e chave cópia, ar condicionado digital, bancos em couro, central multimídia, câmbio borboleta, controle de som no volante, modos de direção, piloto automático, rodas de liga, sensor de estacionamento.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado", "Ar-condicionado digital", "Central multimídia", "Chave cópia", "Computador de bordo", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K340072", "marca": "Hyundai", "modelo": "Sonata", "versao": "2.4 16V 182cv 4p Aut.", "cat": "seda", "ano": "2012/2013", "km": 120000, "cambio": "Automático", "comb": "Gasolina", "cor": "Prata", "preco": 64900, "desc": "Sonata 2.4 Aut! Apenas 120 mil km, versão top de linha, teto solar panorâmico elétrico, câmbio automático, ar digital, chave de presença, botão start/stop, air bags frontais e laterais, controles de som no volante, bancos em couro com ajuste elétrico e aquecimento, rodas de liga leve aro 18, farois de neblina.", "opc": ["ABS", "Airbag", "Ar-condicionado", "Câmera de ré", "Computador de bordo", "Direção elétrica", "Rodas de liga leve", "Sensor de estacionamento", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K344643", "marca": "Citroën", "modelo": "C3 Exclusive", "versao": "1.6 VTi Flex Start 5p Aut.", "cat": "hatch", "ano": "2012/2013", "km": 81000, "cambio": "Automático", "comb": "Flex", "cor": "Cinza", "preco": 39900, "desc": "C3 Exclusive 1.6 Aut! Versão top de linha, apenas 81.000 km, ar condicionado digital, airbag, controle de som no volante, direção elétrica, rodas de liga leve, teto solar zenith, vidros e travas elétricas.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Ar-condicionado digital", "Direção elétrica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K345419", "marca": "Honda", "modelo": "Civic EXS", "versao": "1.8 Flex 16V Aut. 4p", "cat": "seda", "ano": "2012/2012", "km": 124000, "cambio": "Automático", "comb": "Flex", "cor": "Prata", "preco": 71900, "desc": "Civic EXS 1.8 Aut! Versão top de linha, teto solar, ar condicionado digital, bancos em couro, câmbio borboleta, central multimídia com bluetooth e câmera de ré, controle de tração, controle de som no volante, modo de direção, rodas de liga leve.", "opc": ["ABS", "Airbag", "Alarme", "Ar-condicionado digital", "Ar quente", "Bancos de couro", "Câmera de ré", "Central multimídia", "Computador de bordo", "Controle de som no volante", "Controle de tração", "Direção hidráulica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4},
  {"id": "K344744", "marca": "Honda", "modelo": "CG 125 Cargo", "versao": "125cc", "cat": "moto", "ano": "2009/2009", "km": 30000, "cambio": "Manual", "comb": "Gasolina", "cor": "Branco", "preco": 7500, "desc": "", "opc": [], "fotos": 4},
  {"id": "K345169", "marca": "Mitsubishi", "modelo": "Airtrek", "versao": "2.4 16V 4x4 5p Aut.", "cat": "suv", "ano": "2007/2007", "km": 150000, "cambio": "Automático", "comb": "Gasolina", "cor": "Preto", "preco": 32900, "desc": "Carro impecável! Ar condicionado, airbag, direção hidráulica, tração 4x4, vidros e travas elétricas.", "opc": ["Airbag", "Alarme", "Ar-condicionado", "Direção hidráulica", "Rodas de liga leve", "Trava elétrica", "Vidros elétricos"], "fotos": 4}
];

/* ===== Configuração ===== */
const WHATS = '5548988427462';
const POR_PAGINA = 12;
const CAT_ROTULO = { suv: 'SUV', seda: 'Sedã', hatch: 'Hatch', picape: 'Picape', minivan: 'Minivan', moto: 'Moto' };
// Ordem de "Destaques" (o restante segue do mais novo para o mais antigo)
const DESTAQUES = ['K340986', 'K345170', 'K343930', 'K340008', 'K343866', 'K342024', 'K338587', 'K340152', 'K338543', 'K341535', 'K345274', 'K344391'];

/* ===== Utilidades ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const brl = n => 'R$ ' + Math.round(n).toLocaleString('pt-BR');
const kmFmt = n => n.toLocaleString('pt-BR') + ' km';
const semAcento = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const waLink = msg => 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(msg);
const foto = (id, i) => 'assets/img/estoque/' + id.toLowerCase() + '-' + i + '.webp';
const nomeCompleto = c => `${c.marca} ${c.modelo}`;
const anoModelo = c => c.ano.split('/')[1];
const msgCarro = c => `Olá, Diamond Motors! Tenho interesse no ${nomeCompleto(c)} ${c.versao} ${c.ano}, ${kmFmt(c.km)}, anunciado por ${brl(c.preco)} (cód. ${c.id}). Ainda está disponível?`;
const porId = id => ESTOQUE.find(c => c.id === id);

/* ===== Topo ===== */
const topo = $('#topo');
const burger = $('.topo__burger');
const menu = $('#menu');
const aoRolar = () => topo.classList.toggle('is-rolado', window.scrollY > 10);
window.addEventListener('scroll', aoRolar, { passive: true });
aoRolar();
burger.addEventListener('click', () => {
  const aberto = menu.classList.toggle('is-aberto');
  burger.setAttribute('aria-expanded', String(aberto));
  burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});
$$('#menu a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('is-aberto');
  burger.setAttribute('aria-expanded', 'false');
}));

/* ===== Estoque ===== */
const grade = $('#grade');
const contagem = $('#contagem');
const vazio = $('#vazio');
const verMais = $('#ver-mais');
const fBusca = $('#f-busca');
const fMarca = $('#f-marca');
const fPreco = $('#f-preco');
const fOrdem = $('#f-ordem');
let catAtual = '';
let limite = POR_PAGINA;

// Opções de ordenação: acrescenta "Destaques" como padrão
fOrdem.insertAdjacentHTML('afterbegin', '<option value="destaques" selected>Destaques</option>');
fOrdem.value = 'destaques';

// Marcas com contagem
const marcas = {};
ESTOQUE.forEach(c => { marcas[c.marca] = (marcas[c.marca] || 0) + 1; });
Object.keys(marcas).sort((a, b) => a.localeCompare(b, 'pt-BR')).forEach(m => {
  fMarca.insertAdjacentHTML('beforeend', `<option value="${m}">${m} (${marcas[m]})</option>`);
});

// Contagem nos chips
$$('#f-cat .chip').forEach(ch => {
  const cats = ch.dataset.cat.split(' ').filter(Boolean);
  const n = cats.length ? ESTOQUE.filter(c => cats.includes(c.cat)).length : ESTOQUE.length;
  ch.insertAdjacentHTML('beforeend', ` <small>${n}</small>`);
});
$$('[data-total]').forEach(el => { el.textContent = ESTOQUE.length; });

function filtrar() {
  const q = semAcento(fBusca.value.trim());
  const termos = q.split(/\s+/).filter(Boolean);
  const marca = fMarca.value;
  const [pMin, pMax] = fPreco.value ? fPreco.value.split('-').map(v => (v === '' ? Infinity : Number(v))) : [0, Infinity];
  const cats = catAtual.split(' ').filter(Boolean);
  let lista = ESTOQUE.filter(c => {
    if (marca && c.marca !== marca) return false;
    if (cats.length && !cats.includes(c.cat)) return false;
    if (fPreco.value && !(c.preco > (pMin === 0 ? -1 : pMin) && c.preco <= pMax)) return false;
    if (termos.length) {
      const alvo = semAcento([c.marca, c.modelo, c.versao, c.cor, c.ano, c.comb, c.cambio, CAT_ROTULO[c.cat], c.id].join(' '));
      if (!termos.every(t => alvo.includes(t))) return false;
    }
    return true;
  });
  const ord = fOrdem.value;
  const anoN = c => Number(anoModelo(c)) * 10000 + Number(c.ano.split('/')[0]);
  if (ord === 'menor') lista.sort((a, b) => a.preco - b.preco);
  else if (ord === 'maior') lista.sort((a, b) => b.preco - a.preco);
  else if (ord === 'km') lista.sort((a, b) => a.km - b.km);
  else if (ord === 'recentes') lista.sort((a, b) => anoN(b) - anoN(a) || b.preco - a.preco);
  else {
    const pos = c => { const i = DESTAQUES.indexOf(c.id); return i === -1 ? 999 : i; };
    lista.sort((a, b) => pos(a) - pos(b) || anoN(b) - anoN(a) || b.preco - a.preco);
  }
  return lista;
}

function cardHTML(c) {
  const nomeAlt = `${nomeCompleto(c)} ${c.ano} ${c.cor.toLowerCase()} no pátio da Diamond Motors`;
  return `
  <article class="card">
    <button type="button" class="card__foto" data-abrir="${c.id}" aria-label="Ver fotos e detalhes do ${nomeCompleto(c)} ${c.ano}">
      <span class="card__selo">${CAT_ROTULO[c.cat]}</span>
      <img src="${foto(c.id, 1)}" width="720" height="540" loading="lazy" decoding="async" alt="${nomeAlt}">
      <span class="card__fotos"><svg class="ic"><use href="#i-camera"/></svg>${c.fotos} fotos</span>
    </button>
    <div class="card__corpo">
      <p class="card__marca">${c.marca}</p>
      <h3 class="card__nome">${c.modelo}</h3>
      <p class="card__versao" title="${c.versao}">${c.versao}</p>
      <ul class="card__specs">
        <li><svg class="ic"><use href="#i-cal"/></svg>${c.ano}</li>
        <li><svg class="ic"><use href="#i-gauge"/></svg>${kmFmt(c.km)}</li>
        <li><svg class="ic"><use href="#i-gear"/></svg>${c.cambio}</li>
        <li><svg class="ic"><use href="#i-fuel"/></svg>${c.comb}</li>
      </ul>
      <div class="card__rodape">
        <p class="card__preco">${brl(c.preco)}</p>
        <div class="card__btns">
          <a class="btn btn--dark" href="${waLink(msgCarro(c))}" target="_blank" rel="noopener"><svg class="ic ic--wa"><use href="#i-wa"/></svg>Tenho interesse</a>
          <button type="button" class="btn btn--outline" data-abrir="${c.id}">Detalhes</button>
        </div>
      </div>
    </div>
  </article>`;
}

function render() {
  const lista = filtrar();
  const visiveis = lista.slice(0, limite);
  grade.innerHTML = visiveis.map(cardHTML).join('');
  vazio.hidden = lista.length > 0;
  const filtrado = fBusca.value.trim() || fMarca.value || fPreco.value || catAtual;
  if (!lista.length) contagem.textContent = 'Nenhum veículo encontrado';
  else if (filtrado) contagem.textContent = `${lista.length} ${lista.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}` + (lista.length > visiveis.length ? ` · mostrando ${visiveis.length}` : '');
  else contagem.textContent = `${ESTOQUE.length} veículos no estoque` + (lista.length > visiveis.length ? ` · mostrando ${visiveis.length}` : '');
  const resto = lista.length - visiveis.length;
  verMais.hidden = resto <= 0;
  verMais.textContent = resto > POR_PAGINA ? `Ver mais veículos (${resto} restantes)` : `Ver ${resto === 1 ? 'o último veículo' : 'os ' + resto + ' veículos restantes'}`;
}

const reiniciar = () => { limite = POR_PAGINA; render(); };
let tBusca;
fBusca.addEventListener('input', () => { clearTimeout(tBusca); tBusca = setTimeout(reiniciar, 120); });
[fMarca, fPreco, fOrdem].forEach(el => el.addEventListener('change', reiniciar));
$$('#f-cat .chip').forEach(ch => ch.addEventListener('click', () => {
  catAtual = ch.dataset.cat;
  $$('#f-cat .chip').forEach(o => { const on = o === ch; o.classList.toggle('is-on', on); o.setAttribute('aria-pressed', String(on)); });
  reiniciar();
}));
verMais.addEventListener('click', () => { limite += POR_PAGINA; render(); });

// Mensagem "procuro" usa o texto da busca
$('[data-wa="procuro"]').addEventListener('click', e => {
  const termo = fBusca.value.trim();
  e.currentTarget.href = waLink('Olá, Diamond Motors! Não encontrei no site o veículo que procuro. Estou procurando: ' + termo);
});

render();

/* ===== Ficha do veículo (modal) ===== */
const ficha = $('#ficha');
const fichaFoto = $('#ficha-foto');
const fichaThumbs = $('#ficha-thumbs');
let carroAberto = null;
let focoAnterior = null;

function mostrarFoto(c, i) {
  fichaFoto.src = foto(c.id, i);
  fichaFoto.width = i === 1 ? 720 : 560;
  fichaFoto.height = i === 1 ? 540 : 420;
  fichaFoto.alt = `${nomeCompleto(c)} ${c.ano} – foto ${i} de ${c.fotos}`;
  $$('button', fichaThumbs).forEach((b, k) => b.classList.toggle('is-on', k + 1 === i));
}

function abrirFicha(id) {
  const c = porId(id);
  if (!c) return;
  carroAberto = c;
  focoAnterior = document.activeElement;
  $('#ficha-marca').textContent = c.marca + ' · ' + CAT_ROTULO[c.cat];
  $('#ficha-titulo').textContent = c.modelo;
  $('#ficha-versao').textContent = c.versao;
  $('#ficha-preco').textContent = brl(c.preco);
  $('#ficha-specs').innerHTML = [
    ['Ano/modelo', c.ano], ['Km', kmFmt(c.km)], ['Câmbio', c.cambio],
    ['Combustível', c.comb], ['Cor', c.cor], ['Código', c.id]
  ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  $('#ficha-desc').textContent = c.desc || 'Fale com a Diamond Motors para saber mais detalhes deste veículo.';
  const opc = c.opc.slice(0, 14);
  $('#ficha-opc').innerHTML = opc.map(o => `<span>${o}</span>`).join('') + (c.opc.length > 14 ? `<span>+${c.opc.length - 14} opcionais</span>` : '');
  $('#ficha-wa').href = waLink(msgCarro(c));
  fichaThumbs.innerHTML = Array.from({ length: c.fotos }, (_, k) =>
    `<button type="button" aria-label="Ver foto ${k + 1}"><img src="${foto(c.id, k + 1)}" width="${k === 0 ? 720 : 560}" height="${k === 0 ? 540 : 420}" loading="lazy" alt=""></button>`).join('');
  $$('button', fichaThumbs).forEach((b, k) => b.addEventListener('click', () => mostrarFoto(c, k + 1)));
  mostrarFoto(c, 1);
  if (typeof ficha.showModal === 'function') ficha.showModal(); else ficha.setAttribute('open', '');
  document.documentElement.style.overflow = 'hidden';
  $('.ficha__dados').scrollTop = 0;
  history.replaceState(null, '', '#veiculo-' + c.id);
}

function fecharFicha() {
  if (ficha.open) { if (typeof ficha.close === 'function') ficha.close(); else ficha.removeAttribute('open'); }
}
ficha.addEventListener('close', () => {
  document.documentElement.style.overflow = '';
  if (location.hash.startsWith('#veiculo-')) history.replaceState(null, '', location.pathname + location.search);
  if (focoAnterior && focoAnterior.focus) focoAnterior.focus();
});
$('#ficha-fechar').addEventListener('click', fecharFicha);
ficha.addEventListener('click', e => { if (e.target === ficha) fecharFicha(); });
document.addEventListener('click', e => {
  const b = e.target.closest('[data-abrir]');
  if (b) { e.preventDefault(); abrirFicha(b.dataset.abrir); }
});
// Teclas de seta trocam a foto
ficha.addEventListener('keydown', e => {
  if (!carroAberto || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  const atual = $$('button', fichaThumbs).findIndex(b => b.classList.contains('is-on')) + 1;
  const n = carroAberto.fotos;
  mostrarFoto(carroAberto, e.key === 'ArrowRight' ? (atual % n) + 1 : ((atual - 2 + n) % n) + 1);
});
// Link direto: #veiculo-K340986
if (location.hash.startsWith('#veiculo-')) {
  const id = location.hash.replace('#veiculo-', '');
  if (porId(id)) setTimeout(() => abrirFicha(id), 300);
}

/* ===== Simulador de financiamento ===== */
const cCarro = $('#c-carro');
const cValor = $('#c-valor');
const cEntrada = $('#c-entrada');
const cRange = $('#c-range');
const cPct = $('#c-pct');
const cTaxa = $('#c-taxa');
const cEnviar = $('#c-enviar');
let prazo = 48;

ESTOQUE.filter(c => c.cat !== 'moto' || c.preco > 15000).slice().sort((a, b) => a.preco - b.preco).forEach(c => {
  cCarro.insertAdjacentHTML('beforeend', `<option value="${c.id}">${nomeCompleto(c)} ${anoModelo(c)} · ${brl(c.preco)}</option>`);
});

const lerNum = el => Number(String(el.value).replace(/\D/g, '')) || 0;
const escreverNum = (el, n) => { el.value = n ? Math.round(n).toLocaleString('pt-BR') : ''; };

function calcular() {
  const valor = lerNum(cValor);
  let entrada = Math.min(lerNum(cEntrada), valor);
  const taxa = (parseFloat(String(cTaxa.value).replace(',', '.')) || 0) / 100;
  const pv = Math.max(valor - entrada, 0);
  const parcela = pv === 0 ? 0 : (taxa === 0 ? pv / prazo : pv * taxa / (1 - Math.pow(1 + taxa, -prazo)));
  $('#r-n').textContent = prazo;
  $('#r-parcela').textContent = brl(parcela);
  $('#r-fin').textContent = brl(pv);
  const pct = valor ? Math.round(entrada / valor * 100) : 0;
  cPct.textContent = pct + '%';
  const c = cCarro.value ? porId(cCarro.value) : null;
  const oQue = c ? `o ${nomeCompleto(c)} ${c.ano} (${brl(c.preco)}, cód. ${c.id})` : `um veículo de ${brl(valor)}`;
  const taxaTxt = String(cTaxa.value).replace('.', ',');
  cEnviar.href = waLink(`Olá, Diamond Motors! Fiz uma simulação no site para ${oQue}: entrada de ${brl(entrada)} e ${prazo}x de aproximadamente ${brl(parcela)} (taxa estimada de ${taxaTxt}% a.m.). Podem me ajudar com o financiamento?`);
}

function entradaPorPct() {
  escreverNum(cEntrada, lerNum(cValor) * Number(cRange.value) / 100);
  calcular();
}

cCarro.addEventListener('change', () => {
  const c = porId(cCarro.value);
  if (c) escreverNum(cValor, c.preco);
  entradaPorPct();
});
cValor.addEventListener('input', () => { escreverNum(cValor, lerNum(cValor)); cCarro.value = ''; entradaPorPct(); });
cEntrada.addEventListener('input', () => {
  escreverNum(cEntrada, lerNum(cEntrada));
  const v = lerNum(cValor);
  if (v) cRange.value = Math.min(80, Math.max(0, Math.round(lerNum(cEntrada) / v * 100 / 5) * 5));
  calcular();
});
cRange.addEventListener('input', entradaPorPct);
cTaxa.addEventListener('input', calcular);
$$('#c-prazo button').forEach(b => b.addEventListener('click', () => {
  prazo = Number(b.dataset.n);
  $$('#c-prazo button').forEach(o => o.classList.toggle('is-on', o === b));
  calcular();
}));
entradaPorPct();

$('#ficha-simular').addEventListener('click', () => {
  const c = carroAberto;
  fecharFicha();
  if (c) { cCarro.value = c.id; escreverNum(cValor, c.preco); entradaPorPct(); }
  setTimeout(() => $('#financiamento').scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
});

/* ===== Animação de entrada ===== */
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const alvos = $$('.dif, .sec__cab, .troca, .calc, .entrega, .sobre__foto, .unid');
  alvos.forEach(el => el.classList.add('revela'));
  const io = new IntersectionObserver(ents => ents.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-visivel'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  alvos.forEach(el => io.observe(el));
}

$('#ano').textContent = new Date().getFullYear();
