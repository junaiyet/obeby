
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Flex from './Flex';
import Product from './Product';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className='md:w-[49%] lg:w-[32%]'>
        <Product  src="assets/p-1.png"  badge={false}/>

          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage  }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [itemSelected, setItemselected] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemselected(event.selected)
      setItemOffset(newOffset);
    };
  
    return (
      <>
      <Flex className="flex flex-wrap justify-between">
        <Items currentItems={currentItems} />

      </Flex>
        <ReactPaginate
           breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          previousClassName="hidden"
          previousLinkClassName="page-link"
          nextClassName="hidden"
          nextLinkClassName="page-link"
          pageClassName="inline-block border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm font-normal font-sm "

        //   pageLinkClassName="inline-block border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm font-normal font-sm bg-[#000] text-[#fff]"
          containerClassName="flex flex-wrap gap-x-5 gap-y-3.5 md:gap-y-0 items-end mt-12"
          activeClassName=" inline-block border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm font-normal font-sm bg-[#000] text-[#fff]"
        />
             <p className='lg:absolute lg:right-0 lg:bottom-0 font-dm font-normal fon-sm text-[#767676] md:mt-0 mt-2.5'>Products from {itemOffset} to {itemOffset+ itemsPerPage} of {items.length}</p> 
      </>
    );
}

export default Pagination