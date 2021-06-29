#!/usr/bin/env bash
cd dist
git reset --hard
git checkout dist
#rm -r *
cd ..
#node_modules/eslint/bin/eslint.js  --ext .ts src
tsc -p ./
VERSION=$(npm version patch)
npm i
cp package.json ./dist/package.json
cp package-lock.json ./dist/package-lock.json
cd dist
git add *
git commit -m "1"
git push origin dist
npm publish
