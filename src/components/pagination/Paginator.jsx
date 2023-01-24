import React from "react";
import './paginator.css'

function Paginator ( { previous, next, onPrevious, onNext } ){
  const handlePrevious = () =>{
    onPrevious();
  };

  const handleNext = () =>{
    onNext();
  };


  return(
    <div className="button-container">
      {
        previous ? (
        <button className='back-page button-page' onClick={handlePrevious}>
          Previous
        </button>
        ) : null
      }

      {
        next ? (
          <button className='next-page button-page' onClick={handleNext}>Next</button>
        ): null
      }

    </div>

  );

}

export default Paginator;
