import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ItemList from "./components/ItemList";

const App = () => {
  type todos = {
    id: number;
    title: string;
  };
  const [todos, setTodos] = useState<todos[]>([]);
  const [inputs, setInputs] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputs) {
      setTodos((prev) => [...prev, { id: Date.now(), title: inputs }]);
    } else {
      alert("please fill the input");
    }
    setInputs("");
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[500px] mx-auto border  p-5">
        <h1 className="text-4xl font-bold text-center underline">Todo App</h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-center gap-5 mt-5"
          >
            <Input inputs={inputs} setInputs={setInputs} inputType="text" />
            <Button className="bg-green-600 px-3 py-2">Add</Button>
          </form>
          <div className="mt-10 h-52 overflow-y-auto">
            {todos.length > 0 ? (
              todos.map((item) => (
                <ItemList
                  item={item.title}
                  handleDelete={() => handleDelete(item.id)}
                />
              ))
            ) : (
              <p className="text-center text-red-600">Nothing to display...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
