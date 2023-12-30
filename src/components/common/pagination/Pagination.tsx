import { MouseEvent, useState } from 'react';
import PaginationItem from './PaginationItem';

interface Prop {
  totalPage: number;
  changePage: (page: number) => void;
}

const Pagination = ({ totalPage, changePage }: Prop) => {
  const [activePage, setActivePage] = useState(1);

  const handleNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(activePage + 1);
    setActivePage(activePage + 1);
  };
  const handlePervious = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(activePage - 1);
    setActivePage(activePage - 1);
  };
  const handleFirst = () => {
    changePage(1);
    setActivePage(1);
  };
  const handleLast = () => {
    changePage(totalPage);
    setActivePage(totalPage);
  };
  const handleCenterItem = () => {
    if (activePage === 1) {
      changePage(2);
      setActivePage(2);
    } else if (activePage === totalPage) {
      changePage(totalPage - 1);
      setActivePage(totalPage - 1);
    }
  };
  const showCenterItem = () => {
    if (activePage === 1) {
      return activePage + 1;
    } else if (activePage === totalPage) {
      return activePage - 1;
    } else {
      return activePage;
    }
  };
  return (
    <div className="mt-2  h-16 w-full flex gap-8 justify-center  items-center">
      <button
        className=" text-lg font-bold"
        onClick={handlePervious}
        disabled={activePage === 1}
      >
        {'<'}
      </button>
      <div className="flex">
        <PaginationItem
          totalPage={totalPage}
          textAlign={false}
          onClick={handleFirst}
          isDisable={activePage === 1}
          pageNumber={1}
        />
        <PaginationItem
          totalPage={totalPage}
          textAlign={true}
          onClick={handleCenterItem}
          isDisable={
            activePage !== 1 && activePage !== totalPage ? true : false
          }
          pageNumber={showCenterItem()}
        />
        <PaginationItem
          totalPage={totalPage}
          textAlign={false}
          onClick={handleLast}
          isDisable={activePage === totalPage}
          pageNumber={totalPage}
        />
      </div>

      <button
        className="text-lg font-bold"
        onClick={handleNext}
        disabled={activePage === totalPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
