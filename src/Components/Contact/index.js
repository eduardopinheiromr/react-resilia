import imagem from "../../assets/img/contact.jpg";

import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contato</h1>
      <div className="flexdiv align-center p-5 pb-1 pt-0">
        <div className="w-50">
          <img src={imagem} alt="imagem-de-contato" />
        </div>
        <div className="flexdiv column w-50 h-100 justify-between">
          <label className="label-contato">Nome:</label>
          <input className="input-contato mb-2" />
          <label className="label-contato">Email:</label>
          <input className="input-contato mb-2" />
          <label className="label-contato">Mensagem:</label>
          <input className="input-message mb-2" />
          <div className="align-end">
            <button className="send-btn">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
