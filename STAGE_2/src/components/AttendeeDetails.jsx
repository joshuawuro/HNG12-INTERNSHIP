import React, { useState } from "react";
import ProgressBar2 from "./ProgressBar2";
import { handleFileUpload } from "./handleFileUpload"; // Import the function
import { useNavigate } from "react-router-dom"; // For navigation

const AttendeeDetails = ({ onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("hello@avioflagos.io"); // Prefilled email
  const [specialRequest, setSpecialRequest] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(""); // For error messages
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !imageUrl) {
      setError(
        "Please fill in all required fields and upload a profile photo."
      );
      return;
    }

    // Log attendee details
    console.log("Attendee Details:", {
      name,
      email,
      specialRequest,
      profilePhoto,
    });

    // Simulate a successful submission
    alert("Ticket reserved successfully!");

    // Redirect to the next page
    navigate("/ticket-confirmation"); // Replace with your desired route
  };

  return (
    <div className="bg-lighterblue border-1 border-blue text-white p-6 rounded-2xl max-w-[500px] mx-auto">
      <ProgressBar2 />

      <form onSubmit={handleSubmit}>
        {/* Upload Profile Photo */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Upload Profile Photo *
          </label>
          <div className="border-2 border-dashed border-lightblue p-4 rounded-lg text-center">
            {uploading ? (
              <p className="text-sm text-gray-500">Uploading...</p>
            ) : imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile Preview"
                className="w-60 h-60 rounded-full mx-auto object-cover"
              />
            ) : (
              <>
                <p className="mb-2">Drag & drop or click to upload</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(
                        e.target.files[0],
                        setUploading,
                        setImageUrl,
                        setProfilePhoto
                      );
                    }
                  }}
                  className="hidden"
                  id="profilePhoto"
                  required
                />
                <label
                  htmlFor="profilePhoto"
                  className="cursor-pointer bg-nextblue text-white px-4 py-2 rounded-lg"
                >
                  Upload Photo
                </label>
              </>
            )}
          </div>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Enter your name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md bg-background border border-lightergreen"
            required // Make the field mandatory
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Enter your email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-md bg-background border border-lightergreen"
            required // Make the field mandatory
          />
        </div>

        {/* Special Request */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Special request?
          </label>
          <textarea
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className="w-full p-2 rounded-md bg-background border border-lightergreen"
            rows="4"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 rounded-lg text-nextblue border border-nextblue"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-nextblue rounded-lg text-white"
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
