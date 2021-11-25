import {CHANGE_SECONDS, CHANGE_TIME} from "./samples/sample7.separated/timerActionTypes";

export const changeSeconds = (sec) => ({type: CHANGE_SECONDS, value: sec});

export const restart = () => ({type: CHANGE_TIME, value: 15});

const setSec = (sec) => {
    if (sec > 15){
        return 15;
    } else if (sec < 0){
         return 0;
    } else {
        return sec;
    }
}

export const timerReducer = (state = {seconds: 15}, action) => {
    switch (action.type){
        case CHANGE_SECONDS:
            return {seconds: setSec(state.seconds + action.value)};
        case CHANGE_TIME:
            return {seconds: action.value};
        default:
            return state;
    }
};
