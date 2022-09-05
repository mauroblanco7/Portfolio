import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Form = () => {
  let regexName = /[a-z]{4,10}$/;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current.name.value.length &&
      form.current.surname.value.length &&
      form.current.email.value &&
      form.current.message.value
    ) {
      if (
        regexName.test(form.current.name.value) &&
        regexName.test(form.current.surname.value)
      ) {
        emailjs
          .sendForm(
            "gmail",
            "template_hdluw1p",
            form.current,
            "KGIOnLSnFM37YOMNq"
          )
          .then(
            (result) => {
              console.log(result.text);
              Swal.fire(
                `${form.current.name.value}`,
                "Tu email fue enviado con exito",
                "success"
              );
              form.current.reset();
            },
            (error) => {
              console.log(error.text);
              Swal.fire(
                `${error.text}`,
                "Tu email no fue enviado por motivos desconocidos.Puedes escribirme a mi email mauro.blnc.mb@gmail.com. Gracias!",
                "error"
              );
            }
          );
        form.current.reset();
      } else {
        Swal.fire(
          ``,
          "El nombre y apellido debe contener de 3 a 10 caracteres",
          "error"
        );
      }
    } else {
      Swal.fire(``, "Todos los campos son requeridos", "error");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div class="form-outline mb-4">
        <input
          type="text"
          id="form4Example1"
          name="name"
          class="form-control"
        />
        <label class="form-label" for="form4Example1">
          Nombre
        </label>
      </div>
      <div class="form-outline mb-4">
        <input
          type="text"
          id="form4Example1"
          name="surname"
          class="form-control"
        />
        <label class="form-label" for="form4Example1">
          Apellido
        </label>
      </div>
      <div class="form-outline mb-4">
        <input
          type="email"
          id="form4Example2"
          name="email"
          class="form-control"
        />
        <label class="form-label" for="form4Example2">
          Tu email
        </label>
      </div>

      <div class="form-outline mb-4">
        <textarea
          class="form-control"
          name="message"
          maxlength="400"
          id="form4Example3"
          rows="4"
        ></textarea>
        <label class="form-label" for="form4Example3">
          Mensaje
        </label>
      </div>
      <button type="submit" value="Send" class=" btn-block mb-4">
        Enviar
      </button>
    </form>
  );
};
export default Form;
