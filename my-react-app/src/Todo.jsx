// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <li>task{task}</li>
//     </div>
//   );
// }

// conditional rendering option 1

// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }

// conditional rendering option 2

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work on: {task}</li>;
// }

// conditional rendering option 3: ternary Operation

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work one"} :{task}
//     </li>
//   );
// }

// conditional rendering option 4: &&

// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <li>task{isDone && ":Done"}</li>
//     </div>
//   );
// }

// conditional rendering option 5: ||

// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <li>task{isDone || ":Do It"}</li>
//     </div>
//   );
// }

// conditional rendering option 6:

export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>task{task}</li>;
  } else {
    listItem = <li>work on{task}</li>;
  }
  return listItem;
}
