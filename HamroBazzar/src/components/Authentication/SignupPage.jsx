import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import {useNavigate} from "react-router-dom"
import "./SignupPage.css";
import user from "../assets/user.webp";
import {  useState } from "react";
// import { signup } from "../../services/userServices";
// import idButton from '../assets/id-button.png'
import { signup } from "./../../services/userServices";


const schema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(3),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  deliveryAddress: z.string().min(6),
});

const SignupPage = () => {
  // let navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [formError, setFormError]= useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      const {data} = await signup(formData, profilePic);
      localStorage.setItem('token',data.token)
      window.location ="/"
      // navigate("/")
    } catch (error) {
      if(error.response && error.response.status === 400){
        setFormError(error.response.data.message)
      }
    }
   
  };
  console.log(profilePic);
  return (
    <section className="align_center form_page">
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>SignUp Form</h2>

        <div className="image_input_section">
          <div className="image_preview">
            <img
              src={profilePic ? URL.createObjectURL(profilePic) : user}
              id="file-ip-1-preview"
            />
          </div>
          <label htmlFor="file-ip-1" className="image_label">
            Upload Image
          </label>
          <input
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
            id="file-ip-1"
            className="image_input"
          />
        </div>

        {/* Form Inputs */}
        <div className="form_inputs signup_form_input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <em className="form_error">{errors.name.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              className="form_text_input"
              type="password"
              placeholder="Enter confirm password"
              {...register("confirmPassword")}
            />
          </div>

          <div className="signup_textares_section">
            <label htmlFor="deliveryAddress">Delivery Address</label>
            <textarea
              id="deliveryAddress"
              className="input_textarea"
              placeholder="Enter delivery address"
              {...register("deliveryAddress")}
            />
          </div>
        </div>
        {formError && <em className="form_error">{formError}</em>}

        <button className="search_buttton form_submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
