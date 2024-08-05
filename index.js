function changeTheme() {
    const theme = document.body.getAttribute("data-theme");
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
}