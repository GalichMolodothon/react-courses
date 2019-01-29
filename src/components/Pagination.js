import React from 'react'

export function Pagination(props) {
  
  let items = [];
  
  function handleClick(current, e) {
    e.preventDefault();
    // console.log('The link was clicked.', current);
    
    props.onClickPagination(current)
  }
  
  for (let i = 0; i < props.pages; i++) {
    items.push(<li key={i} className={i === props.pagination.page - 1 ? 'uk-active': ''}><a href={`/posts/page/${i}`} onClick={(e) => handleClick(i + 1, e)}>{i + 1}</a></li>)
  }
  
  return <ul className="uk-pagination uk-flex-center" data-uk-margin>
    <li>
        <a href="#" onClick={() => props.onClickPaginationPrev(1)}>
        <span data-uk-pagination-previous>
            <svg
            width={7}
            height={12}
            viewBox="0 0 7 12"
            xmlns="http://www.w3.org/2000/svg"
            ratio={1}
            >
            <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.2"
                points="6 1 1 6 6 11"
            />
            </svg>
        </span>
        </a>
    </li>
    {items}
    <li>
        <a href="#" onClick={() => props.onClickPaginationNext(1, props.pages)}>
        <span data-uk-pagination-next>
            <svg
            width={7}
            height={12}
            viewBox="0 0 7 12"
            xmlns="http://www.w3.org/2000/svg"
            ratio={1}
            >
            <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.2"
                points="1 1 6 6 1 11"
            />
            </svg>
        </span>
        </a>
    </li>
</ul>
}