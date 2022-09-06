pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Stopping container..'
                sh "docker stop cpray-v2 || true && docker rm cpray-v2 || true"
                echo 'Going into dir..'
                sh "cd /home/calypso/"
                echo 'Deleting old build..'
                sh "rm -rf cpray-v2"
                echo 'Done'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
