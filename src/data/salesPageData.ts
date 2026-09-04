import {
  Eye,
  Target,
  Zap,
  Smartphone,
  Shield,
  RotateCcw,
  Footprints,
  ShoppingCart,
  UserCheck,
  Download,
  BookOpen,
  ListOrdered
} from 'lucide-react';
import {
  BenefitItem,
  MarqueeItem,
  TargetAudienceItem,
  ContentModuleItem,
  BonusItem,
  TestimonialItem,
  StepItem,
  FaqItem
} from '../types';

// Asset paths
export const ASSETS = {
  whatsappIcon: '/assets/whatsapp-r9OtsIY3.webp',
  gmailIcon: '/assets/gmail-WKqhIC7A.webp',
  bookIcon: '/assets/book-icon-Bz8ujWQU.webp',
  mainMockup: 'https://i.ibb.co/hxk1Dz6b/00.webp',
  heroMockup: 'https://i.ibb.co/hxk1Dz6b/00.webp',
  section4Mockup: 'https://i.ibb.co/hxk1Dz6b/00.webp',
  basicPlanMockup: 'https://i.ibb.co/hxk1Dz6b/00.webp',
  completePlanMockup: 'https://i.ibb.co/hxk1Dz6b/00.webp',
  comparisonImage: 'https://i.ibb.co/YBBMHSSs/IMG1.webp',
  bonus1: '/assets/bonus-1-opt.webp',
  bonus2: '/assets/bonus-2-opt.webp',
  bonus3: '/assets/bonus-3-opt.webp',
  bonus4: '/assets/bonus-4-opt.webp',
  guaranteeBadge: '/assets/garantia-opt.webp',
  paymentIcons: '/assets/payment-icons-XUGfrbXl.png',
};

// Checkout Links
export const CHECKOUT_LINKS = {
  basicPlan: 'https://pay.kiwify.com.br/TcnGXRt',
  completePlan: 'https://pay.kiwify.com.br/i32sxoH',
};

// Marquee Carousel Images (em ordem aleatória com as novas imagens)
export const MARQUEE_ITEMS: MarqueeItem[] = [
  { image: 'https://i.ibb.co/1YrWKJ0L/27OK.webp', alt: 'Treino ilustrado 27' },
  { image: 'https://i.ibb.co/D3hBg05/16OK.webp', alt: 'Treino ilustrado 16' },
  { image: 'https://i.ibb.co/LXs5csfS/21OK.webp', alt: 'Treino ilustrado 21' },
  { image: 'https://i.ibb.co/xtMyKXTJ/30OK.webp', alt: 'Treino ilustrado 30' },
  { image: 'https://i.ibb.co/N66z8f4s/15OK.webp', alt: 'Treino ilustrado 15' },
  { image: 'https://i.ibb.co/FbS642Ty/28OK.webp', alt: 'Treino ilustrado 28' },
  { image: 'https://i.ibb.co/S4yDL2tt/18OK.webp', alt: 'Treino ilustrado 18' },
  { image: 'https://i.ibb.co/Td1tFf3/23OK.webp', alt: 'Treino ilustrado 23' },
  { image: 'https://i.ibb.co/JRK3gC7V/17OK.webp', alt: 'Treino ilustrado 17' },
];

// Segundo Carrossel (Abaixo de 'Para quem é este material?' - Ordem Aleatória)
export const SECONDARY_MARQUEE_ITEMS: MarqueeItem[] = [
  { image: 'https://i.ibb.co/FbS642Ty/28OK.webp', alt: 'Treino ilustrado 28' },
  { image: 'https://i.ibb.co/S4yDL2tt/18OK.webp', alt: 'Treino ilustrado 18' },
  { image: 'https://i.ibb.co/Td1tFf3/23OK.webp', alt: 'Treino ilustrado 23' },
  { image: 'https://i.ibb.co/N66z8f4s/15OK.webp', alt: 'Treino ilustrado 15' },
  { image: 'https://i.ibb.co/1YrWKJ0L/27OK.webp', alt: 'Treino ilustrado 27' },
  { image: 'https://i.ibb.co/JRK3gC7V/17OK.webp', alt: 'Treino ilustrado 17' },
  { image: 'https://i.ibb.co/LXs5csfS/21OK.webp', alt: 'Treino ilustrado 21' },
  { image: 'https://i.ibb.co/D3hBg05/16OK.webp', alt: 'Treino ilustrado 16' },
  { image: 'https://i.ibb.co/xtMyKXTJ/30OK.webp', alt: 'Treino ilustrado 30' },
];

