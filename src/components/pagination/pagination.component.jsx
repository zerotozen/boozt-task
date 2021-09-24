import React, { useState } from "react";
import { connect } from "react-redux";

import "./pagination.styles.scss";

function Pagination({ onPageChanged, currentPage, totalPages }) {
  const creoArray = [...Array(totalPages)?.keys()];

  return (
    <div className="pagination__container">
      <button
        className="pagination__button"
        onClick={() => onPageChanged(Number(currentPage) - 1)}
      >
        PREVIOUS
      </button>

      <select
        className="pagination__selector"
        onChange={(e) => {
          const selectedOption = e.target.value;
          onPageChanged(selectedOption);
        }}
        value={currentPage}
      >
        {creoArray
          ?.filter((index) => index > 0)
          .map((item, idx) => {
            return (
              <option
                className="pagination__option"
                key={idx}
                defaultValue={item}
              >
                {item}
              </option>
            );
          })}
      </select>
      <button
        className="pagination__button"
        onClick={() => onPageChanged(Number(currentPage) + 1)}
      >
        NEXT
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  collection: state.collection.collectionData,
});

export default connect(mapStateToProps)(Pagination);
