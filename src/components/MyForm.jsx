import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role)

    setName("");
    setEmail("");
    setBio("");
    setRole("");

  }

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
        <label>
          <span>Bio:</span>
          <textarea 
            name="bio" 
            placeholder="Descrição do Usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
          <span>Função no Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm