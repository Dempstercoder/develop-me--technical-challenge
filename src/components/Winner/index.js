import { connect } from "react-redux";
import Winner from "./Winner";
// import { reset } from "../../data/actions";

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // handleReset: (data) => dispatch(reset(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Winner);