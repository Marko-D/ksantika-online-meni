import { DrinksEnum } from "../enums/DrinksEnum";

export const drinksItems = [{

    id: 0,
    title: "Топли напитоци",
    category: true,
    path: "/drinks/hot-beverages",
    iconName: "hotBeverages",
    items: [{
        id: 0,
        title: 'Еспресо',
        price: 50,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Мало макијато',
        price: 60,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      }, {
        id: 2,
        title: 'Макијато',
        price: 70,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Капучино',
        price: 80,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Нес кафе',
        price: 90,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Чај',
        price: 60,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: [DrinksEnum.planinski, DrinksEnum.majcinaDusica, DrinksEnum.kamilica, DrinksEnum.shumskoOvoshje, DrinksEnum.nane]
      },
    ]
  },
  {
    id: 1,
    title: "Безалкохолни пијалоци",
    category: true,
    path: "/drinks/alcohol-free-drinks",
    iconName: "alcoholFreeDrinks",
    items: [{
        id: 0,
        title: 'Кока Кола',
        price: 70,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Кока Кола зеро',
        price: 70,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Фанта',
        price: 70,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Спрајт',
        price: 70,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Швепс битерлемон',
        price: 70,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Швепс тоник',
        price: 70,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Негазирани сокови',
        price: 90,
        quantity: 0.2,
        measureType: "",
        description: '',
        ingredients: [DrinksEnum.praska, DrinksEnum.portokal, DrinksEnum.jabolko]
      },
      {
        id: 7,
        title: 'Леден чај',
        price: 80,
        quantity: 0.2,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Цеден лимон',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 9,
        title: 'Цеден портокал',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 10,
        title: 'Цеден микс',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: 'Ред бул',
        price: 190,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 12,
        title: 'Вода',
        price: "80/50",
        quantity: '0.75/0.25',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 13,
        title: 'Вода минерална',
        price: "80/50",
        quantity: '0.75/0.25',
        measureType: "",
        description: '',
        ingredients: []
      },

    ]
  },
  {
    id: 2,
    title: "Аперитиви и дигестиви",
    category: true,
    path: "/drinks/aperitifs",
    iconName: "aperitifs",
    items: [{
        id: 0,
        title: 'Тиквешка жолта',
        price: 60,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Тиквешка ВС',
        price: 90,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Св. Трифун',
        price: 150,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Узо Тсантали',
        price: 60,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Узо Пломари',
        price: 90,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Шток 84',
        price: 90,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Бадел',
        price: 70,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 7,
        title: 'Јегермајстер',
        price: 130,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Мартини',
        price: 100,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 9,
        title: 'Кампари',
        price: 120,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 10,
        title: 'Бејлис',
        price: 160,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: 'Текила',
        price: 100,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },    
    ]
  },
  {
    id: 3,
    title: "Виски",
    category: true,
    path: "/drinks/whiskey",
    iconName: "whiskey",
    items: [{
        id: 0,
        title: 'Џони Вокер ред',
        price: 150,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Џ&Б',
        price: 150,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Џејмисон',
        price: 170,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Џек Даниелс',
        price: 210,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },      
    ]
  },
  {
    id: 4,
    title: "Вотка",
    category: true,
    path: "/drinks/votka",
    iconName: "votka",
    items: [{
        id: 0,
        title: 'Смирноф ред',
        price: 110,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Абсолут',
        price: 130,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Сирок',
        price: 400,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },      
    ]
  },
  {
    id: 5,
    title: "Џин",
    category: true,
    path: "/drinks/gin",
    iconName: "gin",
    items: [{
        id: 0,
        title: 'Гордонс',
        price: 120,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Бифитер',
        price: 120,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },      
    ]
  },
  {
    id: 6,
    title: "Рум",
    category: true,
    path: "/drinks/rum",
    iconName: "rum",
    items: [{
        id: 0,
        title: 'Хавана',
        price: 140,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Кептен Морган',
        price: 120,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },      
    ]
  },
  {
    id: 7,
    title: "Пиво",
    category: true,
    path: "/drinks/beer",
    iconName: "beer",
    items: [{
        id: 0,
        title: 'Скопско',
        price: "80/80",
        quantity: "0.33/0.5",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Скопско Смут',
        price: "80/80",
        quantity: "0.33/0.5",
        measureType: "",
        description: '',
        ingredients: []
      }, 
      ,
      {
        id: 2,
        title: 'Амстел',
        price: 100,
        quantity: "0.33",
        measureType: "",
        description: '',
        ingredients: []
      }, 
      ,
      {
        id: 3,
        title: 'Хајнекен',
        price: "130",
        quantity: "0.33",
        measureType: "",
        description: '',
        ingredients: []
      }, 
      ,
      {
        id: 4,
        title: 'Златен Даб',
        price: 80,
        quantity: "0.5",
        measureType: "",
        description: '',
        ingredients: []
      },      
    ]
  },
  {
    id: 8,
    title: "Вино",
    category: true,
    path: "/drinks/wine",
    iconName: "wine",
    items: [{
        id: 0,
        title: 'Александрија бело',
        price: "490/140",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Александрија црвено',
        price: "490/140",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },       
      {
        id: 2,
        title: 'Александрија розе',
        price: "490/140",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },       
      {
        id: 3,
        title: 'Траминец',
        price: "490/140",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },       
      {
        id: 4,
        title: 'Темјаника',
        price: "490/140",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },      
      {
        id: 5,
        title: "Т'га за југ",
        price: "490/140",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },   
      {
        id: 6,
        title: "СС Темјаника",
        price: 760,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      },  
      {
        id: 7,
        title: "СС Шардоне",
        price: 760,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      },  
      {
        id: 8,
        title: "СС Вранец",
        price: 760,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 9,
        title: "Александрија Куве бело",
        price: "790/190",
        quantity: "0.750/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 10,
        title: "Александрија Куве розе",
        price: "790/190",
        quantity: "0.750/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: "Александрија Куве црвено",
        price: "790/190",
        quantity: "0.750/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 12,
        title: "Бела вода бело",
        price: 2450,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 13,
        title: "Бела вода црвено",
        price: 2450,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 14,
        title: "Барово бело",
        price: 2450,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 15,
        title: "Барово црвено",
        price: 2450,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 16,
        title: "Бело наливно",
        price: 80,
        quantity: "0.200",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 17,
        title: "Розе наливно",
        price: 80,
        quantity: "0.200",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 18,
        title: "Црвено наливно",
        price: 80,
        quantity: "0.200",
        measureType: "",
        description: '',
        ingredients: []
      },
    ]
  },
]