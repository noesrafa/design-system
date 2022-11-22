import Button from "./stories/atoms/button/Button";

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('hola')}>
        Primary button
      </Button>
      <Button variant="disable">
        Tertiary button
      </Button>
    </div>
  );
}

export default App;
