import React from 'react';
import Poll from 'react-polls';

import 'react-leaf-polls/dist/index.css';
export default function PollComponent(props) {
  const themeData = {
    textColor: 'black',
    mainColor: '#00B87B',
    backgroundColor: '#00B87B',
  }

  return(
    <div
      style={{
        margin: '5px',
        width: '500px',
        height: '500px'
      }}
    >
      <Poll
        question={props.data.question}
        answers={props.data.results}
        onVote={props.onVote}
        noStorage={true}
      />
    </div>
  )
}