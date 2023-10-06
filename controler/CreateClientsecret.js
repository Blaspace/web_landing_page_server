require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRIT_KEY);

const createClientSecret = async (req, res) => {
  const { currency } = req.body;
  const intent = await stripe.paymentIntents.create({
    currency,
    amount: 80000,
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.json({ client_secret: intent.client_secret });
};

module.exports = createClientSecret;
