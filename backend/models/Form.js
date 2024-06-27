const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const formSchema = new Schema({
  title: { type: String, enum: ['businessman', 'reporter', 'secretary'] },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  position: { type: String, enum: ['director', 'manager', 'employee'] },
  company: { type: String, required: true },
  business: { type: String, required: true },
  employees: { type: String, enum: ['trainee', 'colleague', 'associate'] },
  street: { type: String, required: true },
  additional: { type: String, required: true },
  zip: { type: String, required: true },
  place: { type: String, enum: ['Street', 'District', 'City'] },
  country: { type: String, required: true },
  code: { type: String, required: true },
  phone: { type: String, required: true },
  your_email: { type: String, required: true },
  checkbox: { type: Boolean, default: false }
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
