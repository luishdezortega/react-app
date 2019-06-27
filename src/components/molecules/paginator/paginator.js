import React from 'react';
import './style.scss';

function Paginator({ page, total }) {
  return (
    <div className="paginator"  >
        <div>
            <span>Page {page}</span> of <span>{total}</span> result
        </div>
        <div>
            <span>Sorter by</span>
            <div>Relevance</div>
        </div>
      
    </div>
  );
}

export default Paginator;
