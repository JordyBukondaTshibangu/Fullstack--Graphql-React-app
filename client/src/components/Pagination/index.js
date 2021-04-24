import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

const Pagination = props => {

    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [perPage] = useState(10)
    const [pageCount, setPageCount] = useState(0)

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    }

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
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
        </div>
      );
}

export default Pagination