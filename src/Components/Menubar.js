import React from 'react'
import './Menubar.css'
// import { useState } from "react";
export default function Menubar() {
const icons = ['lightbulb','notifications','edit','archive','delete']
const labels = ['Notes','Notification','Edit Label','Archive','Bin']
let index=0;
  return (
    <div className="Menu-01">

      {icons.map(data=>{
        return (
          <div className="Menu-02">
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
