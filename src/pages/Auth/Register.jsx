import React from "react";
import { Link } from "react-router";


const Register = () => {
 
  return (
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <form >
          <fieldset class="fieldset">
            <div>
              <h3 className="font-bold text-2xl ">New to ScholarStream! </h3>
              <p>create your space here</p>
            </div>
            {/* Username */}
            <div>
              <label className="block ">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w- p-2 input  rounded"
                // {...register("username", { required: true })}
              />
              {/* {errors.username && (
                <p className="text-red-500 text-sm">Username is required</p>
              )} */}
            </div>

            {/* Photo URL */}
            <div>
              <label className="block ">Photo URL</label>
              <input
                type="file"
                placeholder="Enter photo URL"
                className=" p-2 input rounded file-input"
                // {...register("photoURL", { required: true })}
              />
              {/* {errors.photoURL && (
                <p className="text-red-500 text-sm">Photo URL is required</p>
              )} */}
            </div>
            {/* email */}
            <label class="label">Email</label>
            <input
              type="email"
              class="input"
              placeholder="Email"
            //   {...register("email", { required: true })}
            />

            {/* {errors.email?.type === "required" && (
              <p role="alert" className="text-red-500">
                email is required
              </p>
            )} */}

            {/* Password */}
            <label class="label">Password</label>
            <input
              type="password"
              class="input"
              placeholder="Password"
            //   {...register("password", {
            //     required: true,
            //     minLength: 6,
            //     pattern:
            //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            //   })}
            />

            {/* {errors.password?.type === "required" && (
              <p role="alert" className="text-red-500">
                password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p role="alert" className="text-red-500">
                password should be 6 character
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p role="alert" className="text-red-500">
                password must have an upper case , an lower case,one number ,
                one special character
              </p>
            )} */}

            <button class="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already have an account{" "}
            <Link
              state={location.state}
              to={`/auth/login`}
              className="text-secondary hover:underline hover:font-bold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
