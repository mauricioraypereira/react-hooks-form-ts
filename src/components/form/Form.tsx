 import { useForms } from "../../hooks/useForms";
 import { FormSchema } from "../../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    alert("Dados enviados com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Digite seu nome" 
          {...register("name")} 
        />
        {errors.name && (<small>{errors.name.message}</small>)}
      </div>
      <button type="submit">Finalizar cadastro</button>
    </form>
  )
};

export default Form;