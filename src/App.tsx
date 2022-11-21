import Button from "./stories/atoms/button/Button";

function App() {
  return (
    <div className="App">
      <Button variant="primary" onClick={() => console.log('hola')}>
        Primary button
      </Button>
      <Button onClick={() => console.log('hi!')}>
        Hola
      </Button>
    </div>
  );
}

export default App;
