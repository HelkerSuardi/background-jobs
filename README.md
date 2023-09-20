# Background jobs

An api for testing background jobs using Bull and Redis to queue and manage jobs

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Requirements

Before running this project, make sure you have the following installed:

- [NodeJs](https://nodejs.org)
- [Redis](https://redis.io/docs/getting-started/installation)

## Installation

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/HelkerSuardi/background-jobs
   ```
   or

   ```
   git clone git@github.com:HelkerSuardi/background-jobs.git
   ```

2. Change into the project directory:

   ```
   cd background-jobs
   ```
3. Create a .env file by copying the .env-example file:

   ```
   cp .env-example .env
   ```
4. Fill the env file with your data

5. Install all packages

   ```
   npm install
   ```
    or
   ```
   yarn
   ```
## Usage
Run the API in one terminal:
```
npm run dev
```
or
```
yarn run dev
```

Run the Queue in other terminal:
```
npm run queue
```
or
```
yarn run queue
```
## Expected behavior
Five seconds after triggering the user creation router (POST: /user), a welcome email will be sent to your email.
