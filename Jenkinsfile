pipeline{
    agent any
    stages{
        stage('Build Docker Image'){
            steps{
                script{
                    app = docker.build("pranzal/node")
                    
                }
            }
            
        }
        stage('Push Docker Image'){
            steps{
                script{
                        docker.withRegistry('https://registry.hub.docker.com','docker_hub_login') {
                            app.push("${env.BUILD_NUMBER}")
                            app.push("latest")
                }
            }
        }
    }
        stage('Deploy to Production'){
            steps{
                input 'Deploy to Production ?'
                milestone(1)
                withCredentials([usernamePassword(credentialsId: 'webserver_login' ,keyFileVariable: 'KEY',usernameVariable: 'USER')]){
                    script{
                        sh 'ssh -o StrictHostKeyChecking=no -i $KEY $USER@${env.prod_ip} "docker pull pranzal/node\"'
                        sh 'ssh -o StrictHostKeyChecking=no -i $KEY $USER@${env.prod_ip} "docker run -p 3000:3000 -d pranzal/node"'
                    }
                }
                                 }
                                 }
                                 
                        
            
}
}
