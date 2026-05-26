const button = document.querySelector("button");
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");



//1. Take the button and wait for for a prompt using the addEventlistener
button.addEventListener("click", function () {
    //2. Waiting on the prompt to be triggered using "clicked"
    //3. When the prompt is triggered, a name will be asked 
    const name = prompt("What is your name?");
    const mood = prompt("whats your mood for today?");
    //4. The heading with change due to the textconent
    heading.textContent = `Hi, ${name}!`;
    paragraph.textContent = `Hello, ${name}! You're feeling ${mood} today.`;
    //. console.log aloows us to see the output in the console via inspect
    console.log("The button has been clicked");
    console.log("The user has entered their name and mood");
    button.textContent = "Clicked";
   
})







































































