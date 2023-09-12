import { Toaster, toast } from "sonner";
import { BiCheck } from "react-icons/bi";

function simulatePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(Math.round(Math.random() * 100) > 40 ? resolve : reject, 2000);
  });
}

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
        <li onClick={() => toast.success("Mi success toast")}>Toast Success</li>
        <li onClick={() => toast.error("Mi error toast")}>Toast Error</li>
        <li
          onClick={() =>
            toast("Mi toast con boton", {
              action: {
                label: "Aceptar",
                onClick: () => console.log("Aceptar"),
              },
            })
          }
        >
          Toast con Boton adicional
        </li>
        <li
          onClick={() => {
            toast.promise(simulatePromise, {
              error: "Algo salio mal",
              success: "Todo correcto",
              loading: "Cargando...",
            });
          }}
        >
          Toast con Promesas
        </li>
      </ul>
      <Toaster />
    </main>
  );
}

export default App;
