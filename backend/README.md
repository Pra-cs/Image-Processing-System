# 🖼️ Scalable Image Processing System

This project is a scalable system that crawls webpages, extracts images, downloads them, generates metadata (e.g., resolution, size, format), and stores both images and metadata. It includes REST APIs to initiate crawling and view results, with an extensible frontend.

---

## 🔧 Tech Stack

- **Backend**: Python, FastAPI
- **Frontend**: React.js
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy
- **Image Handling**: Pillow
- **HTTP Requests**: httpx
- **Web Crawling**: BeautifulSoup
- **Containerization**: Docker, Docker Compose

---

## 📁 Project Structure

```
.
├── backend/
│   ├── app/
│   │   ├── main.py             # FastAPI app
│   │   ├── models.py           # SQLAlchemy models
│   │   ├── schemas.py          # Pydantic schemas
│   │   ├── database.py         # DB connection
│   │   ├── crawler.py          # Crawling logic
│   │   ├── image_utils.py      # Image downloading & metadata
│   │   └── routes.py           # API endpoints
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   │       ├── SubmitForm.js
│   │       └── ResultGrid.js
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/image-processor.git
cd image-processor
```

---

### 2. Run with Docker (Recommended)

Make sure Docker and Docker Compose are installed.

```bash
docker-compose up --build
```

- Backend: [http://localhost:8000/docs](http://localhost:8000/docs)
- Frontend: [http://localhost:3000](http://localhost:3000)

---

### 3. Without Docker (Manual)

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

#### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🧠 Features

- 🌐 **Webpage Crawling**: Parses a webpage and discovers all image URLs.
- 🖼️ **Image Downloading**: Downloads and stores images locally.
- 🧾 **Metadata Extraction**: Calculates and stores metadata (dimensions, size, format).
- 🔄 **Idempotency**: Avoids re-processing already crawled URLs.
- 📊 **REST APIs**: Initiate crawling, check results, and fetch image metadata.
- 🧩 **Frontend UI**: Submit URL, view downloaded images and metadata.
- 🧩 **Extensibility**: Easy to plug in new processing logic (e.g., ML image classification).

---

## 🔌 API Endpoints

- `POST /api/crawl`  
  Start crawling a new webpage.

  ```json
  { "url": "https://example.com" }
  ```

- `GET /api/results?url=https://example.com`  
  Fetch all images and metadata for a URL.

- `GET /api/images/:id`  
  Serve the image by ID.

---

## 🖥️ Frontend Usage

1. Open [http://localhost:3000](http://localhost:3000)
2. Enter a webpage URL in the input box.
3. Click "Submit"
4. View the downloaded images and metadata below.

---

## 📝 Example Metadata

```json
{
  "url": "https://example.com/images/logo.png",
  "width": 200,
  "height": 100,
  "format": "PNG",
  "size_kb": 45
}
```

---

## 🔒 Security Notes

- URL validation is done to prevent SSRF.
- Image size and content-type are validated before saving.

---

## 📈 Future Improvements

- [ ] Image deduplication (hash comparison)
- [ ] Pagination for large result sets
- [ ] Search/filter on metadata (resolution, format)
- [ ] Add async queue (e.g., Celery/RQ)
- [ ] Cloud storage support (S3)

---

## 👨‍💻 Contributing

Pull requests are welcome. Please follow good commit hygiene and test your changes.

---

## 🛡️ License

MIT License © 2025 Prabhat Singh
