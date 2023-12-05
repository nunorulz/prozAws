const linkPerfil = document.getElementById('link-perfil');
const navPerfil = document.getElementById('nav-perfil');
const linkPerfilDados = document.getElementById('link-perfil-dados');

linkPerfil.addEventListener('mouseover', () => {
  navPerfil.style.display = 'block';
});

document.addEventListener('keyup', (e) => {
  console.log(e.code);
  if (e.code == 'Digit1') {
    console.log(e.code);
    navPerfil.style.display = 'block';
  }
});

document.addEventListener('keyup', (e) => {
  console.log(e.code);
  if (e.code == 'Escape') {
    console.log(e.code);
    navPerfil.style.display = 'none';
  }
});

document.addEventListener('keyup', (e) => {
  if (navPerfil.style.display == 'block') {
    if (e.code == 'Digit1') {
      linkPerfilDados.click();
    }
  } else if (e.code == 'Digit1') {
    navPerfil.style.display = 'block';
  }
});
