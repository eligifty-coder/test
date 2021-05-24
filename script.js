const sectionButton = document.querySelector("header .nav li button")
const section = document.querySelector("section")
const formSubmit = document.querySelector("form.input")
const formButton = document.querySelector("form.input button")
const errorCancel = document.querySelector(".error h2")
const errorText = document.querySelector(".error p")
const errorDiv = document.querySelector(".error")
const displayData = document.querySelector('.displayContent')
const userVal = document.querySelector('.input input')


const url = 'https://api.github.com/graphql'

// error remove
const cancelError = () => {
   errorDiv.style.display = "none"
   formButton.innerHTML = "Search for user"
}
errorCancel.onclick = cancelError
// Initial page loading
window.addEventListener('load', () => {
   section.style.zIndex = -100
   errorDiv.style.display = "none"
   formButton.innerHTML = "Search for user"
})
// switch page
const switchPage = () => {
   section.style.zIndex = -100
   formButton.innerHTML = "Search for user"
}
sectionButton.onclick = switchPage
const myName ="ireade"
const data = JSON.stringify({
   query: `{
   user(login: ${myName}) {
      avatarUrl
      bio
      name
      login
      repositories(last: 20) {
      nodes {
         createdAt
         forkCount
         id
         name
         languages(first: 10) {
            nodes {
            id
            color
            name
            }
         }
         stargazerCount
      }
      }
   }
}
`
})


const fetchUser = async (data) => {
   const resp = await fetch('https://api.github.com/graphql', {
      method: 'post',
      body: data,
      headers: {
         'Content-Type': 'application/json',
         "Authorization": "Bearer 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"
      }
   })
   const jData = await resp.json()
   console.log(jData)
}
fetchUser(data)