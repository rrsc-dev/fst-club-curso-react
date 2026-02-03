import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescripion] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        name=""
        id=""
        value={title}
        placeholder="Título"
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        name=""
        id=""
        value={description}
        placeholder="Descrição"
        onChange={(event) => setDescripion(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos.");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescripion("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
