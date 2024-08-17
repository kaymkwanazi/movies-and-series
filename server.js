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
    const { fileName, content, type } = req.body;
    let dataType;
    const filePath = `./Database/${fileName}`;
    
    if (type === 'movie') {
      dataType = 'movies';
    } else
    {
      dataType = 'series';
    }



    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return;
      }
    
      let moviesData = JSON.parse(data);

      moviesData[dataType].push(content[dataType]);


    
     
      fs.writeFile(filePath, JSON.stringify(moviesData, null, 2), 'utf8', (err) => {
        if (err) {
          console.log("🚀 ~ fs.writeFile ~ err:", err)
          res.status(500).send('Error writing to the file');
          return;
        }
        console.log('New content added successfully!');
        res.status(200).send('New content added successfully!');
      });
    })
    
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});