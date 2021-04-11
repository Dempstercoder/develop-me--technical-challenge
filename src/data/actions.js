
export const addPlayer = ({ addPlayersArray }) => {

    return {
        type: "ADD_PLAYERS",
        players: addPlayersArray,
    };
};

export const getPairs = ({ addPlayersArray }) => {

    return {
        type: "GET_PAIRS",
    };
};

