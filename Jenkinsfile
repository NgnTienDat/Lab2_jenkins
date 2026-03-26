pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    }
    stages {
        stage ('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage ('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage ('Deploy') {
            steps {
                echo 'Deploying... (demo only, no actual deployment)'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
        always {
            echo 'Pipeline finished.'
        }
    }
}