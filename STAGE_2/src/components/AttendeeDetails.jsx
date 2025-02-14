import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

function AttendeeDetails() {
  // Store the selected file and the transformed Cloudinary image
  const [selectedFile, setSelectedFile] = useState(null);
  const [cloudinaryImage, setCloudinaryImage] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload to Cloudinary
  const handleUpload = async () => {
    if (!selectedFile) return;

    // 1) Prepare form data
    const formData = new FormData();
    formData.append("file", selectedFile);
    // Use the unsigned preset you created in the Cloudinary console
    formData.append("upload_preset", "my_unsigned_preset");

    try {
      // 2) Send file to Cloudinary
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/du6mvkngk/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      // data.public_id => The unique identifier Cloudinary assigns to your image

      // 3) Create a Cloudinary instance & transform the uploaded image
      const cld = new Cloudinary({
        cloud: {
          cloudName: "du6mvkngk", // Your cloud name
        },
      });

      // Build a Cloudinary image object with transformations
      const uploadedImage = cld
        .image(data.public_id)
        .format("auto")
        .quality("auto")
        .resize(auto().gravity(autoGravity()).width(500).height(500));

      setCloudinaryImage(uploadedImage);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C2D32] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#132E33] text-white p-6 rounded-md shadow-lg">
        {/* Header: Title + Step Indicator */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Attendee Details</h1>
          <span className="text-sm opacity-75">Step 2/3</span>
        </div>

        {/* Upload Profile Photo */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Upload Profile Photo</label>
          <div className="border-2 border-dashed border-gray-500 rounded-md p-6 text-center">
            <p className="text-gray-300 mb-3">Drag &amp; drop or click below</p>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-300 file:mr-4 file:py-2 
                         file:px-4 file:rounded file:border-0 file:bg-[#1A3A3F] 
                         file:text-gray-300 hover:file:bg-gray-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mb-6 px-4 py-2 w-full rounded-md bg-[#02ECDB] text-black font-semibold 
                     hover:opacity-90 transition"
        >
          Upload to Cloudinary
        </button>

        {/* Preview the uploaded image (if any) */}
        {cloudinaryImage && (
          <div className="mb-6 text-center">
            <p className="mb-2">Uploaded Image Preview:</p>
            <AdvancedImage cldImg={cloudinaryImage} />
          </div>
        )}

        {/* Email Input */}
        <div className="mb-6">
          <label className="block mb-2 font-medium" htmlFor="email">
            Enter your email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="hello@avioflags.io"
            className="w-full p-2 rounded-md bg-[#1A3A3F] text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-[#1A3A3F]"
          />
        </div>

        {/* Special Request Textarea */}
        <div className="mb-6">
          <label className="block mb-2 font-medium" htmlFor="specialRequest">
            Special request?
          </label>
          <textarea
            id="specialRequest"
            rows="3"
            className="w-full p-2 rounded-md bg-[#1A3A3F] text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-[#1A3A3F]"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded-md border border-gray-400 text-gray-300 
                             hover:bg-gray-700 transition"
          >
            Back
          </button>
          <button
            className="px-4 py-2 rounded-md bg-[#02ECDB] text-black font-semibold 
                             hover:opacity-90 transition"
          >
            Get My Free Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttendeeDetails;
