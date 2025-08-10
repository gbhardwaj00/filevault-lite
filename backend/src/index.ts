import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (_req,res) => res.send('FileVault server is up'));
app.get('/health', (_req, res) => {
    res.json({ok: true});
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('http://localhost:3000')}
);

