require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const postRouter = require('./routes/postRouter');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
