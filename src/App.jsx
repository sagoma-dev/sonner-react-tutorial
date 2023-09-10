import { Toaster, toast } from "sonner";

function App() {
  return (
    <main>
      <h1>Ejemplos de Toast:</h1>
      <ul>
        <li onClick={() => toast("Mi toast básico")}>Básico</li>
      </ul>
      <Toaster />
    </main>
  );
}

export default App;
