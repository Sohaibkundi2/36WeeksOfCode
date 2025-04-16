#!/bin/bash
# This script is a simple demonstration of basic bash commands and scripting.
# It includes creating directories, files, moving, copying, renaming files,
# and using some common commands.

echo "🌟 Welcome to Bash Practice Script 🌟"

# Show current directory
echo "📍 Current Directory:"
pwd

# List files and folders
echo "📁 Listing current folder contents:"
ls

# Create a new directory and move into it
mkdir practice-folder
cd practice-folder || exit
echo "✅ Created and moved into 'practice-folder'"

# Create some files
touch file1.txt file2.txt
echo "📄 Created file1.txt and file2.txt"

# Add content to a file
echo "Hello Bash World!" > file1.txt
cat file1.txt

# Copy file1.txt to file3.txt
cp file1.txt file3.txt
echo "📄 Copied file1.txt to file3.txt"

# Rename a file
mv file2.txt renamed-file2.txt
echo "📄 Renamed file2.txt to renamed-file2.txt"

# Show word/line/character count
wc file1.txt

# Show first and last lines of file
echo -e "\n📌 Head and Tail of file1.txt"
head -n 1 file1.txt
tail -n 1 file1.txt

# Search with grep
echo "Learning Bash Scripting" > search.txt
grep "Bash" search.txt

# Show history of commands (this shows shell history)
echo -e "\n📜 Showing command history:"
history | tail -n 5

# Set file permission
chmod +x file3.txt
echo "🔐 Made file3.txt executable"

# Use pipe operator
echo "one two three four" | wc -w

# Clean up (optional)
cd ..
rm -rf practice-folder
echo "🧹 Cleaned up created files and folder"

echo "🎉 Bash practice completed!"
