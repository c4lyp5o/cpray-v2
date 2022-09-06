pipeline {
    agent any
        stage('Deploy') {
             steps {
                sh "docker stop cpray-v2 || true && docker rm cpray-v2 || true"
                sh "docker run -d \
                    --name cpray-v2 \
                    --publish 6555:3000 \
                    cpray-v2:latest
            }
        }
    }
}
