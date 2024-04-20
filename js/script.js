let currentLoc = window.location.href;
fetch("books.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("book", JSON.stringify(data));
  });

function onScreenLoad() {
  var navbar = document.getElementById("nav-placeholder");
  navbar.innerHTML = `
<nav class="navbar">
	<span class="navbar-toggle" id="js-navbar-toggle">
		<i class="fas fa-bars"></i>
	</span>
	<div>
		<a href="./index.html" class="logo">BiblioSync</a>
	</div>
	<ul class="main-nav" id="js-menu">
		<li>
			<div class="group">
				<svg
					id="searchIcon"
					onclick="redirectToResults()"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="icon">
					<g>
						<path
							d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
					</g>
				</svg>

				<input
					class="input"
					id="searchInput"
					type="search"
					placeholder="Search" />
			</div>
		</li>
		<li>
			<a href="./index.html" class="nav-links">Home</a>
		</li>
		<li>
			<a href="./collection.html" class="nav-links">Books</a>
		</li>
		<li>
			<a href="#" class="nav-links" id="customizable">Customizable</a>
		</li>
		<li>
			<a href="./signup.html" class="nav-links">Register</a>
		</li>

		<li id="profile-placeholder"></li>
	</ul>
</nav>`;
  var footerDiv = document.getElementById("footer");
  footerDiv.innerHTML = `<div class="links-wrapper">
				<a href="./about.html">About us</a>
				<a href="./Credits.html">Credits</a>
				<a href="./Todo.html">Todo List</a>
			</div>
			<div class="social-media">
				<a href="#">Facebook</a><a href="#">X</a><a href="#">LinkedIn</a>
			</div>`;
  checkLoggedIn();
}

let book = JSON.parse(localStorage.getItem("book"));
//Loader function
window.addEventListener("load", function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.transition = "opacity 0.5s";
  loaderWrapper.style.opacity = "0";
  setTimeout(function () {
    loaderWrapper.style.display = "none";
  }, 500);
  onScreenLoad();
});

