function mars(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("result").innerHTML="";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*0.38;
        w=w.toPrecision(3);
        document.getElementById("result").innerHTML="Your weight on "+"Mars "+"is "+w+" Kg";
    }

}


function earth(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*1;
        // 
        document.getElementById("result").innerHTML="Your weight on "+"Earth "+"is "+w+" Kg";
    }

}


function venus(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*0.9;
        // 
        document.getElementById("result").innerHTML="Your weight on "+"Venus "+"is "+w+" Kg";
    }

}

function mercury(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*0.38;
        w=w.toPrecision(3);
        document.getElementById("result").innerHTML="Your weight on "+"Mercury "+ "is "+w+" Kg";
    }

}

function sun(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error ";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*27.01;
        // w=w.toPrecision(3);
        document.getElementById("result").innerHTML="Your weight on "+"Sun "+ "is "+w+" Kg";
    }

}


function jupiter(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*	2.34;
        w=w.toPrecision(3);
        document.getElementById("result").innerHTML="Your weight on "+"Jupiter "+"is "+w+" Kg";
    }
}


function saturn(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*1.06;
        w=w.toPrecision(3);
        document.getElementById("result").innerHTML="Your weight on "+"Saturn "+ "is "+w+" Kg";
    }
}


function uranus(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number ";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*0.92;
        w=w.toPrecision(3);
        document.getElementById("result").innerHTML="Your weight on "+"Uranus "+ "is "+w+" Kg";
    }
}


function neptune(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*1.19;
        w=w.toPrecision(3);
        document.getElementById("result").innerHTML="Your weight on "+"Neptune "+"is "+w+" Kg";
    }
}


function moon(){
    var val=document.getElementById("input").value;
    if(val==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("msg").innerHTML="Enter number";
        return;
    }
    val=Number(val);
    if(isNaN(val)){
        document.getElementById("input").style.border="2px red solid";
        document.getElementById("result").innerHTML="";
        document.getElementById("msg").innerHTML="Error";
    }
    else{
        if(val==0){
            document.getElementById("result").innerHTML="";
            document.getElementById("input").style.border="2px red solid";
            document.getElementById("msg").innerHTML="Error";
            return;
        }
        document.getElementById("input").style.border="2px white solid";
        document.getElementById("msg").innerHTML="";
        var w=val*0.16;
        console.log(w.toPrecision(3));
        document.getElementById("result").innerHTML="Your weight on "+"Moon "+"is "+w+" Kg";
    }
}


