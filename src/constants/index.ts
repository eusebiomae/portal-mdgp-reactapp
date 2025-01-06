import {
  perspective21,
  logo04,
  logo03,
  icon06,
  icon01,
  icon02,
  icon04,
  icon07,
  thumb01Enterprise,
  thumb02Enterprise,
  thumb03Enterprise,
  plant01,
  perspective01,
  perspective02,
  perspective03,
  perspective04,
  perspective05,
  perspective10,
  perspective11,
  perspective13,
  perspective19,
  perspective06,
  obras01,
  logo02,
  logoFGMF,
  logoNitsche,
  fgmf,
  nitche,
  cardim,
  ImgProduto,
  ImgProdutoCard,
  LogoAmira,
  ImgSecondProdutoCard,
  LogoCabral,
  ImgProdutoCard1,
  ImgSecondProdutoCard1,
  ImgProdutoCard2,
  ImgProdutoCard3,
  Pablo,
  Humberto,
  Jayme,
  Marcelo,
  Img01,
  imgObras1,
  imgObras2,
  imgObras3,
  Apartamento,
  IconPhone,
  IconMail,
  IconWhats,
  aboutExcellence,
  revistaEd05,
  revistaEd06,
  amiraBanner,
  andazBanner,
  atmanBanner,
  arboBanner,
  IconWhatsVerde,
} from "@/assets/img";
import { StaticImageData } from "next/image";

export const NAV_LINKS = [
  {
    link: "/enterprises",
    label: "empreendimentos",
  },
  {
    link: "/a-mdgp",
    label: "sobre",
  },
  {
    link: "/blog",
    label: "blog",
  },
  {
    link: "/revista",
    label: "revista",
  },
  {
    link: "/contact",
    label: "contato",
  },
  // {
  //   link: "/espaco-cliente",
  //   label: "área do cliente",
  // },
];

export const HERO = [
  {
    img: ImgProduto,
    status: 'Lançamento',
    title: 'Amira:Vizinho ao Graciosa, no melhor ponto do Cabral',
    link: '/amira-cabral'
  },
  {
    img: ImgProduto,
    status: 'Lançamento',
    title: 'Amira:Vizinho ao Graciosa, no melhor ponto do Cabral',
    link: '/amira-cabral'
  },
]

export const ENTERPRISES_DESTAQ = [
  {
    id: 1,
    img: amiraBanner,
    img2: ImgSecondProdutoCard,
    logo: LogoAmira,
    status: "EM OBRAS",
    slogan: 'Em tudo, a vida',
    meters: '215m² a 415m² de área privativa',
    suites: '3 e 5 suítes',
    address: "Rua Vereador Garcia Rodrigues Velho, 105",
    button: "#",
    slug: "amira",
    name: 'Amira',
  },
];

export const ENTERPRISES_CARDS1 = [
  {
    id: 1,
    img: andazBanner,
    img2: ImgSecondProdutoCard1,
    logo: LogoCabral,
    status: "Pronto",
    slogan: 'andaz cabral. Um lugar sem igual. Igual a você.',
    meters: '180m² a 367m² de área privativa',
    suites: '3 suítes',
    address: "João Américo de Oliveira, 922",
    button: "#",
    name: 'Andáz Cabral',
  },
];

export const ENTERPRISES_CARDS2 = [
  {
    id: 2,
    img_url: perspective21.src,
    logo_url: logo04.src,
    model1: "Residencial",
    model2: "Futuro lançamento",
    name: "Fonseca Rodrigues",
    metragem: "Casas: 614 a 777m²",
    address: "Rua Fonseca Rodrigues, 480 - Pinheiros",
    architecture: "Arquitetura: Tryptyque",
    landscaping: "Paisagismo: Daniel Nunes",
    interiors: "Interiores: Suite Arquitetos",
    button: "#",
  },
];

export const ENTERPRISES_CARDS3 = [
  {
    id: 1,
    img: atmanBanner,
    img2: ImgSecondProdutoCard1,
    logo: LogoCabral,
    status: "100% VENDIDO",
    slogan: 'ÁTMAN CABRAL',
    meters: '209 m² a 573 m² de área privativa',
    suites: '3 ou 4 suítes',
    address: "R. Bom Jesus, 593 / Curitiba",
    button: "#",
    name: 'ÁTMAN Cabral',
  },
];

