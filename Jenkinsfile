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
                withCredentials([sshUserPrivateKey(credentialsId: 'webserver_login' ,keyFileVariable: 'KEY',usernameVariable: 'USER')]){
                    script{
                          remote = [:]
                          remote.name = '3.110.86.83'
                          remote.host = '3.110.86.83'
                          remote.user = '$USER'
                          remote.identity = '$KEY'
                          remote.allowAnyHosts = true
                        sshCommand remote: remote , command: "docker pull pranzal/node"
                        sshCommand remote: remote , command: "docker run -p 3000:3000 -d pranzal/node"
                    }
                }
                                 }
                                 }
                                 
                        
            
}
}
