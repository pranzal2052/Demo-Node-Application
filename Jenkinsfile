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
                            app.push("$(env.BUILD_NUMBER)")
                            app.push("latest")
                }
            }
        }
    }
}
}
