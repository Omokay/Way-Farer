/* eslint-disable import/no-unresolved */
import '@babel/polyfill';
import express from 'express';
import routes from './src/routes';


const app = express();

app.use(express.json());

app.use('/api/v1', routes);


app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to WayFarer',
  });
});

const port = process.env.PORT || 4000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App is listening on port ${port}`));

export default app;