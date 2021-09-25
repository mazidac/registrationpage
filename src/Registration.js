import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Registration(props) {
  const newUrl = useHistory();
  console.log(props);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    props.setInputValues(data);
    newUrl.push("/thank-you");
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center"> User Registration</h2>
        <div className="border p-3 mt-3 ml-4">

          <div className="row">
            <div className="col-lg-3">
              <th>First name *</th>
              <input
                placeholder="Enter first name"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  minLength: 3,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="form-control"
              />
            </div>
            <div className="col-lg-3">
              <th>Last Name</th>
              <input
                placeholder="Enter last name"
                {...register("lastname", {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                  maxLength: 20,
                })}
                className="form-control"
              />
            </div>
          </div>
          <br />
          <div className="row ml-4">
            <div className="col-lg-3">
              <th> Gender * </th>
              <div>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  defaultValue=""
                  {...register("gender")}
                />{" "}
                Male
              </div>
              <div>
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  defaultValue=""
                  {...register("gender")}
                />{" "}
                Female
              </div>
            </div>
            <div className="col-lg-3">
              <th> Date of Birth *</th>
              <input
                type="date"
                defaultValue=""
                {...register("dof")}
                className="form-control"
              />
            </div>
          </div>

          <br />
          <div className="row ml-4">
            <div class="col-lg-3">
              <th>Email *</th>
              <input
                placeholder="Enter your Email"
                type="text"
                className="form-control"
                defaultValue=""
                {...register("e")}
              />
            </div>
            <div class="col-lg-3">
              <th>Mobile Number *</th>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="form-control"
                defaultValue=""
                {...register("m")}
              />
            </div>
          </div>
          <br />
          <div className="row ml-4">
            <div class="col-lg-3">
              <th>State *</th>
              <input
                type="text"
                className="form-control"
                defaultValue=""
                {...register("st")}
              />
            </div>
            <div class="col-lg-3">
              <th>District *</th>
              <input
                type="text"
                className="form-control"
                defaultValue=""
                {...register("dis")}
              />
            </div>
          </div>
          <br />
          <div className="row ml-4">
            <div class="col-lg-6">
              <th>Address</th>
              <textarea
                placeholder="Enter your address"
                type="text"
                className="form-control"
                defaultValue=""
                {...register("addr")}
              />
            </div>
          </div>
          <br />
          <div className="text-center">
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
