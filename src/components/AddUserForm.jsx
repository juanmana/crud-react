import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props)=> {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data,e) => {

    props.addUser(data)

    e.target.reset()

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: "campo requerido" }
        })}
      />      
      
      {errors.name && errors.name.message}


      <label>Username</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: "campo requerido" }
        })}
      />
            {errors.username && errors.username.message}

      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
