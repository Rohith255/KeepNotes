import React from 'react'
import './Hero.css'
import Menubar from './Menubar'
import Task from './Task'
export default function Hero(props) {
  return (
    <div className='Hero'>
        <Menubar active={props.active}/>
        <Task/>
    </div>
  )
}
