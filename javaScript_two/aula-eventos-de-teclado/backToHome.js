const backToHome = document.getElementById('backToHome');
document.addEventListener('keyup', (e) => {
  if (e.code == 'Backspace') {
    backToHome.click();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code == 'Escape') {
    window.location.href = 'index.html';
  }
});
