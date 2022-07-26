import express from 'express';

const app = express();
const PORT = 3002;
app.use(express.json());

// put our routes here
app.get('/', (req, res) => {
    res.send('Express is workinggggg 😛');
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/ ...`)
}); 
