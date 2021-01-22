export const CURRENCY = "UAH";

export const CURRENCY_EXCHANGE = {
  USD: 27.96,
  RUB: 0.38,
};

export const BASKET = {
  elements: 4,
  price: 4000,
};

export const TOP_MENU = {
  catalog: {
    order: 1,
    title: "Каталог",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  catalog: {
    order: 1,
    title: "Каталог",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  about_company: {
    order: 2,
    title: "О компании",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
      {
        order: 3,
        title: "Routers",
        url: "routers.html",
      },
    ],
  },

  payment_delivery: {
    order: 3,
    title: "Payment and delivery",
    url: "payment_delivery.html",
  },
};

export const MENU = [
  {
    order: 1,
    title: "VOIP ОБОРУДОВАНИЕ",
    url: "voip_equipment.html",
  },
  {
    order: 2,
    title: "SKYPE оборудование",
    url: "skype_equipment.html",
  },
  {
    order: 3,
    title: "GSM оборудование",
    url: "gsm_equipment.html",
  },
  {
    order: 4,
    title: "VIDEO оборудование",
    url: "video_equipment.html",
  },
];

export const NEWS = [
  {
    date: "2021/01/01",
    title: "Новинка от «Элтекс» - точка доступа WEP",
    description:
      "Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.",
    img: "./images/news-pages/News page-1.png",
    url: "voip_equipment.html",
  },
  {
    date: "2020/12/25",
    title: "Новинка от компании Grandstream!",
    description: "Скоро в продаже мощный маршрутизатор GWN7000!",
    img: "./images/news-pages/News page-1.png",
    url: "voip_equipment.html",
  },
  {
    date: "2021/01/14",
    title: "WiFi точка доступа от компании Grandstream!",
    description: "Уже скоро в продаже!",
    img: "./images/news-pages/News page-1.png",
    url: "voip_equipment.html",
  },
];

export const BANNER = [
  {
    order: 1,
    img: "./images/icons/slider-bg.png",
    url: "voip_equipment.html",
  },
  {
    order: 2,
    img: "https://same_url2.jpg",
    url: "voip_equipment.html",
  },
];

// type ['new', 'recommended', 'sale']
export const ITEMS = [
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    // price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "50",
    oldPrice: "200",
    currency: "RUB",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "150",
    oldPrice: "200",
    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "50",
    oldPrice: "200",
    currency: "RUB",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "50",
    oldPrice: "200",
    currency: "RUB",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    price: "50",
    oldPrice: "200",
    currency: "RUB",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
];

export const PROMOTIONS = [
  {
    title: "Название акции",
    description: "IP телефон Siemens Gigaset C530A IP",
    // img: 'https://same_url.jpg',
    url: "https://same_url/item.html",
    time_action: "1d 2h 20m",
  },
  {
    title: "Название акции 2",
    description: "IP телефон Siemens Gigaset C530A IP",
    // img: 'https://same_url.jpg',
    url: "https://same_url/item.html",
  },
  {
    title: "Название акции",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    url: "https://same_url/item.html",
    time_action: "1d 2h 20m",
  },
  {
    title: "Название акции 2",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "https://same_url.jpg",
    url: "https://same_url/item.html",
  },
];

export const BUYING_RIGHT_NOW = [
  {
    title: "Замок дверной Samsung SHS-2320 XMK/EN 1",
    img: "./images/photo/product-1.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 2",
    // img: "https://same_url.jpg",
    url: "https://same_url/item.html",
  },
  {
    title: "Замок дверной Samsung SHS-2320 XMK/EN 3",
    img: "./images/photo/product-1.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 4",
    // img: "https://same_url.jpg",
    url: "https://same_url/item.html",
  },
  {
    title: "Замок дверной Samsung SHS-2320 XMK/EN 5",
    img: "./images/photo/product-1.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 6",
    // img: "https://same_url.jpg",
    url: "https://same_url/item.html",
  },
];
