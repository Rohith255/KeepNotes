import React from 'react'
import './Menubar.css'
// import { useState } from "react";
export default function Menubar() {

  return (
    <div className="Menu-01">
      <div className="Menu-02">
        <div className="Menu-03">
          <span class="material-symbols-outlined">lightbulb</span>
        </div>
        <div className="Menu-04">
          <p>Notes</p>
        </div>
      </div>
      <div className="Menu-02">
        <div className="Menu-03">
          <span class="material-symbols-outlined">notifications</span>
        </div>
        <div className="Menu-04">
          <p>Reminders</p>
        </div>
      </div>
      <div className="Menu-02">
        <div className="Menu-03">
          <span class="material-symbols-outlined">notifications</span>
        </div>
        <div className="Menu-04">
          <p>Edit labels</p>
        </div>
      </div>
      <div className="Menu-02">
        <div className="Menu-03">
          <span class="material-symbols-outlined">archive</span>
        </div>
        <div className="Menu-04">
          <p>Archive</p>
        </div>
      </div>
      <div className="Menu-02">
        <div className="Menu-03">
          <span class="material-symbols-outlined">delete</span>
        </div>
        <div className="Menu-04">
          <p>Bin</p>
        </div>
      </div>
    </div>
  );
}