// Benefits Section (P1)
export const BENEFITS_ITEMS: BenefitItem[] = [
  {
    Icon: Eye,
    title: `👁️ TREINE DE FORMA VISUAL,\nNÃO APENAS TENTANDO REPETIR`,
    desc: 'Em vez de depender somente da memória para lembrar a execução de cada movimento, acompanhe ilustrações, posições, setas, sequências e pontos de atenção que ajudam você a entender melhor cada fundamento.',
  },
  {
    Icon: Target,
    title: `🎯 ENTENDA MELHOR A POSIÇÃO\nDE CADA MOVIMENTO`,
    desc: 'Os treinos mostram como posicionar pés, pernas, quadril, tronco, braços e mãos durante os principais fundamentos. Visualize a posição inicial, acompanhe cada etapa da execução e compreenda como finalizar o movimento de forma organizada.',
  },
  {
    Icon: Zap,
    title: `⚡ SEM TEXTOS LONGOS\nE EXPLICAÇÕES CANSATIVAS`,
    desc: 'Nada de procurar uma informação específica em inúmeras páginas de teoria. Cada treino reúne os pontos essenciais em uma estrutura visual, objetiva e fácil de consultar antes ou durante a prática.',
  },
  {
    Icon: Smartphone,
    title: `📱 COMECE A PRATICAR\nEM POUCOS MINUTOS`,
    desc: 'Receba o material imediatamente pelo e-mail. Consulte os treinos no celular, tablet ou computador e, se preferir, imprima o material para criar seu próprio guia de prática e revisão.',
  },
];

// Comparison Section Lists (ag)
export const WITHOUT_TRAININGS_LIST = [
  'Tenta repetir movimentos sem entender a postura correta.',
  'Sente dificuldade para manter o equilíbrio.',
  'Fica em dúvida sobre a posição dos pés e do quadril.',
  'Tem dificuldade para conectar defesas e ataques.',
  'Esquece sequências e detalhes dos movimentos.',
  'Não sabe exatamente o que precisa corrigir.',
  'Depende apenas das orientações recebidas no dojo.',
  'Treina, mas sente que sua base não evolui como gostaria.',
];

export const WITH_TRAININGS_LIST = [
  'Entende melhor cada movimento, passo a passo.',
  'Visualiza a postura e o posicionamento correto do corpo.',
  'Melhora o equilíbrio e a execução dos movimentos.',
  'Conecta ataques, defesas e deslocamentos com mais clareza.',
  'Revisa sequências sem depender apenas da memória.',
  'Identifica detalhes que precisa melhorar na própria base.',
  'Chega ao treino com mais segurança e confiança.',
  'Desenvolve os fundamentos de forma mais organizada e consistente.',
];

// Callout Results List (ig)
export const CALLOUT_RESULTS_LIST = [
  'Entenda melhor o posicionamento das principais bases.',
  'Visualize os movimentos antes de começar a praticar.',
  'Trabalhe equilíbrio e coordenação corporal.',
  'Pratique deslocamentos de forma mais organizada.',
  'Revise golpes, defesas e chutes fundamentais.',
  'Combine movimentos em pequenas sequências.',
  'Tenha uma referência rápida durante seus treinos.',
  'Desenvolva uma base técnica mais consistente com uma prática orientada.',
];

// Pain Points Section List (cg)
export const PAIN_POINTS_LIST = [
  'Dificuldade para manter a postura correta durante os deslocamentos.',
  'Desequilíbrio ao executar as bases fundamentais.',
  'Dúvidas sobre a posição dos pés e do quadril.',
  'Falta de conexão entre defesas e ataques.',
  'Insegurança ao realizar determinadas sequências.',
  'Dificuldade para acompanhar o ritmo dos treinos coletivos.',
];

