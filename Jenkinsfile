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
                sh 'sudo docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                // Stop and remove the container if it already exists
                sh '''
                if [ $(docker ps -aq -f name=$CONTAINER_NAME) ]; then
                  sudo docker stop $CONTAINER_NAME || true
                  sudo docker rm $CONTAINER_NAME || true
                fi
                '''

                // Run the new container
                sh '''
                sudo docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }

    post {
        failure {
            echo "Pipeline failed. Check logs for details."
        }
        success {
            echo "Application deployed successfully at http://<your-server-ip>:$HOST_PORT"
        }
    }
}
