const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { User } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Invalid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Username is required.')
    .isLength({ min: 4 })
    .withMessage('Username must be at least 4 characters long.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('First Name is required.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Last Name is required.'),
];

// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Validation error', errors: errors.array() });
    }

    const { firstName, lastName, email, password, username } = req.body;

    try {
      let user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(500).json({ message: 'User already exists', errors: { email: 'User with that email already exists' } });
      }

      user = await User.findOne({ where: { username } });
      if (user) {
        return res.status(500).json({ message: 'User already exists', errors: { username: 'User with that username already exists' } });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      user = await User.create({ firstName, lastName, email, username, hashedPassword });

      const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
      };

      await setTokenCookie(res, safeUser);

      return res.status(200).json({ user: safeUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);

module.exports = router;
