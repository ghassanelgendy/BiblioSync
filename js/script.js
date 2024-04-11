$(function () {
	$("#nav-placeholder").load("nav.html");
});

/*books*/
/*===============================================================*/
/*===============================================================*/
/*===============================================================*/
const book = [
	{
		id: 1,
		title: "1984",
		author: "George Orwell",
		cover: "../../images/1984.jpg",
		description:
			"Winston Smith works for the Ministry of truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities. Despite the police helicopters that hover and circle overhead, Winston and Julia begin to question the Party; they are drawn towards conspiracy. Yet Big Brother will not tolerate dissent - even in the mind",
		published: "June 8, 1949",
		isbn: "9781328869333",
		language: "English",
		pages: 336,
		genres: ["Classics", "Sci-fi"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 2,
		title: "The Phantom of the Opera",
		author: "Gaston Leroux",
		cover: "../../images/thephantomoftheopera.jpg",
		description:
			"When the new managers of the Paris Opera House ignore their predecessors' warnings about the hideous 'Opera ghost' stalking the theatre, it is a fatal mistake. The Phantom haunts the imagination of the beautiful and talented singer Christine Daaé, appearing to her as the 'Angel of Music' - a disembodied voice, coaching her to sing as she never could before. When Christine is courted by a handsome young viscount, the Phantom is consumed by jealousy and seeks revenge.",
		published: "September 23, 1909",
		isbn: "9781492699682",
		language: "English",
		pages: 304,
		genres: ["Classics", "Thriller", "Romance"],
		availability: "Not Available",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 3,
		title: "Dracula",
		author: "Bram Stoker",
		cover: "../../images/dracula.jpeg",
		description:
			"During a business visit to Count Dracula's castle in Transylvania, a young English solicitor finds himself at the center of a series of horrifying incidents. Jonathan Harker is attacked by three phantom women, observes the Count's transformation from human to bat form, and discovers puncture wounds on his own neck that seem to have been made by teeth. Harker returns home upon his escape from Dracula's grim fortress, but a friend's strange malady — involving sleepwalking, inexplicable blood loss, and mysterious throat wounds — initiates a frantic vampire hunt.",
		published: "May 26, 1897",
		isbn: "9798721052927",
		language: "English",
		pages: 280,
		genres: ["Classics", "Fantasy", "Horror"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 4,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		cover: "../../images/thegreatgatsby.webp",
		description:
			"Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
		published: "April 10, 1925",
		isbn: "9781604138207",
		language: "English",
		pages: 165,
		genres: ["Classics", "Tragedy"],
		availability: "Not Available",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 5,
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
		cover: "../../images/thehobbit.jpg",
		description:
			"Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
		published: "September 21, 1937",
		isbn: "9780007458424",
		language: "English",
		pages: 368,
		genres: ["Classics", "Fantasy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 6,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		cover: "../../images/prideandprejudice.webp",
		description:
			"Set in England in the early 19th century, Pride and Prejudice tells the story of Mr and Mrs Bennet's five unmarried daughters after the rich and eligible Mr Bingley and his status-conscious friend, Mr Darcy, have moved into their neighbourhood. While Bingley takes an immediate liking to the eldest Bennet daughter, Jane, Darcy has difficulty adapting to local society and repeatedly clashes with the second-eldest Bennet daughter, Elizabeth.",
		published: "January 28, 1813",
		isbn: "9781435159631",
		language: "English",
		pages: 368,
		genres: ["Classics", "Romance"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 7,
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J. K. Rowling ",
		cover: "https://m.media-amazon.com/images/I/71XqqKTZz7L._SL1200_.jpg",
		description:
			"Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility.All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley - a great big swollen spoiled bully. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years.But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry - and anyone who reads about him - will find unforgettable.For it's there that he finds not only friends, aerial sports, and magic in everything from classes to meals, but a great destiny that's been waiting for him... if Harry can survive the encounter.",
		published: "August 27, 2013",
		isbn: "9780545582889",
		language: " English",
		pages: 336,
		genres: ["Fantasy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 8,
		title: "The Lord of the Rings",
		author: "J. R. R. Tolkien",
		cover:
			"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
		description: `In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.
    From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.
    When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.`,
		published: "January 1, 1954",
		isbn: "9780618640157",
		language: "English",
		pages: 1178,
		genres: ["Classics", "Fantasy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 9,
		title: "To All the Boys I've Loved Before",
		author: " Jenny Han",
		cover: "https://m.media-amazon.com/images/I/81mY3hPdkHL._SL1500_.jpg",
		description: `Sixteen-year-old Lara Jean Song keeps her love letters in a hatbox her mother gave her. They aren’t love letters that anyone else wrote for her; these are ones she’s written. One for every boy she’s ever loved—five in all. When she writes, she pours out her heart and soul and says all the things she would never say in real life, because her letters are for her eyes only. Until the day her secret letters are mailed, and suddenly, Lara Jean’s love life goes from imaginary to out of control.`,
		published: "January 26, 2016",
		isbn: "9781442426719 ",
		language: "English",
		pages: 384,
		genres: ["Comedy", "Romance"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 10,
		title: "Dune",
		author: " Frank Herbert",
		cover: "https://m.media-amazon.com/images/I/A1u+2fY5yTL._SL1500_.jpg",
		description: `Set on the desert planet Arrakis, Dune is the story of Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...
    When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.`,
		published: "August ,1965",
		isbn: "9780593099322",
		language: "English",
		pages: 688,
		genres: ["Classics", "Fantasy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 11,
		title: "The Hunger Games",
		author: " Suzanne Collins",
		cover: "https://m.media-amazon.com/images/I/71WSzS6zvCL._SL1152_.jpg",
		description: `In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.
    Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. But Katniss has been close to dead and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.`,
		published: "September 14, 2008",
		isbn: "978054542511",
		language: "English",
		pages: 384,
		genres: ["Sci-Fi"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 12,
		title: "The Da Vinci Code ",
		author: " Dan Brown",
		cover: "https://m.media-amazon.com/images/I/811nqCf7o1L._SL1500_.jpg",
		description: `As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.
    Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.`,
		published: "March 18, 2003",
		isbn: " 9780307474278",
		language: "English",
		pages: 597,
		genres: ["Mystery"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 13,
		title: "The Alchemist",
		author: "Paulo Coelho",
		cover: "https://i.harperapps.com/covers/9780063055339/y648.jpg",
		description: `Paulo Coelho’s masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.
    The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life’s path, and, above all, following our dreams.`,
		published: "1988",
		isbn: "9780062024329",
		language: "English",
		pages: 208,
		genres: ["Classics", "Fantasy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 14,
		title: "The Girl on the Train",
		author: "Paula Hawkins",
		cover: "https://m.media-amazon.com/images/I/71RRMyyQxWL._SL1500_.jpg",
		description:
			"Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. She’s even started to feel like she knows the people who live in one of the houses. “Jess and Jason,” she calls them. Their life—as she sees it—is perfect. If only Rachel could be that happy. And then she sees something shocking. It’s only a minute until the train moves on, but it’s enough. Now everything’s changed. Now Rachel has a chance to become a part of the lives she’s only watched from afar. Now they’ll see; she’s much more than just the girl on the train...",
		published: "January 13, 2015",
		isbn: "9780241520789",
		language: "English",
		pages: 128,
		genres: ["Mystery"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 15,
		title: "Frankenstein",
		author: " Mary Wollstonecraft Shelley",
		cover: "https://m.media-amazon.com/images/I/515zE1GxvAL.jpg",
		description: `.Victor Frankenstein, a strange but brilliant scientist, discovers a method of imparting life to inanimate matter. The Monster is thus born: a hideous, 8-foot-tall creature of muscle, speed, and intellect. Frankenstein’s rejection of his appalling creation sends it into a spiral of despair, and Frankenstein’s life is never the same.Considered by many to be the first science fiction novel, Frankenstein is a powerful narrative that explores complex themes of belonging, morality, and the consequences of the power over life and death`,
		published: "1 Jan, 1818",
		isbn: "9798614455781",
		language: "English",
		pages: 177,
		genres: ["Classics", "Horror", "Sci-Fi", "Tragedy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 16,
		title: "The Chronicles of Narnia",
		author: "C.S. Lewis ",
		cover: "https://m.media-amazon.com/images/I/91jlAlsTYzL._SL1500_.jpg",
		description: `Four adventurous siblings—Peter, Susan, Edmund, and Lucy Pevensie—step through a wardrobe door and into the land of Narnia, a land frozen in eternal winter and enslaved by the power of the White Witch. But when almost all hope is lost, the return of the Great Lion, Aslan, signals a great change . . . and a great sacrifice.`,
		published: "16 October 1950",
		isbn: "  9780060598242",
		language: "English",
		pages: 784,
		genres: ["Classics", "Fantasy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 17,
		title: "The Shining",
		author: "Stephen King",
		cover:
			"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg",
		description: `Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.`,
		published: "January 28, 1977",
		isbn: "9780345806789",
		language: "English",
		pages: 497,
		genres: ["Horror", "Mystery"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 18,
		title: "The Fault in Our Stars ",
		author: " John Green",
		cover: "https://m.media-amazon.com/images/I/61fbVx3W5cL._SL1200_.jpg",
		description: `Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten.
    `,
		published: "10 Jan, 2012",
		isbn: " 9780142424179",
		language: "English",
		pages: 352,
		genres: ["Romance", "Tragedy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 19,
		title: "The A. B. C. Murders",
		author: "Agatha Christie ",
		cover: "https://m.media-amazon.com/images/I/81xboqJhzQL._SL1500_.jpg",
		description: `There's a serial killer on the loose, working his way through the alphabet and the whole country is in a state of panic.
    A is for Mrs. Ascher in Andover, B is for Betty Barnard in Bexhill, C is for Sir Carmichael Clarke in Churston. With each murder, the killer is getting more confident—but leaving a trail of deliberate clues to taunt the proud Hercule Poirot might just prove to be the first, and fatal, mistake.`,
		published: "6 Jan, 1936",
		isbn: "9780062073587",
		language: "English",
		pages: 272,
		genres: ["Classics", "Mystery"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
	{
		id: 20,
		title: "The Picture of Dorian Gray ",
		author: "Oscar Wilde",
		cover: "https://m.media-amazon.com/images/I/91IZXKd-7IL._SL1500_.jpg",
		description: `Dorian Gray who becomes obsessed with his own beauty. After a friend paints a portrait of him that perfectly captures his beauty, Dorian utters the fateful wish that the portrait age instead of him. The portrait becomes enchanted and ages in Dorian's place, allowing him to live a life of debauchery and freedom. The story takes a dark turn when Dorian discovers the moral decay resulting from his indulgent lifestyle`,
		published: "1 Jun, 1890",
		isbn: " 9780141442464",
		language: "English",
		pages: 304,
		genres: ["Classics", "Fantasy"],
		availability: "Available for Borrowing",
		formats: ["Paperback", "eBook"],
		borrowingPeriod: "2 weeks",
		reservationOption: "Yes",
	},
];
const urlParams = new URLSearchParams(window.location.search);
const bookId = parseInt(urlParams.get("id"));
function displayBookDetails(bookId) {
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
		document.getElementById("availability").textContent =
			selectedBook.availability;
		document.getElementById("formats").textContent =
			selectedBook.formats.join(", ");
		document.getElementById("borrowing-period").textContent =
			selectedBook.borrowingPeriod;
		document.getElementById("reservation-option").textContent =
			selectedBook.reservationOption;
	} else {
		console.log(`Book with ID ${bookId} not found.`);
	}
}
displayBookDetails(bookId);
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
	mainNav.classList.toggle("active");
});
