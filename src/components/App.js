import React from 'react';
import './App.css';
import TreeContainer from '../containers/TreeContainer'
 const App = () => {
  return (
    <div className="App">
      <div className="tree-container">
        <div className="tree-holder"><TreeContainer /></div>
        </div>
      <div className="welcome-message-container">
        <div className="welcome-text">
          <div className="wl-text">Welcome to the TREE App</div>
          <div className="wl-instruction">You can add, edit and delete nodes</div>
          </div>
      </div>
    </div>
  );
}

export default App;
