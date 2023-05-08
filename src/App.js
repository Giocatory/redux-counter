import {connect} from'react-redux';
import Counter from "./Counter";

// Сопоставление состояния Redux со свойствами компонента
function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

// Действие
let increaseAction = {type: "increase"}
let decreaseAction = {type: "decrease"}

// Сопоставление действий Redux со свойствами компонента
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: () => dispatch(increaseAction),
        decreaseCount: () => dispatch(decreaseAction)
    };
}

// HOC-компонент
let contentedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default contentedComponent;