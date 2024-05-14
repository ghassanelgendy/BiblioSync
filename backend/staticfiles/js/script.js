let currentLoc = window.location.href;
// fetch("books.json")
//   .then((response) => response.json())
//   .then((data) => {
//     if (!localStorage.getItem("book")) {
//       localStorage.setItem("book", JSON.stringify(data));
//     }
//   });

let book = JSON.parse(localStorage.getItem("book"));
//Loader function
window.addEventListener("load", function () {
	var loaderWrapper = document.querySelector(".loader-wrapper");
	loaderWrapper.style.transition = "opacity 0.5s";
	loaderWrapper.style.opacity = "0";
	setTimeout(function () {
		loaderWrapper.style.display = "none";
	}, 500);
	if (this.window.location.href.includes("editbook")) {
		editBook();
	}
	onScreenLoad();
});

/*books*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/

// const urlParams = new URLSearchParams(window.location.search);
// const bookId = parseInt(urlParams.get("id"));
// function displayBookDetails(bookId = 0) {
//   const selectedBook = book.find((b) => b.id === bookId);
//   if (selectedBook) {
//     document.getElementById("book-cover").src = selectedBook.cover;
//     document.getElementById("book-title").querySelector("h1").textContent =
//       selectedBook.title;
//     document.getElementById("author").textContent = selectedBook.author;
//     document.getElementById("description").textContent =
//       selectedBook.description;
//     document.getElementById("published").textContent = selectedBook.published;
//     document.getElementById("isbn").textContent = selectedBook.isbn;
//     document.getElementById("language").textContent = selectedBook.language;
//     document.getElementById("pages").textContent = selectedBook.pages;
//     document.getElementById("genres").textContent =
//       selectedBook.genres.join(", ");
//     if (selectedBook.availability == 1) {
//       document.getElementById(
//         "availability"
//       ).innerHTML = `<i class="fa-solid fa-check"></i>`;
//     } else {
//       document.getElementById(
//         "availability"
//       ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
//       const borrow_btn = document.getElementById("borrow-btn");
//       borrow_btn.classList.add("disabled");
//       document.getElementById("borrow-btn").disabled = true;
//       document.getElementById("borrow-btn").style.backgroundColor = "gray";
//       document.getElementById("borrow-btn").style.boxShadow =
//         "0px 6px 0px #5A5A5A";
//       document.getElementById("borrow-btn").style.color = "black";
//     }
//     document.getElementById("formats").textContent =
//       selectedBook.formats.join(", ");
//   }
// }
// displayBookDetails(bookId);

//========================================================
// function createUser(username, isAdmin, email, password, age, gender) {
//   return {
//     username: username,
//     isAdmin: isAdmin,
//     email: email,
//     password,
//     password,
//     age: age,
//     gender: gender,
//     getName: function () {
//       return username;
//     },
//   };
// }

// function handleSubmit(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Retrieve form values
//   const name = document.getElementById("signup-username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("signup-password").value;
//   const birthdate = new Date(document.getElementById("birthdate").value);
//   const isAdmin = document.getElementById("is-admin").checked;
//   const gender = document.querySelector('input[name="Gender"]:checked').value;

//   // Validate form inputs
//   if (name.trim() === "") {
//     alert("Username is required");
//     return;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     alert("Please enter a valid email address");
//     return;
//   }

//   if (password.length < 8) {
//     alert("Password must be at least 8 characters long");
//     return;
//   }

//   const currentDate = new Date();
//   if (birthdate >= currentDate) {
//     alert("Enter a valid birthdate");
//     return;
//   }

//   //bos ysahbi el user aw pass aw el etnen mtkrneen wla la
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   if (
//     users.some(
//       (user) =>
//         user.username === name ||
//         user.email === email ||
//         (user.username === name && user.email === email)
//     )
//   ) {
//     alert("A user with this username or email already exists!");
//     return;
//   } else if (
//     document.getElementById("signup-password").value !==
//     document.getElementById("confirm-password").value
//   ) {
//     alert("Password and confirm password do not match!");
//     return;
//   } else if (document.getElementById("confirm-password").value === "") {
//     alert("Please confirm your password!");
//     return;
//   }

//   // Create user object
//   const user = createUser(name, isAdmin, email, password, birthdate, gender);

//   // Store user object in localStorage
//   users.push(user);
//   localStorage.setItem("users", JSON.stringify(users));

//   // Clear form fields
//   document.getElementById("registrationForm").reset();
// }

/*Login*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/

// function checkSubmit(event) {
//   event.preventDefault(); // Prevent the default form submission

//   const username = document.getElementById("login-username").value;
//   const password = document.getElementById("login-password").value;
//   const storedUsersData = localStorage.getItem("users");
//   const usersData = storedUsersData ? JSON.parse(storedUsersData) : [];

//   const userData = usersData.find((user) => user.username === username);

//   if (userData && userData.password === password) {
//     // Successful login
//     login(userData);
//   } else {
//     // Failed login
//     alert("Invalid username or password!");
//   }
// }

// function checkLoggedIn() {
//   const currentUser = localStorage.getItem("Current_user");
//   if (currentUser) {
//     // User is already logged in, redirect to profile page
//     const userData = JSON.parse(currentUser);
//     login(userData);
//   }
// }
// function login(userObject) {
//   let nav = document.getElementById("js-menu");
//   const profileLink = document.createElement("a");
//   const customizable = document.getElementById("customizable");
//   profileLink.classList.add("nav-links");
//   profileLink.textContent = "Profile";
//   if (userObject.isAdmin == 1) {
//     profileLink.href = `./adminprofile.html`;
//     customizable.innerText = "Add book";
//     customizable.href = `./addform.html`;
//     if (currentLoc.includes("bookdetails")) {
//       const deletebtn = document.getElementById("bookbtn");
//       deletebtn.innerHTML = ` <a href="#">
// 			<button class="button" onclick="deleteBook(event)" id="borrow-btn">Delete Book</button>
// 		  </a>`;
//       const editbutton = document.createElement("div");
//       editbutton.innerHTML = `
//       <button class="button" onclick="redirectEdit()" id="borrow-btn" style="margin-left : 40px">Edit Book</button>`;
//       deletebtn.appendChild(editbutton);
//     }
//   } else {
//     profileLink.href = `./userprofile.html`;
//     customizable.innerText = "Request Book";
//     customizable.href = "requestbook.html";
//   }
//   const profilePlaceholder = document.getElementById("profile-placeholder");
//   if (!profilePlaceholder.hasChildNodes()) {
//     profilePlaceholder.appendChild(profileLink);
//   }
//   if (currentLoc.includes("signup") || currentLoc.includes("login")) {
//     logged_in = userObject;
//     sessionStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("Current_user", JSON.stringify(logged_in));
//   }
//   if (currentLoc.includes("profile")) {
//     document.getElementById("username").innerText = userObject.username;
//     document.getElementById("Mail").innerText = userObject.email;
//   }
// }
// function redirectEdit() {
//   let url;
//   url = `./editbook.html?query=${encodeURIComponent(
//     parseInt(urlParams.get("id"))
//   )}`;
//   window.location.href = url;
// }

// function editBook() {
//   const bookID = parseInt(window.location.href.slice(42));
//   const bookIndex = book.findIndex((book) => book.id === bookID);
//   const currentBook = book[bookIndex];
//   const form = document.getElementById("edit");
//   // Extract form data
//   const bookName = (document.getElementById("book-name").value =
//     currentBook.title);
//   const isbn = (document.getElementById("ISBN").value = currentBook.isbn);
//   const author = (document.getElementById("author").value = currentBook.author);
//   const cover = (document.getElementById("coverlink").value =
//     currentBook.cover);
//   const language = (document.getElementById("language").value =
//     currentBook.language);
//   const genres = document.querySelectorAll(
//     ".genres input[type='checkbox']:checked"
//   );
//   const description = (document.getElementById("description").value =
//     currentBook.description);
//   console.log(currentBook);
//   const books = JSON.parse(localStorage.getItem("book")) || [];
//   currentBook.title = document.getElementById("book-name").value;
//   currentBook.isbn = document.getElementById("ISBN").value;
//   currentBook.author = document.getElementById("author").value;
//   currentBook.cover = document.getElementById("coverlink").value;
//   currentBook.language = document.getElementById("language").value;
//   currentBook.description = document.getElementById("description").value;

//   // Update the book in the books array
//   books[bookIndex] = currentBook;

//   // Update the books array in local storage
//   localStorage.setItem("book", JSON.stringify(books));
// }
// /*Search results*/
// /*===============================================================*/
// /*===============================================================*/
// /*===============================================================*/
// //Handles enter button for search
// function redirectToResults() {
//   const userQuery = document.getElementById("searchInput").value;
//   let url;
//   url = `./searchResults.html?query=${encodeURIComponent(userQuery)}`;
//   window.location.href = url;
// }

