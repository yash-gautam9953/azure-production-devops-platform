# azure-production-devops-platform

Production-grade DevOps platform demonstrating containerized application delivery, automated CI/CD, security scanning, container registry management, and deployment to Microsoft Azure.

## 🚀 Overview

This project demonstrates an end-to-end DevOps workflow for deploying a Node.js application to an Azure Virtual Machine using Docker and GitHub Actions.

The pipeline automatically:

1. Runs application dependency installation
2. Builds a Docker image
3. Scans the image for security vulnerabilities using Trivy
4. Pushes the image to GitHub Container Registry (GHCR)
5. Connects to an Azure VM through SSH
6. Pulls the latest image
7. Replaces the running container
8. Performs a post-deployment health check

The project is designed as a foundation for extending the platform with Infrastructure as Code, Kubernetes, GitOps, monitoring, logging, and observability.

---

## 🏗️ Architecture

```text
                    Developer
                        │
                        │ git push
                        ▼
                ┌─────────────────┐
                │     GitHub      │
                │   Repository    │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │ GitHub Actions  │
                │      CI/CD      │
                └────────┬────────┘
                         │
             ┌───────────┼───────────┐
             │           │           │
             ▼           ▼           ▼
          Tests      Docker Build   Trivy
                                      │
                                      ▼
                              Security Scan
                                      │
                                      ▼
                              ┌─────────────┐
                              │     GHCR    │
                              │   Registry  │
                              └──────┬──────┘
                                     │
                                  docker pull
                                     │
                                     ▼
                              ┌─────────────┐
                              │  Azure VM   │
                              │   Docker    │
                              └──────┬──────┘
                                     │
                                     ▼
                              Node.js App
                                     │
                                     ▼
                                  /health
