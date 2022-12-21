import React from 'react';

export const Paper = (props) => (
    <>
      <h2><a href={props.link}>{props.title}</a></h2>
      {/* <p><i>Setting:</i>{props.setting}</p>
      <p><i>Main contributions:</i>{props.contrib}</p>
      <p><i>Data:</i>{props.data}</p>
      <p><i>Strengths:</i>{props.strengths}</p>
      <p><i>Limitations:</i>{props.limits}</p> */}
      {props.children}
    </>
)