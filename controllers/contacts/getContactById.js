const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw RequestError(404, "Contact not found");
  }
  res.json(result);
};

module.exports = getContactById;