export const ENTERPRISES_CARDS4 = [
  {
    id: 1,
    img: arboBanner,
    img2: ImgSecondProdutoCard1,
    logo: LogoCabral,
    status: "100% VENDIDO",
    slogan: 'ARBO CABRAL',
    meters: '240m² a 379m² de área privativa',
    suites: '3 ou 4 suítes',
    address: "Rua São Pedro, 42 / Curitiba",
    button: "#",
    name: 'ARBO CABRAL',
  },
];

export const EVOLUTION_CONSTRUCTION_TOTAL = [
  {
    evolution: "Total",
    percents: 17,
  },
];

export const TEXT_CONTACT = [
  {
    title: "Entrar em contato",
    subtitle:
      "Caso você tenha alguma dúvida, sugestão, feedback ou queira fazer uma oferta conosco, essa é a seção adequada para fazê-lo.",
  },
];

export const FABEmail = [
  {
    icon: IconMail,
    label: "Envie um e-mail",
    action: "openEmail",
  },
];
export const FABChat = [
  {
    icon: icon04,
    label: "Fale com um corretor",
    action: "openChat",
  },
];
export const FABWatsapp = [
  {
    icon: IconWhatsVerde,
    label: "Fale pelo WhatsApp",
    action: "openWhatsapp",
  },
];
export const FABPhone = [
  {
    icon: IconPhone,
    label: "Ligamos para você",
    action: "openPhone",
  },
];

export const DIFFERENCES_01 = [
  {
    text1: Pablo,
    text2: "Pablo Slemenson",
    text3: "ARQUITETURA",
    text4: "A estética modernista dos projetos de Pablo Slemenson ganhou visibilidade em seus projetos Cidade Jardim e Casa Brasileira, na cidade de São Paulo. No Amira, essa arquitetura contemporânea e elegante assinada pela PSA Arquitetura se faz presente.",
  },
];
export const DIFFERENCES_02 = [
  {
    text1: Humberto,
    text2: "humberto campana",
    text3: "INSTALAÇÃO ARTÍSTICA",
    text4: "Com peças de design mobiliário presentes em acervos de importantes museus em Paris e Nova Iorque, Humberto Campana prepara uma intervenção artística exclusiva. O Amira será o primeiro empreendimento de Curitiba a receber uma obra desenvolvida pelo estúdio.",
  },
];
export const DIFFERENCES_03 = [
  {
    text1: Jayme,
    text2: "jayme bernardo",
    text3: "INTERIORES",
    text4: "Um dos maiores nomes da arquitetura de alto padrão da atualidade assina o projeto de interiores do Amira. Jayme Bernardo faz de cada ambiente uma experiência de conforto e elegância. As áreas comuns convidam a um passeio calmo e agradável.",
  },
];

export const DIFFERENCES_04 = [
  {
    text1: Marcelo,
    text2: "marcelo faisal",
    text3: "PAISAGISMO",
    text4: "Referência nacional em paisagismo, Faisal cria obras de arte em sintonia com a natureza. Para o Amira, privilegia a vegetação nativa com espécies que se adaptam bem ao clima local, criando uma atmosfera de frescor e tranquilidade em todos os pontos do empreendimento.",
  },
];

export const CAROUSEL_DIFFERENCES = [
  {
    text1: Pablo,
    text2: "Pablo Slemenson",
    text3: "ARQUITETURA",
    text4: "A estética modernista dos projetos de Pablo Slemenson ganhou visibilidade em seus projetos Cidade Jardim e Casa Brasileira, na cidade de São Paulo. No Amira, essa arquitetura contemporânea e elegante assinada pela PSA Arquitetura se faz presente.",
  },
  {
    text1: Humberto,
    text2: "humberto campana",
    text3: "INSTALAÇÃO ARTÍSTICA",
    text4: "Com peças de design mobiliário presentes em acervos de importantes museus em Paris e Nova Iorque, Humberto Campana prepara uma intervenção artística exclusiva. O Amira será o primeiro empreendimento de Curitiba a receber uma obra desenvolvida pelo estúdio.",
  },
  {
    text1: Jayme,
    text2: "jayme bernardo",
    text3: "INTERIORES",
    text4: "Um dos maiores nomes da arquitetura de alto padrão da atualidade assina o projeto de interiores do Amira. Jayme Bernardo faz de cada ambiente uma experiência de conforto e elegância. As áreas comuns convidam a um passeio calmo e agradável.",
  },
  {
    text1: Marcelo,
    text2: "marcelo faisal",
    text3: "PAISAGISMO",
    text4: "Referência nacional em paisagismo, Faisal cria obras de arte em sintonia com a natureza. Para o Amira, privilegia a vegetação nativa com espécies que se adaptam bem ao clima local, criando uma atmosfera de frescor e tranquilidade em todos os pontos do empreendimento.",
  },
];

