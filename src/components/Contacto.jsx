import {useForm} from "react-hook-form"

const Contacto = () => {

    const {register, handleSubmit} = useForm()

    const enviar = (info) => {
        console.log(info)
    }
   

    return (
        <div className="contenedor">
            <h1>CONTACTO</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder='ingresa tu nombre' {...register("nombre")} />
                <input type="text" placeholder='ingresa tu apellido'  {...register("apellido")}/>                                  
                <input  type="email"placeholder='ingresa tu correo'  {...register("correo")}/>
                <input type="phone" placeholder='ingresa tu numero telefonico'  {...register("celular")}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto