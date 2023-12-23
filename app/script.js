function fetchData() {
    fetch('http://localhost/systemSage/api/getdata.php')
    .then(response => response.json())
    .then(data => {
        updateLineChart(data);
        updateBarChart(data);
        updateGauge(data);
        
        
    })

    .catch(error => console.error('Error:', error));
}

function updateLineChart(data) {
    const timestamps = data.map(entry => entry.x);
        const values = data.map(entry => entry.y);
    const chartData = {
        
        labels: timestamps,
        datasets: [{
            label: 'Metric Value',
            data: values,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    const ctx = document.getElementById('lineChart').getContext('2d');
    
    const lineChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: [{
                    type: 'time',
                    time: {
                        unit: 'seconds'
                    }
                }],
                y: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function updateBarChart(data) {
    const timestamps = data.map(entry => entry.x);
        const values = data.map(entry => entry.y);
    const chartData = {
        labels: timestamps,
        datasets: [{
            label: 'Metric Value',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateGauge(data) {
    const timestamps = data.map(entry => entry.x);
    const values = data.map(entry => entry.y);
    const chartData = {
        labels: timestamps,
        datasets: [{
            label: 'Metric Value',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                level:timestamps,
                data: values,
                backgroundColor: ['#3498DB', '#eee'],
                borderWidth: 0
            }]
        },
        options: {
        cutout: '80%', 
        rotation: 1 * Math.PI, 
        circumference: 1 * Math.PI, 
        tooltips: { enabled: false }, 
        hover: { mode: null },
        responsive: true,
        maintainAspectRatio: false
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    setInterval(fetchData, 30000)
});