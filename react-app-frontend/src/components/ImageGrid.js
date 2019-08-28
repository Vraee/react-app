import React from 'react';

import '../css/image.css';

const ImageGrid = ({ images }) => {
    let rows = [];

    for (let i = 0; i < images.length; i += 5) {
        rows.push(images.slice(i, i + 5));
    }

    return (
        <div className='row'>
            { rows.map((r, i) => <ImageColumn images={ r } rowKey={ `imageRow${ i }` } key={ `imageRow${ i }` } />) }
        </div>
    );
};

const ImageColumn = ({ images, rowKey }) => {
    return (
        <div className='column'>
            { images.map((img, ind) => <Image imageSource = { img.path_thumbnail } key={ `${ rowKey }column${ ind }` } />) }
        </div>
    )
};
const Image = ({ imageSource }) => {
    return (
        <a href={ imageSource } target='_blank' rel='noopener noreferrer'>
            <img src={ imageSource } style={ {width:'20%'} } alt='' />
        </a>
    );
};

export default ImageGrid;