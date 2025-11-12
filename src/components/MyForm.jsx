import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email)
  }

  console.log(name, email)

  return (
    <div>
      {/*Criação do Formulário*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name} 
          />
        </div>
        {/*Label Envolvendo Input*/}
        <label>
          <span>Email:</span>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm