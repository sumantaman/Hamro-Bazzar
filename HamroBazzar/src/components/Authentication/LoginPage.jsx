import React from "react";
import { useForm } from "react-hook-form";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import "./LoginPage.css";


const schema = z.object({
    email: z.string().email().min(3),
    password: z.string().min(8)
})
const LoginPage = () => {
  const { register,handleSubmit, formState :{errors} } = useForm({resolver :zodResolver(schema)});
  
//   const [user, setUser] = useState({ name: "", phone: 0 });
  // const passwordRef = useRef(null)

  // const nameRef = useRef(null)
  // const phoneRef = useRef(null)
  // const user = {
  //             name : "",
  //             phone : 0,
  //         }
  //         user.name=(nameRef.current.value);
  //         user.phone=parseInt(phoneRef.current.value);
  //         console.log(user)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
const onSubmit = (formData )=> console.log(formData);
  return (
    <section className="align_center form_page">
      <form action="" className="authentication_form" 
      onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              // ref={nameRef}
              id="email"
              className="form_text_input"
              placeholder="Enter your email address"
            //   onChange={(e) => setUser({ ...user, name: e.target.value })}
            //   value={user.name}
            {...register("email")}
            />
            {errors.email && <em className="form_error">{errors.email.message}</em>}
            {/* {errors.name?.type=== "minLength" && <em className="form_error">Name should be 3 or 4 characters long<em>} */}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form_text_input"
              placeholder="Enter your password ?"
              {...register("password")}
            />
             {errors.password && <em className="form_error">{errors.password.message}</em>}
            {/* <button type='button' onClick={()=>passwordRef.current.type = "password"}>Hide Password</button>
                    <button type='button'onClick={()=>passwordRef.current.type = "text"}>Show Password</button> */}
          </div>

          <button className="search_buttton form_submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
