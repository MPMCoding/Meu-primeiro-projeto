function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var sex = document.querySelectorAll('input[name="sexo"]:checked')
    var idade = ano - Number(fano.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var pessoa = ''

    if (sex[0].id === 'mas'){
        gen = 'Um Homem'
       
        if (idade >=0 && idade <2){
            var pessoa = 'um Bêbe'
            img.setAttribute('src', 'menininho.png')
        } else if (idade < 12) {
            var pessoa = 'uma Criança'
            img.setAttribute('src', 'menino.png')
        } else if (idade <18) {
            var pessoa = 'um Adolescente'
            img.setAttribute('src', 'menino.png')
        } else if (idade <60) {
            var pessoa = 'um Adulto'
            img.setAttribute('src', 'homem.png')
        } else {
            var pessoa = 'um Idoso'
            img.setAttribute('src', 'idoso.png')
        }
    
    } else{
        gen = 'Uma Mulher'
        if (idade >=0 && idade <2){
            var pessoa = 'um Bêbe'
            img.setAttribute('src', 'menininha.png')
        } else if (idade < 12) {
            var pessoa = 'uma Criança'
            img.setAttribute('src', 'menininha.png')
        } else if (idade <18) {
            var pessoa = 'um Adolescente'
            img.setAttribute('src','menina.png')
        } else if (idade <60) {
            var pessoa = 'um Adulto'
            img.setAttribute('src','mulher.png')
        } else {
            var pessoa = 'um Idoso'
            img.setAttribute('src', 'idosa.png')
        }
    
    }

    res.innerHTML = `Você é ${gen} e tem ${idade} anos de idade, você já é ${pessoa}`
    res.appendChild(img)
}
