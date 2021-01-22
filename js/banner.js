export default (banners) => {
  const firstBanner = banners[0];
  const { img, url } = firstBanner;

  return `
  <div class="banner__slider"
    style="background-image: url(${img});"
  >
    <div class="banner__slider__wrapper">
      <div class="banner__slider__slogan">
        <div class="orange">Революционное решение</div>
        <div class="banner__slider__text">На рынке среди систем вкс!</div>
        <div class="banner__slider__text__italic">
          GVC 3200 от компании grandstream это:
        </div>
      </div>
      <ul class="banner__slider__list">
        <li class="banner__slider__item">
          9-ти сторонняя аудио/видео конференция без покупки дополнительного ПО
        </li>
        <li class="banner__slider__item">
          2 Мпикс камера CMOS с разрешением 1920x1080V@15fps
        </li>
        <li class="banner__slider__item">
          Гигабитный порт, встроенный модуль WiFi (802.11n) и Bluetooth 4.0
          Miracast
        </li>
      </ul>
      <button class="banner__slider__btn"><a class="banner__slider__link" href=${url}>Подробнее</a></button>
     
    </div>
    <div class="banner__slider__navigation">
    </div>
  </div>`;
};
