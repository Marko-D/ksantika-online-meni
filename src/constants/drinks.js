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
        price: 80,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Мало макијато',
        price: 90,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      }, {
        id: 2,
        title: 'Макијато',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Капучино',
        price: 110,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Нес кафе',
        price: 120,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Американо',
        price: 100,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Чај',
        price: 80,
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
        price: 100,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Кока Кола Зеро',
        price: 100,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Фанта',
        price: 100,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Спрајт',
        price: 100,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Швепс битерлемон',
        price: 100,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Швепс тоник',
        price: 100,
        quantity: 0.25,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Негазирани сокови',
        price: 120,
        quantity: 0.2,
        measureType: "",
        description: '',
        ingredients: ['праска', 'портокал', 'јаболко']
      },
      {
        id: 7,
        title: 'Леден чај',
        price: 120,
        quantity: 0.2,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Цеден лимон',
        price: 150,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 9,
        title: 'Цеден портокал',
        price: 170,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 10,
        title: 'Цеден микс',
        price: 170,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: 'Ред бул',
        price: 250,
        quantity: null,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 12,
        title: 'Вода',
        price: "110/60",
        quantity: '0.75/0.25',
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 13,
        title: 'Вода минерална',
        price: "110/60",
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
        price: 80,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Тиквешка ВС',
        price: 110,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Св. Трифун',
        price: 170,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Узо',
        price: 80,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 4,
        title: 'Узо Пломари',
        price: 120,
        quantity: 0.05,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 5,
        title: 'Шток 84',
        price: 140,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: 'Бадел',
        price: 90,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 7,
        title: 'Јегермајстер',
        price: 160,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 8,
        title: 'Мартини',
        price: 120,
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
        price: 170,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: 'Текила',
        price: 120,
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
        title: 'Џони Вокер блек ',
        price: 320,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Џејмисон',
        price: 180,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 3,
        title: 'Џек Даниелс',
        price: 290,
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
        price: 120,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Абсолут',
        price: 140,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 2,
        title: 'Сирок',
        price: 300,
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
        price: 150,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Бифитер',
        price: 150,
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
        price: 150,
        quantity: 0.04,
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Кептен Морган',
        price: 150,
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
        price: 110,
        quantity: "0.33",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Скопско Смут',
        price: 110,
        quantity: "0.33",
        measureType: "",
        description: '',
        ingredients: []
      }, 
      ,
      {
        id: 2,
        title: 'Амстел',
        price: 130,
        quantity: "0.33",
        measureType: "",
        description: '',
        ingredients: []
      }, 
      ,
      {
        id: 3,
        title: 'Хајнекен',
        price: 160,
        quantity: "0.33",
        measureType: "",
        description: '',
        ingredients: []
      }, 
      ,
      {
        id: 4,
        title: 'Златен Даб',
        price: 110,
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
        price: "700/210",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 1,
        title: 'Александрија црвено',
        price: "700/210",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },       
      {
        id: 2,
        title: 'Александрија розе',
        price: "700/210",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },       
      {
        id: 3,
        title: 'Траминец',
        price: "700/210",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },       
      {
        id: 4,
        title: 'Темјаника',
        price: "700/210",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },      
      {
        id: 5,
        title: "Т'га за југ",
        price: "700/210",
        quantity: "0.75/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },   
      {
        id: 9,
        title: "Александрија Куве бело",
        price: "1200/310",
        quantity: "0.750/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 10,
        title: "Александрија Куве розе",
        price: "1200/310",
        quantity: "0.750/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 11,
        title: "Александрија Куве црвено",
        price: "1200/310",
        quantity: "0.750/0.187",
        measureType: "",
        description: '',
        ingredients: []
      },
      {
        id: 6,
        title: "СС Темјаника",
        price: 1250,
        quantity: "0.750",
        measureType: "",
        description: '',
        ingredients: []
      }
    ]
  },
]