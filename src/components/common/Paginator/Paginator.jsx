import { useState } from "react";
import s from "../Paginator/Paginator.module.css";
import React from "react";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginationP}>
      <div className={s.paginationB}>
        {portionNumber > 1 && (
          <button
            onClick={() => setPortionNumber(portionNumber - 1)}
            aria-label="Previous portion"
          >
            Previously
          </button>
        )}
      </div>
      <div className={s.paginationP}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                key={p.id}
                className={currentPage === p && s.selectedPage}
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            aria-label="Next portion"
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default Paginator;
