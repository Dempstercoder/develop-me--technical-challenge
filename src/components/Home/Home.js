import React, { Component } from "react";
import Games from 'react';
import home from './home.css';
import tronCouple from './tron-couple-small.png'
import tronTitleWhite from './tron-text-wh-small.png'


class Home extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            players: [], 
            name: '',
            groups: [],
            pairs: [],
            winner: false,
    };
   

this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
this.handleGameOn = this.handleGameOn.bind(this);
// this.handleNamesReset = this.handleNamesReset(this);
this.handleWinner = this.handleWinner.bind(this);
}

// what the user has typed in
handleChange(e) {
    this.setState({ 
        name: e.currentTarget.value
    }); 
} 


handleClick(e) {
    e.preventDefault();
let { name, players } = this.state;

    // an empty string cannot be passed in
    if (name !== "")  {
        this.setState({
            players: [...players, name],
            name: ""
        });
    } else {
        this.setState({
            ...this.state,
        });
    }
}


handleGameOn(e){
    e.preventDefault();
    let { players, groups } = this.state;
    let { handleAddPlayers, handleGetPairs } = this.props;
  
    if (players.length >= 4 && Number.isInteger(Math.log2(players.length))) {
        // handleAddPlayers({...this.state});
        // handleGetPairs({...this.state}); 
        this.setState({
            groups:[...groups, ...players.slice(groups, groups + 2)],
        })
    } else {
        this.setState({
            error: true,
        });
    }}



// handleNamesReset(){
//     this.setState({
//         ...this.state,
//         players: [],
//     })
// }

handleWinner(e){
    e.preventDefault();
    let { winner } = this.state;

    // if(winner) {
        this.setState({
            winner: true,
        })
    // } else {
    //     this.setState({
    //         winner: false,
    //     })
    // }

}
    
    render(){
     //deconstruct any props here.
     let { name, players, error, groups, player, winner, clicked } = this.state;

     let ErrorMsgNoPlayers = "Enter a minimum of 4 players and to the power of 2";
    
     let winnerMsg = "winner!";

        return (
            <>
                <body>
                    <header>
                        <img src={tronTitleWhite} alt="title tron pong" className="tron-pong-title-wh"/>
                    </header>
                    <div class="circle"></div>
                    <img src={tronCouple} alt="title tron pong" className="tron-pong-couple"/>
                    <div className="card text-white home-container">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <h5 className="welcome-message">Welcome! Add your players and play a game of Tron Pong!</h5>
                            <p className="rule first-rule">First rule: Minimum of 4 players</p>
                            <p className="rule second-rule">Second rule: Only one pair to games, the rest will be rectified!</p>
                            <form className="form">
                                <input 
                                    onChange={ this.handleChange } 
                                    className="type-in-box" 
                                    value={ name } />
                            </form>
                            <button 
                                    type="button" 
                                    className="btn btn-dark add" 
                                    onClick={ this.handleClick }
                                    >Add Players
                            </button>
                        </div>
                    </div>

                    <ul className= "added-list"  >
                        {this.state.players.map((player, index) => (
                            <li className="added-group-index" 
                                key={ index }>{ player }</li>
                        ))
                        }
                    </ul>
                    {/* <div className="">
                        <button 
                        type="button" 
                        className="btn btn-dark" 
                        onClick={ this.handleNamesReset }
                        >Delete Names</button>
                    </div> */}
                    
                    <p className="error-msg">{error ? ErrorMsgNoPlayers : null}</p>
                    <button 
                        type="submit" 
                        className="btn btn-danger game-on" 
                        onClick={ this.handleGameOn }
                        >Game On!
                    </button>

                    <ul className= "list-pair"  >
                        {this.state.groups.map((player, index) => (
                            
                            <li className="added-group-index winner" 
                                key={ index }><button 
                                                    type="submit" 
                                                    className="btn btn-dark games-pair-btn" 
                                                    onClick={ this.handleWinner }
                                >{ player }</button>
                            </li>
                        ))
                        }
                        {/* { this.getPairs() } */}
                    </ul>
                    <p className="winner-message" id="glow">{winner ? winnerMsg : null}</p>
                    {/* {winner ?  winner : null} */}
                </body>
            </>
        )
    }
}

// !winner ? winner : null
// if it is not winner show winner else nothing happens

// winner ? if it is winner show the winner

export default Home;

