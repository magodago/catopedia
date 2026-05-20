// =============================================
// Catopedia — Cat Breeds Database & Interactive UI
// Built by JARVIS Agent NEO
// =============================================

const breeds = [
  {
    id: "siames",
    name: "Siamés",
    nameEng: "Siamese",
    origin: "Tailandia (antigua Siam)",
    type: "pelo-corto",
    desc: "Una de las razas más antiguas y reconocibles del mundo. Los siameses son gatos extremadamente vocales, inteligentes y leales a sus dueños. Son famosos por su patrón 'colorpoint' con cuerpo claro y extremidades oscuras, y sus penetrantes ojos azules almendrados.",
    history: "Originarios de Siam (actual Tailandia), donde eran considerados gatos sagrados en templos budistas y guardianes de la realeza. Llegaron a Occidente en el siglo XIX como regalo diplomático.",
    temperament: "Extremadamente sociables, vocales y demandantes de atención. Forman vínculos muy fuertes con una persona. Les encanta 'hablar' con maullidos fuertes y variados.",
    img: "https://placekitten.com/800/600",
    weight: "3-5 kg",
    lifespan: "12-20 años",
    personality: "Vocal, cariñoso, inteligente",
    colors: ["Seal point", "Blue point", "Chocolate point", "Lilac point"],
    care: "Cepillado semanal. Propensos a problemas respiratorios y dentales. Necesitan mucha estimulación mental y compañía."
  },
  {
    id: "persa",
    name: "Persa",
    nameEng: "Persian",
    origin: "Persia (actual Irán)",
    type: "pelo-largo",
    desc: "El Persa es el epítome del gato de lujo: rostro plano, pelaje exuberante y temperamento tranquilo. Son gatos tranquilos y dulces, perfectos para hogares silenciosos. Requieren un cuidado diario de su espectacular pelaje.",
    history: "Sus ancestros llegaron a Europa desde Persia en el siglo XVII. La reina Victoria de Inglaterra fue una gran admiradora de la raza, lo que popularizó su crianza selectiva.",
    temperament: "Tranquilos, dulces y algo distantes con extraños. Prefieren ambientes serenos. Excelentes gatos de compañía que raramente exigen atención de forma activa.",
    img: "https://placekitten.com/801/601",
    weight: "3.5-7 kg",
    lifespan: "12-17 años",
    personality: "Tranquilo, dulce, majestuoso",
    colors: ["Blanco", "Negro", "Azul", "Crema", "Chocolate", "Lila", "Bicolor"],
    care: "Cepillado DIARIO obligatorio. Limpieza ocular frecuente. Propensos a problemas renales poliquísticos y respiratorios por su cara plana."
  },
  {
    id: "maine-coon",
    name: "Maine Coon",
    nameEng: "Maine Coon",
    origin: "Estados Unidos (Maine)",
    type: "pelo-largo",
    tags: ["gigante"],
    desc: "El gigante gentil del mundo felino. El Maine Coon es la raza doméstica más grande, con machos que pueden superar los 10 kg. Son gatos amigables, juguetones y sorprendentemente cariñosos, conocidos como 'perros con piel de gato'.",
    history: "Raza natural del estado de Maine. La leyenda dice que descienden de gatos de María Antonieta. Se adaptaron al duro invierno de Nueva Inglaterra con su pelaje denso y cola tupida.",
    temperament: "Juguetones, inteligentes y muy familiares. Les encanta el agua (inusual en gatos). Buenos con niños y otras mascotas. Maúllan poco pero emiten trinos curiosos.",
    img: "https://placekitten.com/802/602",
    weight: "5-11 kg (machos)",
    lifespan: "12-15 años",
    personality: "Gentil, juguetón, familiar",
    colors: ["Marrón tabby", "Negro", "Blanco", "Rojo", "Plateado", "Carey"],
    care: "Cepillado 2-3 veces por semana. Propensos a displasia de cadera y cardiomiopatía hipertrófica. Necesitan espacio para moverse."
  },
  {
    id: "bengali",
    name: "Bengalí",
    nameEng: "Bengal",
    origin: "Estados Unidos (híbrido)",
    type: "pelo-corto",
    desc: "Con un pelaje que parece salido de la selva, el Bengalí es un gato de aspecto salvaje con manchas de leopardo. Son atléticos, enérgicos y extremadamente inteligentes. Les encanta trepar, nadar y jugar con agua.",
    history: "Creados en los años 60 cruzando gatos domésticos con el leopardo asiático (Prionailurus bengalensis). Buscaban preservar la belleza del felino salvaje con temperamento doméstico.",
    temperament: "Hiperactivos, curiosos y demandantes. Necesitan MUCHA estimulación. Aprenden trucos y les encanta el agua. No son gatos para dueños ausentes.",
    img: "https://placekitten.com/803/603",
    weight: "4-7 kg",
    lifespan: "12-16 años",
    personality: "Enérgico, curioso, inteligente",
    colors: ["Brown spotted", "Snow", "Silver", "Charcoal", "Blue"],
    care: "Necesitan ejercicio diario intenso. Enriquecimiento ambiental obligatorio (árboles, juguetes interactivos). Cepillado semanal."
  },
  {
    id: "sphynx",
    name: "Sphynx / Esfinge",
    nameEng: "Sphynx",
    origin: "Canadá",
    type: "sin-pelo",
    desc: "El gato sin pelo más famoso del mundo. El Sphynx es cálido al tacto, extremadamente cariñoso y lleno de energía. A pesar de su aspecto frágil, son gatos robustos y muy sociables que odian estar solos.",
    history: "La mutación sin pelo apareció naturalmente en Toronto en 1966. Mediante cría selectiva se estableció la raza. No son completamente calvos: tienen una pelusa fina como de melocotón.",
    temperament: "Extremadamente sociables y dependientes. Les encanta estar con personas y otros animales. Muy activos y payasos. Buscan calor constantemente.",
    img: "https://placekitten.com/804/604",
    weight: "3-5 kg",
    lifespan: "12-15 años",
    personality: "Cariñoso, dependiente, payaso",
    colors: ["Todos los colores y patrones (visibles en la piel)", "Negro", "Blanco", "Bicolor", "Carey"],
    care: "Baños semanales (su piel produce más grasa). Proteger del sol y del frío. Limpieza de orejas frecuente."
  },
  {
    id: "abisinio",
    name: "Abisinio",
    nameEng: "Abyssinian",
    origin: "Etiopía (Abisinia)",
    type: "pelo-corto",
    desc: "Elegante y atlético, el Abisinio parece una pequeña pantera dorada. Su pelaje 'ticked' (cada pelo con bandas de color) le da un brillo único. Son gatos curiosos, activos y siempre explorando — raramente los verás quietos.",
    history: "Una de las razas más antiguas, supuestamente descendiente de los gatos sagrados del Antiguo Egipto. La raza moderna se desarrolló en Inglaterra en el siglo XIX.",
    temperament: "Curiosos, activos y muy inteligentes. Siempre están en movimiento, explorando cada rincón. Les encantan las alturas. No son gatos falderos pero sí muy afectuosos a su manera.",
    img: "https://placekitten.com/805/605",
    weight: "3-5 kg",
    lifespan: "12-15 años",
    personality: "Curioso, atlético, explorador",
    colors: ["Ruddy (leonado)", "Sorrel (canela)", "Azul", "Fawn (cervato)"],
    care: "Cepillado ocasional. Necesitan espacios verticales para trepar. Propensos a gingivitis y amiloidosis renal."
  },
  {
    id: "ragdoll",
    name: "Ragdoll",
    nameEng: "Ragdoll",
    origin: "Estados Unidos",
    type: "pelo-semilargo",
    desc: "Famosos por relajarse completamente al ser cargados (como un 'muñeco de trapo'), los Ragdolls son gatos grandes, dóciles y extremadamente cariñosos. Tienen ojos azules intensos y un pelaje sedoso que apenas se enreda.",
    history: "Creados en California en los años 60 por Ann Baker. La leyenda dice que son tan dóciles por una mutación genética, aunque realmente es selección por temperamento.",
    temperament: "Dóciles, tranquilos y muy cariñosos. Suelen seguir a sus dueños por la casa. Buenos con niños y otras mascotas. Poco callejeros: mejor gatos de interior.",
    img: "https://placekitten.com/806/606",
    weight: "4-9 kg",
    lifespan: "12-17 años",
    personality: "Dócil, cariñoso, tranquilo",
    colors: ["Seal point", "Blue point", "Chocolate", "Lilac", "Bicolor", "Mitted"],
    care: "Cepillado 2 veces por semana. Propensos a cardiomiopatía hipertrófica. Alimentación controlada para evitar obesidad."
  },
  {
    id: "british-shorthair",
    name: "Británico de Pelo Corto",
    nameEng: "British Shorthair",
    origin: "Reino Unido",
    type: "pelo-corto",
    desc: "Robusto, redondo y con una expresión perpetuamente seria, el British Shorthair es el osito de peluche del mundo felino. Son gatos tranquilos, independientes y muy leales, aunque no especialmente efusivos.",
    history: "Descendiente de los gatos romanos que llegaron a Britania hace 2000 años. La raza moderna se refinó en el siglo XIX, y el azul británico es su color más icónico.",
    temperament: "Tranquilos, reservados y dignos. No son gatos falderos pero disfrutan de la compañía cercana. Se adaptan bien a la vida en apartamento. Poco vocales.",
    img: "https://placekitten.com/807/607",
    weight: "4-8 kg",
    lifespan: "14-20 años",
    personality: "Tranquilo, digno, leal",
    colors: ["Azul", "Lila", "Chocolate", "Negro", "Blanco", "Crema", "Carey"],
    care: "Cepillado semanal. Propensos a obesidad (controlar alimentación). Pueden desarrollar cardiomiopatía hipertrófica."
  },
  {
    id: "siberiano",
    name: "Siberiano",
    nameEng: "Siberian",
    origin: "Rusia (Siberia)",
    type: "pelo-semilargo",
    tags: ["gigante"],
    desc: "El gato nacional de Rusia, criado por la naturaleza en los bosques siberianos. Son gatos grandes, musculosos y con triple capa de pelaje impermeable. Sorprendentemente, producen menos proteína Fel d1, siendo más tolerables para alérgicos.",
    history: "Raza natural de Siberia documentada desde hace más de 1000 años. Sobrevivían en los duros inviernos rusos. Llegaron a Occidente tras la caída de la URSS en los 90.",
    temperament: "Juguetones, valientes y muy inteligentes. Les encanta el agua. Buenos cazadores. Afectuosos sin ser pegajosos. Se adaptan bien a familias.",
    img: "https://placekitten.com/808/608",
    weight: "5-9 kg",
    lifespan: "12-15 años",
    personality: "Valiente, juguetón, hipoalergénico",
    colors: ["Brown tabby", "Negro", "Azul", "Rojo", "Blanco", "Carey"],
    care: "Cepillado frecuente en época de muda. Muy saludables en general. Necesitan espacio y estímulos."
  },
  {
    id: "scottish-fold",
    name: "Scottish Fold",
    nameEng: "Scottish Fold",
    origin: "Escocia, Reino Unido",
    type: "pelo-corto",
    desc: "Inconfundibles por sus orejas plegadas hacia adelante, los Scottish Fold parecen pequeños búhos. Son gatos dulces, tranquilos y muy adaptables. Su mutación genética les da ese aspecto adorable.",
    history: "Todos descienden de 'Susie', una gata de granja escocesa con orejas plegadas descubierta en 1961. La raza se desarrolló cruzando con British Shorthairs y American Shorthairs.",
    temperament: "Dulces, tranquilos y muy adaptables. Suelen dormir en posiciones graciosas (boca arriba, sentados como humanos). Buenos con niños y otras mascotas.",
    img: "https://placekitten.com/809/609",
    weight: "3-6 kg",
    lifespan: "11-15 años",
    personality: "Dulce, adaptable, gracioso",
    colors: ["Todos los colores y patrones", "Azul", "Lila", "Negro", "Blanco", "Bicolor"],
    care: "Cepillado semanal. Revisar orejas regularmente. Propensos a osteocondrodisplasia (problema articular hereditario)."
  },
  {
    id: "savannah",
    name: "Savannah",
    nameEng: "Savannah",
    origin: "Estados Unidos (híbrido)",
    type: "pelo-corto",
    tags: ["exotico", "gigante"],
    desc: "El gato doméstico más alto del mundo, resultado del cruce entre un gato doméstico y un serval africano. Con patas largas, orejas enormes y pelaje moteado, parece un pequeño guepardo. Gato para expertos.",
    history: "Primer cruce exitoso en 1986. La raza busca preservar la belleza del serval salvaje. Las generaciones F1 y F2 (más cercanas al serval) son más grandes y requieren dueños con experiencia.",
    temperament: "Extremadamente inteligentes, enérgicos y leales como perros. Aprenden a pasear con correa. Muy vocales. Necesitan dueños dedicados con mucho tiempo.",
    img: "https://placekitten.com/810/610",
    weight: "6-12 kg",
    lifespan: "12-20 años",
    personality: "Leal, enérgico, inteligente",
    colors: ["Brown spotted tabby", "Silver spotted", "Black smoke"],
    care: "ALTA demanda de ejercicio y estimulación. Pueden ser destructivos si se aburren. Legalidad varía por país. Alimentación de alta calidad."
  },
  {
    id: "noruego",
    name: "Bosque de Noruega",
    nameEng: "Norwegian Forest Cat",
    origin: "Noruega",
    type: "pelo-largo",
    tags: ["gigante"],
    desc: "El 'Wegie' es un gato majestuoso criado por los bosques escandinavos. Su doble capa de pelaje repelente al agua y su cola tupida les protegen del frío extremo. Son excelentes trepadores y cazadores natos.",
    history: "Mencionados en la mitología nórdica: la diosa Freya tenía un carro tirado por gatos del bosque. Casi se extinguen en la Segunda Guerra Mundial; fueron salvados por un programa de cría noruego.",
    temperament: "Aventureros, valientes y cariñosos. Grandes trepadores (¡bajan árboles cabeza abajo!). Afectuosos sin ser demandantes. Buenos con familias.",
    img: "https://placekitten.com/811/611",
    weight: "5-9 kg",
    lifespan: "14-16 años",
    personality: "Aventurero, valiente, cariñoso",
    colors: ["Brown tabby", "Negro", "Azul", "Rojo", "Blanco", "Carey"],
    care: "Cepillado frecuente en primavera/otoño (mudan mucho). Propensos a glucogenosis tipo IV. Necesitan árboles para gatos altos."
  },
  {
    id: "oriental",
    name: "Oriental de Pelo Corto",
    nameEng: "Oriental Shorthair",
    origin: "Reino Unido / Tailandia",
    type: "pelo-corto",
    desc: "Primos del Siamés pero con un arcoíris de colores (¡más de 300 combinaciones!). Son gatos esbeltos, elegantes, con orejas enormes y personalidad extrovertida. Muy vocales y demandantes de atención.",
    history: "Desarrollados en Inglaterra cruzando siameses con otras razas para introducir nuevos colores. Heredaron la personalidad vocal del Siamés con una paleta de colores infinita.",
    temperament: "Extrovertidos, vocales y muy cariñosos. Demandan atención constantemente. Excelentes con niños y visitas. Necesitan compañía; odian la soledad.",
    img: "https://placekitten.com/812/612",
    weight: "3-5 kg",
    lifespan: "12-15 años",
    personality: "Extrovertido, vocal, cariñoso",
    colors: ["Ébano", "Blanco", "Azul", "Lavanda", "Canela", "Fawn", "Carey", "+300 variedades"],
    care: "Cepillado semanal. Propensos a problemas dentales y hepáticos (amiloidosis). Necesitan mucha interacción social."
  },
  {
    id: "burmes",
    name: "Birmano / Sagrado de Birmania",
    nameEng: "Birman",
    origin: "Birmania (Myanmar) / Francia",
    type: "pelo-semilargo",
    desc: "Con sus guantes blancos en las patas y ojos zafiro, el Birmano es una de las razas más bellas. Su pelaje sedoso no se enreda y su temperamento dulce los convierte en compañeros ideales. Son el equilibrio perfecto entre Persa y Siamés.",
    history: "Según la leyenda, eran gatos sagrados en templos birmanos. La raza moderna se estableció en Francia en los años 20. Casi desaparecen tras la Segunda Guerra Mundial.",
    temperament: "Dulces, equilibrados y sociables. Ni tan demandantes como el Siamés ni tan pasivos como el Persa. Buenos con niños. Les gusta estar cerca pero no encima.",
    img: "https://placekitten.com/813/613",
    weight: "4-6 kg",
    lifespan: "12-16 años",
    personality: "Dulce, equilibrado, sociable",
    colors: ["Seal point", "Blue point", "Chocolate", "Lilac", "Red", "Crema"],
    care: "Cepillado 2 veces por semana. Propensos a cardiomiopatía hipertrófica. Revisión dental regular."
  },
  {
    id: "bombay",
    name: "Bombay",
    nameEng: "Bombay",
    origin: "Estados Unidos",
    type: "pelo-corto",
    desc: "La pantera en miniatura: completamente negro, con ojos dorados cobrizos y pelaje brillante como charol. El Bombay es un gato sociable, juguetón y sorprendentemente cariñoso. Parece salvaje pero es puro terciopelo.",
    history: "Creado en los años 50 en Kentucky cruzando gatos Burmese con American Shorthair negros. El objetivo era crear un 'pantera miniatura' con personalidad dócil.",
    temperament: "Sociables, juguetones y muy apegados a sus dueños. Buenos con visitas. Les gusta estar en el centro de atención. Ronronean mucho y fuerte.",
    img: "https://placekitten.com/814/614",
    weight: "3-5 kg",
    lifespan: "12-18 años",
    personality: "Sociable, juguetón, apegado",
    colors: ["Negro azabache (único color aceptado)"],
    care: "Mínimo cepillado. Propensos a problemas respiratorios (por su hocico corto). Alimentación controlada."
  },
  {
    id: "angora-turco",
    name: "Angora Turco",
    nameEng: "Turkish Angora",
    origin: "Turquía (Ankara)",
    type: "pelo-semilargo",
    desc: "Elegancia pura: cuerpo esbelto, pelaje blanco como la nieve y ojos que pueden ser de distinto color (heterocromía). El Angora Turco es inteligente, ágil y decidido. Un tesoro nacional turco protegido por ley.",
    history: "Raza natural de Ankara documentada desde el siglo XV. Los ejemplares blancos de ojos azules o dispares son los más valorados. En Turquía, el zoo de Ankara mantiene un programa de conservación.",
    temperament: "Inteligentes, decididos y un poco mandones. Muy ágiles y buenos trepadores. Afectuosos pero en sus términos. Algo traviesos.",
    img: "https://placekitten.com/815/615",
    weight: "3-5 kg",
    lifespan: "12-18 años",
    personality: "Elegante, inteligente, decidido",
    colors: ["Blanco (el clásico)", "Negro", "Azul", "Rojo", "Carey"],
    care: "Cepillado 2-3 veces por semana. Propensos a sordera congénita (especialmente blancos de ojos azules). Revisión cardíaca."
  },
  {
    id: "ruso-azul",
    name: "Azul Ruso",
    nameEng: "Russian Blue",
    origin: "Rusia (Arcángel)",
    type: "pelo-corto",
    desc: "El gato más fotogénico del mundo: pelaje azul plateado con puntas brillantes, ojos verde esmeralda y una sonrisa enigmática (efecto 'Mona Lisa'). Tímidos con extraños pero muy leales con su familia.",
    history: "Originarios del puerto de Arcángel, en el norte de Rusia. Los marineros los llevaron a Inglaterra en el siglo XIX. Sobrevivieron gracias a cruces con siameses y británicos tras las guerras mundiales.",
    temperament: "Tímidos con extraños, muy leales con su familia. Tranquilos y reservados. Les gusta la rutina. Pueden ser juguetones en privado. Producen menos Fel d1 (mejor para alérgicos).",
    img: "https://placekitten.com/816/616",
    weight: "3-5 kg",
    lifespan: "15-20 años",
    personality: "Tímido, leal, elegante",
    colors: ["Azul plateado (único color)"],
    care: "Mínimo cepillado. Muy saludables. Necesitan hogares tranquilos y rutinas estables."
  },
  {
    id: "korat",
    name: "Korat",
    nameEng: "Korat",
    origin: "Tailandia",
    type: "pelo-corto",
    desc: "Conocido como 'Si-Sawat' (buena fortuna) en Tailandia, el Korat tiene un pelaje azul plateado y ojos verdes luminosos. Son gatos que traen suerte y se regalan tradicionalmente en bodas tailandesas.",
    history: "Mencionado en el 'Tamra Maew' (Libro de Poemas del Gato) tailandés del siglo XIV. Raza natural nunca cruzada. Llegaron a Occidente en los años 50.",
    temperament: "Cariñosos, atentos y algo posesivos con sus dueños. Inteligentes y buenos aprendiendo trucos. Prefieren ambientes tranquilos. Muy sensibles a los ruidos fuertes.",
    img: "https://placekitten.com/817/617",
    weight: "3-4.5 kg",
    lifespan: "12-16 años",
    personality: "Suertudo, cariñoso, sensible",
    colors: ["Azul plateado (único)"],
    care: "Cepillado semanal. Propensos a gangliosidosis. Sensibles a vacunas y anestesia."
  },
  {
    id: "himalayo",
    name: "Himalayo",
    nameEng: "Himalayan",
    origin: "Estados Unidos / Reino Unido",
    type: "pelo-largo",
    desc: "La fusión perfecta entre Persa y Siamés: el cuerpo y pelaje del Persa con el patrón colorpoint del Siamés. Tienen la misma cara plana adorable y el temperamento tranquilo del Persa, con el toque de color del Siamés.",
    history: "Creado en los años 30 cruzando Persas con Siameses para obtener el patrón de color. Algunas asociaciones los consideran una variedad del Persa, otras una raza separada.",
    temperament: "Tranquilos, dulces y silenciosos. Perfectos gatos de apartamento. Disfrutan de la compañía sin ser demandantes. Algo más activos que los Persas puros.",
    img: "https://placekitten.com/818/618",
    weight: "3.5-5.5 kg",
    lifespan: "12-15 años",
    personality: "Tranquilo, dulce, elegante",
    colors: ["Seal point", "Blue point", "Chocolate", "Lilac", "Flame point", "Crema"],
    care: "Cepillado diario obligatorio. Limpieza ocular frecuente. Mismos problemas de salud que el Persa (respiratorios, renales)."
  },
  {
    id: "manx",
    name: "Manx",
    nameEng: "Manx",
    origin: "Isla de Man (Reino Unido)",
    type: "pelo-corto",
    desc: "El gato sin cola de la Isla de Man. Su ausencia de cola (o cola muy corta) es su rasgo más distintivo. Son gatos robustos, redondos, excelentes cazadores y con una personalidad casi canina.",
    history: "Raza natural de la Isla de Man, donde una mutación genética eliminó la cola. El aislamiento geográfico fijó el rasgo. Considerados gatos de la suerte por los marineros.",
    temperament: "Juguetones, inteligentes y muy leales. Buenos cazadores. Les gusta jugar a buscar objetos. Se adaptan bien a familias activas.",
    img: "https://placekitten.com/819/619",
    weight: "3.5-5.5 kg",
    lifespan: "12-16 años",
    personality: "Juguetón, leal, sin cola",
    colors: ["Todos los colores y patrones"],
    care: "Cepillado semanal. El gen sin cola puede causar problemas espinales (Síndrome de Manx). Cría ética importante."
  }
];

