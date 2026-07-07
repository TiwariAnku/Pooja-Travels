import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Database Schema & Model
const bookingSchema = new mongoose.Schema({
  empName: { type: String, required: true },
  cellNo: { type: String, required: true },
  employeeEmail: { type: String, required: true },
  pickupAddress: { type: String, required: true },
  pickupDateTime: { type: String, required: true },
  dropAddress: { type: String, required: true },
  dropDateTime: { type: String, required: true },
  carType: { type: String, required: true },
  remarks: { type: String, default: 'None' },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// Transporter configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify email setup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Email config verification failed:', error);
  } else {
    console.log('✅ Gmail configuration ready!');
  }
});

// API Endpoint matching your frontend fetch URL
app.post('/api/booking', async (req, res) => {
  try {
    const { 
      empName, 
      cellNo, 
      employeeEmail, 
      pickupAddress, 
      pickupDateTime, 
      dropAddress, 
      dropDateTime, 
      carType, 
      remarks 
    } = req.body;

    // 1. Save booking reference to MongoDB local instance
    const newBooking = new Booking({
      empName,
      cellNo,
      employeeEmail,
      pickupAddress,
      pickupDateTime,
      dropAddress,
      dropDateTime,
      carType,
      remarks: remarks || 'None'
    });
    
    await newBooking.save();

    // 2. Draft structured HTML email payload layout
    const emailLayout = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee;">
        <h2 style="color: #ff9f1c; text-transform: uppercase; margin-bottom: 5px;">New Cab Booking Request</h2>
        <p style="font-size: 12px; color: #666; margin-top: 0;">GSTIN reference tracking proof logged</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        
        <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 150px;">Employee Name:</td><td>${empName}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Cell No:</td><td>${cellNo}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td>${employeeEmail}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Car Type:</td><td style="color: #ff9f1c; font-weight: bold;">${carType}</td></tr>
          
          <tr><td colspan="2"><hr style="border: none; border-top: 1px dashed #eee; margin: 10px 0;" /></td></tr>
          
          <tr><td style="padding: 6px 0; font-weight: bold;">Pick Up Address:</td><td>${pickupAddress}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Pick Up Schedule:</td><td>${pickupDateTime}</td></tr>
          
          <tr><td colspan="2"><hr style="border: none; border-top: 1px dashed #eee; margin: 10px 0;" /></td></tr>
          
          <tr><td style="padding: 6px 0; font-weight: bold;">Drop Address:</td><td>${dropAddress}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Drop Schedule:</td><td>${dropDateTime}</td></tr>
          
          <tr><td colspan="2"><hr style="border: none; border-top: 1px solid #eee; margin: 15px 0;" /></td></tr>
          
          <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Remarks:</td><td>${remarks || 'None'}</td></tr>
        </table>
      </div>
    `;

    // 3. Send email execution
    await transporter.sendMail({
      from: `"Pooja Travels Logging System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sends dispatch confirmation copy to yourself
      subject: `🚖 New Cab Booking Request - ${empName} (${carType})`,
      html: emailLayout,
    });

    res.status(201).json({ success: true, message: 'Booking stored and email logged successfully.' });
  } catch (error) {
    console.error('Backend endpoint processing failure:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});