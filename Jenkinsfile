pipeline {
    agent any

    environment {
        IMAGE_NAME = "woodwork"
        CONTAINER_NAME = "woodwork_container"
        HOST_PORT = "5173"
        CONTAINER_PORT = "5173"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/pavandarisi/Learning-Jenkins.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                // Stop and remove existing container if running
                sh '''
                CONTAINER_ID=$(docker ps -aq -f name=$CONTAINER_NAME)
                if [ -n "$CONTAINER_ID" ]; then
                  echo "Stopping existing container..."
                  docker stop $CONTAINER_NAME || true
                  docker rm $CONTAINER_NAME || true
                fi
                '''

                // Run the new container
                sh 'docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }

    post {
        failure {
            echo "❌ Pipeline failed. Check logs for more info."
        }
        success {
            echo "✅ Application deployed successfully at http://<your-server-ip>:$HOST_PORT"
        }
    }
}
