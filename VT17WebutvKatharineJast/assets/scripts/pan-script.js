var i, x, count, selected, divided;
            var calcArray = [];
            var stars = document.getElementsByTagName("h4");
            var displayDigits = document.getElementsByTagName("span");
            
                   
            for(i = 0; i < displayDigits.length; i++){
            calcArray.push(displayDigits[i].innerHTML);
            }
            
            function getSelected(){
            selected = document.getElementById("selectValue").value;
            console.log(selected);
                            for(i = 0; i < displayDigits.length; i++){
                             divided = selected/ 10;
                             displayDigits[i].innerHTML = calcArray[i] * divided;    
                             }
                
            }


          function ajaxFunction(){
            var xhttp = new XMLHttpRequest();
            Xhttp.onreadystatechange = function(){
            if(this.readeState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
            }
            }
            
            xhttp.open("GET",
            "https://edu.oscarb.se/sjk15/api/recipe/?api_key=9cf15f843bb44165&recipe=pankakor&rating=4", true);
                xhttp.send();
            
            }
            
            /*------- review function -------*/
            
           function runCount(count){
            console.log(count);
                  for(i = 0; i < count; i++){
                  stars[i].style.color = "orange";
                  }               
            }
                        
            
            function quitCount(count){
            count = 0;
                  for(i = 0; i < stars.length; i++){
                  stars[i].style.color = "black";
                  }
            }
