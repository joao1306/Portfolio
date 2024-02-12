import React from 'react'
import './skills.css';
import react from './logos/react.svg';
import node from './logos/node.svg';
import js from './logos/js.svg';
import java from './logos/java.svg';
import mysql from './logos/mysql.svg';
import spring from './logos/spring.svg';
import linha1 from './logos/soft/linha1.svg';
import linha2 from './logos/soft/linha2.svg';
import linha3 from './logos/soft/linha3.svg';
import orangestairs from './logos/hard/orangestairs.svg';
import whitestairs from './logos/hard/whitestairs.svg';


export default function Skills() {
  return (
    <div id='id-pagina-skills'>
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

      {/* svgs das softskills */}
      <img src={linha1} id='linha1'/>
      <img src={linha2} id='linha2'/>
      <img src={linha3} id='linha3'/>

      {/* svgs das softskills */}
      <div id="div-quadrados">
        <div id='quadrado-interno'/>
        <div id='quadrado-externo'/>
      </div>
      <img src={orangestairs} id='orange-stairs'/>
      <img src={whitestairs} id='white-stairs'/>
      <img src={whitestairs} id='white-stairs2'/>

    </div>
  )
}
