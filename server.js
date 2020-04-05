const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    msg: 'hello kaushik,welcome to your app.',
  });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
