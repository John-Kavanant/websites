# EC2 Deployment Track

This document prepares a production deployment path for AWS EC2 after Phase 1 stabilization.

## 1) EC2 setup

- Launch an Ubuntu `t3.micro` instance.
- Open inbound ports:
  - `22` for SSH
  - `80` for HTTP
  - `443` for HTTPS
- Attach an Elastic IP and map DNS (`www`) to the instance.

## 2) Install runtime dependencies

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-v2 nginx certbot python3-certbot-nginx
sudo usermod -aG docker $USER
```

Log out and back in after the group change.

## 3) Deploy with Docker Compose

```bash
git clone <your-repo-url>
cd UI/atria-marketing-site
cp .env.example .env.production
docker compose -f docker-compose.ec2.yml up -d --build
```

## 4) Reverse proxy with Nginx

Use this server block:

```nginx
server {
  listen 80;
  server_name atriahealth.com www.atriahealth.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Reload Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## 5) Enable SSL

```bash
sudo certbot --nginx -d atriahealth.com -d www.atriahealth.com
```

## 6) CI/CD (optional hardening)

- Build and test in CI.
- On main-branch merge:
  - SSH to EC2
  - Pull latest code
  - Run `docker compose -f docker-compose.ec2.yml up -d --build`
- Store SSH key and host values in GitHub secrets.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optional)

## Post-deploy checks

- `curl -I https://www.atriahealth.com`
- Verify page speed and Core Web Vitals.
- Validate analytics events for CTA clicks and contact submissions.
