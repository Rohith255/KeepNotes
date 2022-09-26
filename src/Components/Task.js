import React from 'react'
import './Task.css'
export default function Task() {
  return (
    <div className="Task-input">
      <div className="Task-01">
        <div className="Task-02">
          <input type="text" placeholder="Take a note..."></input>
          <span class="material-symbols-outlined">check_box</span>
          <span class="material-symbols-outlined">brush</span>
          <span class="material-symbols-outlined">image</span>
        </div>
      </div>
    </div>
  );
}
