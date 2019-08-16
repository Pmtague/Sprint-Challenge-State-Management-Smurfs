import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../store/actions";

import { Smurf } from "./Smurf";

export const SmurfList = props => {
  console.log("SmurfList Props", props);

  return (
    <div>
        <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="ThreeDots" color="#aa71b5" height="15" width="100" />
        ) : (
          "Load Smurf List"
        )}
        </button>
        {props.smurfs &&
            props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
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