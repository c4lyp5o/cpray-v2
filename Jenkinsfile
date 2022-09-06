pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'                
                    sh '''#!/usr/bin/ash
                    docker stop cpray-v2'''
                    echo 'Done stopping docker container'
                
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
