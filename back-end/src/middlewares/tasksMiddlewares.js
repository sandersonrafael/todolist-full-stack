const validateTitle = (req, res, next) => {
  const { body } = req;

  if (!body.title) return res.status(400).json({
    message: 'Necessário informar um título válido!'
  });

  next();
};

const validateEdit = (req, res, next) => {
  const { body } = req;

  if (!body.title || !body.status) return res.status(400).json({
    message: 'Necessário informar título e status corretamente'
  });

  next();
};


module.exports = {
  validateTitle,
  validateEdit
};
