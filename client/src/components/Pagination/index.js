import React, {useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

const Pagination = () => {

    const [pageCount] = useState(0)

    return (
        <div>
           <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
        </div>
      );
}

export default Pagination