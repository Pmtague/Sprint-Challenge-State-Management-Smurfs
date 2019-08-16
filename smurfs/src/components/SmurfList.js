import React from "react";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";

import { getData } from "../store/actions";

import { Smurf } from "./Smurf";

const SmurfList = props => {
  console.log("SmurfList Props", props);

  return (
    <div>
        <button onClick={props.getData}>
            Load smurfs
        {props.isLoading ? (
        //   <Loader type="ThreeDots" color="#aa71b5" height="15" width="100" />
        <div>Loading</div>
        ) : (
          "Load Smurfs!"
        )}
        </button>
        {props.smurfs &&
            props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);