function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var minutos = data.getMinutes();
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 &&  hora < 12) {
        foto.src = 'manha.png'
        msg.innerText += ', Bom dia!'
        document.body.style.background = '#fed994'
        //Bom dia!!
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        msg.innerText += ', Boa tarde!'
        foto.src = 'tarde.png'
        document.body.style.background = '#c7ddb5'
    } else {
        //boa noite!
        msg.innerText += ', Boa noite!'
        foto.src = 'noite.png'
        document.body.style.background = '#17273f'
    }

}
