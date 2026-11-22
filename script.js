
/* =================================
   01. SCREEN ELEMENTS
================================= */

const loginScreen = document.getElementById("login-screen");
const loadingScreen = document.getElementById("loading-screen");
const mainScreen = document.getElementById("main-screen");

const enterButton = document.getElementById("enter-button");


/* =================================
   02. LOGIN & LOADING
================================= */

enterButton.addEventListener("click", function () {

  // 중복 클릭 방지
  enterButton.disabled = true;

  // 로그인 화면 종료
  loginScreen.classList.add("hidden");

  // 로딩 화면 표시
  loadingScreen.classList.remove("hidden");

  // 2초 후 메인 페이지 진입
  setTimeout(function () {

    loadingScreen.classList.add("hidden");

    mainScreen.classList.remove("hidden");

    // 페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }, 2000);

});


/* =================================
   03. NAVIGATION
================================= */

const navigationLinks = document.querySelectorAll(
  ".navigation-inner a"
);

navigationLinks.forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = link.getAttribute("href");

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    history.replaceState(null, "", targetId);

  });

});


/* =================================
   04. ARCHIVE LINK
================================= */

// Story & Art의 링크는 HTML에서
// 각 항목별 href를 직접 수정하면 돼.
