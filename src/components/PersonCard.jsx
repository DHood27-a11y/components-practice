//I created a function called PersonCard that will hold 3 props: name, age, and occupation
//I will give these props values in my App jsx file

function PersonCard({ name, age, occupation }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p> Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </>
  );
}

export default PersonCard;
