const myJSON = [100, 600, 300, 80
];
//INICIO CONVERSOES
const taxaDeConversao = 4.90;
const valorEmDolar = myJSON[0];
const valorEmReais = valorEmDolar * taxaDeConversao;
const valorEmDolar1 = myJSON[1];
const valorEmReais1 = valorEmDolar1 * taxaDeConversao;
const valorEmDolar2 = myJSON[2];
const valorEmReais2 = valorEmDolar2 * taxaDeConversao;
const valorEmDolar3 = myJSON[3];
const valorEmReais3 = valorEmDolar3 * taxaDeConversao;
console.log(`${valorEmDolar} dolares são aproximadamente ${valorEmReais.toFixed(2)} reais.`);

document.getElementById("dols").innerHTML= valorEmDolar
document.getElementById("reais").innerHTML= valorEmReais.toFixed(2)
document.getElementById("dols1").innerHTML= valorEmDolar1
document.getElementById("reais1").innerHTML= valorEmReais1.toFixed(2)
document.getElementById("dols2").innerHTML= valorEmDolar2
document.getElementById("reais2").innerHTML= valorEmReais2.toFixed(2)
document.getElementById("dols3").innerHTML= valorEmDolar3
document.getElementById("reais3").innerHTML= valorEmReais3.toFixed(2)


//FIM CONVERSOES
///////////////////////

function conscep() {
  const inp = document.getElementById("CEP");
  const res = document.getElementById("FreteR");

  res.innerHTML = "";

  const cep = inp.value.replace(/\D/g, "");

  if (cep.length !== 8) {
      res.innerHTML = "<p>CEP invalido.</p>";
      return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.erro) {
              res.innerHTML = "<p>CEP não encontrado, tente novamente.</p>";
          } else {
              res.innerHTML = `
                  <p>CEP: ${data.cep}</p>
                  <p>Logradouro: ${data.logradouro}</p>
                  <p>Bairro: ${data.bairro}</p>
                  <p>Cidade: ${data.localidade}</p>
                  <p>Estado: ${data.uf}</p>
              `;

              calcf(data.uf);
          }
      });


      function calcf(est){
        var frete
        var freteI = document.getElementById("FreteI");
      
       
      
        if (est == "SP" || est == "RJ" || est == "ES" || est == "MG") {
          frete = 2.00;
      }
      
      else if ((est == "AC" || est == "AP" || est == "AM" || est == "PA") ||
          (est == "RO" || est == "RR" || est == "TO")) {
          frete = 10.00;
      }
      
      else if ((est == "MA" || est == "PI" || est == "CE" || est == "RN") ||
          (est == "PB" || est == "PE" || est == "AL" || est == "SE" || est == "BA")) {
          frete = 30.20;
      }
      
      else if ((est == "DF" || est == "GO" || est == "MT" || est == "MS")) {
          frete = 9.50;
      }
      
      else if ((est == "PR" || est == "SC" || est == "RS")) {
          frete = 9.20;
      } else {
          freteI.innerHTML = "Frete não encontrado";
          return;
      }
      
      freteI.innerHTML = "Frete: R$" + frete.toFixed(2);
      
      
        
        
      }

      





    }

    function botabela(){


      document.getElementById("frete2").innerHTML = "Sudeste: " + "R$" +  "2.00"
      
        
      document.getElementById("frete3").innerHTML = "Sul: " + "R$" +  "9.20"
      
      
        
      document.getElementById("frete4").innerHTML = "Norte: " + "R$" +  "10.00"
      
      
        
      document.getElementById("frete5").innerHTML = "Centro-Oeste: " + "R$" +  "9.50"
      
      
      document.getElementById("frete6").innerHTML = "Nordeste: " + "R$" +  "30.20"
      
      
      }
        

////////////TABELA////////////


    document.getElementById("tabela").innerHTML = "Sudeste = "



