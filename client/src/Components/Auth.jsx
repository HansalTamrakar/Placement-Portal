import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AuthModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [personData, setPersonData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonData({ ...personData, [name]: value });
    console.log(personData);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(personData);
  };

  return (
    <>
      {/* BACKGROUND OVERLAY */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-xl border border-gray-700"
        >
          <div className=" flex justify-between">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              {isSignup ? "Create Account" : "Sign In"}
            </h2>
            <button className="mb-6" onClick={onClose}>
              X
            </button>
          </div>

          <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm"></div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm/6 font-medium text-gray-100"
                  >
                    Email address
                  </label>
                  <div class="mt-2">
                    <input
                      required
                      autocomplete="email"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                  <br />
                  {isSignup && (
                    <div>
                      <label
                        for="email"
                        class="block text-sm/6 font-medium text-gray-100"
                      >
                        Name
                      </label>
                      <div class="mt-2">
                        <input
                          id="name"
                          type="name"
                          onChange={(e) => {
                            onChange(e);
                          }}
                          name="name"
                          required
                          autocomplete="email"
                          class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="block text-sm/6 font-medium text-gray-100"
                    >
                      Password
                    </label>
                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-semibold text-indigo-400 hover:text-indigo-300"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      required
                      autocomplete="current-password"
                      class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      onSubmit(e);
                    }}
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p class="mt-10 text-center text-sm/6 text-gray-400">
                Not a member?
                <a
                  href="#"
                  class="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="ml-2 text-orange-400 hover:underline"
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AuthModal;
