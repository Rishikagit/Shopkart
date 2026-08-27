
import { useForm } from "react-hook-form";
function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    alert("Form submitted successfully!");
  }

  return (
    <div>
      <h2>User Registration</h2>
      <p>Sign in to continue to your account</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required"
            })}
          />

          {errors.name && (
            <p>{errors.name.message}</p>
          )}
        </div>


        <div>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address"
              }
            })}
          />

          {errors.email && (
            <p>{errors.email.message}</p>
          )}
        </div>


        <div>
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
                message:
                  "Password must have 6+ characters, uppercase, lowercase and a number"
              }
            })}
          />

          {errors.password && (
            <p>{errors.password.message}</p>
          )}
        </div>


        <button type="submit">
          Sign In
        </button>

      </form>
    </div>
  );
}

export default Login;

