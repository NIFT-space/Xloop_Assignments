// models/FormSubmission.js
import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

export default mongoose.models.FormSubmission || mongoose.model('FormSubmission', FormSchema);
