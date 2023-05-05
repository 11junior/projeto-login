 let btn = document.querySelector('.fa-eye')

 btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('tipy', 'text')
} else{
    inputSenha.setAttribute('tipy', 'password')
}
 })

 function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: null,
        user:null,
        senha:null
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser?.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhacad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
    }
 } )

    if (usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = './index.html'

        let mathRandom = match.RANDOM().TOSTRING(16)
        let token = mathRandom + mathRandom

        localStorage.setItem('token',token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    }else {
        userLabel.setAttribute('style', 'coler: red')
        usuario.setAttribute('style', 'borde-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuario ou senha incorretos'
        usuario.focus()
    }
    }