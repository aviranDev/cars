import { useState } from 'react';

const usePaginate = (initialData) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(initialData);
  const indexOfLastModel = currentPage * itemsPerPage;
  const indexOfFirstModel = indexOfLastModel - itemsPerPage;
  const currentItems = data => {
    return data.slice(indexOfFirstModel, indexOfLastModel);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const prev = () => setCurrentPage(currentPage - 1);
  const next = () => setCurrentPage(currentPage + 1);
  return { currentPage, itemsPerPage, paginate, prev, next, currentItems };
}

export default usePaginate;
