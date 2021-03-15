import { GetUsersSevice } from '../../core/index';

export default class Popup {
  constructor(wrapper) {
    this.wrapper = document.querySelector(wrapper);
    this.init();
  }

  create() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const popup = document.createElement('div');
    // popup header
    const popupHeader = document.createElement('div');
    popupHeader.className = 'popup__header';
    // popup title
    const popupTitle = document.createElement('h3');
    popupTitle.className = 'popup__title';
    // close
    const popupClose = document.createElement('span');
    popupClose.className = 'close';
    popupClose.innerHTML = '&times;';
    // add to popup header
    popupHeader.append(popupTitle);
    popupHeader.append(popupClose);
    // popup body
    const popupBody = document.createElement('div');
    popupBody.className = 'popup__body';
    popup.className = 'popup';

    // popup more
    const popupMore = document.createElement('div');
    const popupMoreContent = document.createElement('div');

    // more btn
    const moreButton = document.createElement('button');
    popupMore.className = 'popup__more';
    popupMoreContent.className = 'popup__more-content';
    moreButton.className = 'popup__btn';
    moreButton.textContent = 'More';
    moreButton.addEventListener('click', this.moreBtnClick);

    popupMore.append(moreButton);
    popupMore.append(popupMoreContent);

    popup.append(popupHeader);
    popup.append(popupBody);
    popup.append(popupMore);

    this.wrapper.appendChild(overlay);
    this.wrapper.appendChild(popup);
  }

  moreBtnClick(e) {
    const popup = document.querySelector('.popup');
    const popupMore = popup.querySelector('.more');
    const { target } = e;
    popupMore.classList.toggle('active');
    target.classList.toggle('active');
    if (popup.classList.contains('active')) {
      target.textContent = 'More';
    }
    if (popupMore.classList.contains('active')) {
      target.textContent = 'Hide';
    } else {
      target.textContent = 'More';
    }
  }

  addByClick() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
    const moreBtn = document.querySelector('.popup__btn');

    document.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('[data-popup]')) {
        popup.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('active');
      }
      if (target.classList.contains('close')) {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('active');
        moreBtn.classList.remove('active');
        moreBtn.textContent = 'More';
      }
    });
  }

  getUserInfo() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.item')) {
        const target = e.target.closest('.item');
        const userLogin = target.querySelector('.item__login').textContent;
        GetUsersSevice.getUser(userLogin).then((data) => this.viewData(data));
      }
    });
  }

  addInfo() {
    const popup = document.querySelector('.popup');
    const popupBody = popup.querySelector('.popup__body');
    const popupTitle = popup.querySelector('.popup__title');
    const popupMoreContent = popup.querySelector('.popup__more-content');

    const bodyTemplate = `
      <div class="user">
        <div class="user__item user__text">
          <span class="user__name">
            ${this.user.name}
          </span>
        </div>
        <div class="user__item user__image">
          <img src="${this.user.avatar_url}" alt="${this.user.login}"/>
        </div>
      </div>
    `;

    const moreInfo = `
      <div class="more">
        <ul class="more__list">
          <li>Github: <a target="_blank" href="${this.user.html_url}">${
      this.user.login
    }</a> </li>
          <li>Followers: ${this.user.followers}</li>
          <li>Following: ${this.user.following}</li>
          <li>Blog: <a target="_blank" href="${this.user.blog || ''}">${
      this.user.blog || 'none'
    }</a></li>
        </ul>
      </div>
    `;

    popupBody.innerHTML = bodyTemplate;
    popupMoreContent.innerHTML = moreInfo;

    popupTitle.textContent = this.user.login;
  }

  init() {
    this.create();
    this.addByClick();
    this.getUserInfo();
  }

  viewData(data) {
    this.user = data;
    this.addInfo(); // get this.users from closure
  }
}
