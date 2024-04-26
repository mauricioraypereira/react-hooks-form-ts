 import { useForms } from "../../hooks/useForms";
 import { FormSchema } from "../../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    alert("Dados enviados com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border border-slate-300">
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Digite seu nome" 
          {...register("name")}
          className="h-10 pl-2 rounded-md border border-slate-300" 
        />
        {errors.name && (<small className="text-red-500 italic">{errors.name.message}</small>)}
      </div>
      <button type="submit" className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all">Finalizar cadastro</button>
    </form>
  )
};

export default Form;