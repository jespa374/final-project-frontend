import React from 'react';

const SkillCard = ( {...skill }) => {

  return (
    <div className="skill-card">
      <h4 tabindex="0">{skill.title}</h4>
      <ul>
        {skill.skillItems.map(item => 
          <li tabindex="0">{item}</li>
        )}
      </ul>	
    </div>
  )};

export default SkillCard;