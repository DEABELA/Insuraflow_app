import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const ImageUploader = ({ inputFieldClassName }) => {
  const [image, setImage] = useState(null);
  const [filename, setFileName] = useState("No Selected Image");
  return (
    <div>
      <main>
        <form
          className=" flex flex-col justify-center items-center border-2 border-dashed border-[#1475cf] h-[150px] w-[300px] cursor-pointer rounded"
          action=""
          onClick={() =>
            document.querySelector(`.${inputFieldClassName}`).click()
          }
        >
          <input
            type="file"
            accept="image/*"
            className={inputFieldClassName}
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {image ? (
            <img src={image} alt={filename} width={150} height={60} />
          ) : (
            <MdCloudUpload color="#1475cf" size={60} />
          )}
        </form>
        <section className=" flex justify-between items-center rounded w-[300px]  bg-[#e9f0ff] mb-5">
          <div className=" flex items-center">
            <AiFillFileImage color="#1475cf" />
            {filename}
          </div>
          <span>
            <MdDelete
              onClick={() => {
                setFileName("No selected File");
                setImage(null);
              }}
              color="red"
            />
          </span>
        </section>
      </main>
    </div>
  );
};

export default ImageUploader;
