import React from 'react';

const Tag = (props) => {
    const { title = '', color = '', count = 0 } = props;

    return(
        <span className={`tag${count?' count':''}`}>{title}</span>
    )
}

export default Tag;