// =========== STATE ===========
let currentFilter = 'all';
let searchQuery = '';

// =========== RENDER ===========
function renderBreeds() {
  const grid = document.getElementById('breedsGrid');
  const noResults = document.getElementById('noResults');
  let filtered = breeds;

  // Filter by type
  if (currentFilter !== 'all') {
    filtered = filtered.filter(b => {
      if (currentFilter === 'gigante') return b.tags && b.tags.includes('gigante');
      if (currentFilter === 'exotico') return b.tags && b.tags.includes('exotico');
      return b.type === currentFilter;
    });
  }

  // Filter by search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.nameEng.toLowerCase().includes(q) ||
      b.origin.toLowerCase().includes(q) ||
      b.desc.toLowerCase().includes(q) ||
      b.temperament.toLowerCase().includes(q)
    );
  }

  // Update breed count
  document.getElementById('breedCount').textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = filtered.map(b => {
    const badgeClass = b.type === 'pelo-corto' ? 'badge-pelo-corto' :
                       b.type === 'pelo-largo' ? 'badge-pelo-largo' :
                       b.type === 'pelo-semilargo' ? 'badge-pelo-semilargo' :
                       b.type === 'sin-pelo' ? 'badge-sin-pelo' : '';
    let badgeText = '';
    if (b.tags && b.tags.includes('gigante')) {
      badgeText = 'Gigante';
    } else if (b.type === 'pelo-corto') badgeText = 'Pelo Corto';
    else if (b.type === 'pelo-largo') badgeText = 'Pelo Largo';
    else if (b.type === 'pelo-semilargo') badgeText = 'Pelo Semilargo';
    else if (b.type === 'sin-pelo') badgeText = 'Sin Pelo';

    const altBadgeClass = (b.tags && b.tags.includes('gigante')) ? 'badge-gigante' : badgeClass;

    return `
      <div class="breed-card" onclick="openBreed('${b.id}')" data-id="${b.id}">
        <div class="breed-card-img">
          <img src="${b.img}" alt="${b.name}" loading="lazy" onerror="this.src='https://placekitten.com/400/300'">
          <span class="breed-card-badge ${altBadgeClass}">${badgeText}</span>
        </div>
        <div class="breed-card-body">
          <h3 class="breed-card-name">${b.name}</h3>
          <p class="breed-card-origin">📍 ${b.origin}</p>
          <p class="breed-card-desc">${b.desc}</p>
          <div class="breed-card-stats">
            <div class="breed-stat"><span class="breed-stat-val">${b.weight}</span><span class="breed-stat-label">Peso</span></div>
            <div class="breed-stat"><span class="breed-stat-val">${b.lifespan}</span><span class="breed-stat-label">Vida</span></div>
            <div class="breed-stat"><span class="breed-stat-val">${b.personality.split(',')[0]}</span><span class="breed-stat-label">Personalidad</span></div>
          </div>
        </div>
      </div>`;
  }).join('');
}

