const botaoBuscar = document.getElementById("botaoBuscar");

const body = document.body.style

const selecao = document.querySelector('.selecao')

botaoBuscar.addEventListener("click", buscarClima);

function buscarClima() {
    
    const cidade = document.getElementById("cidade").value.trim();

    if (cidade === "") {
        alert("Digite o nome de uma cidade.");
        return;
    }

    const chaveApi = "87a66878258138027af2a3fc1ad0fdf6";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&units=metric&lang=pt_br`;

    fetch(url)

        .then(function(resposta) {

            if (!resposta.ok) {
                throw new Error("Cidade não encontrada.");
            }

            return resposta.json();
        })

        .then(function(dados) {

            console.log(dados);

            document.getElementById("nomeCidade").textContent =
                dados.name;

            document.getElementById("temperatura").textContent =
                dados.main.temp.toFixed(1);

            let descricao = document.getElementById("descricao").textContent =
                dados.weather[0].description;

            document.getElementById("sensacao").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("umidade").textContent =
                dados.main.humidity;

            const ventoKmH = dados.wind.speed * 3.6;

            document.getElementById("vento").textContent =
                ventoKmH.toFixed(1);

            if(descricao === 'céu limpo' || descricao === 'nuvens dispersas'){
                body.backgroundImage = 'url(images/sunny-bg.jpg)'
                selecao.style.backgroundColor = '#FFE4B5'
            }
            else if(descricao === 'nublado' || descricao === 'algumas nuvens'){
                body.backgroundImage = 'url(images/cloudy-bg.jpg)'
                selecao.style.backgroundColor = '#B0C4DE'
            }
            else if(descricao === 'chuva' || descricao === 'chuva leve' || descricao === 'chuva forte'){
                body.backgroundImage = 'url(images/rain-bg.jpg)'
                selecao.style.backgroundColor = '#194d70'
            }
        })

        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });
}