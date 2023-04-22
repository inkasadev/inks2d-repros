#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
npm install

# Run project
npm run build

echo
echo ========================================================
echo

# Print commands before running them, to make CI output easier to understand
set -v