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
      return "../../img/Vector322.png";
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
// JavaScript to handle tab clicks
document.querySelectorAll(".tab-left").forEach((tab) => {
  tab.addEventListener("click", function () {
    const parentContainer = this.closest(".container-410");
    parentContainer
      .querySelectorAll(".tab-left")
      .forEach((tab) => tab.classList.remove("active"));
    parentContainer
      .querySelectorAll(".card410content")
      .forEach((content) => content.classList.remove("active"));

    const tabId = this.getAttribute("data-tab");

    if (tabId === "tab4" || tabId === "tab5") {
      this.classList.add("active");
      parentContainer.querySelector(`#${tabId}`).classList.add("active");
    }
  });
});
document.querySelectorAll(".tab-left").forEach((tab) => {
  tab.addEventListener("click", function () {
    const parentContainer = this.closest(".container-409");
    parentContainer
      .querySelectorAll(".tab-left")
      .forEach((tab) => tab.classList.remove("active"));
    parentContainer
      .querySelectorAll(".card409content")
      .forEach((content) => content.classList.remove("active"));

    const tabId = this.getAttribute("data-tab");

    if (tabId === "tab6" || tabId === "tab7") {
      this.classList.add("active");
      parentContainer.querySelector(`#${tabId}`).classList.add("active");
    }
  });
});

// 모달 및 탭 요소 선택
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const closeBtns = document.querySelectorAll(".close");
const tab1 = document.querySelector('[data-tab="tab2"]');
const tab2 = document.querySelector('[data-tab="tab3"]');

// tab1 클릭 시 modal1 표시
tab1.addEventListener("click", () => {
  modal1.style.display = "block";
});

// tab2 클릭 시 modal2 표시
tab2.addEventListener("click", () => {
  modal2.style.display = "block";
});

// 모달 닫기 버튼 처리
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modal1.style.display = "none";
    modal2.style.display = "none";
  });
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});

// tbody 내의 모든 tr을 선택
const tableBody1 = document.getElementById("tableBody1");
const tableBody2 = document.getElementById("tableBody2");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");
const closeBtn = document.querySelector(".close");

// 각 tr에 클릭 이벤트 추가
tableBody1.addEventListener("click", function (event) {
  // 클릭된 tr 요소 찾기
  const clickedRow = event.target.closest("tr");

  if (clickedRow) {
    // 모달을 표시
    modal5.style.display = "block";
  }
});
tableBody2.addEventListener("click", function (event) {
  // 클릭된 tr 요소 찾기
  const clickedRow = event.target.closest("tr");

  if (clickedRow) {
    // 모달을 표시
    modal6.style.display = "block";
  }
});

// 모달 닫기 기능
closeBtn.addEventListener("click", () => {
  modal5.style.display = "none";
  modal6.style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal5) {
    modal5.style.display = "none";
  }
  if (event.target === modal6) {
    modal6.style.display = "none";
  }
});

const tab3 = document.querySelector('[data-tab="tab4"]');
const tab4 = document.querySelector('[data-tab="tab5"]');

// tab1 클릭 시 modal1 표시
tab3.addEventListener("click", () => {
  modal1.style.display = "block";
});

// tab2 클릭 시 modal2 표시
tab4.addEventListener("click", () => {
  modal2.style.display = "block";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});
