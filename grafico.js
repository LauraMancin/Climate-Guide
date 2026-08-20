const ctx = document.getElementById('graficoTemperatura');

new Chart(ctx, {
type: 'line',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{

    label: 'Temperatura',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 3,
    backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
    pointBorderWidth: 9,
    pointBorderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
    },
{
    label: 'mm Chuva',
    data: [0, 10, 20, 30, ],
    borderWidth: 3,
    backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
    pointBorderWidth: 9,
    pointBorderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
    }]
},
options: {
    scales: {
    y: {
        beginAtZero: true
    }
    },
}
});