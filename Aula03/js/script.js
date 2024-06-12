trocaTema = () => {
  // alert("Mudei o tema e você não viu. :3c")
  // const html = document.documentElement;
  //   document.querySelector("body").style.background = "pink";

  document.documentElement.classList.toggle("Light");
  const isLight = document.documentElement.classList.contains("Light");

  const imagem = isLight ? "./img/madalenaaa.png" : "./img/perfil.png";
  const alt = isLight ? "Imagem no modo claro com um personagem chamado 'Biscoito Madalena'" : "Imagem no modo escuro com um personagem chamado 'Biscoito Expresso'";

  document.querySelector("#perfil img").setAttribute("src", imagem);
  document.querySelector("#perfil img").setAttribute("alt", alt);
};
