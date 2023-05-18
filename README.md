# CPRAY v2

In the name of God, most gracious, most merciful.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![Build Status](https://pipeline.calypsocloud.one/buildStatus/icon?job=waktusolat.me)](https://pipeline.calypsocloud.one/job/waktusolat.me/)

Prayer Times displayer for Malaysia. Ported over from a Create React App to Nextjs with minor cosmetic changes.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then run the project:

```bash
npm run dev
# or 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

This project is dockerized. To build the image, run:

```bash
docker build -t cpray .
```

Then run the container:

```bash
docker run -p 3000:3000 cpray
```
