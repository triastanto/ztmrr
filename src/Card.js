import React from 'react';

// instead of using 'props' only and accessing by 'props.*'
// const Card = (props) => {
// do destructuring in function parameter
const Card = ({ id, name, email }) => {
  return (
    // This will not work because it needs to be wrapped inside 'div'
    // <h1>RoboFriends</h1>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      {/* using template literals syntax ${id} */}
      <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;