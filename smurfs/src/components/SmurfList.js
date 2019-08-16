import React from "react";
import { connect } from "react-redux";

import { getData } from "../store/actions";

import { Smurf } from "./Smurf";

export const SmurfList = props => {
  console.log("SmurfList Props", props);

  const fetchSmurfs = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      <h2>Cute Smurfs!</h2>
        { props.isLoading && <p>Fetching your smurfs!</p> }
      <div>
        { props.smurfs.map(smurf => (
            <Smurf key={ smurf.id } smurf={ smurf } />
          ))}
      </div>
      { props.error && <p className="error">{ props.error }</p> }
      <button onClick={ fetchSmurfs }>Get Smurfs!</button>
    </div>
  );
};

const mapPropsToData = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(
  mapPropsToData,
  { getData }
)(SmurfList);