export const TEXT_PLANTS = [
  {
    title: "Plantas",
    subtitle: "Arquitetura autoral com espaços funcionais.",
  },
];

export const PLANTS = [
  {
    image: plant01,
    title: "92m² | 2 suítes",
    description1:
      "1. Amplos caixilhos das unidades, garantindo iluminação e ventilação naturais.",
    description2:
      "2. Sala para 2 ambientes com espaço para mesa de jantar de 8 lugares.",
    description3:
      "3. Infraestrutura para instalação de churrasqueira a gás no terraço social.",
    description4: "4. Lavanderia separada da cozinha e com ventilação natural.",
  },
  {
    image: plant01,
    title: "92m² | 2 suítes",
    description1:
      "1. Amplos caixilhos das unidades, garantindo iluminação e ventilação naturais.",
    description2:
      "2. Sala para 2 ambientes com espaço para mesa de jantar de 8 lugares.",
    description3:
      "3. Infraestrutura para instalação de churrasqueira a gás no terraço social.",
    description4: "4. Lavanderia separada da cozinha e com ventilação natural.",
  },
  {
    image: plant01,
    title: "92m² | 2 suítes",
    description1:
      "1. Amplos caixilhos das unidades, garantindo iluminação e ventilação naturais.",
    description2:
      "2. Sala para 2 ambientes com espaço para mesa de jantar de 8 lugares.",
    description3:
      "3. Infraestrutura para instalação de churrasqueira a gás no terraço social.",
    description4: "4. Lavanderia separada da cozinha e com ventilação natural.",
  },
];

export const TEXT_TOUR = [
  {
    title: "Tour Virtual",
    subtitle: "Faça o tour virtual e conheça o decorado",
  },
];

export const TEXT_COMMON_AREAS = [
  {
    title: "Áreas comuns",
    subtitle: "Espaços amplos e planejados para você ter toda a comodidade.",
  },
];

export const IMAGES = [
  {
    image: Img01,
    caption: "Sala de Masagem",
  },
  {
    image: Img01,
    caption: "Sala de Masagem",
  },
  {
    image: Img01,
    caption: "Sala de Masagem",
  },
  {
    image: Img01,
    caption: "Sala de Masagem",
  },
];

export const APARTMENTS = [
  {
    image: Apartamento,
    caption: "Sala de estar integrada com cozinha e gourmet",
  },
  {
    image: Apartamento,
    caption: "Sala de estar integrada com cozinha e gourmet",
  },
  {
    image: Apartamento,
    caption: "Sala de estar integrada com cozinha e gourmet",
  },
  {
    image: Apartamento,
    caption: "Sala de estar integrada com cozinha e gourmet",
  },
];

export const PORTFOLIO = [
  {
    image: aboutExcellence,
    captionTitle: "Dom Batel",
    captionYear: "2014",  
    captionType: "Residencial",  
    captionMetragem: "7.231,03 m²",  
    captionAddress: "Al. Dom Pedro II, 825 - Curitiba",  
    captionEmpreendimento: "Cyrela Brazil Realty | MDGP",
  },
  {
    image: aboutExcellence,
    captionTitle: "Dom Batel",
    captionYear: "2014",  
    captionType: "Residencial",  
    captionMetragem: "7.231,03 m²",  
    captionAddress: "Al. Dom Pedro II, 825 - Curitiba",  
    captionEmpreendimento: "Cyrela Brazil Realty | MDGP",
  },
  {
    image: aboutExcellence,
    captionTitle: "Dom Batel",
    captionYear: "2014",  
    captionType: "Residencial",  
    captionMetragem: "7.231,03 m²",  
    captionAddress: "Al. Dom Pedro II, 825 - Curitiba",  
    captionEmpreendimento: "Cyrela Brazil Realty | MDGP",
  }

];

