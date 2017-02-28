            var i, x, count, selected, divided;
            var calcArray = [];
            var stars = document.getElementsByTagName("h4");
            var displayDigits = document.getElementsByTagName("span");
            var ratingsBox = document.getElementById("ratings");

            
            /*------- review function -------*/
            
            
            function updateRating(rating) {
            var myApi = new XMLHttpRequest();
            myApi.onreadystatechange = function() {
            $(document).ajaxStart(function(){
            $("#loader").css("display", "block");
            });
            if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            }
            };
            myApi.open("GET", 
            "https://edu.oscarb.se/sjk15/api/recipe/?api_key=9cf15f843bb44165&recipe=pankakor&rating=" + rating, false);
            myApi.send();
            }
            
            
            function updateView() {
            var myApi = new XMLHttpRequest();
            myApi.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            }
            };
            myApi.open("GET", 
            "https://edu.oscarb.se/sjk15/api/recipe/?api_key=9cf15f843bb44165&recipe=pankakor", false);
            myApi.send();
            
            var r = JSON.parse(myApi.response);
            var dis = "Recept: " + r.recipe + ", röster: " + r.votes + ", rating: " +    r.rating;
            console.log(dis); 
            ratings.innerHTML = dis; 
            }
                        

           function runCount(count){
                for(i = 0; i < count; i++){
                stars[i].addEventListener('click', function(e){                  
                });
                  stars[i].style.color = "orange";
                }                  
            }
            

            function getValue(id){
            console.log("id: " + id);
            updateRating(id);
            updateView();
            }
            
            
            function quitCount(count){
                  count = 0;
                  for(i = 0; i < stars.length; i++){
                  stars[i].style.color = "black";
                  }
            }
            
            
            /*---------------- Mått -----------------*/
            var localArray= [];
            var getIndex;
            
            for(i = 0; i < displayDigits.length; i++){
            calcArray.push(displayDigits[i].innerHTML);
            }
            
            function getSelected(){
            getIndex =  document.getElementById("selectValue").selectedIndex;
            selected = document.getElementById("selectValue").value;
                            for(i = 0; i < displayDigits.length; i++){
                             divided = selected/ 10;
                             displayDigits[i].innerHTML = calcArray[i] * divided;  
                             localArray.push(displayDigits[i].innerHTML);
                             }  
            setItems();
            }
            
            function setItems(){
            localStorage.setItem("key", JSON.stringify(localArray));
            localStorage.setItem("selectedKey", selected);
            }
            
            function load(){          
            var storedItems = JSON.parse(localStorage.getItem("key")); 
            var storedSelected = localStorage.getItem("selectedKey");
            document.getElementById("selectValue").value = storedSelected;
            console.log(storedSelected);

            for(i = 0; i< displayDigits.length; i++){
            displayDigits[i].innerHTML = storedItems[i]; 
            }
            }
