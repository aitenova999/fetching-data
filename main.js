const joke = document.querySelector(".joke");
const button = document.querySelector(".btn");
const categoriesButton = document.querySelector(".btn-categories");
const randomJokeUrl = "https://api.chucknorris.io/jokes/random";
const categoriesOfJokes = "https://api.chucknorris.io/jokes/categories";
const testButton = document.querySelector(".test-btn");

let categoriesOfFetchedJokes = [];
// function fetchData() {
//   fetch(randomJokeUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       joke.innerHTML = data.value;
//       console.log(joke);
//     });
// }
// async await
async function fetchData() {
  try {
    const response = await fetch(randomJokeUrl);
    const data = await response.json();
    joke.innerHTML = data.value;
    // const categoriesResponse = await fetch(categoriesOfJokes);
    // const categories = await categoriesResponse.json();
    console.log(joke);
  } catch (err) {
    console.log(err);
  }
}

// const response = await fetch(randomJokeUrl);
//     const joke = await response.json();
//     joke.innerHTML = data.value;

const randomFunc = () => {
  console.log("random func");
};
randomFunc();

// fetching categories

async function fetchCategory() {
  try {
    const categoriesResponse = await fetch(categoriesOfJokes);
    const categories = await categoriesResponse.json();
    categories.map;
    console.log(categories);
  } catch (err) {
    console.log(err);
  }
}

// const response = await fetch(randomJokeUrl);
//     const joke = await response.json();
//     joke.innerHTML = data.value;

// click function
function btnClick() {
  console.log("clicked");
  fetchData();
}

function categoryClick() {
  console.log("clicked");
  fetchCategory();
}

// testing button

function testFunction() {
  console.log("test button is clicked");
}
categoriesButton.addEventListener("click", categoryClick);
button.addEventListener("click", btnClick);

testButton.addEventListener("click", testFunction);
