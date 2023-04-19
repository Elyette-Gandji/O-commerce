const { validationResult } = require('express-validator');
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
  deleteOneUser: async (req, res) => {
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
  },

  /***
   * Create new User
   * @param {object} req.body last_name, first_name, email, password
   * @returns {object} format JSON with :
   * last_name, first_name, email, password
   */
  createUser: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      }
      const { last_name, first_name, email, password } = req.body;
      // il faudra hacher le password avant de l'ajouter à la BDD
      const newUser = User.build({
        last_name,
        first_name,
        email,
        password
      });
      newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  /***
   * Update User
   * @param {object} req.body last_name, first_name, email, password
   * @returns {object} format JSON with :
   * last_name, first_name, email, password
   */
  updateUser: async (req, res) => {
    try {
      const userId = Number(req.params.id);
      // il faut verifier les données de req.body avec express validator
      // et hacher le password si necesssaire
      const { last_name, first_name, email, password } = req.body;
      const user = await User.findByPk(userId);
      // if user exist in DB, update property if it change
      if (user) {
        user.last_name = last_name || user.last_name;
        user.first_name = first_name || user.first_name;
        user.email = email || user.email;
        user.password = password || user.password;
      } else {
        return res.status(400).json('No user found');
      }
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = userController;
