import PropTypes from "prop-types";

function Hololive({ name, color }) {
  return <h1 style={{ color: `${color}` }}>I like {name}</h1>;
}

const idolILike = [
  { name: "Bae", color: "red", id: 0 },
  { name: "Kronii", color: "blue", id: 1 },
  { name: "Ame", color: "yellow", id: 2 },
  { name: "Gura", color: "aqua", id: 3 },
];

function IdolDubut(idol) {
  return <Hololive name={idol.name} color={idol.color} key={idol.id} />;
}

IdolDubut.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  key: PropTypes.number.isRequired,
};

function App() {
  return <div className="App">{idolILike.map(IdolDubut)}</div>;
}

export default App;
