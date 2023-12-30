interface Prop {
  pageNumber: number;
  textAlign: boolean;
  isDisable: boolean;
  totalPage: number;
  onClick: () => void;
}

const PaginationItem = ({
  pageNumber,
  textAlign = false,
  isDisable,
  totalPage,
  onClick,
}: Prop) => {
  const getButtonClass = () => {
    let baseClassName =
      'w-6 h-6 rounded-full flex justify-center items-center ' +
      (isDisable
        ? 'border-[1px] border-sky-400 shadow-inner'
        : ' bg-white border-[1px] ');
    console.log(baseClassName);

    if (textAlign) {
      if (pageNumber === 2) {
        return (baseClassName += ' !mr-6');
      } else if (pageNumber === totalPage - 1) {
        return (baseClassName += ' !ml-6');
      } else {
        return (baseClassName += ' !mx-3');
      }
    }
    if (!textAlign) {
      return (baseClassName += ' !mx-3');
    }
  };
  return (
    <>
      {pageNumber < 3 || pageNumber === totalPage ? '' : ' ...... '}
      {/* {pageNumber === totalPage && pageNumber === totalPage - 1
        ? ' ...... '
        : ''} */}
      <button
        className={getButtonClass()}
        disabled={isDisable}
        onClick={onClick}
      >
        {pageNumber}
      </button>
      {pageNumber > totalPage - 2 || pageNumber < 2 ? '  ' : ' ...... '}
    </>
  );
};

export default PaginationItem;
