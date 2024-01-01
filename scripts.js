

const key = "ecc1513ba2c9416f2a21657be066ff10"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(`.cidade`).innerHTML = `Tempo em ` + dados.name
    document.querySelector(`.temp`).innerHTML = `Atual: ` + Math.floor(dados.main.temp) + `°C`
    document.querySelector(`.temp-max`).innerHTML = `Máxima: ` + Math.floor(dados.main.temp_max) + `°C`
    document.querySelector(`.temp-min`).innerHTML = `Mínima: ` + Math.floor(dados.main.temp_min) + `°C`
    document.querySelector(`.texto-previsao`).innerHTML = dados.weather[0].description
    document.querySelector(`.umidade`).innerHTML = `Umidade: ` + dados.main.humidity + `%`
    document.querySelector(`.img-previsao`).src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    
    colocarDadosNaTela(dados)
}


function cliqueiNoBotao () {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}