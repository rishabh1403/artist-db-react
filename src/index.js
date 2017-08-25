import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Artist from './components/artist';
class App extends Component{

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/artist/:artistid" component={Artist} />
                </div>
            </BrowserRouter>
        );
    }

}

render(<App />,document.querySelector('#root'));