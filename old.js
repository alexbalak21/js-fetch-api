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
