let container = document.getElementById("container");
let button = document.getElementById();

button.addEventListener ("click", function () {
    fetchData();

})
async function fetchData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();

        showData(data);
    } catch (error) {
        console.log(error);
    }
}
function showData(data){
    data.forEach((element) => {
        let subDiv = document.createElement("div");
        subDiv.className ="subDiv";

        let title = document.createElement("h3");
        title.innerHTML = element.title;

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = element.completed;

        subDiv.append(title, checkbox);
        container.appendChild(subDiv);
    });
}