import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const staticContentDirectory = path.join(__dirname, '../public');
const app = express();

app.use(express.static(staticContentDirectory));
app.listen(port, () => {
    console.log(`Initialised server on port : ${port}`);
    console.log(`Serving files from : ${staticContentDirectory}`);
});
