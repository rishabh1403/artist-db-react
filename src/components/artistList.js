import React from 'react';
import {Link } from 'react-router-dom';

let list = ({allArtist}) => {
    console.log(allArtist);
    if(allArtist){
        return allArtist.map((item)=>{
            const styles = {
                background : `url(/images/covers/${item.cover}.jpg) no-repeat `
            }
            return (
                <Link key={item.id} to={`/artist/${item.id}`} className="artist_item"
                    style={styles}
                >
                <div>{item.name}</div>
                </Link>
            )
        });
    }
    
};

const ArtistList = props => {
        return (
            <div className="artists_list">
                <h4>Browse Artists </h4>
                {list(props)}
            </div>
        );
};

export default ArtistList;