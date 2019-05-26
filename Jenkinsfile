pipeline {
  agent any
  stages {
    stage('Dev') {
      steps {
        sh '''echo ${GIT_COMMIT}
docker build -t payaljain/jenkinstest:${GIT_COMMIT} .
docker push payaljain/jenkinstest:${GIT_COMMIT}'''
        sh 'sed -i "s/CHANGE_ME/${GIT_COMMIT}/g" ./manifests/deploy.yaml'
        sh 'kubectl apply -f manifests/*'
      }
    }
  }
}