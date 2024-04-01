import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left div */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white">
              ThinkBig's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            You can sign up with your email and password or with Google.
          </p>
        </div>

        {/* right div */}
        <div className="flex-1">
          <form className="flex flex-col gap-3">
            <Label value="Your username"/>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              />
            <Label value="Your email"/>  
              <TextInput
                type="text"
                placeholder="name@Company.com"
                id="email"
              />
            <Label value="Your password"/>  
              <TextInput
                type="text"
                placeholder="Password"
                id="password"
              />
            <Button type="submit" gradientDuoTone='purpleToPink'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
