import React, { useEffect, Fragment } from 'react'
import Features from '../Components/Features/Features';
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage';
import usePaginate from '../hooks/usePaginate';
import Pagination from '../Components/Pagination/Pagination';

const Categoty = ({ storage, data, action, keys }) => {
  const disptach = useDispatch();
  const [state, setStorage] = useLocalStorage(storage);
  const brandsFromRedux = useSelector(state => state.models[storage]);
  const { currentPage, itemsPerPage, paginate, prev, next, currentItems } = usePaginate(8);

  useEffect(() => {
    !state ? setStorage(data) : disptach(action(state))
  }, [setStorage, state, disptach, data, action])

  return (
    <Fragment>
      <Pagination
        modelsPerPage={itemsPerPage}
        totalModels={brandsFromRedux && brandsFromRedux.length}
        paginate={paginate}
        prev={prev}
        next={next}
        currentPage={currentPage}
      />
      <Features
        title=""
        keys={keys}
        items={brandsFromRedux}
        currentItems={currentItems(brandsFromRedux)}
      />
    </Fragment>
  )
}

export default Categoty;