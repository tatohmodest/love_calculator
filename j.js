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
       
    }
}