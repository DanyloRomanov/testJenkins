pipeline{
     agent {
        docker {
            image 'node:10'
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