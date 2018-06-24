# React Fitness App

This is a example fitness mobile web application built in React with support for Jenkins CICD.

## Prerequisites

You will need to have the following software installed:

* Git
* Docker (optional)
* Java for Functional Testing with Selenium

## Installation

```bash
git clone https://github.com/corneliuswill/workout-planner.git
cd workout-planner
npm install
```

## Running Locally

```bash
npm run start
```

## Tests

### Unit Tests

```bash
npm run test
```

### Functional Tests

Start selenium standalone server

```bash
npm run selenium
```

Start integration tests

```bash
npm run wdio
```

## Jenkins CICD on Docker

### Jenkins Install

1. Pull docker Jenkins BlueOcean image

    ```bash
    docker pull jenkinsci/blueocean
    ```

2. Run Jenkins in Docker

    ```bash
    docker run \
    -u root \
    --rm \
    -d \
     --name jenkins-ocean \
    -p 8080:8080 \
    -p 50000:50000 \
    -v jenkins-data:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    jenkinsci/blueocean
    ```
3. Browse to http://localhost:8080 and follow the instruction to log into Jenkins.

4. Create Pipeline project in Jenkins

    A Jenkins Pipeline file is provided in the project root directory to Build, Test, and Deploy.

    ```bash
    pipeline {
        agent {
            docker {
                image 'node:6-alpine'
                args '-p 3000:3000'
            }
        }
        environment {
            CI = 'true'
        }
        stages {
            stage('Build') {
                steps {
                    sh 'npm install'
                }
            }
            stage('Test') {
                steps {
                    sh './jenkins/scripts/test.sh'
                }
            }
            stage('Deliver') {
                steps {
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                    sh './jenkins/scripts/kill.sh'
                }
            }
            stage('WebDriver') {
                steps {
                    sh 'wdio'
                }
            }
        }
    }
    ```