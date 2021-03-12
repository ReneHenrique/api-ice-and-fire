
import express from 'express';

//Routes
import AppRoutes from './routes/personagens';

const app = express();

app.use(express.json());
app.use(AppRoutes);


app.listen(3333, () => {
    console.log('Server started on port 3333!')
})