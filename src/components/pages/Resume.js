import React from 'react';
import resume from '../assets/blankresume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} download><img src="https://www.theladders.com/wp-content/uploads/resume-important-800x450.png" alt="resume" /></a><p class="icon-text"><strong>Click the image to download my resume!</strong></p>
      <p>
        Some of the coding technologies I've worked with thus far:
        <ul>
          <li>HTML + CSS</li>
          <li>Javascript</li>
          <li>Node</li>
          <li>MySQL + Sequelize</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </p>
    </div>
  );
}
