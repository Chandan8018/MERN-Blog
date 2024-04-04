import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto  ">
      <h1 className="text-3xl font-bold text-center my-7 dark:text-white">
        Create a Post
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            id="title"
            type="text"
            placeholder="Post Title"
            required
            className="flex-1 font-bold"
          />
          <Select>
            <option value="unselected">Select a catagory</option>
            <option value="Health">Health</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Sports">Sports</option>
            <option value="Science">Science</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 rounded-md border-teal-500 border-dotted p-5">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="pinkToOrange"
            size="sm"
            outline
          >
            Upload Image
          </Button>
        </div>
        <div className="h-80">
          <ReactQuill
            theme="snow"
            placeholder="Write something..."
            className="h-full dark:text-white "
            required
          />
        </div>
        <Button type="submit" gradientDuoTone="pinkToOrange" className="my-10">
          Publish
        </Button>
      </form>
    </div>
  );
}
