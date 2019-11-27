import React from "react";
import { Switch, Route } from "react-router-dom";

// import CompanyCard from "./components/CompanyCard/index";
import CompanyList from "./components/CompanyList/index";
import Visitation from "./components/Visitation/index";
import Company from "./components/Company/index";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={CompanyList} />
      <Route path="/new-company" component={Company} />
      <Route path="/new-visitation" component={Visitation} />
    </Switch>
  );
}

export default Routes;
