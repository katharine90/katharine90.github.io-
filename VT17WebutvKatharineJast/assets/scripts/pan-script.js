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