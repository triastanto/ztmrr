import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // using variables method
  // const cards = robots.map((user, i) => {
  //   return (<Card key={i}
  //     id={robots[i].id}
  //     name={robots[i].name}
  //     email={robots[i].email}
  //   />);
  // });
  // return <div> {cards} </div>;

  // using parameter directly
  return (
    <div>
      {
        robots.map((user, i) => {
          return (<Card key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />);
        })
      }
    </div>
  );
}

export default CardList;