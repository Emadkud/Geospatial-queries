const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toilette", "root", "root", {
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to db");
    } catch (e) {
        console.log(e);
    }
};

connectDb();

const Toilette = require("./toilette")(sequelize);

sequelize.sync({ alter: true });

const db = {
    sequelize,
    Toilette,
}

module.exports = db