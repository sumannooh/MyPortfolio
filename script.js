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
