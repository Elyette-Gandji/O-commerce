const Address = require('./Address');
const Category = require('./Category');
const Comment = require('./Comment');
const Payment = require('./Payment');
const Product = require('./Product');
const Promotion = require('./Promotion');
const Role = require('./Role');
const User = require('./User');
const Order = require('./Order');
const OrderHasProduct = require('./OrderHasProduct');
const UserHasVote = require('./UserHasVote');

Address.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});

User.hasMany(Address, {
  foreignKey: 'user_id',
  as: 'addresses'
});

Role.hasMany(User, {
  foreignKey: 'role_id',
  as: 'users'
});

User.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role'
});


Order.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});

User.hasMany(Order, {
  foreignKey: 'user_id',
  as: 'orders'
});

Promotion.hasMany(Product, {
  foreignKey: 'promotion_id',
  as: 'products'
});

Product.belongsTo(Promotion, {
  foreignKey: 'promotion_id',
  as: 'promotion'
});

Payment.belongsToMany(User, {
  foreignKey: 'payment_id',
  otherKey: 'user_id',
  as: 'users',
  through: 'user_has_payment'
});

User.belongsToMany(Payment, {
  foreignKey: 'payment_id',
  otherKey: 'user_id',
  as: 'payments',
  through: 'user_has_payment'
});

Category.belongsToMany(Product, {
  foreignKey: 'product_id',
  otherKey: 'category_id',
  as: 'products',
  through: 'category_has_product'
});

Product.belongsToMany(Category, {
  foreignKey: 'category_id',
  otherKey: 'product_id',
  as: 'categories',
  through: 'category_as_product'
});

Order.belongsToMany(Product, {
  foreignKey: 'product_id',
  otherKey: 'order_id',
  as: 'products',
  through: 'order_has_product'
});

Product.belongsToMany(Order, {
  foreignKey: 'order_id',
  otherKey: 'product_id',
  as: 'orders',
  through: 'order_has_product'
});


Comment.belongsToMany(User, {
  foreignKey: "user_id",
  otherKey: "comment_id",
  as: "users",
  through: "user_has_vote"
});

User.belongsToMany(Comment, {
  foreignKey: "comment_id",
  otherKey: "user_id",
  as: "comments",
  through: "user_has_vote"
});

Comment.belongsTo(Product, {
  foreignKey: "product_id",
  as:"product"
});

Product.hasMany(Comment, {
  foreignKey: "product_id",
  as: "comments"
});



module.exports = {
  Address,
  Category,
  Comment,
  Order,
  Order,
  Payment,
  Product,
  Promotion,
  Role,
  User,
  OrderHasProduct,
  UserHasVote
};
