pipeline {
  agent any
  stages {
    stage('Dev') {
      steps {
        sh '''docker build -t payaljain/jenkinstest:1 .
docker push payaljain/jenkinstest:1'''
        sh 'kubectl apply -f manifests/*'
      }
    }
  }
}