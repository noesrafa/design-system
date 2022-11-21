import Button from "./stories/atoms/button/Button";

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('hola')}>
        Primary button
      </Button>
      <Button variant="tertiary">
        Tertiary button
      </Button>
    </div>
  );
}

export default App;
