//imported PersonCard file from created components folder
//imported Greeting file created from components folder
//imported Button file created from components folder
import PersonCard from "./components/PersonCard.jsx";
import Greeting from "./components/Greeting.jsx";
import Button from "./components/Button.jsx";
//created a function called App that will be "main page"
//created a function called handleClick that will listen for when user clicks a button on the screen and console log "the button was clicked!"
//the return key is what will help each component render/display to the screen
//Created an h1 element that will hold each personCard component which includes the following props: name,age,and occupation
//each prop holds a key value
//created another h1 element that will hold the added component that I created called "Greeting" which has a prop of "name" the value of "Deja"
//lastly I created an h1 element that will hold the added button component and it has a prop of "text" and "onClick" and text has a value of "Click Me!","Second button", and "Third button"
//export default App is used to export all app code into another server if needed
function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <>
      <h1> My 3 components:</h1>
      <PersonCard name="Deja" age={27} occupation="Developer" />
      <PersonCard name="Liza" age={34} occupation="Maid" />
      <PersonCard name="Polly" age={16} occupation="Student" />

      <h1>Added Component:</h1>
      <Greeting name="Deja" />

      <h1>Buttons:</h1>
      <Button text="Click me!" onClick={handleClick} />
      <Button text="Second button" onClick={handleClick} />
      <Button text="Third button" onClick={handleClick} />
    </>
  );
}

export default App;
