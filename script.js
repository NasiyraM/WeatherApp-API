/* Moved script to a separate page so document readiness check is no longer needed */
/* <script type="text/javascript">
        // confirm document is ready
        $(document).ready(function () {
            console.log("ready!"); */

        var apiKey = '7be341ddd5b59ee44a44b57480ada5f5';
        var cButton = document.getElementById("cityButton");
        var zButton = document.getElementById("zipButton");
        var infoBody = document.getElementById("dumpInfo");
        var searchArray = []; // <-- array to store user queries
        

        // Search by City button
        cButton.addEventListener('click', function() {
            var searchByCity = document.getElementById("searchByCity").value;
            document.getElementById("citySelection").innerHTML = searchByCity;
            $.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchByCity}&appid=${apiKey}&units=imperial`, function(data) {
                console.log(data);
                console.log(searchByCity);
                getData(data);
            }) 
         
        });


        // Search by Zip Code button
        zButton.addEventListener('click', function() {
            var searchByZip = document.getElementById("searchByZip").value;
            document.getElementById("citySelection").innerHTML = searchByZip;
            if (searchByZip.length > 5) {
                alert("Invalid Zip");
            } else {
                $.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchByZip}&appid=${apiKey}&units=imperial`, function (data) {
                getData(data);
                console.log(data);
                console.log(searchByZip);
                searchArray.push(searchByZip);
                
                })      
            }  
        })
        

        // ------------------ Functions --------------------------- //
        function getData(data) {   
            infoBody.innerHTML = '';
            var temp = data.main.temp;
            var feelsLike = data.main.feels_like;
            var humid = data.main.humidity;
            var weatherDesc = data.weather[0].description
            
            // using template literal to append items
            var wInfo = 
                `
                <div class="info">
                    <p>Temp: ${temp}°F<p>
                    <p>Feels like: ${feelsLike}°F | Humidity: ${humid}% | Type: ${weatherDesc}</p>
                </div>
                
                `  
            // not appending since there is no child but concatenating
            infoBody.innerHTML += wInfo;
        }      
        
    // }); // <--- end of document readiness check
    // </script>

    