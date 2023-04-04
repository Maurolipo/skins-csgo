import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="ingresa tu nombre"
          onChange={handleChange}
          name="name"
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
