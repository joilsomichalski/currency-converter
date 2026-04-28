# Currency Converter

Conversor de moedas desenvolvido com HTML, CSS e JavaScript. A aplicação permite informar um valor, escolher a moeda de origem e a moeda de destino, consultando uma API de cotação para calcular o valor convertido.

## Visualização

Para visualizar o projeto localmente, basta abrir o arquivo `index.html` no navegador.

## Funcionalidades

- Conversão entre diferentes moedas
- Campo para inserir o valor desejado
- Seleção de moeda de origem
- Seleção de moeda de destino
- Consulta de cotação via API
- Indicador de carregamento durante a busca
- Campo de resultado somente para leitura
- Tratamento básico de erro em caso de falha na consulta

## Moedas Disponíveis

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

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- ExchangeRate API

## Como Executar

```bash
git clone https://github.com/joilsomichalski/currency-converter.git
cd currency-converter
```

Depois, abra o arquivo `index.html` no navegador.

## Estrutura do Projeto

```text
currency-converter/
├── index.html
├── style.css
└── scripts.js
```

## Aprendizados

Neste projeto, pratiquei manipulação do DOM, eventos de formulário, funções assíncronas com `async/await`, consumo de API externa e exibição dinâmica de resultados.

## Melhorias Futuras

- Formatar o resultado com `Intl.NumberFormat`
- Adicionar botão para inverter as moedas
- Exibir a taxa de conversão utilizada
- Melhorar a exibição de mensagens de erro
- Publicar o projeto com GitHub Pages, Netlify ou Vercel

## Autor

Desenvolvido por [Joilso Michalski](https://github.com/joilsomichalski).
