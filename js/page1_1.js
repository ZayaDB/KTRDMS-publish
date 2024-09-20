let activeMenu = null; // 현재 열려 있는 메뉴를 추적하는 변수

// 메뉴 열기/닫기 토글 함수
function toggleMenu(menuName, path = null) {
  const menu = document.getElementById(menuName);
  const icon = document.getElementById(menuName + "-icon");

  // 다른 메뉴가 열려 있으면 닫기
  if (activeMenu && activeMenu !== menu) {
    activeMenu.style.display = "none";
    const activeIcon = document.getElementById(activeMenu.id + "-icon");
    if (activeIcon) {
      activeIcon.classList.remove("rotate");
    }
  }

  // 현재 메뉴를 열기 또는 닫기
  if (menu.style.display === "block") {
    menu.style.display = "none";
    if (icon) icon.classList.remove("rotate");
    activeMenu = null; // 활성화된 메뉴가 없음
  } else {
    menu.style.display = "block";
    if (icon) icon.classList.add("rotate");
    activeMenu = menu; // 새로 활성화된 메뉴 설정
  }
}

// 페이지 로드 시 모든 메뉴를 닫는 초기화 함수
window.onload = function () {
  const menus = document.querySelectorAll(".submenu");

  // 모든 서브메뉴를 초기 상태로 설정 (메뉴 닫기)
  menus.forEach((menu) => {
    menu.style.display = "none";
  });
};

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

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`;

  // 활성화된 점 업데이트
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(index);
}

// 3초마다 슬라이드 전환
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

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

  const tabImg = document.querySelector(".tabimg");
  if (tab === "전체" || tab === "최근 12개월" || tab === "최근 30일") {
    tabImg.src = "assets/Group34853.svg";
  }
}
