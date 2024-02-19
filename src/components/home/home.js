import React, { useState, useEffect } from 'react';
import github from './source/github.svg';
import linkedin from './source/linkedin.svg';
import instagram from './source/instagram.svg';
import email from './source/email.svg';
import './home.css';

export default function Home() {
    const [contadorSetor, setContadorSetor] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [contadorSetor, scrolling]);

    // Função para detectar o scroll e atualizar o contador
    function handleScroll(event) {
        if (!scrolling) {
            setScrolling(true);

            if (event.deltaY > 0) {
                scrollDownFunction();
            } else {
                scrollUpFunction();
            }

            setTimeout(() => {
                setScrolling(false);
            }, 500);
        }
    }

    // Função para rolar para baixo
    function scrollDownFunction() {
        if (contadorSetor < 4) {
            setContadorSetor(contadorSetor + 1);
        }
    }

    // Função para rolar para cima
    function scrollUpFunction() {
        if (contadorSetor > 0) {
            setContadorSetor(contadorSetor - 1);
        }
    }

    // Função para rolar para um elemento com base no valor do contador
    function scrollToElement(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function cleanAll() {
        let selUm = document.getElementById('t-home');
        let selDois = document.getElementById('t-sobre');
        let selTres = document.getElementById('t-skills');
        let selQuatro = document.getElementById('t-projetos');
        let selCinco = document.getElementById('t-contatos');

        selUm.style.rotate = '45deg';
        selUm.style.backgroundColor = 'rgba(255, 174, 80, 1)';
        selUm.style.border = 'none';


        selDois.style.rotate = '45deg';
        selDois.style.backgroundColor = 'rgba(255, 174, 80, 1)';
        selDois.style.border = 'none';


        selTres.style.rotate = '45deg';
        selTres.style.backgroundColor = 'rgba(255, 174, 80, 1)';
        selTres.style.border = 'none';


        selQuatro.style.rotate = '45deg';
        selQuatro.style.backgroundColor = 'rgba(255, 174, 80, 1)';
        selQuatro.style.border = 'none';


        selCinco.style.rotate = '45deg';
        selCinco.style.backgroundColor = 'rgba(255, 174, 80, 1)';
        selCinco.style.border = 'none';

    }

    function active(id) {
        let element = document.getElementById(id);

        element.style.rotate = '0deg';
        element.style.border = '2px rgba(255, 174, 80, 1) solid'
        element.style.backgroundColor = 'transparent';
    }

    useEffect(() => {
        switch (contadorSetor) {
            case 0:
                cleanAll()
                scrollToElement('landing-page');
                active('t-home')
                break;
            case 1:
                cleanAll()
                scrollToElement('sobre');
                active('t-sobre')
                break;
            case 2:
                cleanAll()
                scrollToElement('id-pagina-skills');
                active('t-skills')
                break;
            case 3:
                cleanAll()
                scrollToElement('id-pagina-projeto');
                active('t-projetos')
                break;
            case 4:
                cleanAll()
                scrollToElement('id-pagina-contato');
                active('t-contatos')
                break;
            default:
                break;
        }
    }, [contadorSetor]);

    console.log(contadorSetor)

    return (
        <div id='landing-page'>
            {/* codigo responsavel pelo cabecalho */}
            <div id='navbar'>
                <div id='logo-space'>
                    <a href='#landing-page' id='logo-navbar'>Portfolio</a>
                </div>
                <button id='nav-button'></button>
            </div>

            {/* codigo responsavel pela barra de navegacao lateral */}

            <div id='display-navbar'>
                <a id='t-home' onClick={() => setContadorSetor(0)} ></a>
                <a id='t-sobre' onClick={() => setContadorSetor(1)} ></a>
                <a id='t-skills' onClick={() => setContadorSetor(2)} ></a>
                <a id='t-projetos' onClick={() => setContadorSetor(3)} ></a>
                <a id='t-contatos' onClick={() => setContadorSetor(4)} ></a>
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
