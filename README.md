<p align="center">
  <img alt="" src="https://user-images.githubusercontent.com/81686496/199225574-d30d6e1d-5de5-4a6a-b734-33266bda7e7e.png" width="20%">
</p>


<p align="center">
 <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=161e2f&labelColor=107770" alt="License">
 
  <img src="https://img.shields.io/github/forks/GabrielPCarvalho/Plantmanager?label=forks&message=MIT&color=161e2f&labelColor=107770" alt="Forks">

  <img src="https://img.shields.io/github/stars/GabrielPCarvalho/Plantmanager?label=stars&message=MIT&color=161e2f&labelColor=107770 " alt="Stars">

 <img src="https://img.shields.io/static/v1?label=NLW&message=05&color=161e2f&labelColor=107770" alt="NLW 05" />
</p>

<p align="center">
  <img alt="" src="https://user-images.githubusercontent.com/81686496/199227560-9c70a80f-c697-4cc3-aa56-4c160326b317.png" width="100%">
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="" src=".github/logo-plane.svg" width="10%">
</p>

<br>

<p align="center">
  <img alt="" src=".github/preview-desktop.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- Async Storage
- Expo Local Notifications
- Axios
- Lottie
- Expo Google Fonts
- React Navigation Stack e Bottom Tabs
- React Native Gesture Handler
- Json Server


## 🚧 Projeto:
<h3>Executando o projeto</h3>

Utilize o <B>yarn</B> ou o <B>npm</B> para poder instalar todas as dependências do projeto e inicie o projeto.

```js
yarn || npm install

yarn start
```

Inicie a API FAKE com o Json Server.

```cl
json-server ./src/services/server.json --host 192.168.1.4 --port 3333 --delay 700
```

Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.
 
 ```ts
 import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.4:3333',
});

export default api;
```


## 🎨 Inspiração:

Figma: [FIGMA](https://www.figma.com/file/LRBorUwngguao6I4d8yuX8/PlantManager?node-id=0%3A1)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ by GabrielPCarvalho


