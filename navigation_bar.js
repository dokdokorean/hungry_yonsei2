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
      
  })();
