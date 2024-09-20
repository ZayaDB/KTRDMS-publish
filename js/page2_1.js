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

// JavaScript to handle tab clicks
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const parentContainer = this.closest(".container-412");
    parentContainer
      .querySelectorAll(".tab")
      .forEach((tab) => tab.classList.remove("active"));
    parentContainer
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    if (this.getAttribute("data-tab") !== "tab2") {
      this.classList.add("active");
      const tabId = this.getAttribute("data-tab");
      parentContainer.querySelector(`#${tabId}`).classList.add("active");
    } else {
      document.getElementById("modal").style.display = "block";
    }
  });
});

// 모달 및 탭 요소 선택
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const closeBtns = document.querySelectorAll(".close");
const tab1 = document.querySelector('[data-tab="tab2"]');
const tab2 = document.querySelector('[data-tab="tab4"]');

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
