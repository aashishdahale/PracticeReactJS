function App() {
  // let foodItems = ["Dal", "vegitable", "Salad", "Milk", "Rice", "Ghee"];
  let foodItems = [];
  let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