export const REVISTA = [
  {
    image: revistaEd05,
    captionEdition: "Edição 05",
    captionResume: "O arquiteto Pablo Slemenson, que assina o próximo empreendimento, é um dos principais nomes no segmento de alto padrão no Brasil.",
  },
  {
    image: revistaEd06,
    captionEdition: "Edição 06",
    captionResume: "Estúdio Campana traz a Curitiba uma instalação artística exclusiva.",
  },
  {
    image: revistaEd05,
    captionEdition: "Edição 05",
    captionResume: "O arquiteto Pablo Slemenson, que assina o próximo empreendimento, é um dos principais nomes no segmento de alto padrão no Brasil.",
  },
  {
    image: revistaEd06,
    captionEdition: "Edição 06",
    captionResume: "Estúdio Campana traz a Curitiba uma instalação artística exclusiva.",
  },
  {
    image: revistaEd05,
    captionEdition: "Edição 05",
    captionResume: "O arquiteto Pablo Slemenson, que assina o próximo empreendimento, é um dos principais nomes no segmento de alto padrão no Brasil.",
  },
  {
    image: revistaEd06,
    captionEdition: "Edição 06",
    captionResume: "Estúdio Campana traz a Curitiba uma instalação artística exclusiva.",
  },
  {
    image: revistaEd05,
    captionEdition: "Edição 05",
    captionResume: "O arquiteto Pablo Slemenson, que assina o próximo empreendimento, é um dos principais nomes no segmento de alto padrão no Brasil.",
  },
  {
    image: revistaEd06,
    captionEdition: "Edição 06",
    captionResume: "Estúdio Campana traz a Curitiba uma instalação artística exclusiva.",
  },
  {
    image: revistaEd05,
    captionEdition: "Edição 05",
    captionResume: "O arquiteto Pablo Slemenson, que assina o próximo empreendimento, é um dos principais nomes no segmento de alto padrão no Brasil.",
  },

];

export const IMAGESOBRAS = [
  {
    image: imgObras1,
    caption: "Março - 2024",
  },
  {
    image: imgObras2,
    caption: "Março - 2024",
  },
  {
    image: imgObras3,
    caption: "Abril - 2024",
  },
];

type TPropsListImages = {
  size?: number;
  src?: StaticImageData;
  height?: number;
  width?: number;
  caption: string;
};

export const listImagesTourVirtual: TPropsListImages[] = [
  {
    src: perspective01,
    caption: "Image 01",
  },
  {
    src: perspective02,
    caption: "Image 02",
  },
  {
    src: perspective03,
    caption: "Image 03",
  },
  {
    src: perspective04,
    caption: "Image 04",
  },
];

export const listImagesObras: TPropsListImages[] = [
  {
    src: imgObras1,
    caption: "Março - 2024",
  },
  {
    src: imgObras2,
    caption: "Março - 2024",
  },
  {
    src: imgObras3,
    caption: "Abril - 2024",
  },
];

export const listImages: TPropsListImages[] = [
  {
    size: 2,
    src: perspective10,
    height: 100,
    width: 100,
    caption: "Perspectiva ilustrada do Acesso",
  },
  {
    size: 1,
    src: perspective19,
    height: 100,
    width: 100,
    caption: "Perspectiva ilustrada da Fachada",
  },
  {
    size: 1,
    src: perspective13,
    height: 100,
    width: 100,
    caption: "Perspectiva ilustrada do Salão de Festas",
  },
  {
    size: 1,
    src: perspective06,
    height: 100,
    width: 100,
    caption: "Perspectiva ilustrada da Churrasqueira",
  },
  {
    size: 1,
    src: perspective11,
    height: 100,
    width: 100,
    caption: "Perspectiva ilustrada do Coworking",
  },
  {
    size: 2,
    src: perspective03,
    height: 100,
    width: 100,
    caption: "Perspectiva ilustrada da Brinquedoteca",
  },
];

export const CONSETN_FORM = [
  {
    strong1: "Estou ciente e de acordo",
    text1:
      " em disponibilizar meus dados pessoais para obtenção de informações sobre o empreendimento Toca 55 e de que os dados coletados poderão ser compartilhados com as empresas parceiras listadas neste site, doravante denominadas somente como “Parceiras”, para fins promocionais, publicitários e estatísticos relacionados à comercialização de imóveis.",
    text2:
      "Autorizo que a Toca 55 e/ou suas Parceiras, como definido anteriormente, utilizem os meus dados pessoais para a finalidade exclusiva de utilização dos dados para a oferta deste e de outros empreendimentos e venda de imóveis.",
    strong2: "Estou ciente",
    text3:
      " de que este consentimento serve para atendimento aos requisitos da Lei nº 13.709/18 (Lei Geral de Proteção de Dados) e, a qualquer momento, poderei revogá-lo, devendo comunicar a decisão pelo e-mail ",
    email: "toca55@gmail.com.",
    text4:
      "Memorial de Incorporação registrado na matrícula XXX.XXX do 1° Cartório de Registros de Imóveis da Comarca de São Paulo/SP. Todas as imagens são meramente ilustrativas. Móveis e utensílios são sugestões de decoração. Mobiliário e materiais de acabamento serão entregues conforme memorial descritivo.",
  },
];
