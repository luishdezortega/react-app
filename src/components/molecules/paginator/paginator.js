import React from 'react';
import './style.scss';
import ArrowLeft from "../../atoms/arrows/arrow-left";
import ArrowRigth from "../../atoms/arrows/arrow-rigth";

function Paginator({ page, total, previus, next }) {
  return (
    <div className="paginator">

      <div className="info-courses">
        <div>
          <span>Page {page}</span> of <span>{total}</span> result
        </div>
        {/* <div>
          <span>Sorter by</span>
          <div>Relevance</div>
        </div> */}
      </div>
      <div className="paginator">
        {page > 1 ? <ArrowLeft handleClick={previus} /> : null} 
        {page < total ? <ArrowRigth handleClick={next} /> : null} 
        
      </div>
    </div>
  );
}

export default Paginator;
