import {
  FoodEnum
} from "../enums/FoodEnum";

export const foodItems = [{
    id: 0,
    title: "Чорби",
    category: true,
    path: "/food/soups",
    iconName: "soup",
    items: [{
        id: 0,
        title: 'Телешка чорба',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Рибја Чорба',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
    ]
  },
  {
    id: 1,
    title: "Салати",
    category: true,
    path: "/food/salads",
    iconName: "salad",
    items: [{
        id: 0,
        title: 'Домат салата',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Шопска салата',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.krastavica, FoodEnum.kromid, FoodEnum.sirenje]
      },
      {
        id: 2,
        title: 'Таратур',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Македонска салата',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.peceniPiperki, FoodEnum.kromid, FoodEnum.magdonos]
      },
      {
        id: 4,
        title: 'Мимоза салата',
        price: 110,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.marula, FoodEnum.jajce, FoodEnum.rotkvica]
      },
      {
        id: 5,
        title: 'Мешана свежа салата',
        price: 140,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.morkov, FoodEnum.cveklo, FoodEnum.zelka, FoodEnum.domat, FoodEnum.krastavica]
      },
      {
        id: 6,
        title: 'Медитеранска салата',
        price: 140,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.krastavica, FoodEnum.piper, FoodEnum.kromid, FoodEnum.sirenje, FoodEnum.maslinki]
      },
      {
        id: 7,
        title: 'Цезар салата',
        price: 220,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.ajsberg, FoodEnum.parmesan, FoodEnum.pileskoMeso, FoodEnum.kubeti, FoodEnum.dresingSos]
      },
      {
        id: 8,
        title: 'Туна салата',
        price: 180,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.tuna, FoodEnum.ajsberg, FoodEnum.marula, FoodEnum.rukola, FoodEnum.sheriDomat, FoodEnum.maslinki, FoodEnum.jajce, ]
      },
      {
        id: 9,
        title: 'Капрезе салата',
        price: 220,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.mocarela, FoodEnum.pesto]
      },
      {
        id: 10,
        title: 'Рукола',
        price: 210,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.rukola, FoodEnum.parmesan, FoodEnum.susenDomat]
      },
    ]
  },
  {
    id: 2,
    title: "Појадок",
    category: true,
    path: "/food/breakfast",
    iconName: "breakfast",
    items: [{
        id: 0,
        title: 'Класик омлет',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.kaskaval, FoodEnum.shunka]
      },
      {
        id: 1,
        title: 'Медитерански омлет',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.sirenje, FoodEnum.maslinki, FoodEnum.kromid, FoodEnum.piperki]
      },
      {
        id: 2,
        title: 'Шампионски омлет',
        price: 150,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.kaskaval, FoodEnum.slanina, FoodEnum.pecurki]
      },
      {
        id: 3,
        title: 'Македонски доручек',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.dveJajcaNaOko, FoodEnum.sirenje, FoodEnum.ajvar, FoodEnum.maslinki]
      },
      {
        id: 4,
        title: 'Пржени лепчиња со шунка и кашкавал',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
    ]
  },
  {
    id: 3,
    title: "Сендвичи и врапови",
    category: true,
    path: "/food/sandwiches",
    iconName: "sandwich",
    items: [{
        id: 0,
        title: 'Пршута сендвич',
        price: 160,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.prshuta, FoodEnum.ajdamer, FoodEnum.pavlaka, FoodEnum.rukola, FoodEnum.marula, FoodEnum.lepche]
      },
      {
        id: 1,
        title: 'Панини сендвич',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.pileshkaSalama, FoodEnum.ajdamer, FoodEnum.namazOdJajacaIMajonez, FoodEnum.kiseliKrastavicki, FoodEnum.lepche]
      },
      {
        id: 2,
        title: 'Клуб сендвич',
        price: 170,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.pileshko, FoodEnum.marula, FoodEnum.rukola, FoodEnum.jajce, FoodEnum.domat, FoodEnum.pomfrit]
      },
      {
        id: 3,
        title: 'Пилешки врап',
        price: 140,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.pileshko, FoodEnum.ajdamer, FoodEnum.marula, FoodEnum.rukola, FoodEnum.domat, FoodEnum.kechap, FoodEnum.majonez]
      },
    ]
  },
  {
    id: 4,
    title: "Ладно предјадење",
    category: true,
    path: "/food/cold-starter",
    iconName: "coldstarters",
    items: [{
        id: 0,
        title: 'Овчо сирење',
        price: 100,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Биено сирење',
        price: 120,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Овчи кашкавал',
        price: 140,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Пармезан',
        price: 210,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Горгонзола',
        price: 200,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Моцарела',
        price: 140,
        quantity: 125,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Пиперка во павлака',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 7,
        title: 'Пршут свински',
        price: 270,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Пршут говедски',
        price: 350,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 9,
        title: 'Италијанска салама',
        price: 180,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 10,
        title: 'Маслинки',
        price: 90,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: 'Пинџур',
        price: 130,
        quantity: 150,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 12,
        title: 'Ајвар',
        price: 130,
        quantity: 150,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
    ]
  },
  {
    id: 5,
    title: "Топло предјадење",
    category: true,
    path: "/food/hot-starters",
    iconName: "hotstarter",
    items: [{
        id: 0,
        title: 'Биено сирење на скара',
        price: 120,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Топено сирење',
        price: 220,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: [FoodEnum.sirenje, FoodEnum.ajvar, FoodEnum.maslinki, FoodEnum.kaskaval]
      },
      {
        id: 2,
        title: 'Зденка похована',
        price: 30,
        quantity: 30,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Похован Кашкавал',
        price: 120,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Пирошка',
        price: 120,
        quantity: 150,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Чипс тиквици',
        price: 140,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Тиквици на скара',
        price: 120,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 7,
        title: 'Шампињони на скара',
        price: 130,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Вргањ на скара',
        price: 270,
        quantity: 300,
        description: '',
        ingredients: []
      },
      {
        id: 9,
        title: 'Зеленчук на скара',
        price: 160,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 10,
        title: 'Модар домат на скара со лук',
        price: 130,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: 'Чипс тортиља со чедар и со павлака',
        price: 160,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
    ]
  },
  {
    id: 6,
    title: "Пица и пастрмајлии",
    category: true,
    path: "/food/pizza",
    iconName: "pizza",
    items: [{
        id: 0,
        title: 'Маргарита',
        price: 260,
        quantity: 0,
        measureType: '',
        description: '',
        ingredients: [FoodEnum.mocarela, FoodEnum.pelat]
      }
    ]
  },
  {
    id: 7,
    title: "Рижото",
    category: true,
    path: "/food/rice",
    iconName: "rice",
    items: [{
        id: 0,
        title: 'Рижото со пилешко',
        price: 220,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: [FoodEnum.pileshkiStek, FoodEnum.shampinjoni, FoodEnum.sheriDomat, FoodEnum.kromid, FoodEnum.parmesan, FoodEnum.beloVino]
      },
      {
        id: 1,
        title: 'Рижото со зеленчук',
        price: 210,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: [FoodEnum.tikvica, FoodEnum.modarDomat, FoodEnum.piperki, FoodEnum.shampinjoni, FoodEnum.parmesan, FoodEnum.beloVino]
      },
      {
        id: 2,
        title: 'Рижото со морски плодови',
        price: 250,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: [FoodEnum.shkampi, FoodEnum.shkolki, FoodEnum.lignji, FoodEnum.kromid, FoodEnum.beloVino]
      },
    ]
  },
  {
    id: 8,
    title: "Паста",
    category: true,
    path: "/food/pasta",
    iconName: "pasta",
    items: [{
        id: 0,
        title: 'Фунги',
        price: 180,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: [FoodEnum.shampinjoni, FoodEnum.shunka, FoodEnum.hopla, FoodEnum.parmesan]
      },
      {
        id: 1,
        title: 'Карбонара',
        price: 200,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: [FoodEnum.slanina, FoodEnum.jajce, FoodEnum.hopla, FoodEnum.parmesan]
      },
      {
        id: 2,
        title: 'Кватро формаџи',
        price: 210,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: [FoodEnum.cetiriSirenja, FoodEnum.hopla]
      },
    ]
  },
  {
    id: 9,
    title: "Риба и морски плодови",
    category: true,
    path: "/food/fish",
    iconName: "fish",
    items: [{
        id: 0,
        title: 'Пастрмка',
        price: 750,
        quantity: 1,
        measureType: "кг.",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Орада',
        price: 1100,
        quantity: 1,
        measureType: "кг.",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Лосос',
        price: 1950,
        quantity: 1,
        measureType: "кг.",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Лигњи на скара',
        price: 350,
        quantity: 200,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Лигњи поховани',
        price: 350,
        quantity: 200,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
    ]
  },
  {
    id: 10,
    title: "Специјалитети од месо",
    category: true,
    path: "/food/meat-specialties",
    iconName: "meat",
    items: [{
        id: 0,
        title: "Специјалитети од пилешко",
        category: true,
        path: "/food/meat-specialties/chicken",
        iconName: "chicken",
        items: [{
            id: 0,
            title: 'Пилешки стек',
            price: 170,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 1,
            title: 'Полнето пилешко со кашкавал, печурки и сланина',
            price: 240,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 2,
            title: 'Полнето пилешко со моцарела и сув домат',
            price: 270,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 3,
            title: 'Пилешки медаљони со бадем и песто',
            price: 260,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 4,
            title: 'Пилешко крцкаво во чедар сос',
            price: 290,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 5,
            title: 'Пилешко во кари сос',
            price: 230,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 6,
            title: 'Пилешки прсти со тартар сос',
            price: 190,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
        ]
      },
      {
        id: 1,
        title: "Специјалитети од свинско",
        category: true,
        path: "/food/meat-specialties/pork",
        iconName: "pork",
        items: [{
            id: 0,
            title: 'Вешалица',
            price: 200,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 1,
            title: 'Растурен ражнич со грилован зеленчук',
            price: 210,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 2,
            title: 'Свежо ребро на скара',
            price: 200,
            quantity: 350,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 3,
            title: 'Ребро со кременадла',
            price: 340,
            quantity: 500,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 4,
            title: 'Свинско филе',
            price: 320,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 5,
            title: 'Свинско филе со праз и пиперка',
            price: 360,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 6,
            title: 'Полнето свинско филе со пршут и кашкавал во сос од печурки',
            price: 440,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 7,
            title: 'Свински медаљони во пршут',
            price: 410,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 8,
            title: 'Бечка шницла',
            price: 240,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
        ]
      },
      {
        id: 2,
        title: "Мелено месо / Колбаси",
        category: true,
        path: "/food/meat-specialties/minced-meat",
        iconName: "minced",
        items: [{
            id: 0,
            title: 'Плескавица',
            price: 160,
            quantity: 200,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 1,
            title: 'Шарска плескавица',
            price: 190,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 2,
            title: 'Гурманска плескавица',
            price: 190,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 3,
            title: 'Плескавица со кајмак',
            price: 250,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 4,
            title: 'Уштипци',
            price: 50,
            quantity: 60,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 5,
            title: 'Колбас',
            price: 150,
            quantity: 200,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
        ]
      },
      {
        id: 3,
        title: "Специјалитети од телешко",
        category: true,
        path: "/food/meat-specialties/veal",
        iconName: "veal",
        items: [{
            id: 0,
            title: 'Бифтек',
            price: 950,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 1,
            title: 'Телешки медаљони со печурки во еспањол сос',
            price: 920,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 2,
            title: 'Телешко соте',
            price: 900,
            quantity: 250,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 3,
            title: 'Телешка кременадла',
            price: 510,
            quantity: 350,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 4,
            title: 'Телешки мускул во сос',
            price: 340,
            quantity: 300,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
        ]
      },
      {
        id: 4,
        title: "Печење",
        category: true,
        path: "/food/meat-specialties/roast-meat",
        iconName: "roast",
        items: [{
            id: 0,
            title: 'Ребро во фурна',
            price: 340,
            quantity: 350,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 1,
            title: 'Барбикју ребро',
            price: 370,
            quantity: 350,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 2,
            title: 'Коленица',
            price: 350,
            quantity: 450,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
          {
            id: 3,
            title: 'Прасечко',
            price: 1080,
            quantity: 1,
            measureType: "кг.",
            description: '',
            ingredients: []
          },
          {
            id: 4,
            title: 'Јагнешки котлети',
            price: 350,
            quantity: 350,
            measureType: "гр.",
            description: '',
            ingredients: []
          },
        ]
      },
    ]
  },
  {
    id: 11,
    title: "Додатоци и прилози",
    category: true,
    path: "/food/sides",
    iconName: "sides",
    items: [{
        id: 0,
        title: 'Лепиња',
        price: 20,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Пекарски компир',
        price: 80,
        quantity: 300,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Помфрит',
        price: 90,
        quantity: 300,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Помфрит со сирење',
        price: 120,
        quantity: 350,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Брокула',
        price: 120,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Пиперка',
        price: 30,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Кајмак',
        price: 90,
        quantity: 60,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 7,
        title: 'Јајца варено',
        price: 20,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
    ]
  },
  {
    id: 12,
    title: "Десерти и апетисани",
    category: true,
    path: "/food/dessert",
    iconName: "dessert",
    items: [{
        id: 0,
        title: 'Топло ладно',
        price: 140,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Палачинки со крем и банана',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Палачинки со крем, банана и плазма',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Палачинки со мед и ореви',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Чоколаден колач',
        price: 70,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Баклава',
        price: 90,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Штрудла со јаболко',
        price: 60,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 7,
        title: 'Лешник, бадем, индиски микс',
        price: 150,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Кикирики',
        price: 50,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
    ]
  },
]