import React from 'react';

const Card = (props) => {
  return (
    // This will not work because it needs to be wrapped inside 'div'
    // <h1>RoboFriends</h1>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      {/* using template literals syntax ${props.id} */}
      <img src={`https://robohash.org/${props.id}?200x200`} alt="robots"/>
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;