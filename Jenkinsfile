pipeline {
    agent any

    stages {
        stage('Purge') {
            steps {
                sh "docker stop cpray-v2 || true"
                sh "docker rm cpray-v2 || true"
            }
        }
        stage('Build') {
            steps {
                echo 'Building new image..'
                sh "docker build . -t cpray-v2"
                echo 'Done'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh "docker run -d -p 6556:3000 --name cpray-v2 cpray-v2:latest"
                echo 'Done'
            }
        }
    }
}
