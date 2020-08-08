import React from "react";
import { useForm } from "react-hook-form";

const EditForm = (props)=> {
  const { register, errors, handleSubmit, setValue} = useForm({
      defaultValues: props.currentUser
  });

  setValue('name', props.currentUser.name)
  setValue('username', props.currentUser.username)

  const onSubmit = (data,e) => {
    data.id =  props.currentUser.id
props.updateUser(props.currentUser.id,data)
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

      <button>Edit user</button>
    </form>
  );
};

export default EditForm;