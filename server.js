/* eslint-disable no-undef */
import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Movie/Series API</h1><p>Use the <code>/write-file</code> endpoint to save data.</p>');
});

app.post('/write-file', async (req, res) => {
    const { fileName, content } = req.body;
    const filePath = `./Database/${fileName}`;

    console.log("🚀 ~ app.post ~ filePath:", filePath)
    console.log(content)

  
    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});