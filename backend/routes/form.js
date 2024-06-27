const { Router } = require("express");
const formController = require("../controllers/formController");

const router = Router();


router.post("/submit", formController.submitForm); // Route for submitting the form
router.get("/forms", formController.getAllForms); // Route to get all submitted forms
router.get("/form/:id", formController.getFormById); // Route to get a specific form by ID
router.put("/form/:id", formController.updateForm); // Route to update a specific form by ID
router.delete("/form/:id", formController.deleteForm); // Route to delete a specific form by ID

module.exports = router;
