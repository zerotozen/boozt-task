import React from "react";

import OverviewCollection from "../../components/overview-collection/overview-collection.components";

import "./home-page.styles.scss";

export function HomePage() {
  return (
    <div className="homePage__container">
      <OverviewCollection />
    </div>
  );
}

