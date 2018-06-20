import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER: {
            // Ensure we return a new instance of state
            return [ action.payload.data ].concat(state);
        }
    }

    return state;
}