import { Toaster, toast } from "sonner";
import { BiCheck } from "react-icons/bi";

function App() {
  return (
    <main>
      <h1>Ejemplos de Toast:</h1>
      <ul>
        <li onClick={() => toast("Mi toast básico")}>Básico</li>
        <li
          onClick={() =>
            toast("Mi toast", {
              description: "Con una descripcion y un icono",
              icon: <BiCheck />,
            })
          }
        >
          Descripción e Icono
        </li>
      </ul>
      <Toaster />
    </main>
  );
}

export default App;
