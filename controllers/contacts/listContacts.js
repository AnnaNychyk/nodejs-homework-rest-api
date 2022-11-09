const { Contact } = require("../../models/contact");

const listContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "name phone email favorite", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

module.exports = listContacts;
