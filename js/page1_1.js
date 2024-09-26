// dropdown menu 및 클릭 시 아이콘 변경

let activeMenu = null;

function toggleMenu(menuName, element) {
  const menu = document.getElementById(menuName);
  const icon = element.querySelector("img:first-child");
  const dropdownIcon = document.getElementById(menuName + "-icon");

  if (activeMenu && activeMenu !== menu) {
    activeMenu.style.display = "none";
    const activeIcon =
      activeMenu.previousElementSibling.querySelector("img:first-child");
    const activeDropdownIcon = document.getElementById(activeMenu.id + "-icon");
    if (activeDropdownIcon) {
      activeDropdownIcon.classList.remove("rotate");
    }

    if (activeIcon) {
      activeIcon.src = getInactiveIcon(activeMenu.id);
    }
  }

  if (menu.style.display === "block") {
    menu.style.display = "none";
    if (dropdownIcon) dropdownIcon.classList.remove("rotate");
    if (icon) icon.src = getInactiveIcon(menuName);
    activeMenu = null;
  } else {
    menu.style.display = "block";
    if (dropdownIcon) dropdownIcon.classList.add("rotate");
    if (icon) icon.src = getActiveIcon(menuName);
    activeMenu = menu;
  }
}

function getActiveIcon(menuName) {
  switch (menuName) {
    case "현황정보":
      return "../../img/replus_S모니터링icon1.png";
    case "계약정보":
      return "../../img/계약아이콘.png";
    case "거래정산":
      return "../../img/Group427319881.svg";
    case "통계정보":
      return "../../img/Group34795.png";
    case "고객관리":
      return "../../img/replus_S점검관리icon1.png";
    case "시스템설정":
      return "../../img/Group427319877.png";
    default:
      return "";
  }
}

function getInactiveIcon(menuName) {
  switch (menuName) {
    case "현황정보":
      return "../../img/ico-lnb01-w.svg";
    case "계약정보":
      return "../../img/Vector111.png";
    case "거래정산":
      return "../../img/Vector322.png";
    case "통계정보":
      return "../../img/Vector323.png";
    case "고객관리":
      return "../../img/ico-lnb04-w.svg";
    case "시스템설정":
      return "../../img/Vector325.png";

    default:
      return "";
  }
}

window.onload = function () {
  const menus = document.querySelectorAll(".submenu");

  menus.forEach((menu) => {
    menu.style.display = "none";
  });
};

// Carousel Page

document.addEventListener("DOMContentLoaded", function () {
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselPages = document.querySelectorAll(".carousel-page");
  let currentSlide = 0;

  function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  document.getElementById("next-btn").addEventListener("click", function () {
    currentSlide =
      currentSlide === carouselPages.length - 1 ? 0 : currentSlide + 1;
    updateCarousel();
  });

  document.getElementById("prev-btn").addEventListener("click", function () {
    currentSlide =
      currentSlide === 0 ? carouselPages.length - 1 : currentSlide - 1;
    updateCarousel();
  });
});

// Page 1 slide banner

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(index);
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

// Page 3 tab 기능
let activeSideMenu = "menu1";
let activeTab = "전체";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".line.second").classList.add("animate");
    document.querySelector(".arrow.second-arrow").classList.add("animate");
  }, 3000);
});

function handleSideMenuClick(menu) {
  activeSideMenu = menu;
  document.querySelectorAll(".menu-item1").forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelector(`.menu-item1[onclick="handleSideMenuClick('${menu}')"]`)
    .classList.add("active");
}

function handleTabClick(tab) {
  activeTab = tab;

  document.querySelectorAll(".tab").forEach((tabItem) => {
    tabItem.classList.remove("active");
  });

  document
    .querySelector(`.tab[onclick="handleTabClick('${tab}')"]`)
    .classList.add("active");

  document.querySelectorAll(".tab-content-item").forEach((contentItem) => {
    contentItem.classList.remove("active");
  });

  document
    .getElementById(`tab-${tab.replace(/\s/g, "")}`)
    .classList.add("active");

  const tabImg = document.querySelector(".tabimg");
  if (tab === "전체" || tab === "최근 12개월" || tab === "최근 30일") {
    tabImg.src = "../../img/Group34853.png";
  }
}
