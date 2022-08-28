import React from 'react';
import headshot from '../assets/headshot.jpg'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={headshot} className="headshot" alt="my headshot"></img>
      <p>
        Hello! I'm Josh, and I am a brand new full-stack developer coming onto the scene starting fall of 2022. I'm located in the Seattle, WA area! I graduated back in 2020 out of the University of Washington with a B.S. in Biology: Physiology, with intentions of pursuing medical school, but found myself at the UW Coding Bootcamp looking for a career pivot.
        I still stick with my physiology background with some my passions I pursue on the side, which include powerlifting myself, and coaching some people at an introductory level into the sport as well. 
      </p>

    </div>
  );
}
