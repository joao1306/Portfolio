import React from 'react';
import './projetos.css';
import image from './projectsSource/192a2f97-f95c-43f4-adf1-1ac0da70a239-cover.png'



export default function projetos() {
  return (
    <div className='pagina-projeto' id='id-pagina-projeto'>

      <p className='titulo-secao'>PROJETOS</p>
      <div id='frame-projetos'>
        <div className='display-vertical-projeto'>
          <img src={image} id='imagem-teste'></img>
          <div className='tag-text'>
            <h4 className='projeto-titulo-txt'>Remi</h4>
            <p className='projeto-sinopse-txt'>Projeto de aplicativo focado em auxiliar o usuário no preparo de receitas culinárias de baixa e média complexidade.</p>
          </div>
        </div>
        <div className='display-vertical-projeto'>
          <img src={image} id='imagem-teste'></img>
          <div className='tag-text'>
            <h4 className='projeto-titulo-txt'>Remi</h4>
            <p className='projeto-sinopse-txt'>Projeto de aplicativo focado em auxiliar o usuário no preparo de receitas culinárias de baixa e média complexidade.</p>
          </div>
        </div>
        <div className='display-vertical-projeto'>
          <img src={image} id='imagem-teste'></img>
          <div className='tag-text'>
            <h4 className='projeto-titulo-txt'>Remi</h4>
            <p className='projeto-sinopse-txt'>Projeto de aplicativo focado em auxiliar o usuário no preparo de receitas culinárias de baixa e média complexidade.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
