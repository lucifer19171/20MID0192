const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001; // or any port you prefer

// Endpoint to get top N products within a category
app.get('/categories/:category/products', async (req, res) => {
  const { category } = req.params;
  const { top, minPrice, maxPrice, page = 1, sortBy } = req.query;
  const company = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO']; // List of supported companies

  if (!company.includes(req.query.company)) {
    return res.status(400).json({ error: 'Invalid company name' });
  }

  try {
    const response = await axios.get(`http://20.244.56.144/test/companies/${req.query.company}/categories/${category}/products`, {
      params: {
        top,
        minPrice,
        maxPrice,
        page,
        sortBy,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get details of a specific product by ID
app.get('/categories/:category/products/:productId', async (req, res) => {
  const { category, productId } = req.params;
  const company = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO']; // List of supported companies

  if (!company.includes(req.query.company)) {
    return res.status(400).json({ error: 'Invalid company name' });
  }

  try {
    const response = await axios.get(`http://20.244.56.144/test/companies/${req.query.company}/categories/${category}/products/${productId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
