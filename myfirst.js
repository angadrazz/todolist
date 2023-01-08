var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! jymfydtr,klyi');
}).listen(8000);

// var greet = document.createElement(p);
// greet.innerHTML = 'Hello ${name}';
// var name = "Ninja";
// document.body.append(greet);
// document.body.append('Nice to meet you, ${name}!');

let div = document.querySelector('.container');

for (let i = 0; i < 1000; i++) {
   let p = document.createElement('p');
   p.textContent = `Paragraph ${i}`;
   div.appendChild(p);
}


function modifyArray(arr) {
  // Write the logic here
  const newArr = arr.filter(function (ele) {
      return ele > 0;
  });
  newArr.map((val, index) => {
      newArr[index] = val * 2;
  })
  //    newArr.forEach(function(element, index) { 
  //        newArr[index]=newArr[index]*2;
  //         });

  return newArr;
}