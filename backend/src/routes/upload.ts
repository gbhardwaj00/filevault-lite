import { Router } from "express";
import { z } from "zod"
import { v4 as uuid } from "uuid"
import { createPresignedPutUrl } from "../aws/s3";

const router = Router();

const initSchema = z.object({
    filename: z.string().min(1),
    mime: z.string().min(1).optional(),
    size: z.number().int().positive().optional()
})

router.post('/init', async(req, res, next) => {
    try {
        const {filename, mime} = initSchema.parse(req.body);

        const safeName = filename.replace(/[^\w.\-]/g, '_');
        const key = `uploads/dev/${Date.now()}-${uuid()}-${safeName}`;

        const uploadUrl = await createPresignedPutUrl(
            mime
                ? { key, contentType: mime, expiresIn: 60 }
                : { key, expiresIn: 60 }
        );

        res.json({uploadUrl, key});
    } catch (err) {
        next(err);
    }
})

export default router;