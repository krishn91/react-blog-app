# React Blog App - DevOps Deployment

## 🚀 Project Overview
This project demonstrates deployment of a React Blog Application using Docker, Azure VM, Azure Container Registry (ACR), and GitHub Actions CI/CD pipelines.
---

## 🧠 Architecture
GitHub → GitHub Actions → ACR → Azure VM → Docker Compose → Application

---

## ⚙️ Technologies Used
- React.js
- JSON Server
- Docker & Docker Compose
- GitHub Actions
- Microsoft Azure (VM + ACR)

---

## 🔄 CI/CD Workflow

### Environments:
| Branch | Workflow | Environment |
|--------|---------|------------|
| dev | dev.yaml | Development |
| staging | staging.yaml | Staging |
| main | prod.yaml | Production |

---

## 🐳 Docker Setup
- Multi-container setup:
  - Frontend (React build using serve)
  - Backend (JSON Server)

---

## 🌐 Application URLs
- Frontend: http://104.211.72.72
- Backend: http://104.211.72.72:8000/posts

---

## 🔐 Secrets Used
- Azure Registry Credentials
- VM SSH Access

---

## 📌 Features
- Automated deployment via GitHub Actions
- Multi-environment support
- Dockerized architecture
- Azure cloud deployment

---

## 🚀 How to Run Locally
```bash
docker-compose up --build