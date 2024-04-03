import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto w-full p-3">
      <h1 className="my-7 text-3xl font-bold text-center ">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center overflow-hidden cursor-pointer shadow-md rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="profile"
            className="w-full h-full rounded-full object-cover border-4 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          rightIcon={FaUser}
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          rightIcon={MdEmail}
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          rightIcon={RiLockPasswordFill}
          placeholder="Password"
        />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          <GrUpdate className="mr-2 h-5 w-5 text-xl" />
          Update
        </Button>
      </form>
      <div className="mt-5 flex justify-between">
        <span className="cursor-pointer text-red-600">Delete Account</span>
        <span className="cursor-pointer text-red-600">Sign Out</span>
      </div>
    </div>
  );
}
