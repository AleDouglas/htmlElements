function toggleButton() {
    document.getElementsByClassName('navegar')[0].classList.toggle('active')
    document.getElementsByClassName('conteudo')[0].classList.toggle('active')
    document.getElementsByClassName('topbar')[0].classList.toggle('active')
    document.getElementsByClassName('navBarHR')[0].classList.toggle('active')
    document.getElementsByClassName('sociais')[0].classList.toggle('active')
}


function toggleProjeto(){
    var reveals = document.querySelectorAll(".extra");
    var getBt = document.getElementById('projetoButton')
    for (var i = 0; i < reveals.length; i++) {
          reveals[i].classList.toggle('desactive');
    }
    if (getBt.innerHTML == 'Ver mais...'){
        getBt.innerHTML = 'Ver menos...'
    }
    else{
        getBt.innerHTML = 'Ver mais...'
    }

}