export interface QuizQuestion {
  id: number;
  question: string;
  options: { text: string; scores: Record<string, number> }[];
}

export type Condition = "hipocondria" | "ansiedade" | "anorexia" | "depressao" | "autismo";

export const conditionLabels: Record<Condition, string> = {
  hipocondria: "Hipocondria",
  ansiedade: "Ansiedade",
  anorexia: "Anorexia",
  depressao: "Depressão",
  autismo: "Autismo",
};

export const conditionDescriptions: Record<Condition, string> = {
  hipocondria:
    "A hipocondria é caracterizada pela preocupação excessiva com a saúde, interpretando sinais corporais normais como doenças graves. O acompanhamento profissional pode ajudar a desenvolver uma relação mais saudável com o próprio corpo.",
  ansiedade:
    "A ansiedade envolve preocupação intensa e persistente sobre situações cotidianas. Sintomas físicos como taquicardia, tensão muscular e dificuldade de concentração são comuns. Um psicólogo pode ensinar técnicas eficazes de manejo.",
  anorexia:
    "A anorexia nervosa é um transtorno alimentar que envolve restrição alimentar severa e distorção da imagem corporal. O tratamento profissional é fundamental para a recuperação e saúde a longo prazo.",
  depressao:
    "A depressão é caracterizada por tristeza persistente, perda de interesse em atividades e alterações no sono e apetite. Com o suporte adequado, é possível recuperar a qualidade de vida.",
  autismo:
    "O Transtorno do Espectro Autista (TEA) envolve diferenças na comunicação social e padrões de comportamento. O diagnóstico e acompanhamento profissional auxiliam no autoconhecimento e desenvolvimento de estratégias adaptativas.",
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Com que frequência você se preocupa com a possibilidade de estar com alguma doença grave?",
    options: [
      { text: "Raramente ou nunca", scores: { hipocondria: 0, ansiedade: 0 } },
      { text: "Às vezes, quando sinto algo diferente", scores: { hipocondria: 1, ansiedade: 1 } },
      { text: "Frequentemente, mesmo sem sintomas claros", scores: { hipocondria: 3, ansiedade: 2 } },
      { text: "O tempo todo, isso domina meus pensamentos", scores: { hipocondria: 4, ansiedade: 3 } },
    ],
  },
  {
    id: 2,
    question: "Você sente uma preocupação constante e difícil de controlar sobre diversas áreas da sua vida?",
    options: [
      { text: "Não, consigo lidar bem com preocupações", scores: { ansiedade: 0 } },
      { text: "Sim, mas consigo me distrair", scores: { ansiedade: 1 } },
      { text: "Sim, e isso me causa sintomas físicos", scores: { ansiedade: 3 } },
      { text: "Sim, sinto que estou sempre em estado de alerta", scores: { ansiedade: 4, depressao: 1 } },
    ],
  },
  {
    id: 3,
    question: "Como é a sua relação com a alimentação e a imagem corporal?",
    options: [
      { text: "Saudável, como normalmente sem preocupações excessivas", scores: { anorexia: 0 } },
      { text: "Às vezes me preocupo com o peso, mas como normalmente", scores: { anorexia: 1 } },
      { text: "Evito comer certos alimentos por medo de engordar", scores: { anorexia: 3 } },
      { text: "Restrinjo muito minha alimentação e me sinto mal com meu corpo", scores: { anorexia: 4, depressao: 1 } },
    ],
  },
  {
    id: 4,
    question: "Nos últimos tempos, você tem sentido uma tristeza persistente ou perda de interesse em atividades?",
    options: [
      { text: "Não, me sinto bem na maior parte do tempo", scores: { depressao: 0 } },
      { text: "Às vezes me sinto para baixo, mas passa", scores: { depressao: 1 } },
      { text: "Sim, tenho me sentido triste com frequência", scores: { depressao: 3 } },
      { text: "Sim, quase nada me dá prazer ou motivação", scores: { depressao: 4, ansiedade: 1 } },
    ],
  },
  {
    id: 5,
    question: "Como você se sente em situações sociais e na comunicação com outras pessoas?",
    options: [
      { text: "Confortável e natural na maioria das vezes", scores: { autismo: 0 } },
      { text: "Às vezes me sinto deslocado(a), mas consigo me adaptar", scores: { autismo: 1, ansiedade: 1 } },
      { text: "Frequentemente tenho dificuldade em entender as intenções dos outros", scores: { autismo: 3 } },
      { text: "Interações sociais são muito desafiadoras para mim", scores: { autismo: 4, ansiedade: 1 } },
    ],
  },
  {
    id: 6,
    question: "Você costuma pesquisar sintomas na internet e se convencer de que tem alguma doença?",
    options: [
      { text: "Não, raramente pesquiso sobre saúde", scores: { hipocondria: 0 } },
      { text: "Às vezes, mas logo esqueço", scores: { hipocondria: 1 } },
      { text: "Sim, e isso aumenta minha preocupação", scores: { hipocondria: 3, ansiedade: 2 } },
      { text: "Sim, passo horas pesquisando e fico muito angustiado(a)", scores: { hipocondria: 4, ansiedade: 3 } },
    ],
  },
  {
    id: 7,
    question: "Você tem rotinas ou padrões de comportamento que precisa seguir rigidamente?",
    options: [
      { text: "Não, sou bastante flexível", scores: { autismo: 0 } },
      { text: "Tenho algumas preferências, mas me adapto", scores: { autismo: 1 } },
      { text: "Sim, mudanças na rotina me causam muito desconforto", scores: { autismo: 3 } },
      { text: "Sim, preciso seguir padrões específicos e mudanças me angustiam muito", scores: { autismo: 4, ansiedade: 1 } },
    ],
  },
  {
    id: 8,
    question: "Como está seu sono e nível de energia ultimamente?",
    options: [
      { text: "Durmo bem e tenho energia durante o dia", scores: { depressao: 0 } },
      { text: "Algumas noites de sono ruim, mas geralmente ok", scores: { depressao: 1, ansiedade: 1 } },
      { text: "Tenho dificuldade para dormir e me sinto cansado(a)", scores: { depressao: 3, ansiedade: 2 } },
      { text: "Durmo demais ou quase nada, sem energia para nada", scores: { depressao: 4 } },
    ],
  },
  {
    id: 9,
    question: "Você sente sensações físicas como taquicardia, falta de ar ou tensão muscular sem causa aparente?",
    options: [
      { text: "Não, raramente tenho esses sintomas", scores: { ansiedade: 0, hipocondria: 0 } },
      { text: "Às vezes, em momentos de estresse", scores: { ansiedade: 1, hipocondria: 1 } },
      { text: "Sim, com frequência, e isso me preocupa", scores: { ansiedade: 3, hipocondria: 2 } },
      { text: "Sim, constantemente, e acho que posso ter algo grave", scores: { ansiedade: 3, hipocondria: 4 } },
    ],
  },
  {
    id: 10,
    question: "Você se sente confortável com estímulos sensoriais (sons altos, luzes fortes, texturas)?",
    options: [
      { text: "Sim, não me incomodam", scores: { autismo: 0 } },
      { text: "Alguns me incomodam levemente", scores: { autismo: 1 } },
      { text: "Tenho sensibilidade elevada a vários estímulos", scores: { autismo: 3 } },
      { text: "Estímulos sensoriais me causam grande desconforto ou sobrecarga", scores: { autismo: 4 } },
    ],
  },
];
