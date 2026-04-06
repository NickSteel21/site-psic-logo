export interface Psychologist {
  id: number;
  name: string;
  specialty: string;
  crp: string;
  photo: string;
  description: string;
  whatsapp: string;
}

export const psychologistsByCondition: Record<string, Psychologist[]> = {
  hipocondria: [
    { id: 1, name: "Dra. Camila Ferreira", specialty: "Terapia Cognitivo-Comportamental", crp: "06/12345", photo: "👩‍⚕️", description: "Especialista em transtornos de ansiedade de saúde e hipocondria.", whatsapp: "#" },
    { id: 2, name: "Dr. Rafael Mendes", specialty: "Psicoterapia Breve", crp: "06/23456", photo: "👨‍⚕️", description: "Experiência em manejo de preocupações excessivas com a saúde.", whatsapp: "#" },
    { id: 3, name: "Dra. Ana Beatriz", specialty: "TCC e Mindfulness", crp: "06/34567", photo: "👩‍⚕️", description: "Abordagem integrativa para ansiedade e somatização.", whatsapp: "#" },
  ],
  ansiedade: [
    { id: 4, name: "Dr. Lucas Oliveira", specialty: "Terapia Cognitivo-Comportamental", crp: "06/45678", photo: "👨‍⚕️", description: "Referência em tratamento de transtornos de ansiedade.", whatsapp: "#" },
    { id: 5, name: "Dra. Mariana Costa", specialty: "EMDR e Ansiedade", crp: "06/56789", photo: "👩‍⚕️", description: "Especialista em trauma e ansiedade generalizada.", whatsapp: "#" },
    { id: 6, name: "Dra. Juliana Santos", specialty: "Psicoterapia Humanista", crp: "06/67890", photo: "👩‍⚕️", description: "Abordagem acolhedora para manejo de ansiedade e estresse.", whatsapp: "#" },
  ],
  anorexia: [
    { id: 7, name: "Dra. Patrícia Lima", specialty: "Transtornos Alimentares", crp: "06/78901", photo: "👩‍⚕️", description: "Especialista em anorexia e bulimia com abordagem multidisciplinar.", whatsapp: "#" },
    { id: 8, name: "Dr. Fernando Alves", specialty: "Nutrição Comportamental", crp: "06/89012", photo: "👨‍⚕️", description: "Experiência em relação com comida e imagem corporal.", whatsapp: "#" },
    { id: 9, name: "Dra. Renata Souza", specialty: "Terapia Familiar e Alimentar", crp: "06/90123", photo: "👩‍⚕️", description: "Abordagem sistêmica para transtornos alimentares.", whatsapp: "#" },
  ],
  depressao: [
    { id: 10, name: "Dr. André Rocha", specialty: "Psicoterapia Psicanalítica", crp: "06/11234", photo: "👨‍⚕️", description: "Ampla experiência em tratamento de depressão e luto.", whatsapp: "#" },
    { id: 11, name: "Dra. Carolina Dias", specialty: "Terapia Interpessoal", crp: "06/22345", photo: "👩‍⚕️", description: "Especialista em depressão e relações interpessoais.", whatsapp: "#" },
    { id: 12, name: "Dr. Gustavo Pinto", specialty: "TCC para Depressão", crp: "06/33456", photo: "👨‍⚕️", description: "Abordagem estruturada e eficaz para quadros depressivos.", whatsapp: "#" },
  ],
  autismo: [
    { id: 13, name: "Dra. Isabela Martins", specialty: "Neuropsicologia", crp: "06/44567", photo: "👩‍⚕️", description: "Especialista em avaliação e acompanhamento do TEA.", whatsapp: "#" },
    { id: 14, name: "Dr. Thiago Barbosa", specialty: "ABA e Desenvolvimento", crp: "06/55678", photo: "👨‍⚕️", description: "Experiência em intervenções comportamentais para autismo.", whatsapp: "#" },
    { id: 15, name: "Dra. Letícia Nunes", specialty: "Terapia Ocupacional e TEA", crp: "06/66789", photo: "👩‍⚕️", description: "Abordagem sensorial e adaptativa para o espectro autista.", whatsapp: "#" },
  ],
};
