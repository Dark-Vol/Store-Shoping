const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');


/** Создание акаунта, профиля для Администратора и Пользователя */
const Account = sequelize.define("Account", {
  accountType: { type: DataTypes.ENUM("User", "Administrator"), allowNull: false },
  status: { type: DataTypes.STRING(50), allowNull: false, defaultValue: "active" },
  registrationDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

const Profile = sequelize.define("Profile", {
  firstName: { type: DataTypes.STRING(255), allowNull: false },
  lastName: { type: DataTypes.STRING(255), allowNull: false },
  phone: { type: DataTypes.STRING(50) },
});

const User = sequelize.define('User', {
  firstName: { type: DataTypes.STRING(255), allowNull: false },
  lastName: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING(255), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  registrationDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

const Administrator = sequelize.define("Administrator", {
  adminName: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  registrationDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

const Photo = sequelize.define("Photo", {
  path: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.STRING(255) },
  isMain: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Address = sequelize.define("Address", {
  address: { type: DataTypes.STRING(255), allowNull: false },
  city: { type: DataTypes.STRING(255), allowNull: false },
  zipCode: { type: DataTypes.STRING(50), allowNull: false },
  region: { type: DataTypes.STRING(255) },
  state: { type: DataTypes.STRING(255) },
  other: { type: DataTypes.STRING(255) },
});
/** */

/** Сообщения, Помощь */
const Support = sequelize.define("Support", {
  title: { type: DataTypes.STRING(255), allowNull: false },
  body: { type: DataTypes.STRING(255), allowNull: false },
  statusClose: { type: DataTypes.BOOLEAN, defaultValue: false },
  statusAnswer: { type: DataTypes.BOOLEAN, defaultValue: false },
  answer: { type: DataTypes.STRING(255) },
});

const Message = sequelize.define("Message", {
  text: { type: DataTypes.TEXT, allowNull: false },
  room: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
});
/** */

/** Предметы */
const Category = sequelize.define("Category", {
  categoryName: { type: DataTypes.STRING(255), allowNull: false },
});

const Instrument = sequelize.define("Instrument", {
  instrumentName: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.TEXT },
});

const Item = sequelize.define("Item", {
  serialNumber: { type: DataTypes.STRING(255), allowNull: false },
  yearOfProduction: { type: DataTypes.INTEGER },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  characteristics: { type: DataTypes.STRING(255) },
  rewiwes: { type: DataTypes.STRING(255) },
  rating: { type: DataTypes.FLOAT },
  availability: { type: DataTypes.BOOLEAN, defaultValue: true },
  description: { type: DataTypes.TEXT },
  warranty: { type: DataTypes.STRING(255) },
  photo: { type: DataTypes.STRING(255) },
  discount: { type: DataTypes.FLOAT },
  discountEndDate: { type: DataTypes.DATE },
  discountStartDate: { type: DataTypes.DATE },
});
/** */

/** Оплата */
const Cart = sequelize.define("Cart", {
  sessionId: { type: DataTypes.STRING(100) },
  status: { type: DataTypes.SMALLINT },
  firstName: { type: DataTypes.STRING(50) },
  lastName: { type: DataTypes.STRING(50) },
  mobile: { type: DataTypes.STRING(20) },
});

const CartItem = sequelize.define("CartItem", {
  price: { type: DataTypes.FLOAT, allowNull: false },
  discount: { type: DataTypes.FLOAT },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
});

const UserOrder = sequelize.define("UserOrder", {
  deliveryAddress: { type: DataTypes.STRING(255) },
  totalPrice: { type: DataTypes.DECIMAL(10, 2) },
  discount: { type: DataTypes.FLOAT },
  finalPrice: { type: DataTypes.DECIMAL(10, 2) },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
});

const OrderStatus = sequelize.define("OrderStatus", {
  statusName: { type: DataTypes.STRING(255), allowNull: false },
});

const Transaction = sequelize.define("Transaction", {
  mode: { type: DataTypes.SMALLINT },
  status: { type: DataTypes.SMALLINT },
});

const OrderItem = sequelize.define("OrderItem", {
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  discount: { type: DataTypes.FLOAT },
});
/** */

/** Other */
const Country = sequelize.define("Country", {
  countryName: { type: DataTypes.STRING(255), allowNull: false },
});

const Manufacturer = sequelize.define("Manufacturer", { // производитель
  manufactureName: { type: DataTypes.STRING(255), allowNull: false },
  contactInfo: { type: DataTypes.STRING(255) },
  webSite: { type: DataTypes.STRING(255) },
  email: { type: DataTypes.STRING(100) },
  phone: { type: DataTypes.STRING(50) },
});
/** */

Profile.belongsTo(User);
User.hasOne(Profile);

Profile.belongsTo(Administrator);
Administrator.hasOne(Profile);

Account.belongsTo(User);
User.hasOne(Account);

Account.belongsTo(Administrator);
Administrator.hasOne(Account);

Photo.belongsTo(Profile);
Profile.hasOne(Photo);

User.belongsTo(Country)
Country.hasMany(User)

Country.hasMany(Address) // так как одна страна может иметь несколько адресов
Address.belongsTo(Country) // указывая, что каждый адрес принадлежит одной стране

Country.hasMany(Manufacturer) // потому что одна страна может иметь несколько производителей
Manufacturer.belongsTo(Country) // так как каждый производитель принадлежит одной стране

Manufacturer.hasMany(Instrument) // потому что один производитель может выпускать несколько инструментов.
Instrument.belongsTo(Manufacturer) // так как каждый инструмент принадлежит одному производителю.

Category.hasMany(Instrument); // Каждый инструмент в одной категории
Instrument.belongsTo(Category); // Инструмент может быть в нескольких категориях

// Один инструмент может иметь несколько товаров
Instrument.hasMany(Item);
Item.belongsTo(Instrument);

// Один товар может быть в нескольких записях корзины
Item.hasMany(CartItem);
CartItem.belongsTo(Item);

// Один Country может иметь много Items
Country.hasMany(Item);
Item.belongsTo(Country);

// Один User может иметь только одну Cart
User.hasOne(Cart);
Cart.belongsTo(User);

// Одна Cart может содержать много CartItem
Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

// Один Item может быть в нескольких CartItem
Item.hasMany(CartItem);
CartItem.belongsTo(Item);

// Один User может иметь много UserOrder
User.hasMany(UserOrder);
UserOrder.belongsTo(User);

// Один UserOrder имеет один OrderStatus
OrderStatus.hasOne(UserOrder);
UserOrder.belongsTo(OrderStatus);

// Один UserOrder может содержать несколько OrderItem
UserOrder.hasMany(OrderItem);
OrderItem.belongsTo(UserOrder);

// Один OrderItem может иметь одну Transaction
OrderItem.hasOne(Transaction);
Transaction.belongsTo(OrderItem);

// Один User может иметь много Transaction
User.hasMany(Transaction);
Transaction.belongsTo(User);

// Связь страны с адресом (Одна страна может содержать несколько адресов)
Country.hasMany(Address);
Address.belongsTo(Country);

// Если адрес принадлежит пользователю
Profile.hasOne(Address);
Address.belongsTo(Profile);

// Если адрес используется для доставки заказа
UserOrder.belongsTo(Address);
Address.hasOne(UserOrder);

User.hasMany(Message);
Message.belongsTo(User);

Administrator.hasMany(Message);
Message.belongsTo(Administrator);

Support.hasMany(Message);
Message.belongsTo(Support);

module.exports = {
  Account,
  Profile,
  Address,
  Photo,
  User,
  Administrator,
  Country,
  Manufacturer, // производитель
  Category,
  Instrument,
  Item,
  Cart,
  CartItem,
  UserOrder,
  OrderStatus,
  Transaction,
  OrderItem,
  Support,
  Message,
};