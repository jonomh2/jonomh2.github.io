var output = [];
var keys = [];
var longestCombo = [];
var listOfKeysPressed = [];
var maxLengthInputIndex = 0;
var strOfCombos = [];
var largestCombo = 0;
var largestComboIndex = 0;
var backspaceTemp = "";
var acceptedInput = [70, 68, 83, 74, 75, 76, 32]//change this to be the accepted input and delete the ! on line (this line + 3)

window.addEventListener('keydown', (event) => {
    if(!event.repeat && acceptedInput.includes(event.keyCode)) {
        keys.push(event.keyCode);
        console.log(JSON.stringify(keys))
        longestCombo.push(keys.length);
        listOfKeysPressed.push(keys);//this is initializing using keys that end up changing
        strOfCombos.push(JSON.stringify(keys));
        if(event.keyCode == 70){
            document.getElementById('1').setAttribute("fill", "black");
        }
        else if(event.keyCode == 68){
            document.getElementById('2').setAttribute("fill", "black");
        }
        else if(event.keyCode == 83){
            document.getElementById('3').setAttribute("fill", "black");
        }
        else if(event.keyCode == 74){
            document.getElementById('4').setAttribute("fill", "black");
        }
        else if(event.keyCode == 75){
            document.getElementById('5').setAttribute("fill", "black");
        }
        else if(event.keyCode == 76){
            document.getElementById('6').setAttribute("fill", "black");
        }
    }
    else if(event.keyCode == 8){
        backspaceTemp = document.getElementById("text").innerHTML;
        document.getElementById("text").innerHTML = backspaceTemp.substring(0, backspaceTemp.length-1);
    }
  });

window.addEventListener('keyup', (event) => {
    
    if(!event.repeat && acceptedInput.includes(event.keyCode)) {
        keys.splice(-1,1);
        console.log(JSON.stringify(keys))
        for(i = 0;i<strOfCombos.length;i++){
            output[i] = strOfCombos[i].substring(1, strOfCombos[i].length-1).split(",");
        }
        if(keys.length == 0){
            largestCombo = 0;
            for(i = 0;i<listOfKeysPressed.length;i++){
                if(listOfKeysPressed[i].length > maxLengthInputIndex){
                    maxLengthInputIndex = listOfKeysPressed[i];
                }
            }
            listOfKeysPressed = [];
            longestCombo = [];
            combo = [];
            
            for (var i = 0; i < output.length; i++) {
                if(output[i].length > largestCombo){
                    largestCombo = output[i].length;
                    largestComboIndex = i;
                }
            }
            toLetter(String(output[largestComboIndex]).split(","))
            strOfCombos = [];
            output=[];
        }
        if(event.keyCode == 70){
            document.getElementById('1').setAttribute("fill", "lightgrey");
        }
        else if(event.keyCode == 68){
            document.getElementById('2').setAttribute("fill", "lightgrey");
        }
        else if(event.keyCode == 83){
            document.getElementById('3').setAttribute("fill", "lightgrey");
        }
        else if(event.keyCode == 74){
            document.getElementById('4').setAttribute("fill", "lightgrey");
        }
        else if(event.keyCode == 75){
            document.getElementById('5').setAttribute("fill", "lightgrey");
        }
        else if(event.keyCode == 76){
            document.getElementById('6').setAttribute("fill", "lightgrey");
        }
    }
});

//
// 1=70
// 2=68
// 3=83
// 4=74
// 5=75
// 6=76
//

