function slice(ARN){
    let index = 0;
    for(index; index < ARN.length ; index+=3){
        proteine.push(ARN.slice(index, index + 3));
    };
    return proteine;
};

// ARN = prompt("test ?")
// slice(ARN);
// console.log(proteine);

function result(proteine){
    let result;
    proteine.forEach(selection => {
        if(selection === "UCU" || selection === "UCC" || selection === "UCA" || selection === "UCG" || selection === "AGU" || selection === "AGC"){
            result = "Sérine";
            finalresult.push(result);
          }else if(selection === "CCU" || selection === "CCC" || selection === "CCA" || selection === "CCG"){
            result = "Proline";
            finalresult.push(result);
          }else if(selection === "UUA" || selection === "UUG" || selection === "CUU" || selection === "CUC" || selection === "CUA" || selection === "CUG"){
            result = "Leucine";
            finalresult.push(result);
          }else if(selection === "UUU" || selection === "UUC"){
            result = "Phénylalanine";
            finalresult.push(result);
          }else if(selection === "CGU" || selection === "CGC" || selection === "CGA" || selection === "AGA" || selection === "AGG" || selection === "CGG"){
            result = "Arginine";
            finalresult.push(result);
          }else if(selection === "UAU" || selection === "UAC"){
            result = "Tyrosine";
            finalresult.push(result);
          }else{
            error = 1;
            console.log("Erreur bro, c'est pas une protéine");
          };
        });
        return error
      };

      let proteine = [];
      let finalresult = [];
      let error = 0;
      let ARN = prompt('Donne moi ton ARN :'); 
      slice(ARN);
      result(proteine);
    
      if (error === 0) {
        console.log("Voici tes protéines bro :\n\n")
        console.log(finalresult.join("-"));
      };

    // CCGUCGUUGCGCUACAGC
    // CCUCGCCGGUACUUCUCG