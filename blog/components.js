import React from 'react';

export const CaptionedImage = ({src, caption, alt, children}) => (
    <div align="center">
        <img src={src} alt={alt || children}></img>
        <div><i>{children}</i></div>
    </div>
)