pipeline {
    agent any
    stages {
        stage ('Checkout') {
             steps {
                git 'https://github.com/NgnTienDat/Lab2_jenkins.git'
            }
        }

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