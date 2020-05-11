import React from "react";
import { Link } from "react-router-dom";
import "../../css/LeagueLinks.css";

const LeagueLinks = ({ match }) => {
  return (
    <div className="container text-center mb-5">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to={`${match.url}/vcs`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">VCS</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to={`${match.url}/ldl`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">LDL</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to={`${match.url}/lck`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">LCK</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to={`${match.url}/lpl`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">LPL</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to={`${match.url}/lms`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">LMS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeagueLinks;