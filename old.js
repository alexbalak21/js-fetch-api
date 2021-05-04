function getTextOLD() {
  fetch('text.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data
    })
}

function getUsersold() {
  fetch(usersUrl)
    .then((res) => res.json())
    .then((data) => {
      let output = `
      <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>Email</th>
      </tr>
        `
      data.forEach((user) => {
        output += `
          <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
        </tr>
        `
      })
      output += '</table>'
      document.getElementById('output').innerHTML = output
    })
}

function getPostsOld() {
  fetch(postUrl)
    .then((res) => res.json())
    .then((data) => {
      let output = ''
      data.forEach((post) => {
        output += `
          <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          </div>
          `
      })
      document.getElementById('output').innerHTML = output
    })
}

//DISPLAY FORM FOR POST
function dispFormOld() {
  let form = `
  <form id="addPost">
        <input type="text" id="title" />
        <br /><br />
        <textarea id="body" cols="30" rows="10"></textarea>
        <br />
        <input type="submit" name="Submit" />
  </form>
      `
  document.getElementById('output').innerHTML = form
  document.getElementById('addPost').addEventListener('submit', addPost)
  // ADD POST WHEN FORM IS SUBMITED
  function addPostOld(event) {
    event.preventDefault()
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, body: body }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
}