/*books*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/

console.log(book);

const urlParams = new URLSearchParams(window.location.search);
const bookId = parseInt(urlParams.get("id"));
function displayBookDetails(bookId = 0) {
  const selectedBook = book.find((b) => b.id === bookId);
  if (selectedBook) {
    document.getElementById("book-cover").src = selectedBook.cover;
    document.getElementById("book-title").querySelector("h1").textContent =
      selectedBook.title;
    document.getElementById("author").textContent = selectedBook.author;
    document.getElementById("description").textContent =
      selectedBook.description;
    document.getElementById("published").textContent = selectedBook.published;
    document.getElementById("isbn").textContent = selectedBook.isbn;
    document.getElementById("language").textContent = selectedBook.language;
    document.getElementById("pages").textContent = selectedBook.pages;
    document.getElementById("genres").textContent =
      selectedBook.genres.join(", ");
    if (selectedBook.availability == 1) {
      document.getElementById(
        "availability"
      ).innerHTML = `<i class="fa-solid fa-check"></i>`;
    } else {
      document.getElementById(
        "availability"
      ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      const borrow_btn = document.getElementById("borrow-btn");
      borrow_btn.classList.add("disabled");
      document.getElementById("borrow-btn").disabled = true;
      document.getElementById("borrow-btn").style.backgroundColor = "gray";
      document.getElementById("borrow-btn").style.boxShadow =
        "0px 6px 0px #5A5A5A";
      document.getElementById("borrow-btn").style.color = "black";
    }
    document.getElementById("formats").textContent =
      selectedBook.formats.join(", ");
  }
}
displayBookDetails(bookId);

//========================================================
function createUser(username, isAdmin, email, password, age, gender) {
  return {
    username: username,
    isAdmin: isAdmin,
    email: email,
    password,
    password,
    age: age,
    gender: gender,
    getName: function () {
      return username;
    },
  };
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve form values
  const name = document.getElementById("signup-username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("signup-password").value;
  const birthdate = new Date(document.getElementById("birthdate").value);
  const isAdmin = document.getElementById("is-admin").checked;
  const gender = document.querySelector('input[name="Gender"]:checked').value;

  // Validate form inputs
  if (name.trim() === "") {
    alert("Username is required");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }

  const currentDate = new Date();
  if (birthdate >= currentDate) {
    alert("Enter a valid birthdate");
    return;
  }

  // Create user object
  const user = createUser(name, isAdmin, email, password, birthdate, gender);

  // Store user object in localStorage
  localStorage.setItem(user.getName(), JSON.stringify(user));

  // Clear form fields
  document.getElementById("registrationForm").reset();
}

/*Login*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/

function checkSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const storedUserData = localStorage.getItem(username);
  const userData = storedUserData ? JSON.parse(storedUserData) : {};
  if (userData.password === password) {
    // Successful login
    login(userData);
  } else {
    // Failed login
    alert("Invalid username or password!");
  }
}

function checkLoggedIn() {
  const currentUser = localStorage.getItem("Current_user");
  if (currentUser != {}) {
    // User is already logged in, redirect to profile page
    const userData = JSON.parse(currentUser);
    console.log("===>", userData);
    login(userData);
  }
}
function login(userObject) {
  let nav = document.getElementById("js-menu");
  const profileLink = document.createElement("a");
  const customizable = document.getElementById("customizable");
  profileLink.classList.add("nav-links");
  profileLink.textContent = "Profile";
  if (userObject.isAdmin == 1) {
    profileLink.href = `./adminprofile.html`;
    customizable.innerText = "Add book";
    customizable.href = `./addform.html`;
    //for some reason bt5aly zorar el profile y5tfy???
    if (currentLoc.includes("book")) {
      const deletebtn = document.getElementById("bookbtn");
      deletebtn.innerHTML = ` <a href="#">
			<button class="button" id="borrow-btn">Delete Book</button>
		  </a>`;
    }
  } else {
    profileLink.href = `./userprofile.html`;
    customizable.innerText = "Borrow Book";
    customizable.href = `./borrowform.html`;
  }
  const profilePlaceholder = document.getElementById("profile-placeholder");
  if (!profilePlaceholder.hasChildNodes()) {
    profilePlaceholder.appendChild(profileLink);
  }
  if (currentLoc.includes("signup") || currentLoc.includes("login")) {
    logged_in = userObject;
    sessionStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("Current_user", JSON.stringify(logged_in));
  }
  if (currentLoc.includes("profile")) {
    document.getElementById("username").innerText = userObject.username;
    document.getElementById("Mail").innerText = userObject.email;
  }
}

/*Search results*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/
//Handles enter button for search
function redirectToResults() {
  const userQuery = document.getElementById("searchInput").value;
  let url;
  url = `./searchResults.html?query=${encodeURIComponent(userQuery)}`;
  window.location.href = url;
}

function search(useQ) {
  const searchResults = document.getElementById("searchResults");
  const searchTerm = useQ.toLowerCase();

  // Filter books based on search term
  const filteredBooks = book.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.isbn.includes(searchTerm) ||
      book.genres.some((genre) => genre.toLowerCase().includes(searchTerm))
  );

  searchResults.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
      <a href="book.html?id=${book.id}">
        <img src="${book.cover}" alt="${book.title} Cover" />
      </a>
      <div>
        <strong>${book.title} by ${book.author}</strong>
      </div>
    `;
    searchResults.appendChild(bookElement);
  });
  if (filteredBooks.length === 0) {
    searchResults.innerHTML = `	<h3 style="color: whitesmoke; font-size: 22px;">No results found</h3>`;
  }
}

/*Recommended books*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function displayRandomBooks() {
  const booksSection = document.getElementById("rand");

  const shuffledBooks = shuffle(book);
  booksSection.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const randomBook = shuffledBooks[i];
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
        <a href="book.html?id=${randomBook.id}">
          <img src="${randomBook.cover}" alt="${randomBook.title} Cover" />
        </a>
        <div>
          <strong>${randomBook.title} by ${randomBook.author}</strong>
        </div>
      `;
    booksSection.appendChild(bookDiv);
  }
}
if (currentLoc.includes("collection")) {
  const collection = document.getElementById("collection");

  book.forEach((book) => {
    const bookelement = document.createElement("div");
    bookelement.innerHTML = `
    <a href="book.html?id=${book.id}">
      <img src="${book.cover}" alt="${book.title} Cover" />
    </a>
    <div>
      <strong>${book.title} by ${book.author}</strong>
    </div>
  `;
    collection.appendChild(bookelement);
  });
} else if (currentLoc.includes("index")) {
  displayRandomBooks();
}

/*Collection*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/
