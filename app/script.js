
function fetchData(){
    fetch('http://localhost/systemSage/api/getdata.php')
    .then(res=>res.json())
    .then(data=>updatechart(data))
    
 }

document.addEventListener("DOMContentLoaded", function(){
   
    setInterval(fetchData, 30000);
    updatechart=(data)=>{
        const timestamps = data.map(entry => entry.x);
        const values = data.map(entry => entry.y);
       // console.log(values);
        const ctx = document.getElementById('myChart').getContext('2d');
        if (Window.myChart) {
            let datasets= [{
                label: 'Updated Data',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: values
            }];
            // If the chart already exists, update its data
            Window.myChart.data.labels = timestamps;
            Window.myChart.data.datasets[0].data = values;
            
            Window.myChart.update();
        } else {
            // If the chart doesn't exist, create a new one
            Window.myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timestamps,
                    datasets: [{
                        label: 'system data',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        data: values
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

 
 
 


