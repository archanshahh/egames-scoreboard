import React from "react";
import { Route } from "react-router-dom";
import Series from "../Series/Series.js";
import LeagueHome from "../LeagueHome/LeagueHome.js";
import LeagueLinks from "../LeagueLinks/LeagueLinks.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const LeagueRoutes = ({ match }) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Route
        exact
        path={match.path}
        render={props => {
          return (
            <div>
              <LeagueHome {...props} />
              <LeagueLinks {...props} />
            </div>
          );
        }}
      />

      <Route
        path={`${match.path}/vcs`}
        render={props => {
          return <Series seriesId="2665" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/ldl`}
        render={props => {
          return <Series seriesId="2602" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/lck`}
        render={props => {
          return <Series seriesId="2657" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/lpl`}
        render={props => {
          return <Series seriesId="2365" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/lms`}
        render={props => {
          return <Series seriesId="1783" {...props} />;
        }}
      />
    </ReactCSSTransitionGroup>
  );
};

export default LeagueRoutes;