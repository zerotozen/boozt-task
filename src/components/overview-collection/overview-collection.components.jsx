import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import {
  sortProductsByHigherPrice,
  sortProductsByLowerPrice,
} from "../../redux/collection/collection.actions";

import { fetchCollectionsStartAsync } from "../../redux/collection/collection.actions";

import { CollectionCard } from "../collection-card/collection-card.component";
import Pagination from "../pagination/pagination.component";
import { Spinner } from "../spinner/spinner.component";

import "./overview-collection.styles.scss";

function OverviewCollection({
  collection,
  sortByLowerPrice,
  sortByHigherPrice,
  fetchCollectionsStartAsync,
}) {
  const [sortedOption, setSortedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  //total number of products
  let numOfRecords = collection?.length;
  let maxProductsPerPage = 20;
  const totalPages = Math.ceil(numOfRecords / maxProductsPerPage);

  const onPageChanged = (page) => {
    if (page !== 0 && page !== 97) setCurrentPage(page);
  };

  const currentData = collection?.slice(
    (currentPage - 1) * maxProductsPerPage,
    (currentPage - 1) * maxProductsPerPage + maxProductsPerPage
  );

  const sortByOption = (sortOption) => {
    if (sortOption === "sortByLowerPrice") {
      sortByLowerPrice();
    }
    if (sortOption === "sortByHigherPrice") {
      sortByHigherPrice();
    }
  };

  //This setTimeout simulate a API delay of 1s
  useEffect(() => {
    setTimeout(() => {
      fetchCollectionsStartAsync();
    }, 1000);
  }, []);

  if (collection) {
    return (
      <div className="overviewCollection__container">
        <select
          className="overviewCollection__selector"
          onChange={(e) => {
            const selectedOption = e.target.value;
            setSortedOption(selectedOption);
            sortByOption(selectedOption);
          }}
        >
          <option value="">Sort Collections</option>
          <option value="sortByLowerPrice">Price: Lower first</option>
          <option value="sortByHigherPrice">Price: Higher first</option>
        </select>
        <div className="overviewCollection__container">
          {currentData?.map((item, idx) => {
            const {
              id,
              product_name,
              brand_name,
              filename,
              actual_price,
              ...otherProps
            } = item;
            return (
              <div className="" key={id}>
                <CollectionCard
                  name={product_name}
                  brand={brand_name}
                  image={filename}
                  price={actual_price}
                  otherProps={otherProps}
                />
              </div>
            );
          })}
        </div>
        <Pagination
          onPageChanged={onPageChanged}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    );
  }
  return <Spinner />;
}

const mapStateToProps = (state) => ({
  collection: state.collection.collectionData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  sortByLowerPrice: () => {
    dispatch(sortProductsByLowerPrice());
  },
  sortByHigherPrice: () => {
    dispatch(sortProductsByHigherPrice());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OverviewCollection);
