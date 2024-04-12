import React from "react";
import { useState } from "react";

const RegistForm = () => {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    mdp: "",
    validMdp: "",
  });

  function handleChange(event) {
    const content = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [content]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row w-50">
        <div className="col-6">
          <label htmlFor="Prenom">Prenom</label><br />
          <input type="text" name="prenom" onChange={handleChange}/>
        </div>
        <div className="col-6">
          <label htmlFor="Nom">Nom</label><br />
          <input type="text" name="nom" onChange={handleChange}/>
        </div>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" onChange={handleChange}/>
        <label htmlFor="mdp">Mot de passe</label>
        <input type="text" name="mdp" onChange={handleChange}/>
        <label htmlFor="validMdp">Confirmer le mot de passe</label>
        <input type="text" name="validMdp"  onChange={handleChange}/>
        <input type="submit" value="S'inscrire" />
      </div>
    </form>
  );
};

export default RegistForm;
