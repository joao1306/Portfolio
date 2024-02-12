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
    <div className='pagina-contato' id='id-pagina-contato'>
        <div className='div-imagem-contato'>
            <p id='lets-work'>Let's <span id='work'>work</span>!</p>
            <img src={business} id='imagem-contato'/>
        </div>
        <div className='div-links-contato'>
            <p id='fale-comigo'>Fale comigo!</p>
            <div id='display-links'>
                <a className='icone-contato' target="_blank" href='https://github.com/joao1306' ><img className='icone-contato' src={github}/></a>
                <a className='icone-contato' target="_blank" href='https://www.linkedin.com/in/mansur1306/' ><img className='icone-contato' src={linkedin}/></a>
                <a className='icone-contato' target="_blank" href='https://www.instagram.com/jao_1306/' ><img className='icone-contato' src={instagram}/></a>
                <a className='icone-contato' href='mailto:joaovictor1306@gmail.com' ><img className='icone-contato' src={email}/></a>
            </div>
            <p id='portfolio-txt'>Portfolio</p>
            <p id='desenvolvido-txt'>Desenvolvido por João Victor • Fevereiro de 2024</p>
            <img src={blocoBranco} id='bloco-branco-contato'/>
            <img src={blocoLaranja} id='bloco-laranja-contato'/>
        </div>
    </div>
  )
}
