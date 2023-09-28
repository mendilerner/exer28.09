import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./RegularForm.css";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const RegularForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: "all",
  });
  const handleRegistration: SubmitHandler<FormData> = (data) =>
    alert(JSON.stringify(data));
  // const handleError = (errors: FieldErrors<FormData>) => {
  //   console.log(errors);
  // };

  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 2,
        message: "Name must have at least 2 characters",
      },
      maxLength: {
        value: 10,
        message: "Name must have until 10 characters",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "email is not valid",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
      maxLength: {
        value: 20,
        message: "Password must have the most 20 characters",
      },
      pattern: {
        value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!]).*$/,
        message:
          "must be at least one lowercase , one uppercase, one digit and one character",
      },
    },
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit(handleRegistration)}
    >
      <h2 className="form-heading">form with React Hook Form</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="username">
          Name
        </label>
        <input
          className="form-input"
          id="username"
          type="text"
          {...register("username", registerOptions.name)}
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="error-message" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-input"
          id="email"
          type="email"
          {...register("email", registerOptions.email)}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="error-message" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-input"
          id="password"
          type="text"
          {...register("password", registerOptions.password)}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="error-message" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <button className="form-submit-button">Submit</button>
    </form>
  );
};
export default RegularForm;
