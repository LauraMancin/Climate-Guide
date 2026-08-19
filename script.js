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
                
                // mudança do fundo conforme o clima(descrição)
                if(descricao === 'céu limpo' || descricao === 'nuvens dispersas'){
                    body.backgroundImage = 'url(images/sunny-bg.jpg)'
                    selecao.style.backgroundColor = '#ffe4b57c'
                }

                else if(descricao === 'nublado' || descricao === 'algumas nuvens'){
                    body.backgroundImage = 'url(images/cloudy-bg.jpg)'
                    selecao.style.backgroundColor = '#b0c4de70'
                }

                else if(descricao === 'chuva' || descricao === 'chuva leve' || descricao === 'chuva forte'){
                    body.backgroundImage = 'url(images/rain-bg.jpg)'
                    selecao.style.backgroundColor = '#194d7079'
                }
                else if(descricao === 'neve' || descricao === 'neve leve' || descricao === 'nevasca'){
                    body.backgroundImage = 'url(images/images/cold-bg.jpg)'
                    selecao.style.backgroundColor = '#e0ffff79'
                }


            document.getElementById("sensacao").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("umidade").textContent =
                dados.main.humidity;

            const ventoKmH = dados.wind.speed * 3.6;

            document.getElementById("vento").textContent =
                ventoKmH.toFixed(1);

            document.getElementById("nascerSol").textContent =
                new Date(dados.data.sunrise * 1000).toLocaleTimeString("pt-BR");

        })

        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });
}