const GASOLINA = "GASOLINA";
const ETANOL = "ETANOL";

class Combustivel {
  constructor(tipo, preco) {
    this.tipo = tipo;
    this.preco = preco;
  }
}

class Posto {
  constructor(nome, precoGasolina, precoEtanol) {
    this.nome = nome;
    this.gasolina = new Combustivel(GASOLINA, precoGasolina);
    this.etanol = new Combustivel(ETANOL, precoEtanol);
  }

  sugereCombustivel() {
    const proporcao = this.etanol.preco / this.gasolina.preco;
    const vantagem = proporcao < 0.7 ? "ETANOL" : "GASOLINA";
    
    return `No posto ${this.nome}, a proporção Etanol/Gasolina é de ${(proporcao * 100).toFixed(2)}%. É mais vantajoso abastecer com ${vantagem}.`;
  }
}

function exibirResultados() {
    const posto1 = new Posto("Posto Shell", 5.50, 3.70);
    const posto2 = new Posto("Posto Box", 5.30, 3.90);
    const posto3 = new Posto("Posto Ipiranga", 5.80, 4.00);
    
    const resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = `
        <div class="posto">${posto1.sugereCombustivel()}</div>
        <div class="posto">${posto2.sugereCombustivel()}</div>
        <div class="posto">${posto3.sugereCombustivel()}</div>
    `;
}

document.addEventListener("DOMContentLoaded", exibirResultados);
