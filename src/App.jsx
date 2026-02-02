// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react";

function App() {
  // State (EStado)
  // let message = "Teste"; Não precisa mais por conta do uso do useState

  const [message, setMessage] = useState("Uma mensagem"); // Entre parentese fica o valor inicial do estado

  return (
    <dvi>
      <h1>Olá, {message}</h1>
      <button
        onClick={function () {
          // message = "Outra mensagem sem arrow funcion"; Não funciona desa forma, use o useState conforme abaixo
          setMessage("Outra mensagem sem arrow funcion");
        }}
      >
        Mudar mensagem
      </button>
      <button
        onClick={() => {
          setMessage("Outra mensagem com arrow funcion");
        }}
      >
        Mudar mensagem 2 com arrow funcion
      </button>
    </dvi>
  );
}

export default App;
