document.addEventListener('DOMContentLoaded', function() {



  const results = document.getElementById('results');
  let node = '';


  fetch('http://localhost:3000/tasks')

    .then(res => res.json())
    .then(res => {
      console.log(res);


      res.forEach(elem => {

        node +=
          `<div>
            <p>${elem.todo}</p>
            <p>${elem.date}</p>
            <p>${elem.urgency}</p>
          </div>
          `;

        results.innerHTML = node;
        console.log(node);
      });


    })
    .catch(
      error => console.error(error)
    );

});
