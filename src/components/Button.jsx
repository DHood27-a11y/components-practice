//created a function called button that has two props: text and onClick
//the return key will represent what I want rendered onto the screen in my app.jsx file
//this return shows that when I click the button to be activated when someone clicks and I want there to be text inside the button
//export will just let me transfer this info to my app.jsx file

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
