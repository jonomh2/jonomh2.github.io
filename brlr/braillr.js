var output = [];
var keys = [];
var longestCombo = [];
var listOfKeysPressed = [];
var maxLengthInputIndex = 0;
var strOfCombos = [];
var largestCombo = 0;
var largestComboIndex = 0;
var backspaceTemp = "";
var letter = "";
var nextUpper = false;
var upperLock = false;
var numLock = false;
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
            letter = toLetter(String(output[largestComboIndex]).split(","));
            console.log(letter)
            if(letter){
                
                if(letter == "up"){
                    if(nextUpper){
                        if(upperLock){
                            upperLock = false;
                        }
                        else{
                            upperLock = true;
                            nextUpper = false;
                        }
                    }
                    else{
                        nextUpper = true;
                    }
                }
                if(letter == "num"){
                    numLock = true;
                }
                if(!numLock && letter != "up"){
                    if(nextUpper || upperLock){
                        document.getElementById('text').innerHTML += letter.toUpperCase();
                        nextUpper = false;
                    }
                    else{
                        document.getElementById('text').innerHTML += letter;
                    }
                }
                else if(letter != "up"){
                    if(letter == "a"){
                        document.getElementById('text').innerHTML += "1";
                        numLock = false;
                    }
                    else if(letter == "b"){
                        document.getElementById('text').innerHTML += "2";
                        numLock = false;
                    }
                    else if(letter == "c"){
                        document.getElementById('text').innerHTML += "3";
                        numLock = false;
                    }
                    else if(letter == "d"){
                        document.getElementById('text').innerHTML += "4";
                        numLock = false;
                    }
                    else if(letter == "e"){
                        document.getElementById('text').innerHTML += "5";
                        numLock = false;
                    }
                    else if(letter == "f"){
                        document.getElementById('text').innerHTML += "6";
                        numLock = false;
                    }
                    else if(letter == "g"){
                        document.getElementById('text').innerHTML += "7";
                        numLock = false;
                    }
                    else if(letter == "h"){
                        document.getElementById('text').innerHTML += "8";
                        numLock = false;
                    }
                    else if(letter == "i"){
                        document.getElementById('text').innerHTML += "9";
                        numLock = false;
                    }
                    else if(letter == "j"){
                        document.getElementById('text').innerHTML += "0";
                        numLock = false;
                    }
                    else if(letter != "num"){
                        document.getElementById('text').innerHTML += letter;
                    }
                }
            }
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
            return 'a';
        }
        else if(arrayOfKeys[0]=="32"){
            return ' ';
        }
        else if(arrayOfKeys[0]=="68"){
            return ',';
        }
        else if(arrayOfKeys[0]=="76"){
            return 'up';
        }
    }
    else if(arrayOfKeys.length==2){
        if(arrayOfKeys.includes("68")){
            if(arrayOfKeys.includes("70")){
                return 'b';
            }
            else if(arrayOfKeys.includes("74")){
                return 'i';
            }
            else if(arrayOfKeys.includes("75")){
                return ':';
            }
        }
        else if(arrayOfKeys.includes("70")){
            if(arrayOfKeys.includes("74")){
                return 'c';
            }
            else if(arrayOfKeys.includes("75")){
                return 'e';
            }
            else if(arrayOfKeys.includes("83")){
                return 'k';
            }
        }
    }
    else if(arrayOfKeys.length==3){
        if(arrayOfKeys.includes("83")){
            if(arrayOfKeys.includes("74")){
                if(arrayOfKeys.includes("70")){
                    return 'm';
                }
                else if(arrayOfKeys.includes("68")){
                    return 's';
                }
            }
            else if(arrayOfKeys.includes("70")){
                if(arrayOfKeys.includes("68")){
                    return 'l';
                }
                else if(arrayOfKeys.includes("75")){
                    return 'o';
                }
                else if(arrayOfKeys.includes("76")){
                    return 'u';
                }
            }
        }
        else if(arrayOfKeys.includes("70")){
            if(arrayOfKeys.includes("68")){
                if(arrayOfKeys.includes("74")){
                    return 'f';
                }
                else if(arrayOfKeys.includes("75")){                    
                    return 'h';
                }
            }
            else if(arrayOfKeys.includes("74") && arrayOfKeys.includes("75")){
                return 'd';
            }
        }
        else if(arrayOfKeys.includes("76") && arrayOfKeys.includes("75") &&  arrayOfKeys.includes("68")){
            return '.';
        }
        else if(arrayOfKeys.includes("74") && arrayOfKeys.includes("75") &&  arrayOfKeys.includes("68")){
            return 'j';
        }
    }
    else if(arrayOfKeys.length==4){
        if(arrayOfKeys.includes("76")){
            if(arrayOfKeys.includes("75")){
                if(arrayOfKeys.includes("68") && arrayOfKeys.includes("74")){
                    return 'w';
                }
                else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83")){
                    return 'z';
                }
                else if(arrayOfKeys.includes("83") && arrayOfKeys.includes("74")){
                    return 'num';
                }
            }
            else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83") && arrayOfKeys.includes("68")){
                return 'v';
            }
            else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83") && arrayOfKeys.includes("74")){
                return 'x';
            }
        }
        else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("75")){
            if(arrayOfKeys.includes("68") && arrayOfKeys.includes("74")){
                return 'g';
            }
            else if(arrayOfKeys.includes("83") && arrayOfKeys.includes("74")){
                return 'n';
            }
            else if(arrayOfKeys.includes("83") && arrayOfKeys.includes("68")){
                return 'r';
            }
        }
        else if(arrayOfKeys.includes("83") && arrayOfKeys.includes("74")){
            if(arrayOfKeys.includes("70") && arrayOfKeys.includes("68")){
                return 'p';
            }
            else 
            if(arrayOfKeys.includes("75") && arrayOfKeys.includes("68")){
                return 't';
            }
        }
    }
    else if(arrayOfKeys.length==5){
        if(arrayOfKeys.includes("70") && arrayOfKeys.includes("68") && arrayOfKeys.includes("83") && arrayOfKeys.includes("74") && arrayOfKeys.includes("75")){
            return 'q';
        }
        else if(arrayOfKeys.includes("70") && arrayOfKeys.includes("83") && arrayOfKeys.includes("74") && arrayOfKeys.includes("76") && arrayOfKeys.includes("75")){
            return 'y';
        }
    }
    


}