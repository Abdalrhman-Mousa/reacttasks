import { people } from './data.js';


//Mapping

// const Students = [
//     'Ahmad Alawneh : IT Background',
//     'Omar Alomaari: IT Background',
//     'Ibrahim Taqialdeen: Engineering',
//     'Laith Samameh: Engineering',
//     'Osama Dasouky: Engineering'
//   ];

//   export default function List() {
//     const listItems = Students.map(Student =>
//       <li>{Student}</li>
//     );
//     return <ul>{listItems}</ul>;
//   }

//   ==============================================

//Fillter & Mapping

 function List() {
  const ITs = people.filter(person =>
    person.profession === 'Engineering'
  );
  const listItems = ITs.map(person =>
    <li>
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

// =========================================================


//  function List() {
//     const numAscending = [...people].sort((a, b) => a.id - b.id);
//   console.log(numAscending);

// //   return <ul>{listItems}</ul>;
// }






export default List;
