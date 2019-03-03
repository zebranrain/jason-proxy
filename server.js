const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 80;

app.use(morgan('dev'));
app.use('/:ticker', express.static('./public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});