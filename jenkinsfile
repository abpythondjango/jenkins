pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Run your build commands here, like compiling code
                echo 'Building the application...'
                // Example: sh 'make build' (replace with your build command)
            }
        }
        
        stage('Test') {
            steps {
                // Run your test commands here
                echo 'Running tests...'
                // Example: sh 'make test' (replace with your test command)
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                // Run deployment steps if needed, only on main branch
                echo 'Deploying application...'
                // Example: sh 'make deploy' (replace with your deploy command)
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up...'
            deleteDir() // Clean workspace after build
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}

