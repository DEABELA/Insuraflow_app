const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  
});

// Create the User model
const Policy = mongoose.model("Policy", policySchema);

module.exports = Policy;
