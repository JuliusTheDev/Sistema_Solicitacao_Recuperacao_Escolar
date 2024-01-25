//Número 1

document.addEventListener("DOMContentLoaded", function() {
    const filtroInput = document.getElementById("filtro");
    const listaTable = document.getElementById("lista");
    const enviarButton = document.getElementById("enviar");
    let linhaSelecionada = null;
  
    // Filtrar linhas da tabela
    filtroInput.addEventListener("input", function() {
      const filtro = filtroInput.value.trim().toLowerCase();
      const linhas = listaTable.querySelectorAll("tr");
  
      linhas.forEach(linha => {
        const conteudo = linha.textContent.toLowerCase();
        if (conteudo.includes(filtro)) {
          linha.style.display = "";
        } else {
          linha.style.display = "none";
        }
      });
    });
  
   
    // Selecionar linha e mostrar botão Enviar
    listaTable.addEventListener("click", function(evento) {
  const linhaClicada = evento.target.closest("tr");
  if (linhaClicada && linhaClicada !== linhaSelecionada) {
    
    // Remove a classe "selecionada" de todas as linhas
    const linhas = listaTable.querySelectorAll("tr");
    linhas.forEach(function(linha) {
      linha.classList.remove("selecionada");
      linha.style.backgroundColor = "white";
    });

    // Adiciona a classe "selecionada" a linha clicada
    linhaSelecionada = linhaClicada;
    linhaSelecionada.classList.add("selecionada");
    const professorNome = linhaSelecionada.querySelector("div").textContent;
    enviarButton.style.display = "block";
    enviarButton.value = "Enviar para " + professorNome;
    // Define a cor de fundo da linha clicada como amarela
    linhaSelecionada.style.backgroundColor = "yellow";
  }
    });
  
    // Ação de envio
    enviarButton.addEventListener("click", function() {
      if (linhaSelecionada) {
        // Ação de envio para o professor
        alert("Pedido enviado para: " + linhaSelecionada.querySelector("div").textContent);
      }
    });
  });

  
  //Numero 2
  document.addEventListener("DOMContentLoaded", function() {
    const redacaoTextarea = document.getElementById("redacao");
    const restamSpan = document.getElementById("restam");
      
    // Limitar e validar mensagem da área de texto
    redacaoTextarea.addEventListener("input", function() {
      const maxCaracteres = 150;
      const conteudo = redacaoTextarea.value;
      
      if (conteudo.length > maxCaracteres) {
        redacaoTextarea.value = conteudo.substring(0, maxCaracteres);
      }
  
      const caracteresRestantes = maxCaracteres - conteudo.length;
      restamSpan.textContent = caracteresRestantes;
    });
  
    redacaoTextarea.addEventListener("blur", function() {
      const maxCaracteres = 150;
      const conteudo = redacaoTextarea.value;
  
      if (conteudo.length > maxCaracteres) {
        redacaoTextarea.value = conteudo.substring(0, maxCaracteres);
      }
  
      const caracteresRestantes = maxCaracteres - conteudo.length;
      restamSpan.textContent = caracteresRestantes;
    });
  });
  
  //Número 3

  document.addEventListener("DOMContentLoaded", function() {
    const resultadoSpan = document.getElementById("resultado");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
      
    // Calcular e exibir a soma dos valores das caixas de marcação
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", function() {
        let totalPontos = 0;
        checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
            totalPontos += parseInt(checkbox.value);
          }
        });
  
        resultadoSpan.textContent = totalPontos;
      });
    });
  
    
  });
  
  