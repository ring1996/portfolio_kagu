const button = document.querySelector('#js-buttonHamburger');
const target = document.querySelector('body');
const globalNav = document.querySelector('#global-nav');
const globalItems = document.querySelectorAll('#global-nav a');
const logo = document.querySelector('.p-header__title img');
const classHamburger = 'is-activeHamburger';
const classScroll = 'is-scrollHeader';

function openNav() {
  button.setAttribute('aria-expanded', true);
  globalNav.setAttribute('aria-hidden', false);
}

function logoSecondary() {
  logo.setAttribute('src', '/assets/images/common/logo_secondary.png');
  logo.setAttribute('srcset', '/assets/images/common/logo_secondary.png 1x, /assets/images/common/logo_secondary@2x.png 2x');
}

function logoPrimary() {
  logo.setAttribute('src', '/assets/images/common/logo_primary.png');
  logo.setAttribute('srcset', '/assets/images/common/logo_primary.png 1x, /assets/images/common/logo_primary@2x.png 2x');
}

function closeNav() {
  button.setAttribute('aria-expanded', false);
  globalNav.setAttribute('aria-hidden', true);
}

function addTabIndex() {
  globalItems.forEach(globalItem => {
    globalItem.setAttribute('tabIndex', 0);
  });
}

function removeTabIndex() {
  globalItems.forEach(globalItem => {
    globalItem.setAttribute('tabIndex', -1);
  });
}

/* nav */
// ハンバーガーボタンをクリックした時
button.addEventListener('click', function() {
  target.classList.toggle(classHamburger);
  if(this.getAttribute('aria-expanded') === 'false') {
    openNav();
    logoSecondary();
    addTabIndex();
  } else {
    closeNav();
    logoPrimary();
    removeTabIndex();
  }
});

// ハンバーガーメニューをクリックした時
globalItems.forEach(globalItem => {
  globalItem.addEventListener('click', function() {
    if(window.innerWidth <= 1024) {
      target.classList.remove(classHamburger);
      closeNav();
      removeTabIndex();
    }
  });
})

// 画面が読み込まれた時
window.addEventListener('load', function() {
  if(window.innerWidth >= 1024) {
    target.classList.remove(classHamburger);
    openNav();
    addTabIndex();
    logoPrimary();
  } else {
    if(!target.classList.contains(classHamburger)) {
      closeNav();
    }
    removeTabIndex();
  }
});

// 画面がリサイズされた時
window.addEventListener('resize', function() {
  if(window.innerWidth >= 1024) {
    target.classList.remove(classHamburger);
    openNav();
    addTabIndex();
    logoPrimary();
  } else {
    if(!target.classList.contains(classHamburger)) {
      closeNav();
    }
    removeTabIndex();
  }
});