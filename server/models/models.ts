import { DataTypes, Model } from 'sequelize';
import sequelize from '@config/db';
import {
  AccountAttributes,
  ProfileAttributes,
  UserAttributes,
  AdministratorAttributes,
  PhotoAttributes,
  AddressAttributes,
  SupportAttributes,
  MessageAttributes,
  CategoryAttributes,
  InstrumentAttributes,
  ItemAttributes,
  CartAttributes,
  CartItemAttributes,
  UserOrderAttributes,
  OrderStatusAttributes,
  TransactionAttributes,
  OrderItemAttributes,
  CountryAttributes,
  ManufacturerAttributes
} from '../types';

// Определение моделей
export const Account = sequelize.define<Model<AccountAttributes>>("Account", {
  accountType: { type: DataTypes.ENUM("User", "Administrator"), allowNull: false },
  status: { type: DataTypes.STRING(50), allowNull: false, defaultValue: "active" },
  registrationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export const Profile = sequelize.define<Model<ProfileAttributes>>("Profile", {
  firstName: { type: DataTypes.STRING(255), allowNull: false },
  lastName: { type: DataTypes.STRING(255), allowNull: false },
  phone: { type: DataTypes.STRING(50) },
});

export const User = sequelize.define<Model<UserAttributes>>('User', {
  firstName: { type: DataTypes.STRING(255), allowNull: false },
  lastName: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING(255), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  registrationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export const Administrator = sequelize.define<Model<AdministratorAttributes>>("Administrator", {
  adminName: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  registrationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export const Photo = sequelize.define<Model<PhotoAttributes>>("Photo", {
  path: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.STRING(255) },
  isMain: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export const Address = sequelize.define<Model<AddressAttributes>>("Address", {
  address: { type: DataTypes.STRING(255), allowNull: false },
  city: { type: DataTypes.STRING(255), allowNull: false },
  zipCode: { type: DataTypes.STRING(50), allowNull: false },
  region: { type: DataTypes.STRING(255) },
  state: { type: DataTypes.STRING(255) },
  other: { type: DataTypes.STRING(255) },
});

export const Support = sequelize.define<Model<SupportAttributes>>("Support", {
  title: { type: DataTypes.STRING(255), allowNull: false },
  body: { type: DataTypes.STRING(255), allowNull: false },
  statusClose: { type: DataTypes.BOOLEAN, defaultValue: false },
  statusAnswer: { type: DataTypes.BOOLEAN, defaultValue: false },
  answer: { type: DataTypes.STRING(255) },
});

export const Message = sequelize.define<Model<MessageAttributes>>("Message", {
  text: { type: DataTypes.TEXT, allowNull: false },
  room: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export const Category = sequelize.define<Model<CategoryAttributes>>("Category", {
  categoryName: { type: DataTypes.STRING(255), allowNull: false },
});

export const Instrument = sequelize.define<Model<InstrumentAttributes>>("Instrument", {
  instrumentName: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.TEXT },
});

export const Item = sequelize.define<Model<ItemAttributes>>("Item", {
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

export const Cart = sequelize.define<Model<CartAttributes>>("Cart", {
  sessionId: { type: DataTypes.STRING(100) },
  status: { type: DataTypes.SMALLINT },
  firstName: { type: DataTypes.STRING(50) },
  lastName: { type: DataTypes.STRING(50) },
  mobile: { type: DataTypes.STRING(20) },
});

export const CartItem = sequelize.define<Model<CartItemAttributes>>("CartItem", {
  price: { type: DataTypes.FLOAT, allowNull: false },
  discount: { type: DataTypes.FLOAT },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
});

export const UserOrder = sequelize.define<Model<UserOrderAttributes>>("UserOrder", {
  deliveryAddress: { type: DataTypes.STRING(255) },
  totalPrice: { type: DataTypes.DECIMAL(10, 2) },
  discount: { type: DataTypes.FLOAT },
  finalPrice: { type: DataTypes.DECIMAL(10, 2) },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
});

export const OrderStatus = sequelize.define<Model<OrderStatusAttributes>>("OrderStatus", {
  statusName: { type: DataTypes.STRING(255), allowNull: false },
});

export const Transaction = sequelize.define<Model<TransactionAttributes>>("Transaction", {
  mode: { type: DataTypes.SMALLINT },
  status: { type: DataTypes.SMALLINT },
});

export const OrderItem = sequelize.define<Model<OrderItemAttributes>>("OrderItem", {
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  discount: { type: DataTypes.FLOAT },
});

export const Country = sequelize.define<Model<CountryAttributes>>("Country", {
  countryName: { type: DataTypes.STRING(255), allowNull: false },
});

export const Manufacturer = sequelize.define<Model<ManufacturerAttributes>>("Manufacturer", {
  manufactureName: { type: DataTypes.STRING(255), allowNull: false },
  contactInfo: { type: DataTypes.STRING(255) },
  webSite: { type: DataTypes.STRING(255) },
  email: { type: DataTypes.STRING(100) },
  phone: { type: DataTypes.STRING(50) },
});

// Определение связей
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

User.belongsTo(Country);
Country.hasMany(User);

Country.hasMany(Address);
Address.belongsTo(Country);

Country.hasMany(Manufacturer);
Manufacturer.belongsTo(Country);

Manufacturer.hasMany(Instrument);
Instrument.belongsTo(Manufacturer);

Category.hasMany(Instrument);
Instrument.belongsTo(Category);

Instrument.hasMany(Item);
Item.belongsTo(Instrument);

Item.hasMany(CartItem);
CartItem.belongsTo(Item);

Country.hasMany(Item);
Item.belongsTo(Country);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

Item.hasMany(CartItem);
CartItem.belongsTo(Item);

User.hasMany(UserOrder);
UserOrder.belongsTo(User);

OrderStatus.hasOne(UserOrder);
UserOrder.belongsTo(OrderStatus);

UserOrder.hasMany(OrderItem);
OrderItem.belongsTo(UserOrder);

OrderItem.hasOne(Transaction);
Transaction.belongsTo(OrderItem);

User.hasMany(Transaction);
Transaction.belongsTo(User);

Country.hasMany(Address);
Address.belongsTo(Country);

Profile.hasOne(Address);
Address.belongsTo(Profile);

UserOrder.belongsTo(Address);
Address.hasOne(UserOrder);

User.hasMany(Message);
Message.belongsTo(User);

Administrator.hasMany(Message);
Message.belongsTo(Administrator);

Support.hasMany(Message);
Message.belongsTo(Support);

