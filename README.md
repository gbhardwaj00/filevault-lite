# FileVault Lite 🗂️

A secure, cloud-based file upload system built with Node.js, Express, TypeScript, and AWS S3. Upload files directly to the cloud with a modern, responsive interface.

## ✨ Features

- **🔒 Secure Uploads**: Pre-signed S3 URLs for direct cloud uploads
- **🚀 Fast Performance**: Direct S3 uploads bypass backend storage
- **🛡️ Type Safety**: Built with TypeScript for robust development
- **🎨 Modern UI**: Clean, responsive frontend interface
- **🗂️ File Management**: Unique file naming with UUIDs
- **🔔 Real-time Feedback**: Instant upload status and error reporting
- **⚡ Scalable**: Cloud-native architecture with AWS S3

## 📚 Architecture

### Backend (Node.js + Express + TypeScript)

- **Express.js** web server with CORS support
- **TypeScript** for type safety and better developer experience
- **AWS SDK** for S3 integration and pre-signed URL generation
- **Zod** for request validation and error handling
- **Environment-based** configuration management

### Frontend (Vanilla JavaScript + HTML)

- **Modern HTML5** file input interface
- **Vanilla JavaScript** for API communication
- **Direct S3 uploads** using pre-signed URLs
- **Real-time status** updates and error handling
- **Responsive design** for all device sizes

### AWS Infrastructure

- **S3 Bucket** for secure file storage
- **IAM Policies** for proper access control
- **CORS Configuration** for browser-based uploads
- **Pre-signed URLs** for secure, temporary access

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- AWS Account with S3 access
- IAM user with S3 permissions

### 1. Clone and Install

```bash
git clone "https://github.com/gbhardwaj00/filevault-lite.git"
cd filevault-lite/backend
npm install
```

### 2. Configure Environment

Create a `.env` file in the backend directory:

```env
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=us-west-2
AWS_BUCKET_NAME=your-bucket-name
PORT=4000
```

### 3. Start Backend

```bash
npm run dev
```

### 4. Open Frontend

Open `frontend.html` in your browser and start uploading files!

## 📝 API Endpoints

### Health Check

```http
GET /health
```

Returns server status and AWS configuration.

### Upload Initialization

```http
POST /upload/init
Content-Type: application/json

{
  "filename": "example.jpg",
  "mime": "image/jpeg",
  "size": 1024000
}
```

Returns a pre-signed S3 URL for direct file upload.

## 🛠️ Development

### Backend Scripts

```bash
npm run dev      # Start development server
npm run build    # Build TypeScript
npm start        # Start production server
```

### Project Structure

filevault-lite/
├── backend/
│ ├── src/
│ │ ├── aws/ # AWS S3 configuration
│ │ ├── routes/ # API route handlers
│ │ └── index.ts # Main server file
│ ├── package.json
│ └── tsconfig.json
├── frontend.html # Upload interface
└── README.md

## 🔒 Security Features

- **Pre-signed URLs**: Temporary, secure access to S3
- **IAM Policies**: Least-privilege access control
- **CORS Configuration**: Controlled cross-origin access
- **Input Validation**: Zod schema validation for all requests
- **Environment Variables**: Secure credential management

## 🚨 Troubleshooting

### Common Issues

**403 Forbidden Error**

- Verify IAM user has `s3:PutObject` permission
- Check bucket name and region in `.env`
- Ensure CORS is properly configured

**CORS Error**

- Configure S3 bucket CORS policy
- Allow `PUT`, `POST`, `GET` methods
- Set `AllowedOrigins` to `*` for development

**Signature Mismatch**

- Verify access key and secret key in `.env`
- Ensure credentials match IAM user
- Restart backend after credential changes

## 🎯 Future Enhancements

- [ ] File type and size validation
- [ ] User authentication and authorization
- [ ] File sharing and download links
- [ ] Image thumbnail generation
- [ ] Database integration for file metadata
- [ ] Progress indicators and upload status
- [ ] File management dashboard
- [ ] Multiple file upload support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## �� Acknowledgments

- AWS S3 for cloud storage
- Express.js team for the web framework
- TypeScript team for type safety
- Open source community for inspiration

---

**Built with ❤️ for secure, scalable file management**
