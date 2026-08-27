// coleta das informações do gráfico
let graficoTemperatura = null
let graficoChuva = null
let dias = new Date
let diaSemana = dias.getUTCDay()
let semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
let cores = []

export function previsaoDias(latitude, longitude, chaveApi) {

    let temperaturas = []
    let chuvas = []
    const keyApi = chaveApi
    const lat = Number(latitude)
    const lon = Number(longitude)

    const previsaoUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric`;
    
    fetch(previsaoUrl)  

        .then(res => {
            if (!res.ok) {
                throw new Error("Erro ao buscar a previsão de 5 dias.");
            }
            return res.json();
        })

        .then(function(previsao) {
            temperaturas = [];
            chuvas = [];

            if (previsao && previsao.list) {
                
                for (let i = 0; i < 40; i+=8) {
                    
                    if (previsao.list[i] && previsao.list[i].main) {
                        temperaturas.push(previsao.list[i].main.temp);
                        const chuva = previsao.list[i].rain
                        ? previsao.list[i].rain["3h"]
                        : 0;

                        // mudança das cores conforme a temperatura (vermelho para quente e azul para frio)
                        chuvas.push(chuva)
                        if(previsao.list[i].main.temp >= 25){
                            cores.push('red')
                        }
                        else{
                            cores.push('blue')
                        }
                    }
                }
                
                let semanas = []
                if(diaSemana <= 2){
                    semanas.push(semana[diaSemana], semana[diaSemana + 1], semana[diaSemana + 2], semana[diaSemana + 3], semana[diaSemana + 4])
                }
                else if(diaSemana == 3){
                    semanas.push(semana[diaSemana], semana[diaSemana + 1], semana[diaSemana + 2], semana[diaSemana + 3], semana[diaSemana - 3])
                }
                else if(diaSemana == 4){
                    semanas.push(semana[diaSemana], semana[diaSemana + 1], semana[diaSemana + 2], semana[diaSemana - 4], semana[diaSemana - 3])
                }
                else if(diaSemana == 5){
                    semanas.push(semana[diaSemana], semana[diaSemana + 1], semana[diaSemana - 5], semana[diaSemana - 4], semana[diaSemana - 3])
                }
                else{
                    semanas.push(semana[diaSemana], semana[diaSemana - 6], semana[diaSemana - 5], semana[diaSemana - 4], semana[diaSemana - 3])
                }

                const ctxTemperatura = document.getElementById('graficoTemperatura');

                if (graficoTemperatura) {
                    graficoTemperatura.destroy();
                }

                graficoTemperatura = new Chart(ctxTemperatura, {
                    type: 'line',
                    data: {
                        labels: semanas,
                        datasets: [{
                            label: 'Temperatura',
                            data: temperaturas,
                            borderColor: 'red',
                            borderWidth: 1,
                            pointBorderWidth: 1,
                            pointBorderColor: 'red',
                            backgroundColor: 'red'
                        }]
                    },
                    options: {
                        scales: {
                        y: {
                            beginAtZero: false
                        }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'red'
                                }
                            }
                        },
                    },
                });

                const ctxChuva = document.getElementById('graficoChuva');

                if (graficoChuva) {
                    graficoChuva.destroy(); 
                }

                graficoChuva = new Chart(ctxChuva, {
                    type: 'line',
                    data: {
                        labels: semanas,
                        datasets: [{
                            label: 'Chuva',
                            data: chuvas,
                            borderColor: 'blue',
                            borderWidth: 1,
                            pointBorderWidth: 9,
                            pointBorderColor: cores,
                            backgroundColor: 'blue'
                        }]
                    },
                    options: {
                        scales: {
                        y: {
                            beginAtZero: true
                        }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'blue'
                                }
                            }
                        },
                    },
                });
            }
            
            console.log(temperaturas)
            console.log(chuvas)

            temperaturas = []
            chuvas = []

        })
            .catch(function(erro) {
            console.log("Erro ao montar a previsão:", erro);
})}