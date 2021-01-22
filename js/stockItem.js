export default ({ title, img, description, url, time_action = "" }) => {
  const arr = time_action
    ? time_action
        .split(" ")
        .map((item) => parseInt(item))
        .map((item) => `${item}`.padStart(2, "0"))
    : [];

  return `
  <div class="item item-action">
      <div class="item__title item__title-action"><a class="item__title_link" href="#">${title}</a>
      </div>
      <div class="item__img item__img-action">
          <img src='${img || "./images/other/noi-mage.png"}' alt="action">
      </div>
      <div class="item__text">${description}</div>
      <div class="item__time">
        <div class="item__time_text-left">
            <p>Срок действия:</p>
        </div>
        ${
          time_action
            ? `
        <div class="item__time_clock">
            <div class="clock__number">
                <span class="clock__number_style">${arr[0][0]}</span>
                <span class="clock__number_style">${arr[0][1]}</span>
                <span>:</span>
                <span class="clock__number_style">${arr[1][0]}</span>
                <span class="clock__number_style">${arr[1][1]}</span>
                <span>:</span>
                <span class="clock__number_style">${arr[2][0]}</span>
                <span class="clock__number_style">${arr[2][1]}</span>
            </div>
            <div class="clock__text"><span>дней</span><span>часов</span><span>минут</span></div>
        </div>
      </div>
      `
            : ` 
          <div class="item__time_clock">
              <h3 class="item__time_text">бессрочно</h3>
          </div>
      </div>
          `
        }
      <div class="item__button item__button-action">
          <a class="item__details item__details-action" href="${url}">Подробнее</a>
      </div>
  </div>
`;
};
