import React, {Component} from 'react';
import Banner from './banner.js';

export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Banner />
            </div>
        );
    }

}

