// handleFileUpload.js
export const handleFileUpload = async (
  file,
  setUploading,
  setImageUrl,
  setProfilePhoto
) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

  setUploading(true);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    setImageUrl(data.secure_url);
    setProfilePhoto(data.secure_url);
  } catch (error) {
    console.error("Error uploading image:", error);
  } finally {
    setUploading(false);
  }
};
