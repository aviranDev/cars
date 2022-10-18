import React from 'react';
import { Paginte, ListItem, NavigatePage, Pointer } from './paginationStyle';

const Pagination = ({ modelsPerPage, totalModels, paginate, prev, next, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalModels / modelsPerPage); i++) {
    pageNumbers.push(i)
  }

  const prevPage = () => currentPage > 1 && prev();

  const nextPage = () => currentPage < pageNumbers.length && next();

  return (
    <Paginte>
      <ListItem>
        <NavigatePage to="/" onClick={prevPage}>&laquo;</NavigatePage>
      </ListItem>
      {pageNumbers.map(number => (
        <ListItem key={number}>
          <NavigatePage to="/" onClick={() => paginate(number)} >
            {number === currentPage ? <Pointer>{number}</Pointer> : number}
          </NavigatePage>
        </ListItem>
      )
      )}
      <ListItem>
        <NavigatePage to="/" onClick={nextPage}>&raquo;</NavigatePage>
      </ListItem>
    </Paginte>
  );
}

export default Pagination;