import React from 'react'

const Form = () => {
  return (
    <form>

  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">Name</label>
  </div>


  <div class="form-outline mb-4">
    <input type="email" id="form4Example2" class="form-control" />
    <label class="form-label" for="form4Example2">Email</label>
  </div>


  <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Mensaje</label>
  </div>


  <button type="submit" class=" btn-block mb-4">Enviar</button>
</form>
  )
}

export default Form