pipeline{
     agent {
        docker {
            image 'node:10'
            args '-p 8081:8081'
        }
    }
    stages{
        stage('Npm install'){
            steps{
                sh 'npm install'
            }
        }
        stage('Start Docker test'){
            steps {
                 sh 'docker-compose up -d'
            }
        }
                   
    }
}