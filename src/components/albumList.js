import React from 'react';

let showList = ({albumList}) => {
    if(albumList){
        return albumList.map((item,i)=>{
            return (
                <img key={i} src= {`/images/albums/${item.cover}.jpg`}/>
            )
        });
    }
}

let AlbumList = (props) => {
    return (
        <div className="albums_list">
            {showList(props)}
        </div>
    )
};

export default AlbumList;