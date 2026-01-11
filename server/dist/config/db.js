"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('StoreShoping', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map