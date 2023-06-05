import {
  FoodEnum
} from "../enums/FoodEnum";

export const foodItems = [
  // {
  //   id: 0,
  //   title: "Чорби",
  //   category: true,
  //   path: "/food/soups",
  //   iconName: "soup",
  //   items: [{
  //       id: 0,
  //       title: 'Телешка чорба',
  //       price: 120,
  //       quantity: null,
  //       measureType: "",
  //       description: '',
  //       ingredients: []
  //     },
  //     {
  //       id: 1,
  //       title: 'Рибја Чорба',
  //       price: 130,
  //       quantity: null,
  //       measureType: "",
  //       description: '',
  //       ingredients: []
  //     },
  //   ]
  // },
  {
    id: 1,
    title: "Салати",
    category: true,
    path: "/food/salads",
    iconName: "salad",
    items: [
      {
        id: 0,
        title: 'Шопска салата',
        price: 150,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.krastavica, FoodEnum.kromid, FoodEnum.sirenje]
      },
      {
        id: 1,
        title: 'Таратур',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Македонска салата',
        price: 170,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.peceniPiperki, FoodEnum.kromid, FoodEnum.magdonos]
      },
      {
        id: 3,
        title: 'Мешана свежа салата со семки од тиква',
        price: 140,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.morkov, FoodEnum.cveklo, FoodEnum.zelka, FoodEnum.domat, FoodEnum.krastavica]
      },
      {
        id: 4,
        title: 'Медитеранска салата',
        price: 150,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.krastavica, FoodEnum.piper, FoodEnum.kromid, FoodEnum.sirenje, FoodEnum.maslinki]
      },
      {
        id: 5,
        title: 'Цезар салата',
        price: 290,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.ajsberg, FoodEnum.parmesan, FoodEnum.pileskoMeso, FoodEnum.kubeti, FoodEnum.dresingSos]
      },
      {
        id: 6,
        title: 'Туна салата',
        price: 260,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.tuna, FoodEnum.ajsberg, FoodEnum.marula, FoodEnum.rukola, FoodEnum.sheriDomat, FoodEnum.maslinki, FoodEnum.jajce, ]
      },
      {
        id: 7,
        title: 'Капрезе салата',
        price: 260,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.domat, FoodEnum.mocarela, FoodEnum.pesto]
      },
      {
        id: 8,
        title: 'Рукола',
        price: 270,
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
        price: 160,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.kaskaval, FoodEnum.shunka]
      },
      {
        id: 1,
        title: 'Медитерански омлет',
        price: 160,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.sirenje, FoodEnum.maslinki, FoodEnum.kromid, FoodEnum.piperki]
      },
      {
        id: 2,
        title: 'Шампионски омлет',
        price: 180,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.kaskaval, FoodEnum.slanina, FoodEnum.pecurki]
      },
      {
        id: 3,
        title: 'Македонски доручек',
        price: 160,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.dveJajcaNaOko, FoodEnum.sirenje, FoodEnum.ajvar, FoodEnum.maslinki]
      }
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
        price: 210,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.prshuta, FoodEnum.kaskaval, FoodEnum.pavlaka, FoodEnum.domat, FoodEnum.krastavica, FoodEnum.pavlaka, FoodEnum.namaz]
      },
      {
        id: 1,
        title: 'Панини сендвич',
        price: 180,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.shunka, FoodEnum.kaskaval, FoodEnum.domat, FoodEnum.krastavica, FoodEnum.pavlaka, FoodEnum.marula]
      },
      {
        id: 2,
        title: 'Пиза сендвич',
        price: 220,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.shunka, FoodEnum.kaskaval, FoodEnum.pelat, FoodEnum.pecurki]
      },
      {
        id: 3,
        title: 'Пеперони сендвич',
        price: 240,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [FoodEnum.kulen, FoodEnum.kaskaval, FoodEnum.pecurki]
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
        price: 150,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      // {
      //   id: 1,
      //   title: 'Биено сирење',
      //   price: 120,
      //   quantity: 100,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      {
        id: 2,
        title: 'Овчи кашкавал',
        price: 180,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Пармезан',
        price: 250,
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
      // {
      //   id: 5,
      //   title: 'Моцарела',
      //   price: 140,
      //   quantity: 125,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      {
        id: 6,
        title: 'Пиперка во павлака',
        price: 150,
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
      // {
      //   id: 9,
      //   title: 'Италијанска салама',
      //   price: 180,
      //   quantity: 100,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
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
        price: 150,
        quantity: 150,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 12,
        title: 'Ајвар',
        price: 150,
        quantity: 150,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 13,
        title: 'Ладна даска',
        price: 880,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ["свинска пршута 60гр", "говедска пршута 60гр", "пармезан 60гр", "овчо кашкавал 60гр", "горгонзола 60гр"]
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
        price: 170,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      // {
      //   id: 1,
      //   title: 'Топено сирење',
      //   price: 220,
      //   quantity: 250,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: [FoodEnum.sirenje, FoodEnum.ajvar, FoodEnum.maslinki, FoodEnum.kaskaval]
      // },
      {
        id: 2,
        title: 'Зденка похована',
        price: 60,
        quantity: 30,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Похован Кашкавал',
        price: 180,
        quantity: 80,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Пирошка',
        price: 120,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Пилешки прсти',
        price: 290,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Чипс тиквици',
        price: 140,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 7,
        title: 'Тиквици на скара',
        price: 140,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Шампињони на скара',
        price: 160,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      // {
      //   id: 8,
      //   title: 'Вргањ на скара',
      //   price: 270,
      //   quantity: 300,
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 9,
      //   title: 'Зеленчук на скара',
      //   price: 160,
      //   quantity: 250,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 10,
      //   title: 'Модар домат на скара со лук',
      //   price: 130,
      //   quantity: 250,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 11,
      //   title: 'Чипс тортиља со чедар и со павлака',
      //   price: 160,
      //   quantity: 250,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      {
        id: 9,
        title: 'Топло мезе',
        price: 620,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: ['пирошка', 'кашкавал', 'зденка', 'тиквици', 'пилешки прсти', 'крокети']
      },
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
        price: 260,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: ['пилешки стек', 'шампињони', 'шери', 'кромид', 'пармезан']
      },
      {
        id: 1,
        title: 'Рижото со зеленчук',
        price: 240,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: ['тиквица', 'модар домат', 'пиперка', 'шампињони', 'пармезан']
      },
      // {
      //   id: 2,
      //   title: 'Рижото со морски плодови',
      //   price: 250,
      //   quantity: 250,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: [FoodEnum.shkampi, FoodEnum.shkolki, FoodEnum.lignji, FoodEnum.kromid, FoodEnum.beloVino]
      // },
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
        price: 230,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: ['шампињони', 'шунка', 'хопла', 'пармезан']
      },
      {
        id: 1,
        title: 'Карбонара',
        price: 240,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: ['сланина', 'јајце', 'хопла', 'пармезан']
      },
      {
        id: 2,
        title: 'Кватро формаџи',
        price: 260,
        quantity: 250,
        measureType: "гр.",
        description: '',
        ingredients: ['четири сирења', 'хопла']
      },
    ]
  },
  {
    id: 6,
    title: "Пица и пастрмајлии",
    category: true,
    path: "/food/pizza",
    iconName: "pizza",
    items: [
      {
        id: 0,
        title: 'Маргарита',
        price: 260,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['моцарела', 'пелат']
      },
      {
        id: 0,
        title: 'Капричиоза',
        price: 290,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'шунка', 'печурки']
      },
      {
        id: 0,
        title: 'Пеперони',
        price: 300,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'кулен']
      },
      {
        id: 0,
        title: 'Везувио',
        price: 280,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'печурки']
      },
      {
        id: 0,
        title: 'Наполитана',
        price: 290,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'шунка']
      },
      {
        id: 0,
        title: 'Пармиџана',
        price: 370,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'пршута', 'рукола', 'пармезан']
      },
      {
        id: 0,
        title: 'Алполио',
        price: 270,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'магдонос', 'лук']
      },
      {
        id: 0,
        title: 'Ксантика',
        price: 420,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'кулен', 'пршута', 'домат', 'сирење', 'павлака']
      },
      {
        id: 0,
        title: 'Кватро формаџи',
        price: 380,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'ајдамер', 'горгонзола', 'пармезан', 'моцарела']
      },
      {
        id: 0,
        title: 'Карбонара',
        price: 360,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'сланина', 'јајце']
      },
      {
        id: 0,
        title: 'Вегетаријана',
        price: 350,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'домат', 'пиперка', 'тиквица', 'кромид', 'маслинка', 'печурки']
      },
      {
        id: 0,
        title: 'Затворена пица капричиоза',
        price: 220,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'шунка', 'печурки']
      },
      {
        id: 0,
        title: 'Затворена пица пеперони',
        price: 250,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: ['пелат', 'моцарела', 'кулен', 'павлака']
      },
      {
        id: 0,
        title: 'Свинска пастрмалјија',
        price: 290,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Пилешка пастрмајлија',
        price: 270,
        quantity: '',
        measureType: '',
        description: '',
        ingredients: []
      },
    ]
  },
  {
    id: 9,
    title: "Главно јадење",
    category: true,
    path: "/food/main-course",
    iconName: "meat",
    items: [
      {
        id: 0,
        title: 'Пилешки стек',
        price: 240,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Пилешко крцкаво во чедар сос',
        price: 380,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Пилешко во кари сос',
        price: 290,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Пилешки стек во Алфредо сос',
        price: 330,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Плескавица',
        price: 250,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Плескавица со кајмак',
        price: 310,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Шарска плескавица',
        price: 310,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Домашна кобасица',
        price: 250,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Свинско филе со праз и суви пиперки',
        price: 520,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Свинско печење во грне со сос од печурки',
        price: 330,
        quantity: '',
        measureType: "",
        description: '',
        ingredients: []
      },
    ]
  },
  // {
  //   id: 9,
  //   title: "Риба и морски плодови",
  //   category: true,
  //   path: "/food/fish",
  //   iconName: "fish",
  //   items: [{
  //       id: 0,
  //       title: 'Пастрмка',
  //       price: 750,
  //       quantity: 1,
  //       measureType: "кг.",
  //       description: '',
  //       ingredients: []
  //     },
  //     {
  //       id: 1,
  //       title: 'Орада',
  //       price: 1100,
  //       quantity: 1,
  //       measureType: "кг.",
  //       description: '',
  //       ingredients: []
  //     },
  //     {
  //       id: 2,
  //       title: 'Лосос',
  //       price: 1950,
  //       quantity: 1,
  //       measureType: "кг.",
  //       description: '',
  //       ingredients: []
  //     },
  //     {
  //       id: 3,
  //       title: 'Лигњи на скара',
  //       price: 350,
  //       quantity: 200,
  //       measureType: "гр.",
  //       description: '',
  //       ingredients: []
  //     },
  //     {
  //       id: 4,
  //       title: 'Лигњи поховани',
  //       price: 350,
  //       quantity: 200,
  //       measureType: "гр.",
  //       description: '',
  //       ingredients: []
  //     },
  //   ]
  // },
  // {
  //   id: 10,
  //   title: "Специјалитети од месо",
  //   category: true,
  //   path: "/food/meat-specialties",
  //   iconName: "meat",
  //   items: [{
  //       id: 0,
  //       title: "Специјалитети од пилешко",
  //       category: true,
  //       path: "/food/meat-specialties/chicken",
  //       iconName: "chicken",
  //       items: [{
  //           id: 0,
  //           title: 'Пилешки стек',
  //           price: 170,
  //           quantity: 250,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 1,
  //           title: 'Полнето пилешко со кашкавал, печурки и сланина',
  //           price: 240,
  //           quantity: 300,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 2,
  //           title: 'Полнето пилешко со моцарела и сув домат',
  //           price: 270,
  //           quantity: 300,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 3,
  //           title: 'Пилешки медаљони со бадем и песто',
  //           price: 260,
  //           quantity: 250,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 4,
  //           title: 'Пилешко крцкаво во чедар сос',
  //           price: 290,
  //           quantity: 300,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 5,
  //           title: 'Пилешко во кари сос',
  //           price: 230,
  //           quantity: 250,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 6,
  //           title: 'Пилешки прсти со тартар сос',
  //           price: 190,
  //           quantity: 300,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //       ]
  //     },
      // {
      //   id: 1,
      //   title: "Специјалитети од свинско",
      //   category: true,
      //   path: "/food/meat-specialties/pork",
      //   iconName: "pork",
      //   items: [{
      //       id: 0,
      //       title: 'Вешалица',
      //       price: 200,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 1,
      //       title: 'Растурен ражнич со грилован зеленчук',
      //       price: 210,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 2,
      //       title: 'Свежо ребро на скара',
      //       price: 200,
      //       quantity: 350,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 3,
      //       title: 'Ребро со кременадла',
      //       price: 340,
      //       quantity: 500,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 4,
      //       title: 'Свинско филе',
      //       price: 320,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 5,
      //       title: 'Свинско филе со праз и пиперка',
      //       price: 360,
      //       quantity: 300,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 6,
      //       title: 'Полнето свинско филе со пршут и кашкавал во сос од печурки',
      //       price: 440,
      //       quantity: 300,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 7,
      //       title: 'Свински медаљони во пршут',
      //       price: 410,
      //       quantity: 300,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 8,
      //       title: 'Бечка шницла',
      //       price: 240,
      //       quantity: 300,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //   ]
      // },
      // {
      //   id: 2,
      //   title: "Мелено месо / Колбаси",
      //   category: true,
      //   path: "/food/meat-specialties/minced-meat",
      //   iconName: "minced",
      //   items: [{
      //       id: 0,
      //       title: 'Плескавица',
      //       price: 160,
      //       quantity: 200,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 1,
      //       title: 'Шарска плескавица',
      //       price: 190,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 2,
      //       title: 'Гурманска плескавица',
      //       price: 190,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 3,
      //       title: 'Плескавица со кајмак',
      //       price: 250,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 4,
      //       title: 'Уштипци',
      //       price: 50,
      //       quantity: 60,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 5,
      //       title: 'Колбас',
      //       price: 150,
      //       quantity: 200,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //   ]
      // },
      // {
      //   id: 3,
      //   title: "Специјалитети од телешко",
      //   category: true,
      //   path: "/food/meat-specialties/veal",
      //   iconName: "veal",
      //   items: [{
      //       id: 0,
      //       title: 'Бифтек',
      //       price: 950,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 1,
      //       title: 'Телешки медаљони со печурки во еспањол сос',
      //       price: 920,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 2,
      //       title: 'Телешко соте',
      //       price: 900,
      //       quantity: 250,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 3,
      //       title: 'Телешка кременадла',
      //       price: 510,
      //       quantity: 350,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //     {
      //       id: 4,
      //       title: 'Телешки мускул во сос',
      //       price: 340,
      //       quantity: 300,
      //       measureType: "гр.",
      //       description: '',
      //       ingredients: []
      //     },
      //   ]
      // },
  //     {
  //       id: 4,
  //       title: "Печење",
  //       category: true,
  //       path: "/food/meat-specialties/roast-meat",
  //       iconName: "roast",
  //       items: [{
  //           id: 0,
  //           title: 'Ребро во фурна',
  //           price: 340,
  //           quantity: 350,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 1,
  //           title: 'Барбикју ребро',
  //           price: 370,
  //           quantity: 350,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 2,
  //           title: 'Коленица',
  //           price: 350,
  //           quantity: 450,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 3,
  //           title: 'Прасечко',
  //           price: 1080,
  //           quantity: 1,
  //           measureType: "кг.",
  //           description: '',
  //           ingredients: []
  //         },
  //         {
  //           id: 4,
  //           title: 'Јагнешки котлети',
  //           price: 350,
  //           quantity: 350,
  //           measureType: "гр.",
  //           description: '',
  //           ingredients: []
  //         },
  //       ]
  //     },
  //   ]
  // },
  {
    id: 11,
    title: "Додатоци и прилози",
    category: true,
    path: "/food/sides",
    iconName: "sides",
    items: [{
        id: 0,
        title: 'Лепиња',
        price: 30,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Фурнарини',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 0,
        title: 'Фурнарини со кашкавал',
        price: 150,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Пекарски компир',
        price: 80,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Помфрит',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Помфрит со сирење',
        price: 170,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      // {
      //   id: 4,
      //   title: 'Брокула',
      //   price: 120,
      //   quantity: 250,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 5,
      //   title: 'Пиперка',
      //   price: 30,
      //   quantity: null,
      //   measureType: "",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 6,
      //   title: 'Кајмак',
      //   price: 90,
      //   quantity: 60,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 7,
      //   title: 'Јајца варено',
      //   price: 20,
      //   quantity: null,
      //   measureType: "",
      //   description: '',
      //   ingredients: []
      // },
    ]
  },
  {
    id: 12,
    title: "Десерти и апетисани",
    category: true,
    path: "/food/dessert",
    iconName: "dessert",
    items: [
      {
        id: 1,
        title: 'Палачинки со крем и банана',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Палачинки со крем, банана и плазма',
        price: 130,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Палачинки со мед и ореви',
        price: 110,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Лешник, бадем, индиски микс',
        price: 150,
        quantity: 100,
        measureType: "гр.",
        description: '',
        ingredients: []
      },
      // {
      //   id: 5,
      //   title: 'Баклава',
      //   price: 90,
      //   quantity: null,
      //   measureType: "",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 6,
      //   title: 'Штрудла со јаболко',
      //   price: 60,
      //   quantity: null,
      //   measureType: "",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 7,
      //   title: 'Лешник, бадем, индиски микс',
      //   price: 150,
      //   quantity: 100,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
      // {
      //   id: 8,
      //   title: 'Кикирики',
      //   price: 50,
      //   quantity: 100,
      //   measureType: "гр.",
      //   description: '',
      //   ingredients: []
      // },
    ]
  },
]