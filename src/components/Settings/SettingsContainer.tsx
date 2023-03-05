import {RootState} from "../../Store/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Settings from "./Settings";
import {setMaxValueAC, setStartValueAC} from "../../Store/counterReducer";


let mapStateToProps = (state: RootState) => {
    return {
        maxValue: state.counter.maxValue,
        startValue: state.counter.startValue
    }
}
let mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        setStartValue: (startValue: number) => {
            dispatch(setStartValueAC(startValue))},
        setMaxValue: (maxValue: number) => {
            dispatch(setMaxValueAC(maxValue))}
        }
    }


export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)