function validacao(){
    let email = document.querySelector('.email').value
    let password = document.querySelector('.senha').value 
    let erroEmail = document.querySelector('.erro-email')
    let erroPassword = document.querySelector('.erro-password')
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_]).{0,}$/
    let test = regex.test(password)
    let ok = 0

    if(email === '' || email === null){
        erroEmail.innerText = 'Campo de Email é obrigatório'
    }
    else{
        ok++
    }

    if(password === '' || password === null){
        erroPassword.innerText = 'Campo de senha é obrigatório'
    }
    else if(password.length > 0 && password.length <= 8){
        erroPassword.innerText = 'A senha deve obrigatóriamente ter de 8 a 16 caracteres'
    }
    else if(!test){
        erroPassword.innerText = 'Senha fraca'
    }
    else{
        ok++
    }

    if(ok == 2){
        erroEmail.innerText = ''
        erroPassword.innerText = ''
        alert('✅')
    }
}