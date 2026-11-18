export const services = [
  {
    "id": "manicure",
    "cat": "unhas",
    "name": "Manicure tradicional",
    "price": 40,
    "duration": "50 minutos",
    "description": "Cutilagem, lixamento das unhas e esmaltação.",
    "path": "hgv7610-mao",
    "minutes": 50,
    "image": "assets/services/manicure.jpeg",
    "imageAlt": "Foto do serviço Manicure tradicional"
  },
  {
    "id": "manicure-spa",
    "cat": "unhas",
    "name": "Manicure premium",
    "price": 60,
    "duration": "1 hora",
    "description": "Higienização, esfoliação, hidratação, cutilagem e esmaltação.",
    "minutes": 60,
    "image": "assets/services/manicure-premium.jpeg",
    "imageAlt": "Foto do serviço Manicure premium"
  },
  {
    "id": "pedicure",
    "cat": "unhas",
    "name": "Pedicure tradicional",
    "price": 50,
    "duration": "50 minutos",
    "description": "Cutilagem, lixamento das unhas e esmaltação.",
    "path": "srr9794-pe",
    "minutes": 50,
    "image": "assets/services/pedicure.jpeg",
    "imageAlt": "Foto do serviço Pedicure tradicional"
  },
  {
    "id": "pedicure-spa",
    "cat": "unhas",
    "name": "Pedicure premium",
    "price": 80,
    "duration": "1 hora",
    "description": "Higienização, lixamento, esfoliação, hidratação, cutilagem, lixamento das unhas e esmaltação.",
    "minutes": 60,
    "image": "assets/services/pedicure-premium.jpeg",
    "imageAlt": "Foto do serviço Pedicure premium"
  },
  {
    "id": "combo",
    "cat": "combos",
    "name": "Combo pedicure e manicure tradicional",
    "price": 80,
    "duration": "1h45",
    "description": "Cutilagem, lixamento das unhas e esmaltação.",
    "path": "rlk5384-pe-e-mao",
    "minutes": 105,
    "image": "assets/services/combo.jpeg",
    "imageAlt": "Foto do serviço Combo pedicure e manicure tradicional"
  },
  {
    "id": "combo-spa",
    "cat": "combos",
    "name": "Combo pedicure e manicure premium",
    "price": 100,
    "duration": "1h55",
    "description": "Higienização, lixamento, esfoliação, hidratação, cutilagem, lixamento das unhas e esmaltação.",
    "minutes": 115,
    "image": "assets/services/combo.jpeg",
    "imageAlt": "Foto do serviço Combo pedicure e manicure premium"
  },
  {
    "id": "esmaltacao",
    "cat": "unhas",
    "name": "Esmaltação",
    "price": 25,
    "duration": "30 minutos",
    "minutes": 30,
    "description": "Esmaltação das unhas.",
    "image": "assets/services/manicure.jpeg",
    "imageAlt": "Foto do serviço Esmaltação"
  },
  {
    "id": "podologia",
    "cat": "podologia",
    "name": "Podologia",
    "price": 120,
    "priceFrom": true,
    "duration": "1 hora",
    "description": "Atendimento especializado focado na saúde dos pés, utilizando técnicas avançadas para tratar condições específicas e garantir o bem-estar e o conforto total do paciente.",
    "path": "fvq4289-podologia",
    "minutes": 60,
    "image": "assets/services/podologia.jpeg",
    "imageAlt": "Foto do serviço Podologia"
  },
  {
    "id": "calosidade",
    "cat": "podologia",
    "name": "Desbaste de Calosidade Plantar",
    "price": 30,
    "duration": "1 hora",
    "description": "Remoção segura e indolor do excesso de queratina e pele endurecida na sola dos pés.",
    "path": "nlw1830-desbaste-de-calosidade-plantar",
    "minutes": 60,
    "benefits": [
      "Alívio imediato da dor, pressão e sensação de queimação ao caminhar",
      "Pele macia e renovada, eliminando asperezas profundas",
      "Conforto e leveza instantâneos para o seu dia a dia"
    ],
    "image": "assets/services/calosidade.jpeg",
    "imageAlt": "Foto do serviço Desbaste de Calosidade Plantar"
  },
  {
    "id": "laser",
    "cat": "podologia",
    "name": "Pacote laser terapia",
    "price": 500,
    "duration": "15 min por sessão · 10 sessões",
    "description": "Pacote de 10 sessões de laserterapia voltado ao cuidado das unhas. Converse com a Juh sobre a indicação para você.",
    "path": "yqt1371-pacote-laser-terapia",
    "minutes": 15,
    "image": "assets/services/laser.jpeg",
    "imageAlt": "Foto do serviço Pacote laser terapia"
  },
  {
    "id": "correcao",
    "cat": "podologia",
    "name": "Correção de Unha (Onicoórtese)",
    "price": 35,
    "duration": "1 hora",
    "description": "Aplicação de dispositivo corretivo para alinhar o formato da unha, combatendo a curvatura excessiva.",
    "path": "eev4727-correcao-de-unha-onicoortese",
    "minutes": 60,
    "benefits": [
      "Alívio da dor e da pressão nos cantos",
      "Prevenção e tratamento de unhas encravadas",
      "Crescimento correto e sem cirurgia"
    ],
    "image": "assets/services/correcao.jpeg",
    "imageAlt": "Foto do serviço Correção de Unha (Onicoórtese)"
  },
  {
    "id": "peeling",
    "cat": "podologia",
    "name": "Peeling nos pés",
    "price": 350,
    "duration": "1 hora",
    "description": "Peeling e remoção de onicofose. Tratamento especializado para remoção segura e indolor dos calos e espessamentos nos cantos das unhas.",
    "path": "icy6960-peelling",
    "minutes": 60,
    "benefits": [
      "Alívio imediato da pressão e do incômodo nos sapatos",
      "Limpeza profunda e renovação do contorno ungueal",
      "Prevenção contra unhas encravadas"
    ],
    "image": "assets/services/peeling.jpeg",
    "imageAlt": "Foto do serviço Peeling nos pés"
  },
  {
    "id": "reflexologia",
    "image": "assets/services/reflexologia.jpeg",
    "imageAlt": "Massagem nos pés durante uma sessão de reflexologia",
    "cat": "podologia",
    "name": "Reflexologia",
    "price": 85,
    "duration": "45 minutos",
    "description": "Técnica terapêutica que aplica pressão em pontos específicos dos pés ligados a órgãos e sistemas do corpo. Promove relaxamento profundo, alívio de tensões e equilíbrio físico e energético.",
    "minutes": 45
  }
];
