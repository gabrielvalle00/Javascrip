function mostrarNumeros(){
    var arrayA = new Array(8)
   arrayA[0] = parseInt (document.getElementById("1").value);
   arrayA[1] = parseInt (document.getElementById("2").value);
   arrayA[2] = parseInt (document.getElementById("3").value);
   arrayA[3] = parseInt (document.getElementById("4").value);
   arrayA[4] = parseInt (document.getElementById("5").value);
   arrayA[5] = parseInt (document.getElementById("6").value);
   arrayA[6] = parseInt (document.getElementById("7").value);
   arrayA[7] = parseInt (document.getElementById("8").value);

   var arrayB = new Array(8)
arrayB[0] = arrayA[0] *3;
arrayB[1] = arrayA[1] *3; 
arrayB[2] = arrayA[2] *3;
arrayB[3] = arrayA[3] *3;
arrayB[4] = arrayA[4] *3;
arrayB[5] = arrayA[5] *3;
arrayB[6] = arrayA[6] *3;
arrayB[7] = arrayA[7] *3;

document.getElementById("resposta1").value = arrayB[0];
document.getElementById("resposta2").value = arrayB[1];
document.getElementById("resposta3").value = arrayB[2];
document.getElementById("resposta4").value = arrayB[3];
document.getElementById("resposta5").value = arrayB[4];
document.getElementById("resposta6").value = arrayB[5];
document.getElementById("resposta7").value = arrayB[6];
document.getElementById("resposta8").value = arrayB[7];




}