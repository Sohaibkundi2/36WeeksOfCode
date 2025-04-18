#!/bin/bash

# 💡 Make sure to run this in a new or test project folder

echo "🔧 Initializing Git repo..."
git init

echo "📄 Creating a sample file..."
echo "# My Practice Project" > README.md

echo "➕ Adding file to staging area..."
git add README.md

echo "✅ Committing changes..."
git commit -m "Initial commit with README"

echo "🌿 Creating a new feature branch..."
git branch feature-branch
git checkout feature-branch

echo "📝 Making a change in feature branch..."
echo "This is from feature branch" >> README.md
git add .
git commit -m "Updated README in feature branch"

echo "🔄 Switching back to main and merging..."
git checkout main
git merge feature-branch

echo "🧼 Cleaning up..."
rm -rf .git
rm README.md

echo "✅ Done! You’ve practiced basic Git commands!"
