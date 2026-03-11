# Form Service

Shared form submission API for multiple websites. It accepts form data at `POST /submit` and sends email via SMTP (Zoho-compatible).

## 1) Install

```bash
cd form-service
npm install
cp .env.example .env
```

Update `.env` with your real SMTP credentials and allowed origins.

## 2) Run

```bash
npm start
```

Health check:

```bash
curl http://127.0.0.1:4000/health
```

Test submission:

```bash
curl -X POST http://127.0.0.1:4000/submit \
  -H "Content-Type: application/json" \
  -d '{"site":"atria","name":"Test User","email":"test@example.com","phone":"1234567890","message":"hello","honeypot":""}'
```

## 3) Request payload

- `site` (string, optional but recommended)
- `name` (required)
- `email` (required, valid email)
- `phone` (optional)
- `message` (required)
- `honeypot` (required by frontend hidden field; must stay empty)

## 4) Nginx reverse proxy example

Route public endpoint `/api/form` to this service:

```nginx
location /api/form {
    proxy_pass http://127.0.0.1:4000/submit;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## 5) Notes

- Service binds to `127.0.0.1` for safety (Nginx should front it).
- Keep `.env` out of source control.
- Use Zoho app passwords instead of your main mailbox password.
