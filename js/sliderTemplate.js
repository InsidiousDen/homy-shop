export default (data, title, templator) => {
  if (!data) return "";

  const itemList = data.map((item) => templator(item)).join(" ");

  return `
  <section class="container position">
    <div class="new">
        <div class="row-top">
            <div class="block__header block__header__mobile">
                <div class="title">${title}</div>
                <div class="line"></div>
                <div class="row__button">
                </div> <a class="row__details" href="#">Все новинки</a>
            </div>
        </div>
    </div>
        <div class="row-bottom">
        ${itemList}
        </div>
    </div>
</section>
`;
};
