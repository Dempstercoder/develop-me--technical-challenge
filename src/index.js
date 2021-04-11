import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './data/store';
import { Provider } from "react-redux";

// let state = store.getState();


ReactDOM.render(
  <React.StrictMode>
    <Provider store= { store }>
            <App/>
        </Provider>
      </React.StrictMode>,
  document.getElementById('root')
  );


// deleted -> player1 = {state.player1}, player2 = {state.player2} & serving = { state.serving } because state is now being checked by the mapstatetoprops function in the wrapper player 1 and player 2 files in player folder







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import store from './data/store';
// import { Provider } from "react-redux";


// let state = store.getState();

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store= { store }>
        
//             <App 
//                   handleIncrementPlayer1={ () => 
//                     store.dispatch({ type: "INCREMENTPLAYER1" })} 
                  
                  
//                   handleIncrementPlayer2={ () => 
//                   store.dispatch({ type: "INCREMENTPLAYER2" })}

//              />
//         </Provider>
//       </React.StrictMode>,
//   document.getElementById('root')
//   );