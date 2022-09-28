import React from 'react'
import './Menubar.css'
import { useState } from "react";
export default function Menubar(props) {
  const icons = ['lightbulb','notifications','edit','archive','delete']
  const labels = ['Notes','Notification','Edit Label','Archive','Bin']
  let index=0;
  return (
    <div className="Menu-01">
      {icons.map(data=>{
        return (
          <div
            className={`${props.active ?"Menu-02":"Menu-02-alter"}`} >
            <div className="Menu-03">
              <span class="material-symbols-outlined">{data}</span>
            </div>
            <div className="Menu-04">
              <p>{labels[index++]}</p>
            </div>
          </div>
        );
})}
    </div>
   
  ); 
}
