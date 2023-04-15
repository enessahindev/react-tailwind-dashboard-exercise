import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex min-h-full items-center justify-center mt-[50px]">
        <div className="w-full max-w-md space-y-8">
          <div>
            <picture>
              <img
                className="mx-auto h-12 w-auto"
                src="../logo.png"
                alt="MadebyU"
              />
            </picture>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up to Dashboard
            </h2>
            <form className="space-y-4 md:space-y-6 mt-4" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  placeholder="name@enessahin.dev"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="•••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-gray-100 bg-red-700 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already a MadebyU member?
                <Link
                  to="/Login"
                  className="font-medium text-blue-500 hover:underline "
                >
                  &nbsp;Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
