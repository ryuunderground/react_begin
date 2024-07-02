function Hololive({ name, color }) {
  return <h1 style={{ color: `${color}` }}>I like {name}</h1>;
}

const idolILike = [
  { name: "Bae", color: "red" },
  { name: "Kronii", color: "blue" },
  { name: "Ame", color: "yellow" },
  { name: "Gura", color: "aqua" },
];

function App() {
  return (
    <div className="App">
      {idolILike.map((idol) => (
        <Hololive name={idol.name} color={idol.color} />
      ))}
    </div>
  );
}

export default App;
