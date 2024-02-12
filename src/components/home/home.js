import './home.css';
import github from './source/github.svg';
import linkedin from './source/linkedin.svg';
import instagram from './source/instagram.svg';
import email from './source/email.svg';
import React, {useState} from 'react';


export default function Home() {

    const [navbar, setNavbar] = useState('off');

    function navbarToggle() {

        let check = document.getElementById('topics');

        if (check.classList.contains('off')) {
            check.classList.remove('off');
            check.classList.add('on');
        } else {
            check.classList.remove('on');
            check.classList.add('off');
        }
    }

    return (
        <div id='landing-page'>
            {/* codigo responsavel pela barra de navegação */}
            <div id='navbar'>
                <div id='logo-space'>
                    <a href='#landing-page' id='logo-navbar'>Portfolio</a>
                </div>
                <div id='topics'>
                    <a href='#sobre' className='topico'> Sobre</a>
                    <a href='#id-pagina-skills' className='topico'> Skills</a>
                    <a href='#id-pagina-projeto' className='topico'> Projetos</a>
                    <a href='#id-pagina-contato' className='topico'> Contatos</a>
                </div>
                <button id='nav-button' onClick={navbarToggle}>=</button>
            </div>

            {/* codigo da landing page */}
            <div id='landing-page-text'>
                <p id='saudacao-landing-page'>Olá! Me chamo</p>
                <h1 id='nome-landing-page'>João Victor</h1>
                <h3 id='subtitulo-landing-page'> <span class='negrito'>Desenvolvedor</span> de Software e <span class='negrito'>Designer</span></h3>
                <div id='contatos-landing-page'>
                    <p id='fale-comigo-landing-page'>Fale comigo!</p>
                    <div id='icones-contatos-landing-page'>
                        <img src={github} className='icone-landing-page'></img>
                        <img src={linkedin} className='icone-landing-page'></img>
                        <img src={instagram} className='icone-landing-page'></img>
                        <img src={email} className='icone-landing-page'></img>
                    </div>
                </div>
            </div>
            <div id='landing-page-images'></div>

        </div>
    )
}
