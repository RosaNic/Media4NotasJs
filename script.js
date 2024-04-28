console.log("-- Média --\n\nSaiba as suas notas aqui!\n");

let n = parseInt (prompt("Escreva sua primeira nota"));
console.log("1º Nota" + ": " + n);

let n2 = parseInt (prompt("Escreva sua segunda nota"))
console.log("2º Nota" + ": " + n2);

let n3 = parseInt (prompt("Escreva sua terceira nota"))
console.log("3º Nota" + ": " + n3);

let n4 = parseInt (prompt("Escreva sua quarta nota"))
console.log("4º Nota" + ": " + n4);

let media = parseFloat(((n + n2 + n3 + n4)/2).toFixed(1));

if(n < 0 || n > 10 ||
     n2 < 0 || n2 > 10 ||
      n3 < 0 || n3 > 10 ||
       n4 < 0 || n4 > 10)
    {
        alert("Valor invalido!\n\nDigite um valor entre 0 e 10");
    } else
        {   console.log("Sua média é:" + " " + media)    }

if(media < 5)
    {
        alert("Você reprovou!\n" + "Sua média foi de: " + media)
    }

if(media == 6)
    {
        alert("Você ficou de recuperação!\n" + "Sua média foi de: " + media)
    } else
        {   
            alert("Você foi aprovado!\n" + "Sua média foi de: " + media)
        }