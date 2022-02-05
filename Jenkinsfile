pipeline{
    agent any
    stages{
        stage('Build Docker Image'){
            steps{
                script{
                    app=docker.build(pranzal/node)
                    app.inside{
                        sh 'echo$(curl localhost:8080)' 
                    }
                    
                }
            }
            
        }
        stage('Push Docker Image'){
            steps{
                script{
                        docker.withRegistry('https://registry.docker.hub.com','docker_hub_login') {
                            app.push($(env.BUILD_NUMBER))
                            app.push("latest")
                }
            }
        }
    }
}
}
