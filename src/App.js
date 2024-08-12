// App.js

import React from 'react';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container">
            <div className="card text-center mt-5">
                <div className="card-header bg-primary text-white">
                    <h1 className="display-4">Investigating Blackwood Asylum</h1>
                </div>
                <div className="card-body">
                    <Game />
                </div>
            </div>
        </div>
    );
}

export default App;
