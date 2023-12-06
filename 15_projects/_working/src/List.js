import React from 'react';

const List = ({ people }) => {
  console.log(people);
  return (
    <>
      {
        people.map((singlePerson) => {
          const { id, name, age, image } = singlePerson;
          return (
            <article>

            </article>
          )
        })
      }
    </>
  )
}

export default List;
