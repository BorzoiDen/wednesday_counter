import {Dispatch} from "redux";
import {RootState} from "../../Store/redux-store";
import {resetCurrentValueAC, setCurrentValueAC} from "../../Store/counterReducer";
import Interface from "./Interface";
import {connect} from "react-redux";


let mapStateToProps = (state: RootState) => {
    return {
        currentValue: state.counter.currentValue,
        maxValue: state.counter.maxValue,
        startValue: state.counter.startValue
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increase: (currentValue: number) => {
            dispatch(setCurrentValueAC(currentValue))},
        onResetButtonClick: () => {
            dispatch(resetCurrentValueAC())
        }
    }
}

export const InterfaceContainer = connect(mapStateToProps, mapDispatchToProps)(Interface)