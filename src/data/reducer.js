import initial from './initial';



const addPlayers = (state, { players }) => ({
    ...state,
    players: players,
    added: true
})

const start = (state) => {
    return {
        ...state,
        start: true,
    };
};

// shuffle an array
const shuffle = (players) => {
    // Fisher-Yates algorithm 
    for (let i = players.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
    return players;
};

// Retrieving pairs
const getPairs = players => {
    shuffle( players );
    var output = [];
    for( var i = 0, n = players.length;  i < n;  i += 2 ) {
        output.push({ player1: players[i], player2: players[i+1] });
    }
    return output;
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYERS": return start(addPlayers(state, action));
        case "GET_PAIRS": return getPairs(state, action);
        default: return state;
    }
};

export default reducer;