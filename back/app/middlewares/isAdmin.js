const { User, Role } = require('../models');

// Fonction pour s'assurer qu'un utilisateur à le role d'admin
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: [
        {
        model: Role,
        as: 'role',
        where: {
          name: 'admin'
        }
        }
      ]
    });

    if(!user) {
      return res.status(403).json({message: 'You have not permission to do this'});
    };

    next();
  } catch (error) {
    console.trace(error);
    res.status(500).json(error.toString());
  }
};

module.exports = isAdmin;