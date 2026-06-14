const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Vercel!', timestamp: new Date().toISOString() });
});

app.get('/api', (req, res) => {
  res.json({ message: 'API is running', version: '1.0.0' });
});

// Start server only when run locally (not on Vercel)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}

module.exports = app;
