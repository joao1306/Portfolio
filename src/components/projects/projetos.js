import React from 'react'
import './projetos.css';
import whitestair from './projectsSource/whitestairs.svg';

export default function Projetos() {
  return (
    <div id='projetos'>
        <p className='titulo-secao skills'>SKILLS</p>
        <div id='box-hardsoft-button'>
            <button className='hard-soft-switch' id='hard'>Hard</button>
            <button className='hard-soft-switch' id='soft'>Soft</button>
        </div>
    </div>
  )
}
