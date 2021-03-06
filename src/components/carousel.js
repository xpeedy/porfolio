import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "./carousel.css"

const skills = [
  {
    name: "JavaScript"
  },
  {
    name: "React"
  },
  {
    name: "Redux"
  },
  {
    name: "Node.js"
  },
  {
    name: "Express"
  },
  {
    name: "Knex"
  },
  {
    name: "Postgres"
  },
  {
    name: "Sqlite3"
  },
  {
    name: "HTML"
  },
  {
    name: "CSS"
  },
  
]
const Carousel = () => {

  const [current, setCurrent] = useState(0);
  const length = skills.length;

  const goNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const goPrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(skills) || skills.length <= 0) {
    return null
  }

  return(
    <div className="slider">
      <LeftOutlined className="left-arrow" onClick={goPrev} style={{"color":"white"}}/>
      <RightOutlined className="right-arrow" onClick={goNext} style={{"color":"white"}}/>
      {skills.map((skill, index) => (
        <div className={index === current ? "slide active" : "slide"} key={index}>
          {index === current && (<p className="skill">{skill.name}</p>)}
        </div>
      ))}
    </div>
  )
}

export default Carousel;
