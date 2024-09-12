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

// 탭 버튼과 콘텐츠를 모두 가져옴
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// 각 탭을 클릭했을 때 실행되는 함수
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // 모든 탭에서 'active' 클래스 제거
    tabs.forEach((t) => t.classList.remove("active"));

    // 모든 콘텐츠에서 'active' 클래스 제거
    contents.forEach((c) => c.classList.remove("active"));

    // 클릭한 탭에 'active' 클래스 추가
    this.classList.add("active");

    // 해당하는 탭의 콘텐츠를 표시
    const target = this.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
