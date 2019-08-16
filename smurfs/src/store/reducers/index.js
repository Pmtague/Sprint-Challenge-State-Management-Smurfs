import { 
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAIL 
}   from "../actions";

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ""
  };

  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_DATA_START:
            return {
            ...state,
            isLoading: true,
            error: ""
            };
        case FETCH_SMURF_DATA_SUCCESS:
            return {
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: ""
            };
        case FETCH_SMURF_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            };
         default:
            return state;
    }
  };