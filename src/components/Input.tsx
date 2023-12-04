type Input = {
  inputType: "text" | "number";
  inputs: string;
  setInputs: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ inputType, inputs, setInputs }: Input) => {
  return (
    <div>
      <input
        value={inputs}
        type={inputType}
        placeholder="enter todo..."
        onChange={(e) => setInputs(e.target.value)}
        className="w-96 px-2 py-2 outline-none text-xl text-black placeholder:text-black"
      />
    </div>
  );
};
export default Input;
