import Booking from "../models/Booking.js";



import cloudinary from 'cloudinary'; // Assuming you're using Cloudinary for file uploads


export const createBooking = async (req, res) => {
  try {
    // Destructure the body and files from the request
    const { firstName, lastName, email, phone, accommodationType, location, message ,gender} = req.body;
    const photo = req.files?.photo && req.files.photo[0];
    const adhaar = req.files?.adhaar && req.files.adhaar[0];

    // Validate if required fields are provided
    if (!email || !phone) {
      return res.status(400).json({ success: false, message: "Email and phone are required!" });
    }

    // Process the images using Cloudinary (if provided)
    const uploadImages = async (file) => {
      if (file) {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
        return result.secure_url;
      }
      return null;
    };

    const photoUrl = await uploadImages(photo);
    const adhaarUrl = await uploadImages(adhaar);

    // Prepare the booking data
    const bookingData = {
      firstName,
      lastName,
      email,
      phone,
      accommodationType,
      location,
      message,
      gender,
      photo: photoUrl,
      adhaar: adhaarUrl,
    };

    // Create a new booking in the database
    const booking = new Booking(bookingData);
    await booking.save();

    // Return success response
    res.status(201).json({ success: true, message: "Booking successfully created", data: booking });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

{/*---grt bookings---- */}
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



