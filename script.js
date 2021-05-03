document.getElementById('getText').addEventListener('click', getText)

usersUrl = 'https://jsonplaceholder.typicode.com/users'
postUrl = 'https://jsonplaceholder.typicode.com/posts'
photosUrl = 'https://jsonplaceholder.typicode.com/photos'

function linkTest() {
  document.getElementById('output').innerHTML = 'LINK WORKS'
}
// FETCH FROM FILE
async function getText() {
  let res = await fetch('text.txt')
  let data = await res.text()
  document.getElementById('output').innerHTML = data
}

// FETCH FORM API
async function getUsers() {
  let res = await fetch(usersUrl)
  let data = await res.json()
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
}

// FETCH FROM API ANOHER EXEMPLE
async function getPosts() {
  let res = await fetch(postUrl)
  let data = await res.json()
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

async function dispImg() {
  let result = await fetch(photosUrl)
  let list = await result.json()
  let data = list.slice(0, 60)
  output = ''
  data.forEach((post) => {
    let title = post.title
    let thumb = post.thumbnailUrl
    let imgUrl = post.url
    output += ` <a href="${imgUrl}">
    <img src="${thumb}" alt="${title}">
    </a>
    `
  })
  document.getElementById('output').innerHTML = output
}

//DISPLAY FORM FOR POST
function dispForm() {
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
}

// ADD POST WHEN FORM IS SUBMITED
async function addPost(event) {
  event.preventDefault()
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
  let data = await res.json()
  let output = `<br>
  <div>
  <h3>${data.title}</h3>
  <p>${data.body}</p>
  </div>
  `
  console.log(data)
  document.getElementById('output').innerHTML += output
  document.getElementById('addPost').addEventListener('submit', addPost)
}
