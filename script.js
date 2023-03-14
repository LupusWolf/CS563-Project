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
    left.innerHTML = 'Hello, I am Matthew Cole (He/Him). I am currently pursuing a Masters in Computer Science. I am generally interested in software engineering, but I am not particularly specialized within a given field. I have been programming since I was young and have coded in a wide variety of languages, but I am most comfortable in C#, Python, and C++. I generally am very flexible when it comes to languages since I have worked with so many and I am able to pick up languages relatively quickly. However, I would say that I find python to be my most comfortable language for very small programs and I find C# to be my most comfortable language for larger programs. I don\'t have really any projects of note which is a huge problem that I know I need to work on. Building up a portfolio is a big part of what a potential employer is going to look for and that is what I would consider my biggest current weakness.';
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
    setupTransition("work");
    left.appendChild(createListElement("Classes", ["CS566","CS563","CS510Java"]));
    right.appendChild(createListElement("Languages", ["C#","C++","Python","Java"]));
}
document.querySelector("#work").addEventListener("click", setPreviousWork);

function setProjects()
{
    setupTransition("projects");
    left.innerHTML = 'Projects';
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