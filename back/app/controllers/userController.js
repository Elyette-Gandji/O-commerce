const { User } = require('../models');

const userController = {
  /***
   * Get All users with the associations
   * @returns {object} format JSON with :
   * role, addresses, comments, orders, payments
   */
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
        include: [
          {
            association: 'role'
          },
          {
            association: 'addresses',
            attributes: { exclude: ['created_at', 'updated_at'] }
          },
          {
            association: 'comments',
            through: { attributes: [] }
          },
          {
            association: 'orders'
          },
          {
            association: 'payments',
            through: { attributes: [] }
          }
        ]
      });
      res.status(200).json(users);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  /***
   * Get one specific User with the associations
   * @param userId Id of the user from req.params
   * @returns {object} format JSON with :
   * role, addresses, comments, orders, payments
   */
  getOneUser: async (req, res) => {
    try {
      const userId = Number(req.params.id);
      const user = await findByPk(userId, {
        attributes: { exclude: ['created_at', 'updated_at'] },
        include: [
          {
            association: 'role'
          },
          {
            association: 'addresses',
            attributes: { exclude: ['created_at', 'updated_at'] }
          },
          {
            association: 'comments',
            through: { attributes: [] }
          },
          {
            association: 'orders'
          },
          {
            association: 'payments',
            through: { attributes: [] }
          }
        ]
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(400).json('No user found');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

    /***
   * Delete one specific User 
   * @param userId Id of the user from req.params
   */
  deleteUser: async (req, res) => {
    try {
      const userId = Number(req.params.id);
      const user = await findByPk(userId);
      if (user) {
        await user.destroy();
        res.status(200).json('OK');
      } else {
        res.status(400).json('No user found');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = userController;
