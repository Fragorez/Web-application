const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Clients = sequelize.define("clients", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fio: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Records = sequelize.define("records", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.STRING, defaultValue: "01.01.2021" },
  comment: { type: DataTypes.STRING },
});

const Employees = sequelize.define("employees", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: DataTypes.STRING, allowNull: false },
  second_name: { type: DataTypes.STRING, allowNull: false },
  patronymic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthday: { type: DataTypes.DATE },
  work_address: { type: DataTypes.STRING },
});

const Schedule = sequelize.define("schedule", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  weekday: { type: DataTypes.STRING },
  start_time: { type: DataTypes.STRING },
  end_time: { type: DataTypes.STRING },
  comment: { type: DataTypes.STRING },
});

const Positions = sequelize.define("positions", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Services = sequelize.define("services", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  takes_time: { type: DataTypes.INTEGER, allowNull: false },
});

const Users = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

Clients.hasMany(Records);
Records.belongsTo(Clients);

Employees.hasMany(Records);
Records.belongsTo(Employees);

Positions.hasMany(Employees);
Employees.belongsTo(Positions);

Employees.hasMany(Schedule);
Schedule.belongsTo(Employees);

Services.hasMany(Records);
Records.belongsTo(Services);

Positions.hasMany(Services);
Services.belongsTo(Positions);

module.exports = {
  Clients,
  Records,
  Employees,
  Positions,
  Services,
  Schedule,
  Users,
};
