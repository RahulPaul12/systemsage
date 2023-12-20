document.addEventListener("DOMContentLoaded", function(){
    function fetchData(){
       fetch('api/mydata.php')
       .then(res=>res.json())
       .then(data=>updatechart(data))
    }


        fetchData();
                                            setInterval(()=>{
                                                fetchData()
                                                },30000)

})