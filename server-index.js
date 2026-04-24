const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Newsletter subscribers store (in-memory)
let subscribers = [];

// Products data
const products = [
  {
    id: 1,
    name: 'Amber Dusk',
    price: 1299,
    description: 'Warm amber & sandalwood blend',
    burnTime: '45 hours',
    tag: 'Bestseller',
    emoji: '🕯️'
  },
  {
    id: 2,
    name: 'White Bloom',
    price: 1499,
    description: 'Fresh jasmine & white tea',
    burnTime: '50 hours',
    tag: 'New',
    emoji: '🌸'
  },
  {
    id: 3,
    name: 'Cedar Noir',
    price: 1399,
    description: 'Rich cedarwood & dark musk',
    burnTime: '55 hours',
    tag: 'Premium',
    emoji: '🌲'
  },
  {
    id: 4,
    name: 'Velvet Rose',
    price: 1599,
    description: 'Soft rose & warm vanilla',
    burnTime: '48 hours',
    tag: 'Limited',
    emoji: '🌹'
  }
];

// GET products
app.get('/api/products', (req, res) => {
  res.json({ success: true, products });
});

// POST newsletter signup
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Valid email required.' });
  }
  if (subscribers.includes(email)) {
    return res.status(409).json({ success: false, message: 'Already subscribed!' });
  }
  subscribers.push(email);
  console.log(`New subscriber: ${email}`);
  res.json({ success: true, message: 'Thank you for joining the Lumo family 🕯️' });
});

// GET health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', subscribers: subscribers.length });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🕯️ Lumo Candles server running on port ${PORT}`));
