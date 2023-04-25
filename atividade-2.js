function mostrarNumeros(){
 var arrayA = new Array(20)
arrayA[0] = parseInt (document.getElementById("1").value);
arrayA[1] = parseInt (document.getElementById("2").value);
arrayA[2] = parseInt (document.getElementById("3").value);
arrayA[3] = parseInt (document.getElementById("4").value);
arrayA[4] = parseInt (document.getElementById("5").value);
arrayA[5] = parseInt (document.getElementById("6").value);
arrayA[6] = parseInt (document.getElementById("7").value);
arrayA[7] = parseInt (document.getElementById("8").value);
arrayA[8] = parseInt (document.getElementById("9").value);
arrayA[9] = parseInt (document.getElementById("10").value);
arrayA[10] = parseInt (document.getElementById("11").value);
arrayA[11] = parseInt (document.getElementById("12").value);
arrayA[12] = parseInt (document.getElementById("13").value);
arrayA[13] = parseInt (document.getElementById("14").value);
arrayA[14] = parseInt (document.getElementById("15").value);
arrayA[15] = parseInt (document.getElementById("16").value);
arrayA[16] = parseInt (document.getElementById("17").value);
arrayA[17] = parseInt (document.getElementById("18").value);
arrayA[18] = parseInt (document.getElementById("19").value);
arrayA[19] = parseInt (document.getElementById("20").value);

var arrayB = new Array(20)
arrayB[0] = parseInt (document.getElementById("b1").value);
arrayB[1] = parseInt (document.getElementById("b2").value);
arrayB[2] = parseInt (document.getElementById("b3").value);
arrayB[3] = parseInt (document.getElementById("b4").value);
arrayB[4] = parseInt (document.getElementById("b5").value);
arrayB[5] = parseInt (document.getElementById("b6").value);
arrayB[6] = parseInt (document.getElementById("b7").value);
arrayB[7] = parseInt (document.getElementById("b8").value);
arrayB[8] = parseInt (document.getElementById("b9").value);
arrayB[9] = parseInt (document.getElementById("b10").value);
arrayB[10] = parseInt (document.getElementById("b11").value);
arrayB[11] = parseInt (document.getElementById("b12").value);
arrayB[12] = parseInt (document.getElementById("b13").value);
arrayB[13] = parseInt (document.getElementById("b14").value);
arrayB[14] = parseInt (document.getElementById("b15").value);
arrayB[15] = parseInt (document.getElementById("b16").value);
arrayB[16] = parseInt (document.getElementById("b17").value);
arrayB[17] = parseInt (document.getElementById("b18").value);
arrayB[18] = parseInt (document.getElementById("b19").value);
arrayB[19] = parseInt (document.getElementById("b20").value);




var arrayC = new Array(20)
arrayC[0] = arrayA[0] - arrayB[0];
arrayC[1] = arrayA[1] - arrayB[1];
arrayC[2] = arrayA[2] - arrayB[2]; 
arrayC[3] = arrayA[3] - arrayB[3]; 
arrayC[4] = arrayA[4] - arrayB[4];
arrayC[5] = arrayA[5] - arrayB[5];
arrayC[6] = arrayA[6] - arrayB[6];
arrayC[7] = arrayA[7] - arrayB[7];
arrayC[8] = arrayA[8] - arrayB[8];
arrayC[9] = arrayA[9] - arrayB[9];
arrayC[10] = arrayA[10] - arrayB[10];
arrayC[11] = arrayA[11] - arrayB[11];
arrayC[12] = arrayA[12] - arrayB[12]; 
arrayC[13] = arrayA[13] - arrayB[13];
arrayC[14] = arrayA[14] - arrayB[14]; 
arrayC[15] = arrayA[15] - arrayB[15]; 
arrayC[16] = arrayA[16] - arrayB[16];
arrayC[17] = arrayA[17] - arrayB[17];
arrayC[18] = arrayA[18] - arrayB[18];
arrayC[19] = arrayA[19] - arrayB[19];




 document.getElementById("resposta1").value = arrayC[0];
 document.getElementById("resposta2").value = arrayC[1];
 document.getElementById("resposta3").value = arrayC[2];
 document.getElementById("resposta4").value = arrayC[3];
 document.getElementById("resposta5").value = arrayC[4];
 document.getElementById("resposta6").value = arrayC[5];
 document.getElementById("resposta7").value = arrayC[6];
 document.getElementById("resposta8").value = arrayC[7];
 document.getElementById("resposta9").value = arrayC[8];
 document.getElementById("resposta10").value = arrayC[9];
 document.getElementById("resposta11").value = arrayC[10];
 document.getElementById("resposta12").value = arrayC[11];
 document.getElementById("resposta13").value = arrayC[12];
 document.getElementById("resposta14").value = arrayC[13];
 document.getElementById("resposta15").value = arrayC[14];
 document.getElementById("resposta16").value = arrayC[15];
 document.getElementById("resposta17").value = arrayC[16];
 document.getElementById("resposta18").value = arrayC[17];
 document.getElementById("resposta19").value = arrayC[18];
 document.getElementById("resposta20").value = arrayC[19];
}


