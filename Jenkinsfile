#!groovy

pipeline {
    agent any

    stages {
        stage('Pre-build') {
            steps {
                slackSend teamDomain: 'jonbecca', channel: '#pokedex', color: 'good', message: "Build <$BUILD_URL|$JOB_NAME-$BUILD_NUMBER> started!", tokenCredentialId: 'jonbecca-slack-token'
                sh 'make prebuild'
            }
        }

        stage('Build') {
            steps {
                sh 'make build'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'firebase-token', variable: 'FIREBASE_TOKEN')]) {
                    sh 'make deploy-production TOKEN=$FIREBASE_TOKEN'
                }
            }
        }
    }

    post {
        success {
            dir('dist') {
                deleteDir()
            }
            slackSend teamDomain: 'jonbecca', channel: '#pokedex', color: 'good', message: "Build <$BUILD_URL|$JOB_NAME-$BUILD_NUMBER> succeeded!\nPlease verify at $PRODUCTION_URL", tokenCredentialId: 'jonbecca-slack-token'
        }
        failure {
            slackSend teamDomain: 'jonbecca', channel: '#pokedex', color: 'danger', message: "Build <$BUILD_URL|$BUILD_NUMBER> failed.", tokenCredentialId: 'jonbecca-slack-token'
        }
        unstable {
            slackSend teamDomain: 'jonbecca', channel: '#pokedex', color: 'warning', message: "Build <$BUILD_URL|$BUILD_NUMBER> is unstable.", tokenCredentialId: 'jonbecca-slack-token'
        }
    }
}
