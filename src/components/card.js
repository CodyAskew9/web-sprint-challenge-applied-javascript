import axios from "axios"
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cards = document.createElement("div"),
  headlineElement = document.createElement("div"),
  author = document.createElement("div"),
  imgElement = document.createElement("div"),
  img = document.createElement("img"),
  span = document.createElement("span")

cards.appendChild(headlineElement)
cards.appendChild(author)
author.appendChild(imgElement)
imgElement.appendChild(img)
author.appendChild(span)

cards.classList.add("card")
headlineElement.classList.add("headline")
author.classList.add("author")
imgElement.classList.add("img-container")

img.src = article.authorPhoto

headlineElement.textContent = article.headline
span.textContent = article.authorName

cards.addEventListener("click", () => console.log(article.headline))

return cards
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const newArray = ["javascript", "bootstrap", "technology", "jquery", "node"];
  axios
    .get("http://localhost:5000/api/articles")
    .then((response) => {
      newArray.forEach((section) => {
        response.data.articles[section].forEach((c) => {
          const newSection = Card(c)

          document.querySelector(selector).appendChild(newSection)
        })
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

export { Card, cardAppender }
