function calculatorLove(){
    const name1 = document.getElementById('firsn').value.trim();
    const name2 = document.getElementById('lstnam').value.trim();
    

    if(name1===""|| name2===""){
         alert("Please enter both names")
    }
    else{
      const lvpc =Math.floor(Math.random() * 100);
      const result = document.getElementById("result")
      result.innerHTML = `${name1} and ${name2} have a love percentage of: ${lvpc}`;
       if (result.innerHTML<30){
        result.innerHTML +="<br> Just Keep Looking";

       }
       else if(result.innerHTML>28 && lvpc<=49){
        result.innerHTML += "<br> Tuff strart but you're getting there"
    
       }
       else{
        result.innerHTML +="<br> What a match!!!"
       }
    } 
}