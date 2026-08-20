const botaoBuscar = document.getElementById("botaoBuscar");

const body = document.body.style

const selecao = document.querySelector('.selecao')

botaoBuscar.addEventListener("click", buscarClima);

function faseLua(valor) {
    if (valor === 0 || valor === 1) return "Lua nova";
    if (valor < 0.25) return "Lua crescente";
    if (valor === 0.25) return "Quarto crescente";
    if (valor < 0.5) return "Lua crescente gibosa";
    if (valor === 0.5) return "Lua cheia";
    if (valor < 0.75) return "Lua minguante gibosa";
    if (valor === 0.75) return "Quarto minguante";
    return "Lua minguante";
}

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

            document.getElementById("tempMax").textContent =
                dados.main.temp_max.toFixed(1);
                
            document.getElementById("tempMin").textContent =
                dados.main.temp_min.toFixed(1); 

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
                    selecao.style.backgroundColor = '#2f698f79'
                    selecao.style.color = '#fff'
                }
                else if(descricao === 'neve' || descricao === 'neve leve' || descricao === 'nevasca'){
                    body.backgroundImage = 'url(images/images/cold-bg.jpg)'
                    selecao.style.backgroundColor = '#e0ffff79'
                }


            document.getElementById("sensacao").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("umidade").textContent =
                dados.main.humidity;

            // Velocidade do vento
            const ventoKmH = dados.wind.speed * 3.6;

            document.getElementById("vento").textContent =
                ventoKmH.toFixed(1);

            // Rajada de vento
            if (dados.wind.gust) {
                const rajadaKmH = dados.wind.gust * 3.6;
                
                document.getElementById("rajada").textContent =
                    rajadaKmH.toFixed(1);
            } else {
                document.getElementById("rajada").textContent =
                    "Sem rajadas";
            }

            // Nascer e pôr do sol
            const nascerSol = new Date(dados.sys.sunrise * 1000);
            const porSol = new Date(dados.sys.sunset * 1000);

            document.getElementById("nascerSol").textContent =
                nascerSol.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'America/Sao_Paulo'
                });

            document.getElementById("porSol").textContent =
                porSol.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'America/Sao_Paulo'
                });

            // Quantidade de chuva
            if (dados.rain && dados.rain['1h']) {
                document.getElementById("chuva").textContent =
                    dados.rain['1h'] + "mm (na última hora)";
            } else {
                document.getElementById("chuva").textContent =
                    "Sem previsão de chuva";
            }

            //api open-meteo para pegar a fase da lua
            const urlLua = `https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&daily=moon_phase&timezone=auto`;

            return fetch(urlLua);
        })

        .then(function(respostaLua) {

            if (!respostaLua.ok) {
                throw new Error("Não foi possível obter dados da lua.");
            }

            return respostaLua.json();
        })

        .then(function(dadosLua) {

            console.log(dadosLua);

            const faseHoje = dadosLua.daily.moon_phase[0];

            document.getElementById("faseLua").textContent =
                faseLua(faseHoje);
        })

        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });
}