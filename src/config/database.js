require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database.sqlite",
  operatorsAliases: 0,
  logging: false,
  define: {
    // created_at and updated_at
    timestamps: true,
    // underscore instead camelCase
    underscored: true,
    // apply underscore table columns name as well
    underscoredAll: true,
  },
};
