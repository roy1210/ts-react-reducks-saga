import React from 'react'

interface Props {
  totalPosts: number;
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = (props: Props) => {
  const { totalPosts, postsPerPage, paginate } = props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
