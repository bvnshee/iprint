var slider = tns({
  container: ".promo__slider",
  items: 1,
  swipeAngle: false,
  arrowKeys: true,
  speed: 2000,
  autoplayTimeout: 4000,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsText: [
    '<svg class="left" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M0.310108 6.91752L5.18239 11.7776C5.47966 12.0741 5.96177 12.0741 6.25904 11.7776C6.55637 11.481 6.55637 11.0002 6.25904 10.7036L2.68638 7.13993L16.2387 7.13993C16.6591 7.13993 17 6.79991 17 6.38055C17 5.96124 16.6591 5.62116 16.2387 5.62116L2.68638 5.62116L6.25892 2.05744C6.55625 1.76086 6.55625 1.28007 6.25891 0.983485C6.11031 0.835314 5.91542 0.761076 5.72059 0.761076C5.52576 0.761076 5.33093 0.835314 5.18226 0.983485L0.310108 5.84357C0.0127768 6.14015 0.0127769 6.62094 0.310108 6.91752Z" fill="white"/>\n' +
      "</svg>\n",
    '<svg class="right" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M16.6899 5.08248L11.8176 0.222394C11.5203 -0.0741314 11.0382 -0.0741314 10.741 0.222394C10.4436 0.518981 10.4436 0.999765 10.741 1.29635L14.3136 4.86007H0.761293C0.340877 4.86007 0 5.20009 0 5.61945C0 6.03876 0.340877 6.37884 0.761293 6.37884H14.3136L10.7411 9.94256C10.4438 10.2391 10.4438 10.7199 10.7411 11.0165C10.8897 11.1647 11.0846 11.2389 11.2794 11.2389C11.4742 11.2389 11.6691 11.1647 11.8177 11.0165L16.6899 6.15643C16.9872 5.85985 16.9872 5.37906 16.6899 5.08248Z" fill="white"/>\n' +
      "</svg>\n",
  ],
});

let tabsWrapper = document.querySelectorAll(".services__tabs-item");
let tabs = document.querySelectorAll(".services__tabs-item > li");
let tabsContent = document.querySelectorAll(".services__inside-item");

let removeActiveClass = () => {
  tabsContent.forEach((el) =>
    el.classList.remove("services__inside-item_active")
  );
};

let removeActiveTabsClass = () => {
  tabsWrapper.forEach((el) =>
    el.classList.remove("services__tabs-item_active")
  );
};

tabsContent.forEach((el, index) => {
  tabs[index].onclick = (e) => {
    removeActiveClass();
    removeActiveTabsClass();

    if (e.target == tabs[index]) {
      el.classList.add("services__inside-item_active");
      tabsWrapper[index].classList.add("services__tabs-item_active");
    }
  };
});

function initMap() {
  const uluru = { lat: -25.344, lng: 131.036 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

let langSwitchBtn = document.querySelector("#langSwitchBtn");
let langSwitch = document.querySelector("#langSwitch");

langSwitchBtn.onclick = () =>
  langSwitch.classList.toggle("header__langs_active");

let navSlide = () => {
  let burger = document.querySelector(".header__burger");
  let navMenu = document.querySelector(".header__blocks");
  let navlinks = document.querySelectorAll(".header__blocks div");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards 0.1s`;
      }
    });

    burger.classList.toggle("active");
  });
};
navSlide();
