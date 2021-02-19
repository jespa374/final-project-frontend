import React from 'react';

const MoreThoughts = ({...thought }) => {

  return (
    <>
      <p className="more-thoughts-paragraph" tabindex="0"><span className="date-heading">{thought.date}</span>{thought.title} <a href="https://medium.com/@jessica.panditha/my-first-introduction-to-the-world-of-coding-e7ba1ce368f0" className="see-more-icon">>></a></p>
    </>
  )};

export default MoreThoughts;