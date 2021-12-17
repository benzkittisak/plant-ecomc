import PLANTS_DATA from "./plants.data";

const INITIAL_STATE = {
    plants : PLANTS_DATA
}

const plantReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default plantReducer;