// Target Audience Pillars (og)
export const TARGET_AUDIENCE_ITEMS: TargetAudienceItem[] = [
  {
    Icon: Shield,
    title: `🛡️ FORTALECER SUA BASE\nNO KARATÊ`,
    desc: 'Desenvolva uma prática mais estruturada trabalhando bases, postura, equilíbrio, deslocamentos, golpes, defesas e coordenação.',
  },
  {
    Icon: Eye,
    title: `👁️ TREINAR COM\nAPOIO VISUAL`,
    desc: 'Em vez de depender somente da memória, acompanhe ilustrações e sequências que apresentam cada movimento passo a passo.',
  },
  {
    Icon: RotateCcw,
    title: `🔄 REVISAR ENTRE\nOS TREINOS`,
    desc: 'Utilize os treinos como um material complementar para relembrar fundamentos já praticados e organizar melhor sua revisão.',
  },
  {
    Icon: Footprints,
    title: `👣 APRIMORAR BASES\nE DESLOCAMENTOS`,
    desc: 'Pratique diferentes posições, transferências de peso, avanços, recuos e mudanças de direção com exercícios progressivos.',
  },
  {
    Icon: Target,
    title: `🎯 PRATICAR GOLPES E\nDEFESAS FUNDAMENTAIS`,
    desc: 'Acompanhe movimentos básicos de ataque e defesa apresentados de forma visual, organizada e fácil de consultar.',
  },
  {
    Icon: ListOrdered,
    title: `📋 PRATICAR SEQUÊNCIAS\nPASSO A PASSO`,
    desc: 'Acompanhe pequenas combinações que unem postura, deslocamento, defesa, golpe e controle do corpo.',
  },
];

// Content of Material List (fg)
export const CONTENT_MODULES_LIST: ContentModuleItem[] = [
  {
    title: '+250 TREINOS ILUSTRADOS PASSO A PASSO',
    desc: 'Sequências visuais para facilitar a compreensão e a prática dos movimentos.',
  },
  {
    title: 'BASES E POSTURAS FUNDAMENTAIS',
    desc: 'Pratique posições importantes observando postura, alinhamento e distribuição do peso corporal.',
  },
  {
    title: 'DESLOCAMENTOS E EQUILÍBRIO',
    desc: 'Treinos para avançar, recuar e mudar de direção com mais controle e estabilidade.',
  },
  {
    title: 'GOLPES E ATAQUES FUNDAMENTAIS',
    desc: 'Visualize a execução e a mecânica dos principais golpes.',
  },
  {
    title: 'DEFESAS E CONTRA-ATAQUES',
    desc: 'Entenda melhor as defesas e como conectar os movimentos de forma organizada.',
  },
  {
    title: 'CHUTES E CONTROLE CORPORAL',
    desc: 'Trabalhe equilíbrio, extensão, precisão e coordenação nos chutes fundamentais.',
  },
  {
    title: 'COMBINAÇÕES E SEQUÊNCIAS PRÁTICAS',
    desc: 'Pratique pequenas combinações para conectar os fundamentos com mais fluidez.',
  },
];

// Bonuses List (vg)
export const BONUSES_ITEMS: BonusItem[] = [
  {
    n: 1,
    title: 'GUIA VISUAL DE BASES E POSTURAS DO KARATÊ',
    desc: 'Tenha uma referência rápida das principais bases utilizadas no Karatê. Visualize posicionamento dos pés, distribuição do peso, direção do corpo, alinhamento e pontos importantes para observar durante a prática.',
    image: ASSETS.bonus1,
    originalPrice: 'R$ 27,00',
  },
  {
    n: 2,
    title: 'SEQUÊNCIAS DE KIHON PARA PRATICAR OS FUNDAMENTOS',
    desc: 'Pratique pequenas sequências combinando bases, deslocamentos, socos, defesas e chutes fundamentais. Um material visual para organizar repetições e tornar o treino de fundamentos mais estruturado.',
    image: ASSETS.bonus2,
    originalPrice: 'R$ 37,00',
  },
  {
    n: 3,
    title: 'ROTINA DE MOBILIDADE E PREPARAÇÃO PARA O TREINO',
    desc: 'Uma sequência visual de preparação corporal com movimentos leves de mobilidade e aquecimento para ajudar a organizar os minutos anteriores à prática. Os exercícios devem ser realizados respeitando os próprios limites físicos.',
    image: ASSETS.bonus3,
    originalPrice: 'R$ 27,00',
  },
  {
    n: 4,
    title: 'CHECKLIST DE CORREÇÃO DOS FUNDAMENTOS',
    desc: 'Utilize um checklist visual para observar pontos como posição dos pés, joelhos, quadril, tronco, mãos, equilíbrio, postura e finalização dos movimentos durante seus treinos.',
    image: ASSETS.bonus4,
    originalPrice: 'R$ 19,00',
  },
];

