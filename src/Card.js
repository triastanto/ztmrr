import React from 'react';

const Card = () => {
  return (
    // This will not work because it needs to be wrapped inside 'div'
    // <h1>RoboFriends</h1>
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src="https://robohash.org/test?200x200" alt="robots"/>
      <div>
        <h2>Jane Doe</h2>
        <p>jane.doe.gmail.com</p>
      </div>
    </div>
  );
}

export default Card;