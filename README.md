# React Fitness App

This is a example fitness mobile web application built in React with support for Jenkins CICD.

## Prerequisites

You will need to have the following software installed:

* Git
* Docker (optional)
* Java for functional testing with Selenium

## Installation

```bash
$ git clone https://github.com/corneliuswill/react-fitness-app.git
$ cd react-fitness-app
$ npm install
```

## Running Locally

```bash
$ npm run start
```

## Tests

### Unit Tests

```bash
$ npm run test
```

### Functional Tests

Start selenium standalone server

```bash
$ npm run selenium
```

Start integration tests

```bash
$ npm run wdio
```

## Install Jenkins on Docker

1. Pull docker Jenkins BlueOcean image

    ```bash
    $ docker pull jenkinsci/blueocean
    ```

2. Run Jenkins in Docker

    ```bash
    $ docker run \
    -u root \
    --rm \
    -d \
     --name jenkins-blueocean \
    -p 8080:8080 \
    -p 50000:50000 \
    -v jenkins-data:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    jenkinsci/blueocean
    ```
    You can access the Jenkins Blue Ocean container with a docker exec command:

    ```bash
    docker exec -it jenkins-blueocean bash
    ```

3. Browse to http://localhost:8080 and follow the instruction to log into Jenkins.

## Create Pipeline project in Jenkins

1. Click **New Item** at the top left
2. In the **Enter an item name** field, specify the name for the new Pipeline project
3. Scroll down and click Pipeline, then click **OK**
4. Click the **Pipeline** tab at the top of the page to scroll down to the Pipeline section
5. From the **Definition** field, choose the Pipeline script from SCM option
6. From the **SCM** field, choose Git
7. In the **Repository URL** field, specify the directory path of your cloned repository above
8. Click Save to save your new Pipeline project

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