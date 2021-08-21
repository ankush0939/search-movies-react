import React from 'react'

const Footer = ( {name} ) => {
    return (
        <div>
            <p>&copy;Copyright <span style={ {color: 'orange'} }>{ name }</span></p>
            <p>This webpage is a part of "React Learning Series"</p>
        </div>
    )
}

export default Footer;