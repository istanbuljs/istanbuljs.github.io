#!/usr/bin/env bash
git config --global user.email "ben@npmjs.com"
git config --global user.name "bcoe"

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "https://$GH_TOKEN@github.com/istanbuljs/istanbuljs.github.io.git" master
