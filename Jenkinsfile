pipeline {
    agent any

    environment {
        telegramBotToken = credentials('ez-series-bot-token')
        telegramChatId = credentials('telegram-chat-id')        
    }

    stages {
        stage('Purge') {
            steps {
                echo 'Stopping container and removing current container..'
                sh "docker stop cpray-v2 || true && docker rm cpray-v2 || true"
                echo 'Done'
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

    post {
        failure {
            script {
                def message = "Build failed for ${env.JOB_NAME} #${env.BUILD_NUMBER}."
                telegramSend message: message, chatId: telegramChatId, token: telegramBotToken
            }
        }

        success {
            script {
                def prUrl = ''
                try {
                    def prNumber = sh(
                        script: 'git ls-remote --exit-code --heads origin "pull/*/head" | cut -d"/" -f3',
                        returnStdout: true
                    ).trim()
                    prUrl = "https://github.com/c4lyp5o/cpray-v2/pull/${prNumber}"
                } catch (e) {
                    // Do nothing
                }
                def message = "Build succeeded for ${env.JOB_NAME} #${env.BUILD_NUMBER}."
                if (prUrl != '') {
                    message += "\nPR: ${prUrl}"
                }
                telegramSend message: message, chatId: telegramChatId, token: telegramBotToken
            }
        }
    }
}