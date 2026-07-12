function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "suman" && pass === "22314") {
        document.getElementById("message").innerHTML =
        "✅ Welcome Suman!";
    } else {
        document.getElementById("message").innerHTML =
        "❌ Wrong Username or Password";
    }

}
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
function darkMode() {
    document.body.classList.toggle("dark");
}
function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let sum = a + b;

    document.getElementById("result").innerHTML =
        "Result: " + sum;
}
function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("task").value = "";
}

const quotes = [
    "Success comes from hard work.",
    "Never stop learning.",
    "Practice makes perfect.",
    "Believe in yourself.",
    "Every day is a new opportunity."
];

function showQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[random];
}
