import {types} from "../types/types";

export const setError = (error) => {
    return {
        type: types.UI_SET_ERROR,
        payload: error
    }
}

export const unSetError = () => {
    return {
        type: types.UI_UNSET_ERROR
    }
}

export const uiStartLoading = () => {
    return {
        type: types.UI_START_LOADING
    }
}

export const uiFinishLoading = () => {
    return {
        type: types.UI_FINISH_LOADING
    }
}