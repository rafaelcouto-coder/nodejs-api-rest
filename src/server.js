const app = require("./app");
const express = require("express");

(async () => {
  const database = require("./database/database");

  try {
    await database.sync();
    console.log("Connection has been established successfully with db.");
    app.listen(3333, () => {
      console.log("Server is running");
    });
  } catch (err) {
    console.err("Unable to connect to the database:");
  }
})();
