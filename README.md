# Currency Converter

Conversor de moedas desenvolvido com **HTML**, **CSS** e **JavaScript**, consumindo uma API externa de câmbio para calcular valores em tempo real.

## Visão geral

A aplicação permite informar um valor, escolher a moeda de origem e a moeda de destino, consultar a cotação atual e exibir o resultado convertido na tela. O projeto demonstra manipulação do DOM, eventos de formulário, funções assíncronas e consumo de API.

## Funcionalidades

- Conversão entre diferentes moedas
- Campo para inserir o valor desejado
- Seleção de moeda de origem
- Seleção de moeda de destino
- Consulta de cotação via API
- Indicador de carregamento durante a busca
- Resultado exibido em campo somente leitura
- Tratamento básico de erro em caso de falha na consulta

## Moedas disponíveis

- BRL - Real
- USD - Dólar
- EUR - Euro
- GBP - Libra
- JPY - Iene
- CAD - Dólar Canadense
- AUD - Dólar Australiano
- CHF - Franco Suíço
- CNY - Yuan
- ARS - Peso Argentino

## Tecnologias utilizadas

**HTML5** | **CSS3** | **JavaScript** | **Fetch API** | **ExchangeRate API**

## Conceitos praticados

- Manipulação do DOM
- Eventos de formulário
- `async` e `await`
- Requisições HTTP com `fetch`
- Tratamento de carregamento e erro
- Organização de lógica em JavaScript

## Como executar

```bash
git clone https://github.com/joilsomichalski/currency-converter.git
cd currency-converter
```

Depois, abra o arquivo `index.html` no navegador.

## Estrutura do projeto

```text
currency-converter/
├── index.html
├── style.css
└── scripts.js
```

## Melhorias planejadas

- Publicar uma demonstração online
- Formatar o resultado com `Intl.NumberFormat`
- Adicionar botão para inverter as moedas
- Exibir a taxa de conversão utilizada
- Melhorar mensagens de erro para o usuário

## Autor

Desenvolvido por [Joilso Michalski](https://github.com/joilsomichalski).
