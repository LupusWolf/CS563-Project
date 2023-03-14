let left = document.querySelector("#contentleft");
let right = document.querySelector("#contentright");
//app.innerHTML = '';

function setupTransition(classname)
{
    left.innerHTML = '';
    right.innerHTML = '';
    left.className = "contentBlock " + classname;
    right.className = "contentBlock " + classname;
}

function setAbout()
{
    setupTransition("about");
    var textNode = document.createElement('p');
    textNode.className = "textbox";
    textNode.innerText = 'Hello, I am Matthew Cole (He/Him). I am currently pursuing a Masters in Computer Science. I am generally interested in software engineering, but I am not particularly specialized within a given field. I have been programming since I was young and have coded in a wide variety of languages, but I am most comfortable in C#, Python, and C++. I generally am very flexible when it comes to languages since I have worked with so many and I am able to pick up languages relatively quickly. However, I would say that I find python to be my most comfortable language for very small programs and I find C# to be my most comfortable language for larger programs. I don\'t have really any projects of note which is a huge problem that I know I need to work on. Building up a portfolio is a big part of what a potential employer is going to look for and that is what I would consider my biggest current weakness.';
    left.appendChild(textNode);
    var image = document.createElement("img");
    image.src = 'matthew.jpg';
    image.width = 400;
    image.height = 400;
    image.style.borderRadius = "50%"
    image.alt = "headshot of Matthew Cole";
    image.style.display = "block";
    right.append(image);
}
document.querySelector("#about").addEventListener("click", setAbout);

function createListElement(title, elements)
{
    var node = document.createElement('ul');
    node.className = "resumeList";
    var childNode = document.createElement("li");
    childNode.innerHTML = "<h1>" + title + "</h1>";
    node.append(childNode);
    for (let element in elements)
    {
        childNode = document.createElement("li");
        childNode.innerText = elements[element];
        node.append(childNode);
    }
    return node;
}

function setPreviousWork()
{
    setupTransition("work textbox");
    left.appendChild(createListElement("Classes", ["CS566","CS563","CS510Java"]));
    right.appendChild(createListElement("Languages", ["C++","Python","Java", "SQL","C#"]));
}
document.querySelector("#work").addEventListener("click", setPreviousWork);

function setOneProject(node, title, description)
{
    var childNode = document.createElement("p");
    childNode.innerHTML = "<h1>" + title + "</h1>";
    node.append(childNode);
    childNode = document.createElement("p");
    childNode.innerText = description;
    node.append(childNode);
}
function setProjects()
{
    setupTransition("projects");
    setOneProject(left, "Left Title","Left Description")
    setOneProject(right, "Right Title","Right Description")
}
document.querySelector("#projects").addEventListener("click", setProjects);

function setContact()
{
    setupTransition("contact");
    left.innerHTML = 'Contact';
    right.innerHTML = '';
}
document.querySelector("#contact").addEventListener("click", setContact);

setAbout();