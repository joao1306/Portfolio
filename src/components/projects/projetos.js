import React from 'react';
import './projetos.css';
import image from './projectsSource/192a2f97-f95c-43f4-adf1-1ac0da70a239-cover.png'
import js from './projectsSource/techLogos/js.svg';
import mysql from './projectsSource/techLogos/mysql.svg';
import node from './projectsSource/techLogos/node.svg';
import react from './projectsSource/techLogos/react.svg';


export default function projetos() {
  return (
    <div className='pagina-projeto' id='id-pagina-projeto'>

      <p className='titulo-secao'>PROJETOS</p>

      <div id='frame-projetos'>
        <div className='display-vertical-projeto'>
          <img src={image} id='imagem-teste'></img>
          <div className='tag-text'>
            <div className='secao-icones-tech'>
              <img className='icone-tech-projeto' src={js} />
              <img className='icone-tech-projeto' src={mysql} />
              <img className='icone-tech-projeto' src={node} />
              <img className='icone-tech-projeto' src={react} />
            </div>
            <h4 className='projeto-titulo-txt'>Remi</h4>
            <p className='projeto-sinopse-txt'>Projeto de aplicativo focado em auxiliar o usuário no preparo de receitas culinárias de baixa e média complexidade.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
