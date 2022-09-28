import React from 'react'
import './Task.css'
export default function Task() {
  const icons = ['check_box','brush','image']
  return (
    <div className="Task-input">
      <div className="Task-01">
        <div className="Task-02">
          <input type="text" placeholder="Take a note..."></input>
          {icons.map(data=>{
            return(
              <span class="material-symbols-outlined">{data}</span>
            )
          })}
        </div>
      </div>
    </div>
  );
}
