import React from 'react'
import './projetos.css';
import whitestair from './projectsSource/whitestairs.svg';
import react from './projectsSource/logos/react.svg';
import node from './projectsSource/logos/node.svg';
import js from './projectsSource/logos/js.svg';
import java from './projectsSource/logos/java.svg';
import mysql from './projectsSource/logos/mysql.svg';
import spring from './projectsSource/logos/spring.svg';


export default function Projetos() {
  return (
    <div id='projetos'>
      <p className='titulo-secao skills'>SKILLS</p>
      <div id='box-hardsoft-button'>
        <button className='hard-soft-switch' id='hard'>Hard</button>
        <button className='hard-soft-switch' id='soft'>Soft</button>
      </div>

      <div className='box-skills'>
        <div className='skill'>

          <div className='display-logo'>
            <img src={react} className='skill-icon' />
          </div>

          <div className='display-titulo'>
            <h3 className='skill-title'>React</h3>
          </div>

          <div className='display-texto'>
            <p className='skill-text'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>

        </div>

        <div className='skill'>

          <div className='display-logo'>
            <img src={js} className='skill-icon' />
          </div>

          <div className='display-titulo'>
            <h3 className='skill-title'>JavaScript</h3>
          </div>

          <div className='display-texto'>
            <p className='skill-text'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>

        </div>

        <div className='skill'>

          <div className='display-logo'>
            <img src={mysql} className='skill-icon mysql' />
          </div>

          <div className='display-titulo'>
            <h3 className='skill-title'>MySQL</h3>
          </div>

          <div className='display-texto'>
            <p className='skill-text'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>

        </div>

        <div className='skill'>

          <div className='display-logo'>
            <img src={node} className='skill-icon node' />
          </div>

          <div className='display-titulo'>
            <h3 className='skill-title'>NodeJS</h3>
          </div>

          <div className='display-texto'>
            <p className='skill-text'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>

        </div>

        <div className='skill'>

          <div className='display-logo'>
            <img src={java} className='skill-icon' />
          </div>

          <div className='display-titulo'>
            <h3 className='skill-title'>Java</h3>
          </div>

          <div className='display-texto'>
            <p className='skill-text'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>

        </div>

        <div className='skill'>

          <div className='display-logo'>
            <img src={spring} className='skill-icon' />
          </div>

          <div className='display-titulo'>
            <h3 className='skill-title'>SpringBoot</h3>
          </div>

          <div className='display-texto'>
            <p className='skill-text'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>

        </div>

      </div>
    </div>
  )
}
