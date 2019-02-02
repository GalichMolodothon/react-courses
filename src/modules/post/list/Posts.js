import React from 'react'

import { Post } from './Post'
import { Pagination } from '../../../components'
import { Search } from '../../../components'

export function Posts(props) {

    console.log(props.pagination.limit,);
    console.log(props.pagination.page);
    console.log(props.total);
  let total = 100;
  let pages = Math.ceil(total / props.pagination.limit);
  return <main className="uk-main">
      <div className="uk-section">
        <div className="uk-container">
            <div className="uk-margin-bottom uk-flex uk-flex-right">
                <Search handleSearch={props.handleSearch} search={props.search}/>
                <select name="order" className="uk-select uk-width-small uk-margin-auto-left" onChange={props.onClickOrder} value={props.order}>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </select>
                <select name="limit" className="uk-select uk-width-small uk-margin-left" onChange={props.onClickLimit} value={props.pagination.limit}>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
               <div className="uk-button-group uk-margin-left">
                        <button onClick={props.handleView} value='grid' className={`uk-button uk-button-default` + ` ${props.view === 'grid' ? 'uk-active' : ''}`}>
                            <span uk-icon="icon:grid"></span>
                        </button>
                        <button onClick={props.handleView} value='list' className={`uk-button uk-button-default ` + ` ${props.view === 'list' ? 'uk-active' : ''}`}>
                            <span uk-icon="icon:list"></span>
                        </button>
                    </div>
            </div>
            
            
            
            {props.posts.length
                    ? <div className={props.view === 'grid'? "uk-grid uk-child-width-1-2@s uk-child-width-1-3@m": "uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"}>
                    {props.posts.map((post, index) => <div key={post.id}><Post view={props.view} data={post}/></div>)}
                </div>
                    : "Item's not found"}
            
            {/*<Pagination */}
                {/*onClickPaginationNext={props.onClickPaginationNext}*/}
                {/*onClickPaginationPrev={props.onClickPaginationPrev}*/}
                {/*onClickPagination={props.onClickPagination} */}
                {/*pages={pages} */}
                {/*pagination={props.pagination}*/}
            {/*/>*/}
            <Pagination
                onClickPagination={props.onClickPagination}
                pagination={{
                    limit: props.pagination.limit,
                    page: props.pagination.page,
                    total: props.total
                }}
            />
        </div>
      </div>
        

  </main>
}

