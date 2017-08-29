import React, {Component} from 'react';
import Banner from './banner.js';
import ArtistList from './artistList.js';
const URL_ARTISTS = 'http://localhost:3004/artists';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            artists : ''
        }
    }
    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                artists : json
            });
        })
    }

    render(){
        return (
            <div>
                <Banner />
                <ArtistList />
            </div>
        );
    }

}

