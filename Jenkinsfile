pipeline{
    agent any{
        stage('One'){
            steps{
                echo 'Hi, this is first step'
            }
        }
        stage('Two'){
            steps {
                input ('Do you want to proceed')
            }
        }
        stage('Three'){
            when {
                not{
                    branch "master"
                }
            }
            steps{
                echo "hello"
            }
        }       
    }
}