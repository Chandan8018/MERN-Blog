import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setimageUploadError] = useState(null);
  const [formData, setFormData] = useState({ image: null });

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setimageUploadError("Please select an image to upload");
        return;
      }
      setimageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setimageUploadError("Image upload failed. Please try again1.");
          setImageUploadProgress(null);
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setimageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setimageUploadError("Image upload failed. Please try again2.");
      setImageUploadProgress(null);
      console.log(error);
    }
  };
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
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="pinkToOrange"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                  strokeWidth={50}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                  })}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>

        {imageUploadError && (
          <Alert color="failure"> {imageUploadError} </Alert>
        )}

        {formData.image && (
          <img
            src={formData.image}
            alt="uploaded image"
            className="w-full object-cover"
          />
        )}
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
