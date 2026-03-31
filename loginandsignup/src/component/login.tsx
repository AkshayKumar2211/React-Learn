import {useForm} from "react-hook-form"
import  type { SubmitHandler } from "react-hook-form";

interface FormData {
    email:string ;
    password:string;
}

const LoginForm:React.FC=()=>
{
    const  {
        register    ,
        handleSubmit,
        formState:{errors},
    }=useForm<FormData >();


    const onSubmit:SubmitHandler<FormData >=(data)=>{
        console.log(data);
    };


    return(
        <>
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" 
                    type="text"
                    placeholder="Enter your email"
                    {...register("email",{required:"Email is required"})}
                    />
                   {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" 
                    type="password"
                    placeholder="Enter your password"
                    {...register("password",{required:"Password is required"})}
                    />
                   {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}


export default LoginForm;