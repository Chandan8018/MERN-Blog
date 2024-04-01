import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setLoading(true);

      setErrorMessage(null);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if(data.success === false){
        setErrorMessage(data.message)
      }

      setLoading(false);

      if(res.ok){
        navigate('/');
      }
      
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-12">
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
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
            
            <Label value="Your email" />
            <TextInput
              type="email"
              placeholder="name@Company.com"
              id="email"
              rightIcon={MdEmail}
              onChange={handleChange}
            />

            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="********"
              id="password"
              rightIcon={RiLockPasswordFill}
              onChange={handleChange}
            />

            <Button type="submit" gradientDuoTone="purpleToPink" disabled={loading}>
             {loading ? (
              <>
                <Spinner size='sm' />
                <span className="pl-3">Loading...</span>
              </>
             ) : ('Sign In')}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
