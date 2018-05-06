const people = [
  { name: 'Ben', year: 1981},
  { name: 'Melissa', year: 1982},
  { name: 'Kevin', year: 1986},
  { name: 'Samantha', year: 1993},
  { name: 'Jared', year: 1996},
];

const comments = [
  { text: 'Love this', id: 3234646},
  { text: 'Super good', id: 123},
  { text: 'You are the best', id: 1234},
  { text: 'Pizza is my fav food', id: 23564},
  { text: 'Nice', id: 1},
];

// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - person.year >= 21;
// });

// console.log({isAdult});


// const comment = comments.find(commentt => commentt.id === 1234);
// console.log(comment);


const index = comments.findIndex(comment => comment.id === 123);

console.log(index);

const newComments = [
  ...comments.splice(0, index),
  ...comments.splice(index + 1)
];

console.log(newComments);
