import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import DatesNav from "../DatesNav/DatesNav";
// import "./Series.css";
import axios from "axios";
import moment from "moment";

class Series extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournaments: [],
      dropdownOpen: false,
      name: "",
      logo: "",
      seeason: ""
    };
  }

  componentDidMount() {
    this.getSeries();
  }

  getSeries = () => {
    let game = this.props.match.path.includes("lol") ? "lol" : "ow";
    // get series by id and then store all tournaments, then generate links/routes based on tournament
    axios
      .get(`http://localhost:5000/api/${game}/series/${this.props.seriesId}`)
      .then(series => {
        console.log(series.data[0]);
        this.setState({
          name: series.data[0].league.name,
          logo: series.data[0].league.image_url,
          season: series.data[0].full_name,
          tournaments: series.data[0].tournaments,
          startDate: moment(series.data[0].begin_at.slice(0, 10)).format(
            "MM/DD/YYYY"
          ),
          endDate: series.data[0].end_at
            ? moment(series.data[0].end_at.slice(0, 10)).format("MM/DD/YYYY")
            : ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <div>
        <Route
          exact
          path={`${this.props.match.path}`}
          render={() => {
            return (
              <div className="container mt-3">
                <div className="row">
                  <div className="col" />
                  <div className="col-12 col-md-10 col-lg-8">
                    <div className="card border-0">
                      <div className="card-header">
                        <div className="media">
                          <img
                            src={this.state.logo}
                            alt=""
                            className="mr-3"
                            width="100"
                          />
                          <div className="media-body align-self-center">
                            <h4>{this.state.name}</h4>
                            <div className="text-muted">
                              {this.state.season}
                            </div>
                            <div className="text-muted">
                              {this.state.startDate} - {this.state.endDate}
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="list-group list-group-flush">
                        {this.state.tournaments.map(tournament => (
                          <Link
                            key={tournament.id}
                            to={`${
                              this.props.match.url
                            }/${tournament.name.toLowerCase()}`}
                            className="text-capitalize lead list-group-item list-group-item-action"
                          >
                            {tournament.name}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col" />
                </div>
              </div>
            );
          }}
        />

        {this.state.tournaments.map(tournament => (
          <Route
            key={tournament.id}
            path={`${this.props.match.path}/${tournament.name.toLowerCase()}`}
            render={props => {
              return <DatesNav tournamentId={tournament.id} {...props} />;
            }}
          />
        ))}
      </div>
    );
  }
}

export default Series;