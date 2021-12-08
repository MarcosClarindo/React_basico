import React from 'react';
import Header from './Hearder';
import Content from './Content';

import Cards from './Cards';
import Card from './Card';

import reactImg from './img/react.png'
import nodeImg from './img/node.png'
import nextImg from './img/next.png'
/*

  - Import React
  - Função que retorna JSX
    - Sempre tem que ter um elemento pai
    - React Fragment
  - Exportar Função
  - Para usar o componente:
    - Importar
    - Usar como tag, exemplo: < App/>
  - Componentes podem receber propriedades, exemplo: <Header titulo = "text" />
*/
function App() {
  return (
    <>
      <Header titulo = "Hello World!" subtitulo = "Outro Texto!"/>
      <Content titulo= "Bem Vindo!">
       
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        <Cards>
          <Card
            imagem={reactImg}
            titulo="Titulo1"
            texto=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />

          <Card
            imagem={nodeImg}
            titulo="Titulo2"
            texto=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />

          <Card
            imagem={nextImg}
            titulo="Titulo3"
            texto=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
        </Cards>
      </Content>
    </>
  )
}

export default App;