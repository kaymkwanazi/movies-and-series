const express = require('express');
const app = express();
const port = 5173;
const fs = require('fs')
const path = require ('path')

app.use(express.json());

// //defining route
app.get('/', (req, res) => {
    res.send();
});

//start server
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});

app.post('/Addmovie', (req, res) => {
    const newContent = req.body;

    if (!newContent.type) {

        return res.status(400).send('Content type (movie or series) is required');
    }

    const moviesPath = path.join(__dirname, 'movies.json');
    const seriesPath = path.join(__dirname, 'series.json')
    let contentList = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        contentList = JSON.parse(data);
      }

      contentList.push(newContent);
 
    fs.writeFileSync(filePath, JSON.stringify(contentList, null, 2));

      console.log('New content added:', newContent);
      res.send('Content saved successfully');

    });
