let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false 

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let verConfirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.eddEventListener('keyup', () => {
    if(nome.nodeValue.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
} )

usuario.addEventListener('keyup', () => {
    if(usuario.nodeValue.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracteres'
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if(labelSenha.ariaValueMax.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha'
        labelSenha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true 
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color:red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As Senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else  {
        labelConfirmSenha.setAttribute('style', 'color:green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    } 
})

function cadastrar(){
    if(validNome && validUsuario && validConfirmSenha){
        let listaUser = JASON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
         }
        )

        localStorage.setItem('listaUser', JASON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuario...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = './assets/html/signin.html'
        }, 2000)



        } else {
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
            msgSuccess.innerHTML = ''
            msgSuccess.setAttribute('style', 'display:none')
          }
        }


        btn.addEventListener('click', ()=>{
            let inputSenha = document.querySelector('#senha')

            if (inputSenha.setAttribute('type') == 'password'){
                inputSenha.setAttribute('type', 'text')
            } else {
                inputSenha.setAttribute('type', 'password')
            }
            })
        
btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
 