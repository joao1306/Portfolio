import React, { useState, useRef, useEffect } from 'react'
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
import { motion } from "framer-motion";

const ROTATION_RANGE = 50.5;
const HALF_ROTATION_RANGE = 50.5 / 2;

export default function Skills() {

  const [skillSelecionada, setSkillSelecionada] = useState('hard');

  const ref = useRef(null);


  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  {/* função responsável pela translocação entre as divs de skills */}
 
  const selecionarSoft = () => {
    setSkillSelecionada('soft')
    let boxHardSkills = document.querySelector('.box-hard-skills');
    boxHardSkills.style.left = '-100vw';
    let boxSoftSkills = document.querySelector('.box-soft-skills');
    boxSoftSkills.style.right = '10vw';

  }

  const selecionarHard = () => {
    setSkillSelecionada('hard')
    let boxHardSkills = document.querySelector('.box-hard-skills');
    boxHardSkills.style.left = '10vw';
    let boxSoftSkills = document.querySelector('.box-soft-skills');
    boxSoftSkills.style.right = '-100vw';
  }

  useEffect(() => {
    const checkSkill = () => {
      let seletorHard = document.getElementById('hard');
      let seletorSoft = document.getElementById('soft');

      if (skillSelecionada === 'hard') {
        seletorHard.style.color = 'rgb(255, 174, 80)';
        seletorSoft.style.color = 'white';
      } else {
        seletorHard.style.color = 'white';
        seletorSoft.style.color = 'rgb(255, 174, 80)';
      }
    };

    checkSkill();
  }, [skillSelecionada]);


  return (
    <div id='id-pagina-skills'>

      <p className='titulo-secao skills'>SKILLS</p>

      <div id='box-hardsoft-button'>
        <button className='hard-soft-switch' id='hard' onClick={selecionarHard}>Hard</button>
        <button className='hard-soft-switch' id='soft' onClick={selecionarSoft}>Soft</button>
      </div>


      {/* display de hardskills */}
      <div className='box-hard-skills'>
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
      

      {/* display de softskills */}
      <div className='box-soft-skills'>
        <div className='skill'>

          <div className='display-logo'>
            <img src={react} className='skill-icon' />
          </div>

          <div className='display-titulo'>
            <h3 className='skill-title'>Inglês</h3>
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
            <h3 className='skill-title'>Proatividade</h3>
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
            <h3 className='skill-title'>Responsabilidade</h3>
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
            <h3 className='skill-title'>Scrum</h3>
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
            <h3 className='skill-title'>Resiliência</h3>
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
      <img src={linha1} id='linha1' />
      <img src={linha2} id='linha2' />
      <img src={linha3} id='linha3' />

      {/* svgs das softskills */}
      <div id="div-quadrados">
        <div id='quadrado-interno' />
        <div id='quadrado-externo' />
      </div>
      <img src={orangestairs} id='orange-stairs' />
      <img src={whitestairs} id='white-stairs' />
      <img src={whitestairs} id='white-stairs2' />

    </div>
  )
}
