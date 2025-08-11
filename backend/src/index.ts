import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import uploadRouter from './routes/upload';
import { ZodError } from 'zod';

const app = express();
app.use(cors())
app.use(express.json({ limit: '2mb' }));

app.get('/', (_req,res) => res.send('FileVault server is up'));
app.get('/health', (_req, res) => {
    res.json({ok: true});
})

app.use('/upload', uploadRouter);

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    if (err instanceof ZodError) {
        return res.status(400).json({ error: 'Validation failed', details: err.flatten() });
    }
    console.error(err);
    res.status(400).json({ error: err?.message ?? 'Bad Request' });
});

app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

const PORT = process.env.PORT || 3000;

// Add detailed AWS debugging
console.log('=== AWS CONFIG DEBUG ===');
console.log('Region:', process.env.AWS_REGION);
console.log('Bucket:', process.env.AWS_BUCKET_NAME);
console.log('Access Key ID:', process.env.AWS_ACCESS_KEY_ID?.substring(0, 10) + '...');
console.log('Secret Key Length:', process.env.AWS_SECRET_ACCESS_KEY?.length || 0);
console.log('========================');

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)}
);

