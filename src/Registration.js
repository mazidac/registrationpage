import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";



function Registration(props) {
    const newUrl = useHistory();
    console.log(props)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      
        console.log(data)
//    const [inputValues, setInputValues] = useState(null);
   props.setInputValues(data)
   newUrl.push('/thank-you')
    };
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="" {...register("name")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("lastname", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
}

export default Registration;