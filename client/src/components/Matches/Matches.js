import React, { Component } from "react";
import Match from "../Match/Match";
import axios from "axios";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
  }

  componentDidMount() {
    this.getMatches(this.props.date);
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.getMatches(this.props.date);
    }
  }

  getMatches = date => {
    let game = this.props.match.path.includes("lol") ? "lol" : "ow";
    // getting matches by date
    axios
      .get(`/api/${game}/matches/${this.props.id}/${date}`)
      .then(matches => {
        for (const match of matches.data) {
          // store matches to generate cards
          this.setState({
            matches: this.state.matches.concat([match])
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        {/* passing matches to Match component */}
        {this.state.matches.map(match => (
          <div className="col-11 col-sm-9 col-md-6 col-lg-4" key={match.id}>
            <Match matchId={match.id} {...this.props} />
          </div>
        ))}
      </div>
    );
  }
}

export default Matches;