function convertValue(){
    var dollar= document.getElementById("dollar").value;
    var result= document.getElementById("result");

    if(dollar==""){
        result.innerHTML="Enter Data";
        return false;
    }else if(dollar<0){
        result.innerHTML="Enter positive number";
        return false;
    }else if(dollar==0){
        result.innerHTML="Enter number greater than zero";
        return false;
    }else{
        result.innerHTML= dollar*55 +"L.E";
        return false;
    }
}