# Solis — Projeto de Previsão do Tempo

O **Solis** é uma página web simples e minimalista que exibe a previsão do tempo atual de qualquer cidade, utilizando a **API OpenWeather**.  
Desenvolvido com **HTML**, **CSS** e **JavaScript (jQuery)**, o projeto mostra informações como temperatura, umidade, descrição e ícone do clima em tempo real.

## Funcionalidades

- Busca o clima atual de qualquer cidade  
- Exibe:
  - Nome da cidade e país  
  - Temperatura atual (°C)  
  - Umidade do ar (%)  
  - Descrição do clima  
  - Ícone ilustrativo do tempo  
- Tratamento de erros caso a cidade não seja encontrada  

## Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (jQuery)**
- **API OpenWeather**

## Como usar

1. Clone o repositório:
   ```
   git clone https://github.com/Ingridssa/Solis.git
   ```
2. Abra o arquivo no navegador: 
   ```
   inicio.html
   ```
3. Digite o nome de uma cidade e clique em **Pesquisar**

## API Key

Esse projeto utiliza a [OpenWeather API](https://openweathermap.org/api)
Se quiser usar sua própria chave:
- Crie uma conta no site da OpenWeather
- Copie sua chave (`API key`)
- Substitua no script:
    ```
    var apiKey = 'SUA_API_KEY_AQUI';
    ```

## Autor

**Ingrid Soares**
Desenvolvedora Front-End em formação.