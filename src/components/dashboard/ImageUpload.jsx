import React from "react";
import { useState } from "react";
import Spinner from "../utility/Spinner";
import Image from "next/image";
import noImage from "../../../public/images/no-image.png";

const ImageUpload = ({
  label,
  image,
  setImage,
  setImagePreview,
  imagePreview,
}) => {
  const [uploadingImage, setUploadingImage] = useState(false);

  // Image upload to AWS
  // Change image with preview
  // const handleImageChange = async (e) => {

  //   setUploadingImage(true);

  //   const file = e.target.files;

  //   if (file.length === 1) {
  //     const data = new FormData();
  //     data.set("file", file[0]);

  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: data,
  //     });

  //     const imageAwsLink = await response.json();

  //     setImage(imageAwsLink);
  //     //   console.log(imageAwsLink);
  //     setUploadingImage(false);
  //   }
  // };

  // Local image upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));

    try {
      if (file) {
        const data = new FormData();
        data.append("file", file);

        const response = await fetch("/api/localUpload", {
          method: "POST",
          body: data,
        });

        const newImageName = await response.json();
        setImage(newImageName);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className="w-full max-w-xs flex flex-col items-center justify-start">
      <div className="">
        <label className="label mb-1">
          <span className="label-text text-gray-400">{label}</span>
        </label>
        <Image
          className="rounded-2xl object-contain fill-current mb-2 border-[1px] border-gray-300"
          src={imagePreview ? imagePreview : noImage}
          alt="pizza preview"
          //   layout="fill"
          // sizes="(max-width: 8rem)"
          width={200}
          height={200}
        />
      </div>

      <div className="form-control mt-2 w-[200px]">
        <label className="rounded-xl w-full max-w-xs">
          <input type="file" className="hidden" onChange={handleImageChange} />
          <span className=" text-gray-400 rounded-xl w-full max-w-xs text-center p-3 border-[1px] border-gray-300 cursor-pointer bg-white flex items-center justify-center gap-3">
            Browse image
            {uploadingImage && <Spinner />}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
