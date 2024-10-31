# Cálculo de Combustível - Posto

Este projeto foi desenvolvido para calcular a vantagem de abastecimento com Gasolina ou Etanol em diferentes postos de combustível. Utiliza conceitos de Orientação a Objetos em JavaScript, implementando as classes `Posto` e `Combustivel`.

## Funcionalidades

- Comparação de preços entre Gasolina e Etanol para sugerir o combustível mais vantajoso.
- Cálculo de proporção entre os preços e decisão com base na regra de 70%.
- Resultado exibido no console com a proporção calculada e sugestão de combustível.

## Estrutura das Classes

### Combustivel

Classe que representa um combustível, com os seguintes atributos:
- `tipo`: Tipo do combustível (`GASOLINA` ou `ETANOL`).
- `preco`: Preço do combustível.

### Posto

Classe que representa um posto de combustível, com os seguintes atributos:
- `nome`: Nome do posto.
- `gasolina`: Instância de `Combustivel` para gasolina.
- `etanol`: Instância de `Combustivel` para etanol.

A classe `Posto` possui o método `sugereCombustivel()`, que faz o cálculo e exibe qual combustível é mais vantajoso.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/calculo-combustivel-posto.git
