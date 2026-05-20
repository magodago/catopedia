     1|// =============================================
     2|// Catopedia — Cat Breeds Database & Interactive UI
     3|// Built by JARVIS Agent NEO
     4|// =============================================
     5|
     6|const breeds = [
     7|  {
     8|    id: "siames",
     9|    name: "Siamés",
    10|    nameEng: "Siamese",
    11|    origin: "Tailandia (antigua Siam)",
    12|    type: "pelo-corto",
    13|    desc: "Una de las razas más antiguas y reconocibles del mundo. Los siameses son gatos extremadamente vocales, inteligentes y leales a sus dueños. Son famosos por su patrón 'colorpoint' con cuerpo claro y extremidades oscuras, y sus penetrantes ojos azules almendrados.",
    14|    history: "Originarios de Siam (actual Tailandia), donde eran considerados gatos sagrados en templos budistas y guardianes de la realeza. Llegaron a Occidente en el siglo XIX como regalo diplomático.",
    15|    temperament: "Extremadamente sociables, vocales y demandantes de atención. Forman vínculos muy fuertes con una persona. Les encanta 'hablar' con maullidos fuertes y variados.",
    16|    img: "https://images.unsplash.com/photo-1611915387289-08be07d7ce0d?w=800&h=600&fit=crop",
    17|    weight: "3-5 kg",
    18|    lifespan: "12-20 años",
    19|    personality: "Vocal, cariñoso, inteligente",
    20|    colors: ["Seal point", "Blue point", "Chocolate point", "Lilac point"],
    21|    care: "Cepillado semanal. Propensos a problemas respiratorios y dentales. Necesitan mucha estimulación mental y compañía."
    22|  },
    23|  {
    24|    id: "persa",
    25|    name: "Persa",
    26|    nameEng: "Persian",
    27|    origin: "Persia (actual Irán)",
    28|    type: "pelo-largo",
    29|    desc: "El Persa es el epítome del gato de lujo: rostro plano, pelaje exuberante y temperamento tranquilo. Son gatos tranquilos y dulces, perfectos para hogares silenciosos. Requieren un cuidado diario de su espectacular pelaje.",
    30|    history: "Sus ancestros llegaron a Europa desde Persia en el siglo XVII. La reina Victoria de Inglaterra fue una gran admiradora de la raza, lo que popularizó su crianza selectiva.",
    31|    temperament: "Tranquilos, dulces y algo distantes con extraños. Prefieren ambientes serenos. Excelentes gatos de compañía que raramente exigen atención de forma activa.",
    32|    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
    33|    weight: "3.5-7 kg",
    34|    lifespan: "12-17 años",
    35|    personality: "Tranquilo, dulce, majestuoso",
    36|    colors: ["Blanco", "Negro", "Azul", "Crema", "Chocolate", "Lila", "Bicolor"],
    37|    care: "Cepillado DIARIO obligatorio. Limpieza ocular frecuente. Propensos a problemas renales poliquísticos y respiratorios por su cara plana."
    38|  },
    39|  {
    40|    id: "maine-coon",
    41|    name: "Maine Coon",
    42|    nameEng: "Maine Coon",
    43|    origin: "Estados Unidos (Maine)",
    44|    type: "pelo-largo",
    45|    tags: ["gigante"],
    46|    desc: "El gigante gentil del mundo felino. El Maine Coon es la raza doméstica más grande, con machos que pueden superar los 10 kg. Son gatos amigables, juguetones y sorprendentemente cariñosos, conocidos como 'perros con piel de gato'.",
    47|    history: "Raza natural del estado de Maine. La leyenda dice que descienden de gatos de María Antonieta. Se adaptaron al duro invierno de Nueva Inglaterra con su pelaje denso y cola tupida.",
    48|    temperament: "Juguetones, inteligentes y muy familiares. Les encanta el agua (inusual en gatos). Buenos con niños y otras mascotas. Maúllan poco pero emiten trinos curiosos.",
    49|    img: "https://images.unsplash.com/photo-1600800634599-33c45ac98d48?w=800&h=600&fit=crop",
    50|    weight: "5-11 kg (machos)",
    51|    lifespan: "12-15 años",
    52|    personality: "Gentil, juguetón, familiar",
    53|    colors: ["Marrón tabby", "Negro", "Blanco", "Rojo", "Plateado", "Carey"],
    54|    care: "Cepillado 2-3 veces por semana. Propensos a displasia de cadera y cardiomiopatía hipertrófica. Necesitan espacio para moverse."
    55|  },
    56|  {
    57|    id: "bengali",
    58|    name: "Bengalí",
    59|    nameEng: "Bengal",
    60|    origin: "Estados Unidos (híbrido)",
    61|    type: "pelo-corto",
    62|    desc: "Con un pelaje que parece salido de la selva, el Bengalí es un gato de aspecto salvaje con manchas de leopardo. Son atléticos, enérgicos y extremadamente inteligentes. Les encanta trepar, nadar y jugar con agua.",
    63|    history: "Creados en los años 60 cruzando gatos domésticos con el leopardo asiático (Prionailurus bengalensis). Buscaban preservar la belleza del felino salvaje con temperamento doméstico.",
    64|    temperament: "Hiperactivos, curiosos y demandantes. Necesitan MUCHA estimulación. Aprenden trucos y les encanta el agua. No son gatos para dueños ausentes.",
    65|    img: "https://images.unsplash.com/photo-1591946614720-90e1a156f8da?w=800&h=600&fit=crop",
    66|    weight: "4-7 kg",
    67|    lifespan: "12-16 años",
    68|    personality: "Enérgico, curioso, inteligente",
    69|    colors: ["Brown spotted", "Snow", "Silver", "Charcoal", "Blue"],
    70|    care: "Necesitan ejercicio diario intenso. Enriquecimiento ambiental obligatorio (árboles, juguetes interactivos). Cepillado semanal."
    71|  },
    72|  {
    73|    id: "sphynx",
    74|    name: "Sphynx / Esfinge",
    75|    nameEng: "Sphynx",
    76|    origin: "Canadá",
    77|    type: "sin-pelo",
    78|    desc: "El gato sin pelo más famoso del mundo. El Sphynx es cálido al tacto, extremadamente cariñoso y lleno de energía. A pesar de su aspecto frágil, son gatos robustos y muy sociables que odian estar solos.",
    79|    history: "La mutación sin pelo apareció naturalmente en Toronto en 1966. Mediante cría selectiva se estableció la raza. No son completamente calvos: tienen una pelusa fina como de melocotón.",
    80|    temperament: "Extremadamente sociables y dependientes. Les encanta estar con personas y otros animales. Muy activos y payasos. Buscan calor constantemente.",
    81|    img: "https://images.unsplash.com/photo-1606214174790-dd4a9a0b1e7b?w=800&h=600&fit=crop",
    82|    weight: "3-5 kg",
    83|    lifespan: "12-15 años",
    84|    personality: "Cariñoso, dependiente, payaso",
    85|    colors: ["Todos los colores y patrones (visibles en la piel)", "Negro", "Blanco", "Bicolor", "Carey"],
    86|    care: "Baños semanales (su piel produce más grasa). Proteger del sol y del frío. Limpieza de orejas frecuente."
    87|  },
    88|  {
    89|    id: "abisinio",
    90|    name: "Abisinio",
    91|    nameEng: "Abyssinian",
    92|    origin: "Etiopía (Abisinia)",
    93|    type: "pelo-corto",
    94|    desc: "Elegante y atlético, el Abisinio parece una pequeña pantera dorada. Su pelaje 'ticked' (cada pelo con bandas de color) le da un brillo único. Son gatos curiosos, activos y siempre explorando — raramente los verás quietos.",
    95|    history: "Una de las razas más antiguas, supuestamente descendiente de los gatos sagrados del Antiguo Egipto. La raza moderna se desarrolló en Inglaterra en el siglo XIX.",
    96|    temperament: "Curiosos, activos y muy inteligentes. Siempre están en movimiento, explorando cada rincón. Les encantan las alturas. No son gatos falderos pero sí muy afectuosos a su manera.",
    97|    img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&h=600&fit=crop",
    98|    weight: "3-5 kg",
    99|    lifespan: "12-15 años",
   100|    personality: "Curioso, atlético, explorador",
   101|    colors: ["Ruddy (leonado)", "Sorrel (canela)", "Azul", "Fawn (cervato)"],
   102|    care: "Cepillado ocasional. Necesitan espacios verticales para trepar. Propensos a gingivitis y amiloidosis renal."
   103|  },
   104|  {
   105|    id: "ragdoll",
   106|    name: "Ragdoll",
   107|    nameEng: "Ragdoll",
   108|    origin: "Estados Unidos",
   109|    type: "pelo-semilargo",
   110|    desc: "Famosos por relajarse completamente al ser cargados (como un 'muñeco de trapo'), los Ragdolls son gatos grandes, dóciles y extremadamente cariñosos. Tienen ojos azules intensos y un pelaje sedoso que apenas se enreda.",
   111|    history: "Creados en California en los años 60 por Ann Baker. La leyenda dice que son tan dóciles por una mutación genética, aunque realmente es selección por temperamento.",
   112|    temperament: "Dóciles, tranquilos y muy cariñosos. Suelen seguir a sus dueños por la casa. Buenos con niños y otras mascotas. Poco callejeros: mejor gatos de interior.",
   113|    img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&h=600&fit=crop",
   114|    weight: "4-9 kg",
   115|    lifespan: "12-17 años",
   116|    personality: "Dócil, cariñoso, tranquilo",
   117|    colors: ["Seal point", "Blue point", "Chocolate", "Lilac", "Bicolor", "Mitted"],
   118|    care: "Cepillado 2 veces por semana. Propensos a cardiomiopatía hipertrófica. Alimentación controlada para evitar obesidad."
   119|  },
   120|  {
   121|    id: "british-shorthair",
   122|    name: "Británico de Pelo Corto",
   123|    nameEng: "British Shorthair",
   124|    origin: "Reino Unido",
   125|    type: "pelo-corto",
   126|    desc: "Robusto, redondo y con una expresión perpetuamente seria, el British Shorthair es el osito de peluche del mundo felino. Son gatos tranquilos, independientes y muy leales, aunque no especialmente efusivos.",
   127|    history: "Descendiente de los gatos romanos que llegaron a Britania hace 2000 años. La raza moderna se refinó en el siglo XIX, y el azul británico es su color más icónico.",
   128|    temperament: "Tranquilos, reservados y dignos. No son gatos falderos pero disfrutan de la compañía cercana. Se adaptan bien a la vida en apartamento. Poco vocales.",
   129|    img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=800&h=600&fit=crop",
   130|    weight: "4-8 kg",
   131|    lifespan: "14-20 años",
   132|    personality: "Tranquilo, digno, leal",
   133|    colors: ["Azul", "Lila", "Chocolate", "Negro", "Blanco", "Crema", "Carey"],
   134|    care: "Cepillado semanal. Propensos a obesidad (controlar alimentación). Pueden desarrollar cardiomiopatía hipertrófica."
   135|  },
   136|  {
   137|    id: "siberiano",
   138|    name: "Siberiano",
   139|    nameEng: "Siberian",
   140|    origin: "Rusia (Siberia)",
   141|    type: "pelo-semilargo",
   142|    tags: ["gigante"],
   143|    desc: "El gato nacional de Rusia, criado por la naturaleza en los bosques siberianos. Son gatos grandes, musculosos y con triple capa de pelaje impermeable. Sorprendentemente, producen menos proteína Fel d1, siendo más tolerables para alérgicos.",
   144|    history: "Raza natural de Siberia documentada desde hace más de 1000 años. Sobrevivían en los duros inviernos rusos. Llegaron a Occidente tras la caída de la URSS en los 90.",
   145|    temperament: "Juguetones, valientes y muy inteligentes. Les encanta el agua. Buenos cazadores. Afectuosos sin ser pegajosos. Se adaptan bien a familias.",
   146|    img: "https://images.unsplash.com/photo-1536590158209-e9d317d0c16f?w=800&h=600&fit=crop",
   147|    weight: "5-9 kg",
   148|    lifespan: "12-15 años",
   149|    personality: "Valiente, juguetón, hipoalergénico",
   150|    colors: ["Brown tabby", "Negro", "Azul", "Rojo", "Blanco", "Carey"],
   151|    care: "Cepillado frecuente en época de muda. Muy saludables en general. Necesitan espacio y estímulos."
   152|  },
   153|  {
   154|    id: "scottish-fold",
   155|    name: "Scottish Fold",
   156|    nameEng: "Scottish Fold",
   157|    origin: "Escocia, Reino Unido",
   158|    type: "pelo-corto",
   159|    desc: "Inconfundibles por sus orejas plegadas hacia adelante, los Scottish Fold parecen pequeños búhos. Son gatos dulces, tranquilos y muy adaptables. Su mutación genética les da ese aspecto adorable.",
   160|    history: "Todos descienden de 'Susie', una gata de granja escocesa con orejas plegadas descubierta en 1961. La raza se desarrolló cruzando con British Shorthairs y American Shorthairs.",
   161|    temperament: "Dulces, tranquilos y muy adaptables. Suelen dormir en posiciones graciosas (boca arriba, sentados como humanos). Buenos con niños y otras mascotas.",
   162|    img: "https://images.unsplash.com/photo-1597626133663-53dfddb9446c?w=800&h=600&fit=crop",
   163|    weight: "3-6 kg",
   164|    lifespan: "11-15 años",
   165|    personality: "Dulce, adaptable, gracioso",
   166|    colors: ["Todos los colores y patrones", "Azul", "Lila", "Negro", "Blanco", "Bicolor"],
   167|    care: "Cepillado semanal. Revisar orejas regularmente. Propensos a osteocondrodisplasia (problema articular hereditario)."
   168|  },
   169|  {
   170|    id: "savannah",
   171|    name: "Savannah",
   172|    nameEng: "Savannah",
   173|    origin: "Estados Unidos (híbrido)",
   174|    type: "pelo-corto",
   175|    tags: ["exotico", "gigante"],
   176|    desc: "El gato doméstico más alto del mundo, resultado del cruce entre un gato doméstico y un serval africano. Con patas largas, orejas enormes y pelaje moteado, parece un pequeño guepardo. Gato para expertos.",
   177|    history: "Primer cruce exitoso en 1986. La raza busca preservar la belleza del serval salvaje. Las generaciones F1 y F2 (más cercanas al serval) son más grandes y requieren dueños con experiencia.",
   178|    temperament: "Extremadamente inteligentes, enérgicos y leales como perros. Aprenden a pasear con correa. Muy vocales. Necesitan dueños dedicados con mucho tiempo.",
   179|    img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=600&fit=crop",
   180|    weight: "6-12 kg",
   181|    lifespan: "12-20 años",
   182|    personality: "Leal, enérgico, inteligente",
   183|    colors: ["Brown spotted tabby", "Silver spotted", "Black smoke"],
   184|    care: "ALTA demanda de ejercicio y estimulación. Pueden ser destructivos si se aburren. Legalidad varía por país. Alimentación de alta calidad."
   185|  },
   186|  {
   187|    id: "noruego",
   188|    name: "Bosque de Noruega",
   189|    nameEng: "Norwegian Forest Cat",
   190|    origin: "Noruega",
   191|    type: "pelo-largo",
   192|    tags: ["gigante"],
   193|    desc: "El 'Wegie' es un gato majestuoso criado por los bosques escandinavos. Su doble capa de pelaje repelente al agua y su cola tupida les protegen del frío extremo. Son excelentes trepadores y cazadores natos.",
   194|    history: "Mencionados en la mitología nórdica: la diosa Freya tenía un carro tirado por gatos del bosque. Casi se extinguen en la Segunda Guerra Mundial; fueron salvados por un programa de cría noruego.",
   195|    temperament: "Aventureros, valientes y cariñosos. Grandes trepadores (¡bajan árboles cabeza abajo!). Afectuosos sin ser demandantes. Buenos con familias.",
   196|    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a0?w=800&h=600&fit=crop",
   197|    weight: "5-9 kg",
   198|    lifespan: "14-16 años",
   199|    personality: "Aventurero, valiente, cariñoso",
   200|    colors: ["Brown tabby", "Negro", "Azul", "Rojo", "Blanco", "Carey"],
   201|    care: "Cepillado frecuente en primavera/otoño (mudan mucho). Propensos a glucogenosis tipo IV. Necesitan árboles para gatos altos."
   202|  },
   203|  {
   204|    id: "oriental",
   205|    name: "Oriental de Pelo Corto",
   206|    nameEng: "Oriental Shorthair",
   207|    origin: "Reino Unido / Tailandia",
   208|    type: "pelo-corto",
   209|    desc: "Primos del Siamés pero con un arcoíris de colores (¡más de 300 combinaciones!). Son gatos esbeltos, elegantes, con orejas enormes y personalidad extrovertida. Muy vocales y demandantes de atención.",
   210|    history: "Desarrollados en Inglaterra cruzando siameses con otras razas para introducir nuevos colores. Heredaron la personalidad vocal del Siamés con una paleta de colores infinita.",
   211|    temperament: "Extrovertidos, vocales y muy cariñosos. Demandan atención constantemente. Excelentes con niños y visitas. Necesitan compañía; odian la soledad.",
   212|    img: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop",
   213|    weight: "3-5 kg",
   214|    lifespan: "12-15 años",
   215|    personality: "Extrovertido, vocal, cariñoso",
   216|    colors: ["Ébano", "Blanco", "Azul", "Lavanda", "Canela", "Fawn", "Carey", "+300 variedades"],
   217|    care: "Cepillado semanal. Propensos a problemas dentales y hepáticos (amiloidosis). Necesitan mucha interacción social."
   218|  },
   219|  {
   220|    id: "burmes",
   221|    name: "Birmano / Sagrado de Birmania",
   222|    nameEng: "Birman",
   223|    origin: "Birmania (Myanmar) / Francia",
   224|    type: "pelo-semilargo",
   225|    desc: "Con sus guantes blancos en las patas y ojos zafiro, el Birmano es una de las razas más bellas. Su pelaje sedoso no se enreda y su temperamento dulce los convierte en compañeros ideales. Son el equilibrio perfecto entre Persa y Siamés.",
   226|    history: "Según la leyenda, eran gatos sagrados en templos birmanos. La raza moderna se estableció en Francia en los años 20. Casi desaparecen tras la Segunda Guerra Mundial.",
   227|    temperament: "Dulces, equilibrados y sociables. Ni tan demandantes como el Siamés ni tan pasivos como el Persa. Buenos con niños. Les gusta estar cerca pero no encima.",
   228|    img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop",
   229|    weight: "4-6 kg",
   230|    lifespan: "12-16 años",
   231|    personality: "Dulce, equilibrado, sociable",
   232|    colors: ["Seal point", "Blue point", "Chocolate", "Lilac", "Red", "Crema"],
   233|    care: "Cepillado 2 veces por semana. Propensos a cardiomiopatía hipertrófica. Revisión dental regular."
   234|  },
   235|  {
   236|    id: "bombay",
   237|    name: "Bombay",
   238|    nameEng: "Bombay",
   239|    origin: "Estados Unidos",
   240|    type: "pelo-corto",
   241|    desc: "La pantera en miniatura: completamente negro, con ojos dorados cobrizos y pelaje brillante como charol. El Bombay es un gato sociable, juguetón y sorprendentemente cariñoso. Parece salvaje pero es puro terciopelo.",
   242|    history: "Creado en los años 50 en Kentucky cruzando gatos Burmese con American Shorthair negros. El objetivo era crear un 'pantera miniatura' con personalidad dócil.",
   243|    temperament: "Sociables, juguetones y muy apegados a sus dueños. Buenos con visitas. Les gusta estar en el centro de atención. Ronronean mucho y fuerte.",
   244|    img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&h=600&fit=crop",
   245|    weight: "3-5 kg",
   246|    lifespan: "12-18 años",
   247|    personality: "Sociable, juguetón, apegado",
   248|    colors: ["Negro azabache (único color aceptado)"],
   249|    care: "Mínimo cepillado. Propensos a problemas respiratorios (por su hocico corto). Alimentación controlada."
   250|  },
   251|  {
   252|    id: "angora-turco",
   253|    name: "Angora Turco",
   254|    nameEng: "Turkish Angora",
   255|    origin: "Turquía (Ankara)",
   256|    type: "pelo-semilargo",
   257|    desc: "Elegancia pura: cuerpo esbelto, pelaje blanco como la nieve y ojos que pueden ser de distinto color (heterocromía). El Angora Turco es inteligente, ágil y decidido. Un tesoro nacional turco protegido por ley.",
   258|    history: "Raza natural de Ankara documentada desde el siglo XV. Los ejemplares blancos de ojos azules o dispares son los más valorados. En Turquía, el zoo de Ankara mantiene un programa de conservación.",
   259|    temperament: "Inteligentes, decididos y un poco mandones. Muy ágiles y buenos trepadores. Afectuosos pero en sus términos. Algo traviesos.",
   260|    img: "https://images.unsplash.com/photo-1595429035839-c99c298ffd73?w=800&h=600&fit=crop",
   261|    weight: "3-5 kg",
   262|    lifespan: "12-18 años",
   263|    personality: "Elegante, inteligente, decidido",
   264|    colors: ["Blanco (el clásico)", "Negro", "Azul", "Rojo", "Carey"],
   265|    care: "Cepillado 2-3 veces por semana. Propensos a sordera congénita (especialmente blancos de ojos azules). Revisión cardíaca."
   266|  },
   267|  {
   268|    id: "ruso-azul",
   269|    name: "Azul Ruso",
   270|    nameEng: "Russian Blue",
   271|    origin: "Rusia (Arcángel)",
   272|    type: "pelo-corto",
   273|    desc: "El gato más fotogénico del mundo: pelaje azul plateado con puntas brillantes, ojos verde esmeralda y una sonrisa enigmática (efecto 'Mona Lisa'). Tímidos con extraños pero muy leales con su familia.",
   274|    history: "Originarios del puerto de Arcángel, en el norte de Rusia. Los marineros los llevaron a Inglaterra en el siglo XIX. Sobrevivieron gracias a cruces con siameses y británicos tras las guerras mundiales.",
   275|    temperament: "Tímidos con extraños, muy leales con su familia. Tranquilos y reservados. Les gusta la rutina. Pueden ser juguetones en privado. Producen menos Fel d1 (mejor para alérgicos).",
   276|    img: "https://images.unsplash.com/photo-1602265587623-e2189d637a76?w=800&h=600&fit=crop",
   277|    weight: "3-5 kg",
   278|    lifespan: "15-20 años",
   279|    personality: "Tímido, leal, elegante",
   280|    colors: ["Azul plateado (único color)"],
   281|    care: "Mínimo cepillado. Muy saludables. Necesitan hogares tranquilos y rutinas estables."
   282|  },
   283|  {
   284|    id: "korat",
   285|    name: "Korat",
   286|    nameEng: "Korat",
   287|    origin: "Tailandia",
   288|    type: "pelo-corto",
   289|    desc: "Conocido como 'Si-Sawat' (buena fortuna) en Tailandia, el Korat tiene un pelaje azul plateado y ojos verdes luminosos. Son gatos que traen suerte y se regalan tradicionalmente en bodas tailandesas.",
   290|    history: "Mencionado en el 'Tamra Maew' (Libro de Poemas del Gato) tailandés del siglo XIV. Raza natural nunca cruzada. Llegaron a Occidente en los años 50.",
   291|    temperament: "Cariñosos, atentos y algo posesivos con sus dueños. Inteligentes y buenos aprendiendo trucos. Prefieren ambientes tranquilos. Muy sensibles a los ruidos fuertes.",
   292|    img: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d5?w=800&h=600&fit=crop",
   293|    weight: "3-4.5 kg",
   294|    lifespan: "12-16 años",
   295|    personality: "Suertudo, cariñoso, sensible",
   296|    colors: ["Azul plateado (único)"],
   297|    care: "Cepillado semanal. Propensos a gangliosidosis. Sensibles a vacunas y anestesia."
   298|  },
   299|  {
   300|    id: "himalayo",
   301|    name: "Himalayo",
   302|    nameEng: "Himalayan",
   303|    origin: "Estados Unidos / Reino Unido",
   304|    type: "pelo-largo",
   305|    desc: "La fusión perfecta entre Persa y Siamés: el cuerpo y pelaje del Persa con el patrón colorpoint del Siamés. Tienen la misma cara plana adorable y el temperamento tranquilo del Persa, con el toque de color del Siamés.",
   306|    history: "Creado en los años 30 cruzando Persas con Siameses para obtener el patrón de color. Algunas asociaciones los consideran una variedad del Persa, otras una raza separada.",
   307|    temperament: "Tranquilos, dulces y silenciosos. Perfectos gatos de apartamento. Disfrutan de la compañía sin ser demandantes. Algo más activos que los Persas puros.",
   308|    img: "https://cataas.com/cat?width=800&height=600&random=767",
   309|    weight: "3.5-5.5 kg",
   310|    lifespan: "12-15 años",
   311|    personality: "Tranquilo, dulce, elegante",
   312|    colors: ["Seal point", "Blue point", "Chocolate", "Lilac", "Flame point", "Crema"],
   313|    care: "Cepillado diario obligatorio. Limpieza ocular frecuente. Mismos problemas de salud que el Persa (respiratorios, renales)."
   314|  },
   315|  {
   316|    id: "manx",
   317|    name: "Manx",
   318|    nameEng: "Manx",
   319|    origin: "Isla de Man (Reino Unido)",
   320|    type: "pelo-corto",
   321|    desc: "El gato sin cola de la Isla de Man. Su ausencia de cola (o cola muy corta) es su rasgo más distintivo. Son gatos robustos, redondos, excelentes cazadores y con una personalidad casi canina.",
   322|    history: "Raza natural de la Isla de Man, donde una mutación genética eliminó la cola. El aislamiento geográfico fijó el rasgo. Considerados gatos de la suerte por los marineros.",
   323|    temperament: "Juguetones, inteligentes y muy leales. Buenos cazadores. Les gusta jugar a buscar objetos. Se adaptan bien a familias activas.",
   324|    img: "https://cataas.com/cat?width=800&height=600&random=96",
   325|    weight: "3.5-5.5 kg",
   326|    lifespan: "12-16 años",
    personality: "Juguetón, leal, sin cola",
    colors: ["Todos los colores y patrones"],
    care: "Cepillado semanal. El gen sin cola puede causar problemas espinales (Síndrome de Manx). Cría ética importante."
  },
  {
    id: "british-shorthair", name: "Britanico de Pelo Corto", nameEng: "British Shorthair", origin: "Reino Unido", type: "pelo-corto",
    desc: "El osito de peluche del mundo felino. Robustos, tranquilos y con expresion dulce. Pelaje denso y afelpado inconfundible.", history: "Descendientes de gatos romanos. Casi extinguidos en las guerras mundiales.", temperament: "Tranquilos, reservados con extranos pero carinosos con su familia. Rara vez maullan.", img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&h=600&fit=crop", weight: "4-8 kg", lifespan: "14-20 anos", personality: "Tranquilo, leal, independiente", colors: ["Azul","Lila","Chocolate","Crema","Blanco","Negro"], care: "Cepillado semanal. Tendencia a obesidad."
  },
  {
    id: "siberiano", name: "Siberiano", nameEng: "Siberian", origin: "Rusia (Siberia)", type: "pelo-largo", tags: ["gigante","hipoalergenico"],
    desc: "Gato nacional ruso. Poderoso, agil, triple pelaje impermeable. Produce menos proteina Fel d1: tolerable para muchos alergicos.", history: "Raza natural de los bosques siberianos con mas de 1000 anos de historia.", temperament: "Juguetones, inteligentes y valientes. Les fascina el agua. Muy afectuosos.", img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=600&fit=crop", weight: "5-9 kg", lifespan: "12-18 anos", personality: "Valiente, jugueton, hipoalergenico", colors: ["Marron tabby","Azul","Rojo","Plata","Blanco","Carey"], care: "Cepillado bisemanal. Muda intensa en primavera."
  },
  {
    id: "bombay-cat", name: "Bombay", nameEng: "Bombay", origin: "Estados Unidos", type: "pelo-corto",
    desc: "La pantera en miniatura. Negro azabache con ojos dorados y pelaje satinado. Parece salvaje pero es puro terciopelo.", history: "Creados en Kentucky cruzando Burmeses con Americanos de pelo corto negro.", temperament: "Sociables, carinosos y muy apegados. Odian estar solos.", img: "https://images.unsplash.com/photo-1595429035839-c99c298ffd73?w=800&h=600&fit=crop", weight: "3-5 kg", lifespan: "12-18 anos", personality: "Sociable, carinoso", colors: ["Negro azabache"], care: "Cepillado semanal."
  },
  {
    id: "somali-cat", name: "Somali", nameEng: "Somali", origin: "Estados Unidos", type: "pelo-semilargo",
    desc: "El zorro felino. Abisinios de pelo largo con cola tupida y pelaje ticked. Hiperactivos, inteligentes y curiosos.", history: "Aparecieron espontaneamente en camadas de Abisinios en los anos 40.", temperament: "Hiperactivos, curiosos y acrobatas natos.", img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&h=600&fit=crop", weight: "3.5-5 kg", lifespan: "12-16 anos", personality: "Activo, inteligente, acrobata", colors: ["Ruddy","Rojo","Azul","Fawn"], care: "Cepillado bisemanal. Necesitan arboles altos."
  },
  {
    id: "devon-rex-cat", name: "Devon Rex", nameEng: "Devon Rex", origin: "Reino Unido", type: "pelo-corto",
    desc: "El gato duende. Orejas enormes, cara elfica y pelaje rizado suave. Traviesos, inteligentes.", history: "Descubiertos en una mina de Devon en 1960.", temperament: "Extremadamente sociables y traviesos.", img: "https://images.unsplash.com/photo-1591946614720-90e1a156f8da?w=800&h=600&fit=crop", weight: "2.5-4 kg", lifespan: "10-15 anos", personality: "Travieso, inteligente, duende", colors: ["Todos los colores"], care: "Limpieza con gamuza."
  },
  {
    id: "ocicat-cat", name: "Ocicat", nameEng: "Ocicat", origin: "Estados Unidos", type: "pelo-corto",
    desc: "Parece salvaje pero es 100% domestico. Pelaje moteado como ocelote. Atletico, inteligente y sociable.", history: "Creado accidentalmente en 1964. Sin sangre salvaje.", temperament: "Extremadamente sociables y extrovertidos.", img: "https://images.unsplash.com/photo-1602265587623-e2189d637a76?w=800&h=600&fit=crop", weight: "4-7 kg", lifespan: "15-18 anos", personality: "Sociable, atletico", colors: ["Tawny","Chocolate","Canela","Azul","Lavanda","Fawn"], care: "Cepillado semanal."
  },
  {
    id: "chartreux-cat", name: "Chartreux", nameEng: "Chartreux", origin: "Francia", type: "pelo-corto",
    desc: "El gato sonriente frances. Robusto, pelaje azul grisaceo y ojos cobrizos. Expresion que parece sonrisa.", history: "Criados por monjes cartujos desde el siglo XVIII.", temperament: "Silenciosos, observadores, muy inteligentes.", img: "https://images.unsplash.com/photo-1536590158209-e9d317d0c16f?w=800&h=600&fit=crop", weight: "4-7 kg", lifespan: "13-16 anos", personality: "Silencioso, observador", colors: ["Azul grisaceo"], care: "Cepillado semanal."
  },
  {
    id: "japanese-bobtail-cat", name: "Bobtail Japones", nameEng: "Japanese Bobtail", origin: "Japon", type: "pelo-corto",
    desc: "El Maneki Neko de la suerte. Cola corta como pompon. Activos e inteligentes.", history: "En Japon hace mas de 1000 anos. Simbolo de fortuna.", temperament: "Muy vocales, activos y sociales.", img: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop", weight: "2.5-4.5 kg", lifespan: "15-18 anos", personality: "Vocal, activo, suerte", colors: ["Calico","Blanco y negro","Tortuga"], care: "Cepillado semanal. Raza muy sana."
  },
  {
    id: "burmilla-cat", name: "Burmilla", nameEng: "Burmilla", origin: "Reino Unido", type: "pelo-corto",
    desc: "Mezcla Burmes + Chinchilla Persa. Plateado sombreado, ojos verdes. Dulce y jugueton.", history: "Romance accidental en 1981.", temperament: "Dulces, juguetones, ronronean constantemente.", img: "https://images.unsplash.com/photo-1611915387289-08be07d7ce0d?w=800&h=600&fit=crop", weight: "3-6 kg", lifespan: "12-16 anos", personality: "Dulce, jugueton", colors: ["Plata","Dorado","Crema"], care: "Cepillado semanal."
  },
  {
    id: "peterbald-cat", name: "Peterbald", nameEng: "Peterbald", origin: "Rusia", type: "sin-pelo", tags: ["exotico"],
    desc: "Elegantes gatos sin pelo de San Petersburgo. Varios grados de calvicie. Graciles y carinosos.", history: "Creados en 1994 en San Petersburgo.", temperament: "Muy carinosos e interactivos.", img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=800&h=600&fit=crop", weight: "3-5 kg", lifespan: "12-15 anos", personality: "Carinoso, interactivo", colors: ["Todos"], care: "Banios semanales. Proteger del frio."
  },
  {
    id: "lykoi-cat", name: "Lykoi", nameEng: "Lykoi", origin: "Estados Unidos", type: "pelo-corto", tags: ["exotico"],
    desc: "El gato lobo. Pelaje parcial, ojos intensos, apariencia licantropa. Carinosos, leales.", history: "Mutacion natural de 2010. Lykoi = lobo en griego.", temperament: "Leales como perros, cautelosos al principio.", img: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d5?w=800&h=600&fit=crop", weight: "3-5 kg", lifespan: "12-15 anos", personality: "Leal, inteligente, lobo", colors: ["Negro roano"], care: "Cuidados especiales de piel."
  },
  {
    id: "selkirk-rex-cat", name: "Selkirk Rex", nameEng: "Selkirk Rex", origin: "Estados Unidos", type: "pelo-largo",
    desc: "El gato con permanente. Pelaje rizado, robusto y paciente.", history: "Montana, 1987.", temperament: "Extremadamente pacientes.", img: "https://images.unsplash.com/photo-1606214174790-dd4a9a1b0e7b?w=800&h=600&fit=crop", weight: "4-7 kg", lifespan: "12-16 anos", personality: "Paciente, tolerante", colors: ["Todos"], care: "Cepillado bisemanal."
  },
  {
    id: "tonkines-cat", name: "Tonkines", nameEng: "Tonkinese", origin: "Canada", type: "pelo-corto",
    desc: "Equilibrio Siamés + Burmes. Juguetones con elegancia.", history: "Creados en los 60.", temperament: "Juguetones, interactivos.", img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a0?w=800&h=600&fit=crop", weight: "3-5 kg", lifespan: "12-16 anos", personality: "Juguetón, interactivo", colors: ["Mink","Champan","Platino","Azul"], care: "Cepillado semanal."
  },
  {
    id: "khao-manee-cat", name: "Khao Manee", nameEng: "Khao Manee", origin: "Tailandia", type: "pelo-corto",
    desc: "Gato Ojo de Diamante. Blanco puro, ojos azules/dorados. Rarisimo.", history: "Reservado a la realeza tailandesa.", temperament: "Curiosos, inteligentes.", img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop", weight: "3-5 kg", lifespan: "14-18 anos", personality: "Curioso, joya", colors: ["Blanco puro"], care: "Cepillado semanal."
  },
  {
    id: "cymric-cat", name: "Cymric", nameEng: "Cymric", origin: "Isla de Man", type: "pelo-largo",
    desc: "Manx pelilargo sin cola. Redondeado, inteligente, jugueton.", history: "Mutacion de Isla de Man.", temperament: "Juguetones, buscan objetos.", img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&h=600&fit=crop", weight: "4-6 kg", lifespan: "12-15 anos", personality: "Juguetón, leal", colors: ["Todos"], care: "Cepillado frecuente."
  },
  {
    id: "korat-cat", name: "Korat", nameEng: "Korat", origin: "Tailandia", type: "pelo-corto",
    desc: "Gato de la buena suerte. Azul plateado, ojos verdes esmeralda. Antiquisimo.", history: "Manuscritos tailandeses del siglo XIV.", temperament: "Carinosos, inteligentes.", img: "https://images.unsplash.com/photo-1597626133663-53dfddb9446c?w=800&h=600&fit=crop", weight: "3-4.5 kg", lifespan: "12-16 anos", personality: "Carinoso, suerte", colors: ["Azul plateado"], care: "Cepillado semanal."
  },
  {
    id: "singapura-cat", name: "Singapura", nameEng: "Singapura", origin: "Singapur", type: "pelo-corto",
    desc: "La raza mas pequena del mundo. Diminuto, ojos enormes, pelaje sepia ticked.", history: "Gatos callejeros de Singapur, anos 70.", temperament: "Extrovertidos, curiosos, juguetones.", img: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=800&h=600&fit=crop", weight: "2-3 kg", lifespan: "12-15 anos", personality: "Diminuto, curioso", colors: ["Sepia agouti"], care: "Cepillado semanal."
  },
  {
    id: "laperm-cat", name: "LaPerm", nameEng: "LaPerm", origin: "Estados Unidos", type: "pelo-largo",
    desc: "Gato de pelaje rizado natural. Nacen calvos y desarrollan rizos. Carinosos.", history: "Mutacion en Oregón, 1982.", temperament: "Carinosos, juguetones, curiosos.", img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&h=600&fit=crop", weight: "3-5 kg", lifespan: "12-15 anos", personality: "Carinoso, rizado", colors: ["Todos"], care: "Cepillado ligero."
  }
];
   332|
   333|// =========== STATE ===========
   334|let currentFilter = 'all';
   335|let searchQuery = '';
   336|
   337|// =========== RENDER ===========
   338|function renderBreeds() {
   339|  const grid = document.getElementById('breedsGrid');
   340|  const noResults = document.getElementById('noResults');
   341|  let filtered = breeds;
   342|
   343|  // Filter by type
   344|  if (currentFilter !== 'all') {
   345|    filtered = filtered.filter(b => {
   346|      if (currentFilter === 'gigante') return b.tags && b.tags.includes('gigante');
   347|      if (currentFilter === 'exotico') return b.tags && b.tags.includes('exotico');
   348|      return b.type === currentFilter;
   349|    });
   350|  }
   351|
   352|  // Filter by search
   353|  if (searchQuery.trim()) {
   354|    const q = searchQuery.toLowerCase().trim();
   355|    filtered = filtered.filter(b =>
   356|      b.name.toLowerCase().includes(q) ||
   357|      b.nameEng.toLowerCase().includes(q) ||
   358|      b.origin.toLowerCase().includes(q) ||
   359|      b.desc.toLowerCase().includes(q) ||
   360|      b.temperament.toLowerCase().includes(q)
   361|    );
   362|  }
   363|
   364|  // Update breed count
   365|  document.getElementById('breedCount').textContent = filtered.length;
   366|
   367|  if (filtered.length === 0) {
   368|    grid.innerHTML = '';
   369|    noResults.style.display = 'block';
   370|    return;
   371|  }
   372|
   373|  noResults.style.display = 'none';
   374|  grid.innerHTML = filtered.map(b => {
   375|    const badgeClass = b.type === 'pelo-corto' ? 'badge-pelo-corto' :
   376|                       b.type === 'pelo-largo' ? 'badge-pelo-largo' :
   377|                       b.type === 'pelo-semilargo' ? 'badge-pelo-semilargo' :
   378|                       b.type === 'sin-pelo' ? 'badge-sin-pelo' : '';
   379|    let badgeText = '';
   380|    if (b.tags && b.tags.includes('gigante')) {
   381|      badgeText = 'Gigante';
   382|    } else if (b.type === 'pelo-corto') badgeText = 'Pelo Corto';
   383|    else if (b.type === 'pelo-largo') badgeText = 'Pelo Largo';
   384|    else if (b.type === 'pelo-semilargo') badgeText = 'Pelo Semilargo';
   385|    else if (b.type === 'sin-pelo') badgeText = 'Sin Pelo';
   386|
   387|    const altBadgeClass = (b.tags && b.tags.includes('gigante')) ? 'badge-gigante' : badgeClass;
   388|
   389|    return `
   390|      <div class="breed-card" onclick="openBreed('${b.id}')" data-id="${b.id}">
   391|        <div class="breed-card-img">
   392|          <img src="${b.img}" alt="${b.name}" loading="lazy" onerror="this.src='https://cataas.com/cat?width=800&height=600&random=114'">
   393|          <span class="breed-card-badge ${altBadgeClass}">${badgeText}</span>
   394|        </div>
   395|        <div class="breed-card-body">
   396|          <h3 class="breed-card-name">${b.name}</h3>
   397|          <p class="breed-card-origin">📍 ${b.origin}</p>
   398|          <p class="breed-card-desc">${b.desc}</p>
   399|          <div class="breed-card-stats">
   400|            <div class="breed-stat"><span class="breed-stat-val">${b.weight}</span><span class="breed-stat-label">Peso</span></div>
   401|            <div class="breed-stat"><span class="breed-stat-val">${b.lifespan}</span><span class="breed-stat-label">Vida</span></div>
   402|            <div class="breed-stat"><span class="breed-stat-val">${b.personality.split(',')[0]}</span><span class="breed-stat-label">Personalidad</span></div>
   403|          </div>
   404|        </div>
   405|      </div>`;
   406|  }).join('');
   407|}
   408|
   409|// =========== MODAL ===========
   410|function openBreed(id) {
   411|  const breed = breeds.find(b => b.id === id);
   412|  if (!breed) return;
   413|
   414|  const modal = document.getElementById('breedModal');
   415|  const overlay = document.getElementById('modalOverlay');
   416|  const content = document.getElementById('modalContent');
   417|
   418|  content.innerHTML = `
   419|    <img src="${breed.img}" alt="${breed.name}" class="modal-hero-img" onerror="this.src='https://cataas.com/cat?width=800&height=600&random=307'">
   420|    <div class="modal-body">
   421|      <h2 class="modal-breed-name">${breed.name}</h2>
   422|      <p class="modal-breed-name-eng">${breed.nameEng} • 📍 ${breed.origin}</p>
   423|
   424|      <div class="modal-stats-grid">
   425|        <div class="modal-stat-box"><div class="val">${breed.weight}</div><div class="lbl">Peso</div></div>
   426|        <div class="modal-stat-box"><div class="val">${breed.lifespan}</div><div class="lbl">Esperanza de vida</div></div>
   427|        <div class="modal-stat-box"><div class="val">${breed.colors.length}</div><div class="lbl">Variedades de color</div></div>
   428|      </div>
   429|
   430|      <div class="modal-section">
   431|        <h3>📖 Descripción</h3>
   432|        <p>${breed.desc}</p>
   433|      </div>
   434|
   435|      <div class="modal-section">
   436|        <h3>📜 Historia</h3>
   437|        <p>${breed.history}</p>
   438|      </div>
   439|
   440|      <div class="modal-section">
   441|        <h3>🧠 Temperamento</h3>
   442|        <p>${breed.temperament}</p>
   443|      </div>
   444|
   445|      <div class="modal-section">
   446|        <h3>🎨 Colores</h3>
   447|        <ul>${breed.colors.map(c => `<li>${c}</li>`).join('')}</ul>
   448|      </div>
   449|
   450|      <div class="modal-section">
   451|        <h3>🏥 Cuidados y Salud</h3>
   452|        <p>${breed.care}</p>
   453|      </div>
   454|    </div>
   455|  `;
   456|
   457|  overlay.classList.add('active');
   458|  document.body.style.overflow = 'hidden';
   459|
   460|  // Close on background click
   461|  overlay.onclick = function(e) {
   462|    if (e.target === overlay) closeBreed();
   463|  };
   464|}
   465|
   466|function closeBreed() {
   467|  document.getElementById('modalOverlay').classList.remove('active');
   468|  document.body.style.overflow = '';
   469|}
   470|
// Keyboard: Escape to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBreed();
});

// =========== INIT ===========
(function() {
  // Filters
  document.querySelectorAll('.chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('active'); });
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      renderBreeds();
    });
  });
  // Search
  var si = document.getElementById('searchInput');
  if (si) si.addEventListener('input', function(e) { searchQuery = e.target.value; renderBreeds(); });
  // Modal close
  var mc = document.getElementById('modalClose');
  if (mc) mc.addEventListener('click', closeBreed);
  // Initial render
  renderBreeds();
  var bc = document.getElementById('breedCount');
  if (bc) bc.textContent = breeds.length;
})();
   501|