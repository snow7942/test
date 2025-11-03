document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            // 'active' 클래스를 토글(추가/제거)합니다.
            navUl.classList.toggle('active');
        });
    }

    // --- (선택 사항) 현재 페이지 링크 활성화 ---
    // 현재 URL 경로를 가져옵니다.
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // 링크의 경로(pathname)를 가져옵니다.
        const linkPath = new URL(link.href).pathname;

        // 현재 페이지 경로와 링크 경로가 일치하는지 확인합니다.
        // GitHub Pages는 /test/about/ 처럼 끝에 /가 붙는 경우가 많으므로,
        // 둘 다 /로 끝나거나, 둘 다 /로 끝나지 않을 때를 비교합니다.
        if (linkPath === currentPath || (linkPath + '/') === currentPath) {
            link.classList.add('active');
        }
    });
});