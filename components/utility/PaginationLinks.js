import Link from "next/link";

const PaginationLinks = ({ curPage, itemsPerPage, totalItems, url }) => {
  const arrowStyles =
    "bg-black border-none px-5 py-2 text-xl text-white rounded mx-2 row-span-full";

  itemsPerPage = parseInt(itemsPerPage);
  totalItems = parseInt(totalItems);
  curPage = parseInt(curPage);

  let backLink = <></>;
  let forwardLink = <></>;

  if (
    Number.isInteger(itemsPerPage) &&
    Number.isInteger(curPage) &&
    Number.isInteger(totalItems) &&
    itemsPerPage > 0 &&
    totalItems > 0 &&
    curPage > 0
  ) {
    const firstPage = 1;
    const lastPage = Math.ceil(totalItems / itemsPerPage);
    if (curPage > firstPage) {
      // show the back link
      backLink = (
        <Link href={`${url}/?limit=${itemsPerPage}&page=${curPage - 1}`}>
          <a className={arrowStyles + " justify-self-start"}>&lt;</a>
        </Link>
      );
    }
    if (curPage < lastPage) {
      // show the forward link
      forwardLink = (
        <Link href={`${url}/?limit=${itemsPerPage}&page=${curPage + 1}`}>
          <a className={arrowStyles + " justify-self-end"}>&gt;</a>
        </Link>
      );
    }
  }
  return (
    <div className="grid mt-5">
      {backLink}
      {forwardLink}
    </div>
  );
};

export default PaginationLinks;
