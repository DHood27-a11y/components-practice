//created a function called Greeting that will have a prop called "name"
//I will assign a name later in my app.jsx file when I import the file
//What will render on screen is what I have as my return
//export will be used so that I can import this into my app.jsx file

function Greeting({ name }) {
  console.log(name);
  return <h1>Hello, {name}</h1>;
}

export default Greeting;
