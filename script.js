let contentNode = document.querySelector(".contentGrid");

var currentState; //Contains information on what page we are on

function setupTransition(classname) {
  //Sets up basic info for changing page
  currentState = classname;
  contentNode.innerHTML = "";
}
function createContentBlock() {
  //Adds a new content block to the dom and returns it to the calling code
  var contentBlock = document.createElement("li");
  contentBlock.className = "contentBlock " + currentState;
  contentNode.appendChild(contentBlock);
  return contentBlock;
}

function setAbout() {
  //Sets the about page of the website
  setupTransition("about");
  var left = createContentBlock();
  var right = createContentBlock();

  var textNode = document.createElement("p");
  textNode.className = "textbox";
  textNode.innerText =
    "Hello, I am Matthew Cole (He/Him). I am currently pursuing a Masters in Computer Science. I am generally interested in software engineering across a wide variety " +
    "of different fields. I have been programming since I was young and have coded in a wide variety of languages, but I am most comfortable in C#, Python, and C++. I generally am very " +
    "flexible when it comes to languages since I have worked with so many and I am able to pick up languages relatively quickly. However, I would say that I find python to be my most " +
    "comfortable language for very small programs and I find C# to be my most comfortable language for larger programs. I have worked on a number of interesting projects for school " +
    "including a REST based airline web servlet and an optimizer for a compiler.";
  left.appendChild(textNode);
  var image = document.createElement("img");
  image.src = "matthew.jpg";
  image.width = 400;
  image.height = 400;
  image.style.borderRadius = "70px";
  image.alt = "headshot of Matthew Cole";
  image.style.display = "block";
  right.append(image);
}
document.querySelector("#about").addEventListener("click", setAbout);

function createListElement(title, elements, footer) {
  //Creates a list element with a new contect block from a title, a list of elements, and optionally a footer
  var node = createContentBlock();
  var header = document.createElement("h2");
  header.innerText = title;
  node.append(header);
  var listNode = document.createElement("ul");
  listNode.className = "resumeList";

  for (let element in elements) {
    var childNode = document.createElement("li");
    childNode.innerText = elements[element];
    listNode.append(childNode);
  }
  node.append(listNode);

  if (footer != "") {
    var footerNode = document.createElement("p");
    footerNode.innerText = footer;
    node.append(footerNode);
  }
}

function setPreviousWork() {
  //Sets up the page for previous work/experience
  setupTransition("work textbox");
  createListElement(
    "Classes",
    [
      "CS566",
      "CS563",
      "Adv Java*",
      "CS586",
      "Cobol*",
      "Compilation*",
      "CS558",
      "CS350",
      "CS333",
      "CS202",
      "CS201",
      "CS251",
      "CS250",
    ],
    "*510 topic class"
  );
  createListElement(
    "Languages",
    ["C++", "Python", "Java", "SQL", "C#", "HTML", "Javascript", "CSS"],
    ""
  );
}
document.querySelector("#work").addEventListener("click", setPreviousWork);

function setOneProject(title, githubUrl, imageurl, description) {
  //Sets up a project in a new content block with a given title, github url, and description
  var node = createContentBlock();
  var childNode = document.createElement("p");
  childNode.innerHTML = `<a href="${githubUrl}"><h2>${title}</h2></a>`;
  node.append(childNode);
  childNode = document.createElement("p");
  childNode.innerText = description;
  node.append(childNode);

  var image = document.createElement("img");
  image.src = imageurl;
  image.style.width = "100%";
  image.alt = "code of " + title;
  image.style.display = "block";
  node.append(image);
}
function setProjects() {
  //Sets up project page
  setupTransition("projects textbox");

  setOneProject(
    "Optimizer/Compiler",
    "https://github.com/PSU-Essentials-of-Compilation/python-compiler-team6/tree/week6",
    "compiler.jpg",
    "This code optimizes compiled code by " +
      "performing constant propagation, partial evaluation, branch removal, and useless instruction removal. These are then performed itertively for maximum optimization."
  );
  setOneProject(
    "Airline Manager",
    "https://github.com/LupusWolf/PortlandStateAdvancedJava/tree/main/airline-web",
    "airline.jpg",
    "This application consists of two parts:" +
      "\n\nThe first application is a webserver that allows POST requests to add flights to the server and get requests to search for flights based on criteria" +
      "\n\nThe second application is an interface that allows the user to interact with the webserver through the commandline"
  );
}
document.querySelector("#projects").addEventListener("click", setProjects);

function addField(form, name, inputType, big) {
  //Adds a field to the contact form
  var container = document.createElement("div");
  container.className = "contactField";
  container.innerHTML = `
    <label for="${name}">${name}:</label>
    <${
      big ? "textarea" : `input type="${inputType}"`
    }  id="${name}" name="${name}" />`;
  form.appendChild(container);
}
function addButton(form, name, inputType) {
  //Adds a button to the button container in the contact form
  var button = document.createElement("button");
  button.innerText = name;
  button.type = inputType;
  form.appendChild(button);
}
function setContact() {
  //Sets up the contact page
  setupTransition("contact");
  var main = createContentBlock();

  var form = document.createElement("form");
  form.className = "contactForm";
  var header = document.createElement("h2");
  header.innerText = "Contact Form:";
  form.append(header);
  form.className = "textbox";
  addField(form, "Name", "text", false);
  addField(form, "Email", "email", false);
  addField(form, "Message", "text", true);

  var buttons = document.createElement("div");
  buttons.className = "contactButton";
  addButton(buttons, "Submit", "submit");
  addButton(buttons, "Reset", "reset");
  form.appendChild(buttons);
  main.appendChild(form);
}
document.querySelector("#contact").addEventListener("click", setContact);

setAbout();
