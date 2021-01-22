'use strict';
import {
  TOP_MENU,
  MENU,
  NEWS,
  BASKET,
  ITEMS,
  PROMOTIONS,
  BUYING_RIGHT_NOW,
  BANNER,
} from './config.js';
import { badges } from './constants.js';
import topMenuTemplate from './topMenu.js';
import menuProductTemplate from './menuProduct.js';
import basketTemplate from './basket.js';
import sliderTemplate from './sliderTemplate.js';
import newsTemplate from './news.js';
import bannerTemplate from './banner.js';

import itemsTemplate from './itemsTemplate.js';
import stockItemTemplate from './stockItem.js';
import buyingRightNowTemplate from './buyingRightNow.js';

const userBasket = BASKET;

const refs = {
  topMenu: document.querySelector('#topMenu'),
  menuProduct: document.querySelector('#menuProduct'),
  basket: document.querySelector('#basket'),
  news: document.querySelector('#news'),
  bannerSlider: document.querySelector('#bannerSlider'),
  slider1: document.querySelector('#slider-1'),
  slider2: document.querySelector('#slider-2'),
  slider3: document.querySelector('#slider-3'),
  slider4: document.querySelector('#slider-4'),
  buyingRightNow: document.querySelector('#buyingRightNow'),
  
};

refs.topMenu.insertAdjacentHTML('beforeend', topMenuTemplate(TOP_MENU));

refs.menuProduct.insertAdjacentHTML('beforeend', menuProductTemplate(MENU));

refs.news.insertAdjacentHTML('beforeend', newsTemplate(NEWS));

const renderBasket = () => {
  refs.basket.innerHTML = '';
  refs.basket.insertAdjacentHTML('beforeend', basketTemplate(userBasket));
};

const handleSliderClick = (e) => {
  const item = e.target.closest('.item');

  if (!item) return;

  if (e.target.nodeName === 'BUTTON') {
    const price = parseInt(
      item.querySelector('.item__price_true').textContent.trim(),
    );

    userBasket.elements += 1;
    userBasket.price += price;

    renderBasket();
  }
};

const sortByDate = (a, b) => {
  if (a.date < b.date) return -1;
  if (a.date > b.date) return 1;

  return 0;
};

const sortByPrice = (a, b) => {
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;

  return 0;
};

const sortByPriceDiff = (a, b) => {
  if (a.oldPrice - a.price > b.oldPrice - b.price) return -1;
  if (a.oldPrice - a.price < b.oldPrice - b.price) return 1;

  return 0;
};

const newItems = ITEMS.filter(({ type }) => type === badges.NEW).sort(
  sortByDate,
);

const recommendedItems = ITEMS.filter(
  ({ type }) => type === badges.RECOMENDED,
).sort(sortByPrice);

const saleItems = ITEMS.filter(({ type }) => type === badges.SALE).sort(
  sortByPriceDiff,
);

refs.slider1.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(newItems, 'Новинки', itemsTemplate),
);

refs.slider2.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(recommendedItems, 'Рекомендации', itemsTemplate),
);

refs.slider3.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(saleItems, 'Распродажа', itemsTemplate),
);

refs.slider1.addEventListener('click', handleSliderClick);
refs.slider2.addEventListener('click', handleSliderClick);
refs.slider3.addEventListener('click', handleSliderClick);

refs.slider4.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(PROMOTIONS, 'АКЦИИ', stockItemTemplate),
);

refs.buyingRightNow.insertAdjacentHTML(
  'beforeend',
  buyingRightNowTemplate(BUYING_RIGHT_NOW),
);

refs.bannerSlider.insertAdjacentHTML('beforeend', bannerTemplate(BANNER));

renderBasket();
