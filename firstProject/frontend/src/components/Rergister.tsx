import { useForm, type SubmitHandler  } from "react-hook-form";

interface Registration
{
    email:string;
    password:string;
}


const RegisterFormAndLogin: React.FC =() =>{


    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm<Registration>();

    const onSubmit:SubmitHandler<Registration>=(data:any)=>{
        console.log(data);
    }

    return(
        <div className="w-full max-w-xs">
        <h2 className="">This is a Register Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label htmlFor="email">
                Email
            </label>

            <input
            id='email' 
            type="text"
             {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
            </div>

              <div>
            <label htmlFor="password">
                Password
            </label>

            <input
            id='password' 
            type="text"
            {...register("password",{required:"Password is required"})}
            />
            {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>



        </div>
    )
}


export default RegisterFormAndLogin;


