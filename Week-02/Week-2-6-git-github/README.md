# 📘 Git & Version Control System – Quick Guide

## 🔁 What is Git & Version Control System (VCS)?
A **Version Control System** helps track and manage changes to files over time.
**Git** is a distributed VCS that allows multiple people to collaborate on a project without overwriting each other's work.

## 🏢 Centralized VCS
There is **one central server** where the codebase lives. Developers must be connected to that server to commit or view history.
- Examples: **Subversion (SVN), CVS**

## 🧩 Distributed VCS
Each developer has a **full copy of the repository**, including history. You can work **offline** and sync changes later.
- Example: **Git**

## ❓ Why Git?
- Fast and lightweight
- Allows offline work
- Tracks complete history
- Easy branching and merging
- Industry standard

## 🐙 What is GitHub?
A platform that **hosts Git repositories** in the cloud. Allows collaboration via pull requests, issues, CI/CD, and more.

## 📚 Git Terminologies
| Term | Description |
|------|-------------|
| **Repository (repo)** | Project folder tracked by Git |
| **Commit** | A snapshot of your code |
| **Branch** | A separate line of development |
| **Merge** | Combining branches |
| **Clone** | Copying a remote repo locally |
| **Push** | Sending code to GitHub |
| **Pull** | Fetching and merging remote code |
| **Remote** | URL of GitHub repo |
| **Staging Area** | Where changes are prepared before commit |

## 🔄 Workflow of Git
```bash
git init               # Initialize Git
git add .              # Stage changes
git commit -m "msg"    # Commit staged changes
git push origin main   # Push to GitHub
```

## 📝 Commits
A **commit** is a snapshot of your code with a message, author, and timestamp. It helps track and revert changes.

## 🔧 Common Git Commands
```bash
git init                  # Start a new repo
git clone <URL>           # Copy repo from GitHub
git status                # Check current changes
git add .                 # Stage all changes
git commit -m "message"   # Commit changes
git push                  # Push to GitHub
git pull                  # Pull from GitHub
git branch                # List branches
git checkout -b branch    # Create and switch branch
git merge branch          # Merge a branch
```

## 📁 Creating a New Repository
1. On GitHub:
   - Click **"New Repository"**
   - Set name, visibility, and create it.
2. Locally:
```bash
git init
git remote add origin <repo-url>
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 💾 Installing Git
- **Windows**: [git-scm.com](https://git-scm.com)
- **Mac**: `brew install git`
- **Linux**: `sudo apt install git`

## 🚀 Pushing Code to GitHub via CLI
```bash
git init
git remote add origin <repo-url>
git add .
git commit -m "First commit"
git push -u origin main
```

## 🔐 Authenticating
- Use **HTTPS with personal access token (PAT)** or **SSH keys**
- For SSH:
```bash
ssh-keygen
# Add public key to GitHub > Settings > SSH & GPG
```

## 🌿 Branching
Create separate lines of development:
```bash
git checkout -b new-feature
```

## 🔀 Merging
Combine code from one branch into another:
```bash
git checkout main
git merge new-feature
```

## 📥 Pull Request (PR)
Used to request merging your branch into the main branch on GitHub. Enables team review, comments, and approval.

## ⚔️ What is Git Merge Conflict?
Occurs when two changes affect the same part of a file. Git can't decide which to keep, so you must **resolve manually**.

