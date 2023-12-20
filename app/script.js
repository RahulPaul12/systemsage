document.addEventListener("DOMContentLoaded", function(){
    function fetchData(){
       fetch('http://localhost/systemSage/api/getdata.php')
       .then(res=>res.json())
       .then(data=>updatechart(data))
    }
    fetchData();
    setInterval(fetchData,30000)
    
    function updatechart(data){
        const timestamps = data.map(entry => entry.x);
        const values = data.map(entry => entry.y);
        const datasets= [{
            label: 'Updated Data',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: values
        }];
        const ctx = document.getElementById('myChart').getContext('2d');
        if (Window.myChart) {
            // If the chart already exists, update its data
            Window.myChart.data.labels = timestamps;
            Window.myChart.data.datasets[0].data = values;
            
            window.myChart.update();
        } else {
            // If the chart doesn't exist, create a new one
            Window.myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timestamps,
                    datasets: [{
                        label: 'system data',
                        data: values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: [{
                            type: 'time',
                            time: {
                                unit: 'second'
                            }
                        }],
                        y: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
                    })
                }
    }
                    



})