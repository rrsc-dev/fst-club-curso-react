import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescripion] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        name=""
        id=""
        value={title}
        placeholder="Título"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={description}
        placeholder="Descrição"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(event) => setDescripion(event.target.value)}
      />
      <button
        onClick={() => onAddTaskSubmit(title, description)}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
