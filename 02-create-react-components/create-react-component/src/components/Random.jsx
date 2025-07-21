function Random() {
  let number = Math.round(Math.random() * 100);

  return (
    <h3 style={{ backgroundColor: "#776691" }}>Random number is : {number}</h3>
  );
}
export default Random;
