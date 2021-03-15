const User = require("../models/user");

module.exports = {
  async create(request, response) {
    const userAlreadyExists = await User.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (userAlreadyExists) {
      return response.status(401).json({
        message: "User already exists",
      });
    }

    try {
      const userCreate = await User.create({
        email: request.body.email,
        password: request.body.password,
      });
      response.status(201).json({ user: userCreate });
      console.log(userCreate);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(request, response) {
    const userAlreadyExists = await User.findOne({
      where: {
        email: request.body.email,
      },
    });

    if(userAlreadyExists){
      const userDelete = await User.destroy({
        where: {
          email: request.body.email,
        },
      });
      response.status(200).json({ userDelete: request.body.email });
    } else {
      return response.status(401).json({
        message: "User does not exists",
      });
    }
  }
};