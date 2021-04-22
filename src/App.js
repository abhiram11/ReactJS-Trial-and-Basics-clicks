import "./styles.css";

export default function App() {
  var shoppinngList = ["FIFA", "COD", "CSGO", "PUBG", "VALORANT"];

  function bgColor(index) {
    if (index % 2 == 0) {
      return "green";
    }
    return "orange";
  }

  function clickHandler(item) {
    console.log(item, "Clicked!");
  }

  return (
    <div className="App">
      <h1>Shopping Lists</h1>
      <ul>
        {shoppinngList.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => clickHandler(item)}
              style={{ backgroundColor: bgColor(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
