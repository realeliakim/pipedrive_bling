<p align="center">
  <img src="https://www.filepicker.io/api/file/57XgNv1URwmpHlaM1HqR" alt="linkApi_logo" height="120"/>
</p>
<h1 align="center">
  Desafio linkApi - Pipedrive_Bling
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/realeliakim/">
    <img alt="Linkedin" src="https://img.shields.io/badge/-Eliakim%20Aquino-0e76a8?label=Linkedin&logo=linkedin&style=flat-square"/>
  </a>
</p>

## :page_facing_up: Descrição

O objetivo dessa API é realizar uma integração simples entre o [CRM Pipedrive](https://www.pipedrive.com/pt) e o [ERP Bling](https://www.bling.com.br/home), registrando os deals com status ganho (won) do Pipedrive como pedido de vendas no Bling e também fazendo a consolidação dos dados das vendas em um banco orientado a documentos [MongoDB](https://www.mongodb.com/).


## :computer: Instalação

```bash
# Clone este repositório.
$ git clone https://github.com/realeliakim/pipedrive_bling

# Vá para a pasta do projeto
$ cd pipedrive_bling

# Instale as dependências
$ yarn

# Execute aplicação
$ yarn dev

# Você pode alterar as configurações no arquivo .env

```

## Endpoints

> [GET]  /deals: Lista todos pedidos salvos na collection mongoDB.

> [POST] /deals: Busca as oportunidades na api do pipedrive, as registram como pedido de vendas no Bling e por último, salva as mesmas em uma collection no mongoDB.