import { connect } from "react-redux";
import Home from "./Home";
import { addPlayer, getPairs } from "../../data/actions";

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
       handleAddPlayers: (players) => dispatch(addPlayer(players)),
       handleGetPairs: (players) => dispatch(getPairs(players))
    }
}

export default connect(mapStateToProps)(Home);