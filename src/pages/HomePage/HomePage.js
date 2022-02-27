import React from 'react';
import "./HomePage.css";
import Card from '../../components/Card';
import loopstudios from "../../assets/loopstudios-img/loopstudios-desk.png";
import calc from "../../assets/tips-calculator-img/calc-view.png";
import equalizer from "../../assets/equalizer-img/equalizer.png";
import github from "../../assets/github-user-img/github.png";
import e_commerce from "../../assets/ecommerce-img/e_commerce.png"

export default function HomePage() {
  return (
    <div className='content'>
      <h1>Welcome to the Home Page</h1>
      <h3>Here you can see all of our projects</h3>
      <div className='projects'>
        <Card
          image = {loopstudios}
          desc = "Loopstudio"
          text = "View Project"
          url = ""
        />
        <Card
          image = {calc}
          desc = "Calculator"
          text = "View PRoject"
        />
        <Card
          image = {equalizer}
          desc = "Equalizer"
          text = "View PRoject"
        />
        <Card
          image = {github}
          desc = "Github search"
          text = "View PRoject"
        />
        <Card
          image = {e_commerce}
          desc = "E - commerce"
          text = "View PRoject"
        />
      </div>
    </div>
  )
}
