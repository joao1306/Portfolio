import React from 'react'
import './contato.css';
import business from './image 2.png';
import github from '../home/source/github.svg';
import linkedin from '../home/source/linkedin.svg';
import instagram from '../home/source/instagram.svg';
import email from '../home/source/email.svg';
import blocoBranco from '../home/source/bloco.svg';
import blocoLaranja from '../home/source/blocolaranja.svg';

export default function Contato() {
  return (
    <div className='pagina-contato'>
        <div className='div-imagem-contato'>
            <p id='lets-work'>Let's <span id='work'>work</span>!</p>
            <img src={business} id='imagem-contato'/>
        </div>
        <div className='div-links-contato'>
            <p id='fale-comigo'>Fale comigo!</p>
            <div id='display-links'>
                <img className='icone-contato' src={github}/>
                <img className='icone-contato' src={linkedin}/>
                <img className='icone-contato' src={instagram}/>
                <img className='icone-contato' src={email}/>
            </div>
            <p id='portfolio-txt'>Portfolio</p>
            <p id='desenvolvido-txt'>Desenvolvido por João Victor • Fevereiro de 2024</p>
            <img src={blocoBranco} id='bloco-branco-contato'/>
            <img src={blocoLaranja} id='bloco-laranja-contato'/>
        </div>
    </div>
  )
}