// function search(useQ) {
//   const searchResults = document.getElementById("searchResults");
//   const searchTerm = useQ.toLowerCase();

//   // Filter books based on search term
//   const filteredBooks = book.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchTerm) ||
//       book.author.toLowerCase().includes(searchTerm) ||
//       book.isbn.includes(searchTerm) ||
//       book.genres.some((genre) => genre.toLowerCase().includes(searchTerm))
//   );

//   searchResults.innerHTML = "";

//   filteredBooks.forEach((book) => {
//     const bookElement = document.createElement("div");
//     bookElement.innerHTML = `
//       <a href="bookdetails.html?id=${book.id}">
//         <img src="${book.cover}" alt="${book.title} Cover" />
//       </a>
//       <div>
//         <strong>${book.title} by ${book.author}</strong>
//       </div>
//     `;
//     searchResults.appendChild(bookElement);
//   });
//   if (filteredBooks.length === 0) {
//     searchResults.innerHTML = `	<h3 style="color: whitesmoke; font-size: 22px;">No results found</h3>`;
//   }
// }

/*Recommended books*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// function displayRandomBooks() {
//   const booksSection = document.getElementById("rand");

//   const shuffledBooks = shuffle(book);
//   booksSection.innerHTML = "";

//   for (let i = 0; i < 4; i++) {
//     const randomBook = shuffledBooks[i];
//     const bookDiv = document.createElement("div");
//     bookDiv.innerHTML = `
//         <a href="bookdetails.html?id=${randomBook.id}">
//           <img src="${randomBook.cover}" alt="${randomBook.title} Cover" />
//         </a>
//         <div>
//           <strong>${randomBook.title} by ${randomBook.author}</strong>
//         </div>
//       `;
//     booksSection.appendChild(bookDiv);
//   }
// }
// if (currentLoc.includes("collection")) {
//   const collection = document.getElementById("collection");

//   book.forEach((book) => {
//     const bookelement = document.createElement("div");
//     bookelement.innerHTML = `
//     <a href="bookdetails.html?id=${book.id}">
//       <img src="${book.cover}" alt="${book.title} Cover" />
//     </a>
//     <div>
//       <strong>${book.title} by ${book.author}</strong>
//     </div>
//   `;
//     collection.appendChild(bookelement);
//   });
// } else if (currentLoc.includes("index")) {
//   displayRandomBooks();
// }

/*Add book*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/
// function addBook() {
//   // Select the form element
//   var form = document.getElementById("add");

//   // Extract form data
//   var bookName = document.getElementById("book-name").value;
//   var isbn = document.getElementById("ISBN").value;
//   var author = document.getElementById("author").value;
//   var cover = document.getElementById("coverlink").value;
//   var language = document.getElementById("language").value;
//   var noPages = document.getElementById("no-pages").value;
//   var publishDate = document.getElementById("publishDate").value;
//   var genres = document.querySelectorAll(
//     ".genres input[type='checkbox']:checked"
//   );
//   var description = document.getElementById("description").value;

//   var books = JSON.parse(localStorage.getItem("book")) || [];
//   // Create an object to store book data
//   var bookData = {
//     id: books[books.length - 1].id + 1,
//     title: bookName,
//     isbn: isbn,
//     author: author,
//     cover: cover,
//     language: language,
//     pages: JSON.stringify(noPages),
//     publishDate: JSON.stringify(publishDate),
//     genres: Array.from(genres).map((genre) => genre.name),
//     description: description,
//     availability: 1,
//     formats: ["Paperback", "eBook"],
//   };

//   // Add the new book to the array
//   books.push(bookData);

//   // Update the books array in local storage
//   localStorage.setItem("book", JSON.stringify(books));

//   // Optionally, you can alert the user or redirect them after adding the book
//   alert("Book added successfully!");
//   console.log(book);

//   // Clear the form
//   // form.reset();
// }
/*Borrow Book*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/

function borrowBook() {
	const ktabId = parseInt(urlParams.get("id"));
	const currentUser = JSON.parse(localStorage.getItem("Current_user"));
	const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  
	fetch(`/borrowbook/${ktabId}/`, {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
		"X-CSRFToken": csrfToken,
	  },
	  body: JSON.stringify({ user_id: currentUser.id }),
	})
	  .then((response) => response.json())  // Parse response as JSON
	  .then((data) => {
		if (data.message) {
		  alert(data.message); // Success message
		} else if (data.error) {
		  alert(data.error); // Specific error message
		} else {
		  alert("Failed to borrow book."); // Generic error for unexpected response
		}
	  })
	  .catch((error) => {
		console.error("Error:", error);
		const errorStatus = error.response ? error.response.status : 500; // Get status code or default to 500
		let errorMessage = "Failed to borrow book.";
		switch (errorStatus) {
		  case 400:
			errorMessage = "Book is not available.";
			break;
		  case 404:
			errorMessage = "Book not found.";
			break;
		  default:
			errorMessage = "Internal Server Error.";
		}
		alert(errorMessage);
	  });
  }

/*Delete Book*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/
// function deleteBook() {
//   const ktabId = parseInt(urlParams.get("id"));
//   var books = JSON.parse(localStorage.getItem("book")) || [];
//   var bookIndex = books.findIndex((book) => book.id === ktabId);
//   if (bookIndex !== -1) {
//     books.splice(bookIndex, 1);
//     localStorage.setItem("book", JSON.stringify(books));
//   }
//   alert("Book deleted successfully!");
//   window.location.href = "./collection.html";
// }
