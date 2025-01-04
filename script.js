// Local reviews data
const reviews = [
  {
    id: 1,
    name: "john deo",
    job: "web developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvd1u_iWqjqy3YVnwbd_q8Cbq88E-oOY1vw&s",
    text: "A passionate web developer with over 10 years of experience in building responsive websites. John loves exploring new technologies and always provides honest, detailed feedback.",
  },
  {
    id: 2,
    name: "Emily Carter",
    job: "Travel blogger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXiENSh3b_MpxZPJowV6fZbYtVLNyjoejQA&s",
    text: "Travel blogger, tourism app reviewer, evaluates websites, creative insights, helpful feedback, problem solver, passionate about hospitality and digital design.",
  },
  {
    id: 3,
    name: "Daniel Lee",
    job: "software engineer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMIq6u53Mm6WMIqoQPLZdYcGhEwm01nLHfw&s",
    text: "A software engineer with expertise in AI and machine learning. Daniel’s feedback is highly technical and valuable for developers.",
  },
  {
    id: 4,
    name: "recher Brown",
    job: "lifestyle blogger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzs4nvjbCrC4ltdqKBkPGSGJT86QgLX03rg&s",
    text: "A lifestyle blogger who enjoys testing new tools and platforms. Sophia’s reviews are detailed and helpful for creative professionals.",
  },
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Select Buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 0;

// Load intial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// Show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// Show Previous person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

//Show Random person
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
