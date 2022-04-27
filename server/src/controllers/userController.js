const db = require('../models/db');

const User = db.users;

const getAllUsers = async (req, res) => {
  try {
    let users = await User.findAll({});

    res.status(200).send(users);
  } catch (e) {
    return res.status(400).send({
      message: 'An issue happened while accessing the database',
      error: e,
    });
  }
};

const addUser = async (req, res) => {
  try {
    let info = {
      firstName: req.body.firstName?.toLowerCase(),
      middleName: req.body.middleName?.toLowerCase(),
      lastName: req.body.lastName?.toLowerCase(),
      currentEmploymentMonth: req.body.currentEmploymentMonth,
      currentEmploymentYear: req.body.currentEmploymentYear,
      email: req.body.email?.toLowerCase(),
      employer: req.body.employer?.toLowerCase(),
      haveDepandants: req.body.haveDepandants,
      haveOtherIncome: req.body.haveOtherIncome,
      incomeAmount: req.body.incomeAmount,
      incomeFrequency: req.body.incomeFrequency?.toLowerCase(),
      mobileNumber: req.body.mobileNumber,
      occupation: req.body.occupation?.toLowerCase(),
      relationshipStatus: req.body.relationshipStatus?.toLowerCase(),
    };

    console.log(info);

    const user = await User.create(info);
    console.log('allgood');
    setTimeout(() => {
      res.status(200).send(user);
    }, 5000);
    // res.status(200).send(user);
  } catch (e) {
    return res.status(400).send({
      message: 'An issue happened while accessing the database',
      error: e,
    });
  }
};

module.exports = {
  getAllUsers,
  addUser,
};