// Testimonials (zg)
export const TESTIMONIALS_ITEMS: TestimonialItem[] = [
  {
    name: 'Sabrina Sousa',
    role: 'Praticante de Karatê',
    text: '“Eu tinha dificuldade principalmente em lembrar a sequência e os detalhes de alguns movimentos. Ter uma referência visual organizada facilitou bastante minhas revisões.”',
  },
  {
    name: 'Marcos Leal',
    role: 'Praticante iniciante de Karatê',
    text: '“Gostei porque consigo consultar rapidamente antes ou depois do treino. Ficou muito mais fácil revisar movimentos específicos sem precisar procurar em vários lugares.”',
  },
  {
    name: 'Jonas silva',
    role: 'Praticante de Karatê',
    text: '“Às vezes eu esquecia pequenos detalhes de posicionamento. As sequências ilustradas ajudam a visualizar melhor cada etapa durante a revisão.”',
  },
];

// How it works steps (jg)
export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    n: '01',
    icon: ShoppingCart,
    title: '01 — FINALIZE SUA COMPRA',
    desc: 'Após a confirmação do pagamento, seu acesso ao material será liberado conforme o sistema de entrega.',
  },
  {
    n: '02',
    icon: UserCheck,
    title: '02 — RECEBA SEU ACESSO',
    desc: 'Você receberá as informações de acesso pelos dados informados no momento da compra.',
  },
  {
    n: '03',
    icon: Download,
    title: '03 — ABRA SEUS 250 TREINOS',
    desc: 'Acesse a coleção pelo celular, tablet ou computador e consulte quando precisar.',
  },
  {
    n: '04',
    icon: BookOpen,
    title: '04 — VISUALIZE E PRATIQUE',
    desc: 'Escolha o fundamento que deseja revisar, acompanhe as sequências ilustradas passo a passo e pratique com mais organização.',
  },
];

// FAQ Items (fy)
export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'O QUE ESTÁ INCLUSO NA COLEÇÃO?',
    a: 'Você terá acesso a uma coleção digital com 250 treinos ilustrados passo a passo, incluindo bases, posturas, deslocamentos, golpes, defesas, chutes, equilíbrio, coordenação e sequências de prática.',
  },
  {
    q: 'COMO TEREI ACESSO AO MATERIAL?',
    a: 'Após a confirmação da compra, você receberá as instruções necessárias para acessar seu material digital.',
  },
  {
    q: 'O MATERIAL É DIGITAL OU FÍSICO?',
    a: 'O material é 100% digital e pode ser consultado de forma prática sempre que precisar. Você também poderá imprimir os treinos, caso prefira.',
  },
  {
    q: 'PARA QUEM O MATERIAL É INDICADO?',
    a: 'É indicado para praticantes que desejam estudar, revisar e compreender melhor os fundamentos do Karatê de maneira visual e organizada.',
  },
  {
    q: 'PRECISO TER EXPERIÊNCIA NO KARATÊ?',
    a: 'Não. Os conteúdos apresentam os movimentos de forma visual e progressiva, facilitando a revisão dos fundamentos.',
  },
  {
    q: 'POSSO UTILIZAR O MATERIAL PARA TREINAR EM CASA?',
    a: 'Sim. O material pode ser utilizado como referência complementar para estudo, revisão e prática, sempre respeitando seus limites e treinando em um ambiente adequado.',
  },
  {
    q: 'O MATERIAL INCLUI BASES E DESLOCAMENTOS?',
    a: 'Sim. A coleção reúne treinos que trabalham bases, posturas, distribuição de peso, equilíbrio e diferentes deslocamentos.',
  },
  {
    q: 'TEM GOLPES, DEFESAS E CHUTES?',
    a: 'Sim. Você encontrará treinos ilustrados envolvendo fundamentos de ataque, defesa e chutes, apresentados de forma visual.',
  },
  {
    q: 'POSSO IMPRIMIR OS TREINOS?',
    a: 'Sim. O material pode ser visualizado digitalmente ou impresso para facilitar seus estudos e revisões.',
  },
  {
    q: 'O MATERIAL SUBSTITUI UM PROFESSOR DE KARATÊ?',
    a: 'Não. O material funciona como um recurso complementar de estudo e revisão. A orientação de um instrutor qualificado continua sendo importante para correção individual, segurança e evolução técnica.',
  },
  {
    q: 'O ACESSO É VITALÍCIO?',
    a: 'Sim. Após adquirir o material, você poderá consultá-lo sempre que precisar para revisar e organizar seus estudos.',
  },
  {
    q: 'E SE EU NÃO GOSTAR DO MATERIAL?',
    a: 'Você terá 7 dias após a compra para solicitar o reembolso, conforme as condições da garantia.',
  },
];
