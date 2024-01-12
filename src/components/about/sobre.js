import React from 'react';
import './sobre.css';
import blocoBranco from '../home/source/bloco.svg';
import blocoLaranja from '../home/source/blocolaranja.svg';
import linkedin from '../home/source/linkedinorange.svg';
import location from '../home/source/locationorange.svg';
import github from '../home/source/githuborange.svg';
import grad from '../home/source/gradorange.svg';

export default function Sobre() {
  return (
    <div id='sobre'>
      <p className='titulo-secao'>SOBRE <span class='negrito-laranja'>MIM</span></p>
      <div id='bloco-sobre-mim'>
        <div id='bloco-foto-sobre-mim'>
          <img src={blocoBranco} id='bloco-branco'/>
          <div id='linha-foto-sobre-mim'></div>
          <div id='display-foto-sobre-mim'>           
            <img src='https://media.istockphoto.com/id/866198538/pt/foto/glasses-guy.jpg?s=612x612&w=0&k=20&c=wHY_m4pfkAJla3WPtCOK_Wtkfi5nZsmJ4sNr0wI_UiQ=' id='foto-sobre-mim'></img>
          </div>
        </div>
        <div id='bloco-texto-sobre-mim'>
          <p id='titulo-bloco-texto-sobre-mim'>Is simply dummy text of the printing and typesetting industry.</p>
          <p id='bloco-descricao-sobre-mim'>Cras ut erat semper, placerat lectusrisque aliquet. Etiam lacinia, sem commodo porttitor commodo, nibh velit hendrerit ipsum, eget efficitur enim lorem a sem. Fusce tempor diam nunc. Sed ultrices, arcu a facilisis imperdiet, odio mi vestibulum urna, in condimentum neque eros nec justo. Praesent sodales condimentum tellus. Proin commodo tempus tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus pharetra ante metus, eget eleifend ligula pretium non. Donec id nisi ex. Sed condimentum magna at magna dapibus commodo. Vestibulum eleifend, augue et vestibulum tincidunt, neque lacus facilisis lacus, vel venenatis erat metus ac magna. Sed id commodo nibh, nec rutrum nulla. Cras condimentum pulvinar nisl quis bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce pharetra quam at tristique rhoncus.</p>
          <div id='bloco-infos-sobre-mim'>
            <div className='item-bloco-info'>
              <img src={grad} class='icone-info-topico-about'/>
              <h3 className='info-topicos-about'>Engenharia de Software</h3>
            </div>
            <div className='item-bloco-info'>
              <img src={linkedin} class='icone-info-topico-about'/>
              <h3 className='info-topicos-about'>mansur1306</h3>
            </div>
            <div className='item-bloco-info'>
              <img src={location} class='icone-info-topico-about'/>
              <h3 className='info-topicos-about'>Rio de Janeiro, Brasil</h3>
            </div>
            <div className='item-bloco-info'>
              <img src={github} class='icone-info-topico-about'/>
              <h3 className='info-topicos-about'>joao1306</h3>
            </div>
          </div>
          <div id='div-botao-curriculo'>
            <button id='botao-curriculo'>Curriculo</button>
            <div id='estilo-botao-curriculo'></div>
          </div>
        </div>
      </div>
      <img src={blocoLaranja} id='bloco-laranja'></img>
    </div>
  )
}
