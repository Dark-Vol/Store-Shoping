"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manufacturer = exports.Country = exports.OrderItem = exports.Transaction = exports.OrderStatus = exports.UserOrder = exports.CartItem = exports.Cart = exports.Item = exports.Instrument = exports.Category = exports.Message = exports.Support = exports.Address = exports.Photo = exports.Administrator = exports.User = exports.Profile = exports.Account = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
// Определение моделей
exports.Account = db_1.default.define("Account", {
    accountType: { type: sequelize_1.DataTypes.ENUM("User", "Administrator"), allowNull: false },
    status: { type: sequelize_1.DataTypes.STRING(50), allowNull: false, defaultValue: "active" },
    registrationDate: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
});
exports.Profile = db_1.default.define("Profile", {
    firstName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    lastName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    phone: { type: sequelize_1.DataTypes.STRING(50) },
});
exports.User = db_1.default.define('User', {
    firstName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    lastName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING(255), unique: true, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    registrationDate: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
});
exports.Administrator = db_1.default.define("Administrator", {
    adminName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    registrationDate: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
});
exports.Photo = db_1.default.define("Photo", {
    path: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    description: { type: sequelize_1.DataTypes.STRING(255) },
    isMain: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
});
exports.Address = db_1.default.define("Address", {
    address: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    city: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    zipCode: { type: sequelize_1.DataTypes.STRING(50), allowNull: false },
    region: { type: sequelize_1.DataTypes.STRING(255) },
    state: { type: sequelize_1.DataTypes.STRING(255) },
    other: { type: sequelize_1.DataTypes.STRING(255) },
});
exports.Support = db_1.default.define("Support", {
    title: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    body: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    statusClose: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    statusAnswer: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    answer: { type: sequelize_1.DataTypes.STRING(255) },
});
exports.Message = db_1.default.define("Message", {
    text: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    room: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    status: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    isRead: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
});
exports.Category = db_1.default.define("Category", {
    categoryName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
});
exports.Instrument = db_1.default.define("Instrument", {
    instrumentName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT },
});
exports.Item = db_1.default.define("Item", {
    serialNumber: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    yearOfProduction: { type: sequelize_1.DataTypes.INTEGER },
    price: { type: sequelize_1.DataTypes.DECIMAL(10, 2), allowNull: false },
    characteristics: { type: sequelize_1.DataTypes.STRING(255) },
    rewiwes: { type: sequelize_1.DataTypes.STRING(255) },
    rating: { type: sequelize_1.DataTypes.FLOAT },
    availability: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true },
    description: { type: sequelize_1.DataTypes.TEXT },
    warranty: { type: sequelize_1.DataTypes.STRING(255) },
    photo: { type: sequelize_1.DataTypes.STRING(255) },
    discount: { type: sequelize_1.DataTypes.FLOAT },
    discountEndDate: { type: sequelize_1.DataTypes.DATE },
    discountStartDate: { type: sequelize_1.DataTypes.DATE },
});
exports.Cart = db_1.default.define("Cart", {
    sessionId: { type: sequelize_1.DataTypes.STRING(100) },
    status: { type: sequelize_1.DataTypes.SMALLINT },
    firstName: { type: sequelize_1.DataTypes.STRING(50) },
    lastName: { type: sequelize_1.DataTypes.STRING(50) },
    mobile: { type: sequelize_1.DataTypes.STRING(20) },
});
exports.CartItem = db_1.default.define("CartItem", {
    price: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    discount: { type: sequelize_1.DataTypes.FLOAT },
    active: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true },
});
exports.UserOrder = db_1.default.define("UserOrder", {
    deliveryAddress: { type: sequelize_1.DataTypes.STRING(255) },
    totalPrice: { type: sequelize_1.DataTypes.DECIMAL(10, 2) },
    discount: { type: sequelize_1.DataTypes.FLOAT },
    finalPrice: { type: sequelize_1.DataTypes.DECIMAL(10, 2) },
    active: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true },
});
exports.OrderStatus = db_1.default.define("OrderStatus", {
    statusName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
});
exports.Transaction = db_1.default.define("Transaction", {
    mode: { type: sequelize_1.DataTypes.SMALLINT },
    status: { type: sequelize_1.DataTypes.SMALLINT },
});
exports.OrderItem = db_1.default.define("OrderItem", {
    price: { type: sequelize_1.DataTypes.DECIMAL(10, 2), allowNull: false },
    discount: { type: sequelize_1.DataTypes.FLOAT },
});
exports.Country = db_1.default.define("Country", {
    countryName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
});
exports.Manufacturer = db_1.default.define("Manufacturer", {
    manufactureName: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    contactInfo: { type: sequelize_1.DataTypes.STRING(255) },
    webSite: { type: sequelize_1.DataTypes.STRING(255) },
    email: { type: sequelize_1.DataTypes.STRING(100) },
    phone: { type: sequelize_1.DataTypes.STRING(50) },
});
// Определение связей
exports.Profile.belongsTo(exports.User);
exports.User.hasOne(exports.Profile);
exports.Profile.belongsTo(exports.Administrator);
exports.Administrator.hasOne(exports.Profile);
exports.Account.belongsTo(exports.User);
exports.User.hasOne(exports.Account);
exports.Account.belongsTo(exports.Administrator);
exports.Administrator.hasOne(exports.Account);
exports.Photo.belongsTo(exports.Profile);
exports.Profile.hasOne(exports.Photo);
exports.User.belongsTo(exports.Country);
exports.Country.hasMany(exports.User);
exports.Country.hasMany(exports.Address);
exports.Address.belongsTo(exports.Country);
exports.Country.hasMany(exports.Manufacturer);
exports.Manufacturer.belongsTo(exports.Country);
exports.Manufacturer.hasMany(exports.Instrument);
exports.Instrument.belongsTo(exports.Manufacturer);
exports.Category.hasMany(exports.Instrument);
exports.Instrument.belongsTo(exports.Category);
exports.Instrument.hasMany(exports.Item);
exports.Item.belongsTo(exports.Instrument);
exports.Item.hasMany(exports.CartItem);
exports.CartItem.belongsTo(exports.Item);
exports.Country.hasMany(exports.Item);
exports.Item.belongsTo(exports.Country);
exports.User.hasOne(exports.Cart);
exports.Cart.belongsTo(exports.User);
exports.Cart.hasMany(exports.CartItem);
exports.CartItem.belongsTo(exports.Cart);
exports.Item.hasMany(exports.CartItem);
exports.CartItem.belongsTo(exports.Item);
exports.User.hasMany(exports.UserOrder);
exports.UserOrder.belongsTo(exports.User);
exports.OrderStatus.hasOne(exports.UserOrder);
exports.UserOrder.belongsTo(exports.OrderStatus);
exports.UserOrder.hasMany(exports.OrderItem);
exports.OrderItem.belongsTo(exports.UserOrder);
exports.OrderItem.hasOne(exports.Transaction);
exports.Transaction.belongsTo(exports.OrderItem);
exports.User.hasMany(exports.Transaction);
exports.Transaction.belongsTo(exports.User);
exports.Country.hasMany(exports.Address);
exports.Address.belongsTo(exports.Country);
exports.Profile.hasOne(exports.Address);
exports.Address.belongsTo(exports.Profile);
exports.UserOrder.belongsTo(exports.Address);
exports.Address.hasOne(exports.UserOrder);
exports.User.hasMany(exports.Message);
exports.Message.belongsTo(exports.User);
exports.Administrator.hasMany(exports.Message);
exports.Message.belongsTo(exports.Administrator);
exports.Support.hasMany(exports.Message);
exports.Message.belongsTo(exports.Support);
//# sourceMappingURL=models.js.map