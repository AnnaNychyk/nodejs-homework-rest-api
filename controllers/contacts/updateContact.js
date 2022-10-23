const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { addSchema } = require("../../schemas/contacts");

const updateContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, "Missing fields");
    }
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
      throw RequestError(404, "Contact not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