// =========== MODAL ===========
function openBreed(id) {
  const breed = breeds.find(b => b.id === id);
  if (!breed) return;

  const modal = document.getElementById('breedModal');
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <img src="${breed.img}" alt="${breed.name}" class="modal-hero-img" onerror="this.src='https://placekitten.com/700/400'">
    <div class="modal-body">
      <h2 class="modal-breed-name">${breed.name}</h2>
      <p class="modal-breed-name-eng">${breed.nameEng} • 📍 ${breed.origin}</p>

      <div class="modal-stats-grid">
        <div class="modal-stat-box"><div class="val">${breed.weight}</div><div class="lbl">Peso</div></div>
        <div class="modal-stat-box"><div class="val">${breed.lifespan}</div><div class="lbl">Esperanza de vida</div></div>
        <div class="modal-stat-box"><div class="val">${breed.colors.length}</div><div class="lbl">Variedades de color</div></div>
      </div>

      <div class="modal-section">
        <h3>📖 Descripción</h3>
        <p>${breed.desc}</p>
      </div>

      <div class="modal-section">
        <h3>📜 Historia</h3>
        <p>${breed.history}</p>
      </div>

      <div class="modal-section">
        <h3>🧠 Temperamento</h3>
        <p>${breed.temperament}</p>
      </div>

      <div class="modal-section">
        <h3>🎨 Colores</h3>
        <ul>${breed.colors.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>

      <div class="modal-section">
        <h3>🏥 Cuidados y Salud</h3>
        <p>${breed.care}</p>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Close on background click
  overlay.onclick = function(e) {
    if (e.target === overlay) closeBreed();
  };
}

function closeBreed() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Keyboard: Escape to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBreed();
});

// =========== FILTERS ===========
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', function() {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.filter;
    renderBreeds();
  });
});

// =========== SEARCH ===========
document.getElementById('searchInput').addEventListener('input', function(e) {
  searchQuery = e.target.value;
  renderBreeds();
});

// =========== INIT ===========
document.addEventListener('DOMContentLoaded', () => {
  renderBreeds();
  // Set initial breed count
  document.getElementById('breedCount').textContent = breeds.length;
});

// Modal close button
document.getElementById('modalClose').addEventListener('click', closeBreed);
