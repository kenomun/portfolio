let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("htmlcss");
    habilidades[1].classList.add("javascript");
    habilidades[2].classList.add("java");
    habilidades[3].classList.add("rubyOnRails");
    habilidades[4].classList.add("php");
    habilidades[5].classList.add("node");
    habilidades[6].classList.add("springboot");
    habilidades[7].classList.add("vue");
    habilidades[8].classList.add("wordpress");

    habilidades[9].classList.add("comunicacion");
    habilidades[10].classList.add("trabajo");
    habilidades[11].classList.add("creatividad");
    habilidades[12].classList.add("dedicacion");
    habilidades[13].classList.add("adaptabilidad");
    habilidades[14].classList.add("empatia");
    habilidades[15].classList.add("liderazgo");
    habilidades[16].classList.add("etica");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
