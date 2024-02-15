# Uniswap V3 APY API

This repository contains the code for a Uniswap V3 APY API. The API is packaged as a Docker image and can be pulled from the Docker Hub.

## Usage

### Prerequisites

Before running the Docker container, ensure that you have Docker installed on your system.

### Pull the Docker Image

To pull the Docker image from the Docker Hub, use the following command:

```bash
docker pull warunsinx/uni-v3-apy-api
```

## Run the Docker Container

Run the Docker container with the necessary environment variables MONGODB_URI and PORT. Replace the placeholders with your specific MongoDB URI and desired port number.

```bash
docker run -e MONGODB_URI="your_mongodb_uri" -e PORT=your_desired_port -p your_desired_port:your_desired_port warunsinx/uni-v3-apy-api
```

- MONGODB_URI: MongoDB connection URI.
- PORT: Port on which the API will be exposed.

Replace your_mongodb_uri and your_desired_port with your MongoDB connection URI and the desired port number, respectively.
