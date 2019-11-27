//Declare variables and execute functions after Load;
function Main(){
    var output = document.getElementById("output");
    if(window.location.pathname== "/"){
    output.innerHTML="Loaded";
    }
    var verticallength = 1;
    var horizontallength = 4;
    if(document.cookie!="now"){wiebe();}
    if(document.cookie!="nod"){daniel();}
    if("https://p1.hrcit.nl/canvas.html"==window.location.href){createcanvas();}
    final();
}
//Output to the main HTML page
function outputtext(text,isardu=1,timestamp=1){
    if("https://p1.hrcit.nl/canvas.html"!=window.location.href){
        if(isardu==1){
            if(timestamp=1){
                text=time()+" "+text;
            }
            output.innerHTML+="</br>"+text;
        }
        else if(window.location.pathname== "/"){
            if(timestamp=1){
                text=time()+" "+text;
            }
            output.innerHTML+="</br>"+text;
        }
    }
}
function time(){
    var dateObj = new Date();
    var hour = dateObj.getHours();
    if(hour<10){hour="0"+hour;}
    var minute = dateObj.getMinutes();
    if(minute<10){minute="0"+minute}
    var second = dateObj.getSeconds();

    return "[" + hour + ":" + minute + ":" + second + "]";
}

