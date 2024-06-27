alert("Boas Vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto = while ( enquanto o chute nao for igual ao NS)
while ( chute != numeroSecreto){
    chute = prompt(`Escolha um Número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao número secreto
       if (chute == numeroSecreto){
        break;
        } else{
           if(chute > numeroSecreto) {
             alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
 }

 let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
 alert(`Isso ai ^^ !! você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
 