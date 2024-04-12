import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    object: "",
    message: "",
  });

  function AddContent(event) {
    const content = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [content]: value });
  }
  function returnForm(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={returnForm}>
      <div className="row w-50">
        <label htmlFor="Nom">Nom</label>
        <input type="text" onChange={AddContent} name="nom" />
        <label htmlFor="email">E-mail</label>
        <input type="email" onChange={AddContent} name="email" />
        <label htmlFor="object">Objet</label>
        <input type="text" onChange={AddContent} name="object" />
        <label htmlFor="message">Message</label>
        <input type="text" onChange={AddContent} name="message" />
        <input type="submit" value="Envoyer" />
      </div>
    </form>
  );
};

export default ContactForm;
