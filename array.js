var students = ["Simran", "Sakshi", "Komal", "Ishita", "Manya"];
var selected = students.slice(-4,-2);

 console.log(selected);

 var greet = document.createElement("p");
greet.innerHTML = `Hello ${name}`;
var name = "Ninja";
document.body.append(greet);
document.body.append(`Nice to meet you, ${name}!`);


console.log(greet);