function DomEvents() {

  const form            = document.getElementById('form');
  const tasksContainer  = document.getElementById('tasksContainer');
  const todoTaskInput   = document.getElementById('task');
  const todoDateInput   = document.getElementById('date');
  let individualTasks   = '';


  function getFormElement(){
    return form;
  }

  // function fetchTodoTasks() {
  //   fetch('http://localhost:3000/tasks')
  //
  //     .then(res => res.json())
  //     .then(res => {
  //       res.forEach(elem => {
  //         individualTasks +=
  //           `<div class="todoStyle">
  //             <p>${elem.date}: ${elem.todo}</p>
  //           </div>
  //           `;
  //         tasksContainer.innerHTML = individualTasks;
  //         console.log(individualTasks);
  //       });
  //     })
  //     .catch(
  //       error => console.error(error)
  //     );
  // }



  function submitTodoTask() {
    console.log('The form was submitted');

    const data = {
      // 'todo': 'check it out',
      // 'date': 'Mike'
      todo: todoTaskInput.value,
      date: todoDateInput.value
    };

    const url = 'http://localhost:3000/tasks';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then((response) => response.json);
  }

  return {
    getFormElement,
    submitTodoTask
  };

}

  // create({
  //   // title: "check it out",
  //   // author: "Mike"
  //     todo: todoTaskInput.value,
  //     date: todoDateInput.value
  // })

    // const url = 'http://localhost:3000/tasks';
    // const data = {
    //   'todo': todoTaskInput.value,
    //   'date': todoDateInput.value
    // };
    //
    // console.log(data);
    //
    // const params = {
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    //   method: 'POST'
    // };
    //
    // return fetch(url, params)
    //   .then((response) => response.json)
    // }
      // .then(function(data) {
      //   document.getElementById('message').innerHTML = data.encoded;
      // }).catch(function(error) {
      //   document.getElementById('message').innerHTML = error.message;
      // });
