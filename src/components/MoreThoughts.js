import React from 'react';

const MoreThoughts = ({...thought }) => {

    return (
       <>
        <p tabindex="0"><span className="date-heading">{thought.date}</span>{thought.title} <button className="see-more-icon">>></button></p>
    	</>
    )};

export default MoreThoughts;