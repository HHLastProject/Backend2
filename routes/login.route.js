const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controllers");
const userController = new UserController();