import React, { useState } from 'react'

function Pagination  ({ per_page_item, total_page, paginate })  {
const [pageNumbers1, setpageNumbers] = useState([]);

for (let i = 1; i < total_page + 1; i++) {
    pageNumbers1.push(i);
  }

if (pageNumbers1.length > total_page)
{
    pageNumbers1.splice(total_page, pageNumbers1.length)
}

    return (
        <div>
             <nav>
            <ul className='pagination'>
                {pageNumbers1.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
            
        </div>
    )
}

export default Pagination;
