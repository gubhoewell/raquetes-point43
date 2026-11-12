// Catálogo Black Friday — raquetes
// Vendeu? Troque vendida: false por vendida: true (o card ganha a tarja VENDIDA).
// Cada item de "unidades" é uma raquete física (peso / balance).

const WHATSAPP = "5543999989179"; // número que recebe os pedidos (DDI+DDD+número, só dígitos)

const RAQUETES = [
  // VISION
  { id: "vision-magnum-25", marca: "Vision", nome: "Vision Magnum '25", img: "r12", de: 2159, por: 1070, unidades: [["330g", "25,5"]], vendida: false },
  { id: "vision-white-carbon-25", marca: "Vision", nome: "Vision White Carbon '25", img: "r16", de: 2299, por: 1079, unidades: [["336g", "26"]], vendida: false },
  { id: "vision-magnum-26", marca: "Vision", nome: "Vision Magnum '26", img: "r14", de: 2159, por: 1899, unidades: [["327g", "25,5"]], vendida: false },
  { id: "vision-strange-25", marca: "Vision", nome: "Vision Strange '25", img: "r18", de: 2159, por: 1079, unidades: [["331g", "26,8"], ["323g", "26,5"]], vendida: false },
  { id: "vision-supercarbon-pro-26", marca: "Vision", nome: "Vision Supercarbon Pro '26", img: "r25", de: 2299, por: 2069, unidades: [["322g", "25,5"]], vendida: false },
  { id: "vision-precision-hybrid-26", marca: "Vision", nome: "Vision Precision Hybrid '26", img: "r27", de: 2159, por: 1899, unidades: [["349g", "24,5"]], vendida: false },

  // KONA
  { id: "kona-k-doze-25", marca: "Kona", nome: "Kona K-Doze '25", img: "r34", de: 2390, por: 799, unidades: [["343g", "26,5"]], vendida: false },
  { id: "kona-bulldog-25", marca: "Kona", nome: "Kona Bulldog '25", img: "r36", de: 2690, por: 999, unidades: [["330g", "26"]], vendida: false },
  { id: "kona-k-doze-26", marca: "Kona", nome: "Kona K-Doze '26", img: "r40", de: 2499, por: 1499, unidades: [["320g", "26"]], vendida: true },
  { id: "kona-traktor-25", marca: "Kona", nome: "Kona Traktor '25", img: "r38", de: 1499, por: 999, unidades: [["320g", "26"]], vendida: false },

  // QUICKSAND / ZEIQ
  { id: "quicksand-nolook-classic", marca: "Quicksand", nome: "Quicksand Nolook Classic", img: "r47", de: 1600, por: 1099, unidades: [["321g", "25,5"]], vendida: false },
  { id: "quicksand-waya", marca: "Quicksand", nome: "Quicksand Waya", img: "r49", de: 2000, por: 1099, unidades: [["327g", "27"]], vendida: false },
  { id: "zeiq-patty-diaz", marca: "Zeiq", nome: "Zeiq Patty Diaz", img: "r51", de: 2499, por: 1199, unidades: [["330g", "25,6"]], vendida: false },
  { id: "zeiq-light", marca: "Zeiq", nome: "Zeiq Light", img: "r53", de: 2499, por: 1199, unidades: [["314g", "26,5"]], vendida: false },

  // HP / ZAND / HEROES
  { id: "hp-sky", marca: "HP", nome: "HP Sky", img: "r64", de: 1300, por: 499, unidades: [["335g", "26"]], vendida: false },
  { id: "zand-z-tech", marca: "Zand", nome: "Zand Z-Tech", img: "r60", de: 1599, por: 899, unidades: [["336g", "27"]], vendida: false },
  { id: "hp-spider", marca: "HP", nome: "HP Spider", img: "r66", de: 1300, por: 799, unidades: [["320g", "26"]], vendida: false },
  { id: "heroes-forest", marca: "Heroes", nome: "Heroes Forest", img: "r62", de: 2699, por: 1099, unidades: [["326g", "26,5"]], vendida: false },

  // TOP RING
  { id: "top-ring-sketch-red", marca: "Top Ring", nome: "Top Ring Sketch Red", img: "r73", de: 870, por: 299, unidades: [["336g", "26,5"]], vendida: false },
  { id: "top-ring-tierreuno", marca: "Top Ring", nome: "Top Ring Tierreuno", img: "r77", de: 999, por: 599, unidades: [["329g", "26,5"], ["329g", "26"]], vendida: false },
  { id: "top-ring-prime-black", marca: "Top Ring", nome: "Top Ring Prime Black is Back", img: "r75", de: 799, por: 599, unidades: [["339g", "26,8"]], vendida: false },
  { id: "top-ring-spirit", marca: "Top Ring", nome: "Top Ring Spirit", img: "r79", de: 999, por: 599, unidades: [["334g", "26,5"], ["336g", "25"]], vendida: false },
  { id: "top-ring-star", marca: "Top Ring", nome: "Top Ring Star", img: "r86", de: 999, por: 599, unidades: [["333g", "26,5"], ["332g", "27"]], vendida: false },
  { id: "top-ring-prime", marca: "Top Ring", nome: "Top Ring Prime", img: "r92", de: 999, por: 599, unidades: [["333g", "27,5"], ["332g", "26,5"], ["330g", "27"]], estoque: 6, vendida: false },
  { id: "top-ring-blue", marca: "Top Ring", nome: "Top Ring Blue", img: "r88", de: 999, por: 599, unidades: [["332g", "27,5"]], vendida: false },
  { id: "top-ring-black", marca: "Top Ring", nome: "Top Ring Black", img: "r90", de: 999, por: 599, unidades: [["336g", "26"]], vendida: false },

  // MBT (MaxBeachTen)
  { id: "mbt-logo-cyan", marca: "MBT", nome: "MBT Logo Cyan", img: "r99", de: 680, por: 299, unidades: [["310g", "26"]], vendida: false },
  { id: "mbt-titan", marca: "MBT", nome: "MBT Titan (limited edition)", img: "r103", de: 1899, por: 1399, unidades: [["325g", "26,2"]], vendida: false },
  { id: "mbt-x-drive-easy", marca: "MBT", nome: "MBT X-Drive Easy", img: "r101", de: 1300, por: 499, unidades: [["318g", "26,3"]], vendida: false },
  { id: "mbt-x-love-me", marca: "MBT", nome: "MBT X-Love Me", img: "r105", de: 1300, por: 599, unidades: [["325g", "26,2"], ["336g", "25"], ["339g", "26"]], vendida: false },
  { id: "mbt-t-carbon-3k", marca: "MBT", nome: "MBT T-Carbon 3K", img: "r112", de: 1300, por: 599, unidades: [["335g", "26,8"]], vendida: false },
  { id: "mbt-m-power", marca: "MBT", nome: "MBT M-Power", img: "r116", de: 1300, por: 799, unidades: [["336g", "25,5"], ["349g", "26"]], vendida: false },
  { id: "mbt-x-furious", marca: "MBT", nome: "MBT X-Furious", img: "r114", de: 1300, por: 499, unidades: [["339g", "25"]], estoque: 2, vendida: false },
  { id: "mbt-killer", marca: "MBT", nome: "MBT Killer (limited edition)", img: "r118", de: 1899, por: 1399, unidades: [["339g", "27,3"]], vendida: false },
  { id: "mbt-horse-2023", marca: "MBT", nome: "MBT Horse 2023", img: "r125", de: 1300, por: 999, unidades: [["339g", "27,5"]], vendida: false },
  { id: "mbt-t-carbon-15k", marca: "MBT", nome: "MBT T-Carbon 15K", img: "r129", de: 1300, por: 999, unidades: [["340g", "27,5"]], vendida: false },
  { id: "mbt-y-silver", marca: "MBT", nome: "MBT Y-Silver", img: "r127", de: 1300, por: 999, unidades: [["339g", "27,5"]], vendida: false },
  { id: "mbt-easy-horse-2021", marca: "MBT", nome: "MBT Easy Horse 2021", img: "r131", de: 1300, por: 699, unidades: [["345g", "26"], ["359g", "25,5"], ["355g", "26,5"]], vendida: false },
  { id: "mbt-easy-devil", marca: "MBT", nome: "MBT Easy Devil", img: "r138", de: 1300, por: 499, unidades: [["345g", "27,5"]], vendida: false },
  { id: "mbt-horse-verde", marca: "MBT", nome: "MBT Horse Verde", img: "r142", de: 1300, por: 499, unidades: [["349g", "26,8"]], vendida: false },
  { id: "mbt-x-drive", marca: "MBT", nome: "MBT X-Drive", img: "r140", de: 1300, por: 799, unidades: [["349g", "27,5"]], vendida: false },
];
