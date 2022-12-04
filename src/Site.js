import { useState } from 'react';

function Site() {
  const [formFields, setFormFields] = useState([
    { nombre: '', apellidoPaterno: '',apellidoMaterno: '', edad: '', sexo: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      nombre: '', 
      apellidoPaterno: '',
      apellidoMaterno: '', 
      edad: '', 
      sexo: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="Site">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='nombre'
                placeholder='Nombre'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='apellidoPaterno'
                placeholder='Apellido Paterno'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <input
                name='apellidoMaterno'
                placeholder='Apellido Materno'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <input
                name='edad'
                placeholder='Edad'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <input
                name='sexo'
                placeholder='Sexo F(1) M(0)'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Site;
