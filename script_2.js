facto = prompt("De quel nombre veut tu calculer la factorielle ?")
function fact(facto){
    var i, facto, f = 1;
  
    for(i = 1; i <= facto; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
  
  console.log(`Le résultat est : ${fact(facto)}`);