//button shows clicked in console when its clicked
//the only thing rendering to the page right now is the names and im not sure why.
//I checked the console, checked each component as well as the structure, as far as I know I dont have any syntax errors at least not any that are showing up in the console
//The only thing its registering from the PersonCard is the name element so Im not sure
import PersonCard from "./components/PersonCard.jsx";
import Greeting from "./components/Greeting.jsx";
import Button from "./components/Button.jsx";

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
