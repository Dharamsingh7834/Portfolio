// Add Typing Animation:
const typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Designer", "JavaScript Enthusiast"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});



//To download CV ====

document.querySelector(".download-cv").addEventListener("click", () => {
  const cvPath = "Files/DHARAM_SINGH_Latest_Web.pdf";
  const anchor = document.createElement("a");
  anchor.href = cvPath;
  anchor.download = "Dharam_Singh_Resume.pdf";
  anchor.click();
});

//Project section -----------

const projects = [

  {
    title: "To-Do Application",
    description: "Stay organized and productive with this user-friendly To-Do List app. Easily add, edit, and delete tasks, track your progress, and save tasks for later with local storage. Simplify your daily workflow!",
    github: "https://github.com/Dharamsingh7834/To-do-Application-",
    liveDemo: "https://dharamsingh7834.github.io/To-do-Application-/",
  },

  {
    title: "Background-Gradient-Color-Generator",
    description: "A tool that generates smooth background gradients with customizable colors. Instantly preview and copy CSS code for seamless integration",
    github: "https://github.com/Dharamsingh7834/Background-Gradient-Color-Generator",
    liveDemo: "https://dharamsingh7834.github.io/Background-Gradient-Color-Generator/",
  },

  {
    title: "Stop-Watch-Timer",
    description: "A simple stopwatch timer that allows users to start, pause, reset and taking lapse timings fucntionality. It provides accurate time measurement with a user-friendly interface.",
    github: "https://github.com/Dharamsingh7834/Stop-Watch-Timer",
    liveDemo: "https://dharamsingh7834.github.io/Stop-Watch-Timer/",
  },

  {
    title: "Amazone clone",
    description: "A replica of Amazon.com with product listings, and similiar hovering effects and a user-friendly interface. Built to mimic the look and feel of the original e-commerce platform.",
    github: "https://github.com/Dharamsingh7834/Amazon-clone",
    liveDemo: "https://dharamsingh7834.github.io/Amazon-clone/",
  },

  {
    title: "Gaming Console",
    description: "A visually engaging advertisement page showcasing the latest gaming console. Features stunning graphics, key specifications, and a call-to-action for gamers.",
    github: "https://github.com/Dharamsingh7834/Mahindra-Thar-card",
    liveDemo: "https://dharamsingh7834.github.io/Gaming-Console-Advertisement/",
  },

  {
    title: "Flipping Aadhar Card",
    description: "An interactive Aadhaar card flip animation for a seamless front and back view transition. Enhances UI experience with smooth flipping effects using HTML, CSS.",
    github: "https://github.com/Dharamsingh7834/Flipping-Aadhar-card",
    liveDemo: "https://dharamsingh7834.github.io/Flipping-Aadhar-card/",
  },

  {
    title: "Mahindra Thar Card",
    description: "A bold and rugged Mahindra Thar card showcasing its off-road capabilities, powerful engine, stylish design, advanced features, and adventure-ready performance.",
    github: "https://github.com/Dharamsingh7834/Mahindra-Thar-card",
    liveDemo: "https://dharamsingh7834.github.io/Mahindra-Thar-card/",
  },
];

//targeting project container
const projectContainer = document.querySelector(".portfolio-content");

// generating project card dynamically
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project");

  projectCard.innerHTML = `
  <h3>${project.title}</h3>
  <p>${project.description}</p>
  <a href="${project.github}" target="_blank">View on GitHub</a>
  <a href="${project.liveDemo}" target="_blank">Live Demo</a>
  `;

  projectContainer.appendChild(projectCard);
});

// Form Validation -----

const form = document.querySelector(".contact-form form");

form.addEventListener("submit", (e) => {
  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    e.preventDefault(); // Prevent form submission
  }
});

// Scroll-to-Top Button
document.addEventListener("DOMContentLoaded", () => {
  const topButton = document.querySelector(".top");

  if (topButton) {
    window.addEventListener("scroll", () => {
      topButton.style.display = window.scrollY > 510 ? "block" : "none";
    });

    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

