(function() {
    // 네비게이션 바를 감싸는 div
    const navBar = document.createElement('div');
    navBar.id = 'navigation-bar';
  
    // 뒤로가기 버튼
    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.textContent = '<';
    backButton.onclick = function() {
      window.history.back();
    };
  
    // 닫기 버튼
    const closeButton = document.createElement('button');
    closeButton.id = 'close-button';
    closeButton.textContent = 'X';
    closeButton.onclick = function() {
      window.close();
    };
  
    // 네비게이션 바에 버튼 추가
    navBar.appendChild(backButton);
    navBar.appendChild(closeButton);
  
    // 웹사이트 body에 네비게이션 바 추가
    document.body.appendChild(navBar);
  
    // 특정 웹사이트에만 네비게이션 바 표시
    const targetUrl = 'https://ys.learnus.org/login/method/sso.php'; // 원하는 URL로 변경
    if (window.location.href === targetUrl) {
      navBar.style.display = 'block';
    } else {
      navBar.style.display = 'none';
    }
  })();
  function showNavigationBar() {
    document.getElementById('navigation-bar').style.display = 'block';
  }
  
  function hideNavigationBar() {
    document.getElementById('navigation-bar').style.display = 'none';
  }
  