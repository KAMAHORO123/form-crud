// controllers/formController.js

const Form = require('../models/Form'); // Assuming you have a Mongoose model for Form

const formController = {
  submitForm: async (req, res) => {
    try {
      const formData = req.body;
      const newForm = new Form(formData);
      await newForm.save();
      res.status(201).json(newForm);
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).send('Server error');
    }
  },

  getAllForms: async (req, res) => {
    try {
      const forms = await Form.find();
      res.status(200).json(forms);
    } catch (error) {
      console.error('Error fetching forms:', error);
      res.status(500).send('Server error');
    }
  },

  getFormById: async (req, res) => {
    try {
      const form = await Form.findById(req.params.id);
      if (!form) {
        return res.status(404).json({ msg: 'Form not found' });
      }
      res.status(200).json(form);
    } catch (error) {
      console.error('Error fetching form by ID:', error);
      res.status(500).send('Server error');
    }
  },

  updateForm: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedForm = await Form.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedForm) {
        return res.status(404).json({ msg: 'Form not found' });
      }
      res.status(200).json(updatedForm);
    } catch (error) {
      console.error('Error updating form:', error);
      res.status(500).send('Server error');
    }
  },

  deleteForm: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedForm = await Form.findByIdAndDelete(id);
      if (!deletedForm) {
        return res.status(404).json({ msg: 'Form not found' });
      }
      res.status(200).json({ msg: 'Form deleted' });
    } catch (error) {
      console.error('Error deleting form:', error);
      res.status(500).send('Server error');
    }
  }
};

module.exports = formController;
