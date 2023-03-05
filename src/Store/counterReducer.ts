const CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE';
const CHANGE_START_VALUE = 'CHANGE-START-VALUE';
const CHANGE_CURRENT_VALUE = 'CHANGE-CURRENT-VALUE';
const RESET_CURRENT_VALUE = 'RESET-CURRENT-VALUE';


export const initialState =  {
        currentValue: 0,
        startValue: 0,
        maxValue: 5,
    }

    export type SettingsStateType = {
        currentValue:number,
        startValue: number,
        maxValue: number
    }


const counterReducer = (state:SettingsStateType = initialState,
                        action: setStartValueAT | setMaxValueAT |
                            setCurrentValueAT | resetCurrentValueAT): SettingsStateType => {
    switch (action.type) {
        case CHANGE_CURRENT_VALUE:
            return {...state, currentValue: action.value}

        case RESET_CURRENT_VALUE:
            return {...state, currentValue: state.startValue}

        case CHANGE_MAX_VALUE:
            return {...state, maxValue: action.maxValue}

        case CHANGE_START_VALUE:
            return {...state, currentValue: action.startValue, startValue: action.startValue}

        default: return state;
    }
}

export const setCurrentValueAC = (value: number) => ({type: CHANGE_CURRENT_VALUE, value} as const)
export type  setCurrentValueAT = ReturnType <typeof setCurrentValueAC>

export const resetCurrentValueAC = () => ({type: RESET_CURRENT_VALUE} as const)
export type  resetCurrentValueAT = ReturnType <typeof resetCurrentValueAC>

export const setStartValueAC = (startValue : number) => ({type: CHANGE_START_VALUE, startValue} as const)
export type  setStartValueAT = ReturnType <typeof setStartValueAC>

export const setMaxValueAC = (maxValue : number) => ({type: CHANGE_MAX_VALUE, maxValue} as const)
export type  setMaxValueAT = ReturnType <typeof setMaxValueAC>

export default counterReducer