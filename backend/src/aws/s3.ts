import dotenv from 'dotenv';
dotenv.config();

import { S3Client, PutObjectCommand, S3ClientConfig } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const {AWS_REGION, AWS_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

if(!AWS_REGION || !AWS_BUCKET_NAME) {
    throw new Error("Missing AWS_REGION or S3_BUCKET env vars");
}

const s3Config: S3ClientConfig = {region: AWS_REGION}

if (AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY) {
    s3Config.credentials = {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    };
}

export const s3 = new S3Client(s3Config);

export async function createPresignedPutUrl(opts: {key: string; contentType?: string; expiresIn?: number}) {
    const cmd = new PutObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: opts.key,
        ContentType: opts.contentType
    });
    const url = await getSignedUrl(s3, cmd, {expiresIn: opts.expiresIn ?? 60});
    return url;
}