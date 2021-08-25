import "./styles.css";

const elemento = (
  <div>
    <h2>Olá Rodrigo!</h2>{" "}
  </div>
); //JSX

// componente
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
    </div>
  );
}