function toLetter(arrayOfKeys){
    if(arrayOfKeys.length == 1){//length of 1 evaluation
        if(arrayOfKeys[0]=="70"){
            document.getElementById('text').innerHTML += 'a';
        }
        else if(arrayOfKeys[0]=="32"){
            document.getElementById('text').innerHTML += ' ';
        }
        else if(arrayOfKeys[0]=="68"){
            document.getElementById('text').innerHTML += ',';
        }
    }
    else if(arrayOfKeys.length==2){
        if(arrayOfKeys.includes("68")){
            if(arrayOfKeys.includes("70")){
                document.getElementById('text').innerHTML += 'b';
            }
            else if(arrayOfKeys.includes("74")){
                document.getElementById('text').innerHTML += 'i';
            }
            else if(arrayOfKeys.includes("75")){
                document.getElementById('text').innerHTML += ':';
            }
        }
        else{
            if(arrayOfKeys.includes("83")){
                document.getElementById('text').innerHTML += 'k';
            }
            else if(arrayOfKeys.includes("74")){
                document.getElementById('text').innerHTML += 'c';
            }
            else if(arrayOfKeys.includes("75")){
                document.getElementById('text').innerHTML += 'e';
            }
        }
    }
    else if(arrayOfKeys.length==3){
        if(arrayOfKeys.includes("83")){
            if(arrayOfKeys.includes("74")){
                if(arrayOfKeys.includes("70")){
                    document.getElementById('text').innerHTML += 'm';
                }
                else if(arrayOfKeys.includes("68")){
                    document.getElementById('text').innerHTML += 's';
                }
            }
            else if(arrayOfKeys.includes("70")){
                if(arrayOfKeys.includes("68")){
                    document.getElementById('text').innerHTML += 'l';
                }
                else if(arrayOfKeys.includes("75")){
                    document.getElementById('text').innerHTML += 'o';
                }
                else if(arrayOfKeys.includes("76")){
                    document.getElementById('text').innerHTML += 'u';
                }
            }
        }
        else if(arrayOfKeys.includes("70")){
            if(arrayOfKeys.includes("68")){
                if(arrayOfKeys.includes("74")){
                    document.getElementById('text').innerHTML += 'f';
                }
                else if(arrayOfKeys.includes("75")){                    
                    document.getElementById('text').innerHTML += 'h';
                }
            }
            else if(arrayOfKeys.includes("74") && arrayOfKeys.includes("75")){
                document.getElementById('text').innerHTML += 'd';
            }
        }
        else if(arrayOfKeys.includes("76") && arrayOfKeys.includes("75") &&  arrayOfKeys.includes("68")){
            document.getElementById('text').innerHTML += '.';
        }
        else if(arrayOfKeys.includes("74") && arrayOfKeys.includes("75") &&  arrayOfKeys.includes("68")){
            document.getElementById('text').innerHTML += 'j';
        }
    }
    else if(arrayOfKeys.length==4){
        if(arrayOfKeys.includes("76")){
            if(arrayOfKeys.includes("75")){
                if(arrayOfKeys.includes("68") && arrayOfKeys.includes("74")){
                    document.getElementById('text').innerHTML += 'w';
                }
                else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83")){
                    document.getElementById('text').innerHTML += 'z';
                }
            }
            else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83") && arrayOfKeys.includes("68")){
                document.getElementById('text').innerHTML += 'v';
            }
            else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83") && arrayOfKeys.includes("74")){
                document.getElementById('text').innerHTML += 'x';
            }
        }
        else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("75")){
            if(arrayOfKeys.includes("68") && arrayOfKeys.includes("74")){
                document.getElementById('text').innerHTML += 'g';
            }
            else if(arrayOfKeys.includes("83") && arrayOfKeys.includes("74")){
                document.getElementById('text').innerHTML += 'n';
            }
            else if(arrayOfKeys.includes("83") && arrayOfKeys.includes("68")){
                document.getElementById('text').innerHTML += 'r';
            }
        }
        else if(arrayOfKeys.includes("83") && arrayOfKeys.includes("74")){
            if(arrayOfKeys.includes("70") && arrayOfKeys.includes("68")){
                document.getElementById('text').innerHTML += 'p';
            }
            else 
            if(arrayOfKeys.includes("75") && arrayOfKeys.includes("68")){
                document.getElementById('text').innerHTML += 't';
            }
        }
    }
    else if(arrayOfKeys.length==5){
        if(arrayOfKeys.includes("70") && arrayOfKeys.includes("68") && arrayOfKeys.includes("83") && arrayOfKeys.includes("74") && arrayOfKeys.includes("75")){
            document.getElementById('text').innerHTML += 'q';
        }
        else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83") && arrayOfKeys.includes("74") && arrayOfKeys.includes("76") && arrayOfKeys.includes("75")){
            document.getElementById('text').innerHTML += 'y';
        }
    }
    


}