pipeline {
  agent {
    docker {
      args '''
-u jenkins:jenkins
-v /var/lib/jenkins/project:/var/lib/jenkins/project
-v /var/lib/jenkins/project/pipeline/harmonyhomepage/staging/cache/npm:/home/jenkins/.npm'''
      image 'harrylehuu/levinci_node:14.17'
    }

  }
  stages {
	stage('Get Atuhor') {
		steps {
			script {
				env.GIT_COMMIT_MSG = sh (returnStdout: true, script: 'git log -1 --pretty=%B').trim()
				env.GIT_AUTHOR = sh (script: 'git log -1 --pretty=%cn ${GIT_COMMIT}', returnStdout: true).trim()
			}
		}
    }
	
    stage('Package Install') {
      steps {
        sh '''echo "NODE_OPTIONS=--max-old-space-size=4096" >> ~/.bash_profile
. ~/.bash_profile
npm install'''
      }
    }

    stage('Build') {
      steps {
        sh '''echo "NODE_OPTIONS=--max-old-space-size=4096" >> ~/.bash_profile
. ~/.bash_profile
CI=false npm run build:staging
cd build
tar -cvf ${program_filename}.tar .
mv ${program_filename}.tar ${WORKSPACE}'''
      }
    }

    stage('Deployment') {
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'harmony-homepage-staging', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''set -xe
        program_filename=harmonyhomepagestaging
        origin_path=/home/harmonystagenew/target/
        app_path=/home/harmonystagenew/web/stage-new.harmonypayment.com/public_html/build/
        #Source file
        origin_filename=${origin_path}${program_filename}.tar
        #Unzip file
        tar -xvf ${origin_filename} -C ${app_path}
        #After copying, delete the source file
        if [ -f "${origin_filename}" ];then
            rm -f ${origin_filename}
            echo "${origin_filename} delete success"
        fi
        #Write the code for your startup program.
        echo "completed"''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'harmonyhomepagestaging.tar')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
      }
    }

  }
  environment {
    program_filename = 'harmonyhomepagestaging'
	BUILD_TRIGGER_BY = "${currentBuild.getBuildCauses()[0].shortDescription} / ${currentBuild.getBuildCauses()[0].userId}"
  }
  post {
		success {
			script {
				slackSend channel: 'hsp-homepage', color: '#00FF00', message: "Hi\n Jenkins Notification\n\n Manually deploy by:  ${BUILD_TRIGGER_BY}\n Status Deploy Job:  ${currentBuild.result}\n\n Project Name:  ${env.JOB_NAME.replaceFirst('/.*', '')}              Build Number:  #${env.BUILD_NUMBER}                Branch Name:  ${env.BRANCH_NAME}\n Comitted by:  ${env.GIT_AUTHOR}\n Last commit message:  ${env.GIT_COMMIT_MSG}\n\n Commit Code: ${GIT_COMMIT}\n Commit URL: https://github.com/Levinci-Harmony/${env.JOB_NAME.replaceFirst('/.*', '')}/commit/${GIT_COMMIT}\n\n Deploy URL:  ${env.BUILD_URL}\n\n Design by Harry Le", teamDomain: 'levinci', tokenCredentialId: 'slack'
			}
		}
		failure {
			script {
				slackSend channel: 'hsp-homepage', color: '#FF0000', message: "Hi\n Jenkins Notification\n\n Manually deploy by:  ${BUILD_TRIGGER_BY}\n Status Deploy Job:  ${currentBuild.result}\n\n Project Name:  ${env.JOB_NAME.replaceFirst('/.*', '')}              Build Number:  #${env.BUILD_NUMBER}                Branch Name:  ${env.BRANCH_NAME}\n Comitted by:  ${env.GIT_AUTHOR}\n Last commit message:  ${env.GIT_COMMIT_MSG}\n\n Commit Code: ${GIT_COMMIT}\n Commit URL: https://github.com/Levinci-Harmony/${env.JOB_NAME.replaceFirst('/.*', '')}/commit/${GIT_COMMIT}\n\n Deploy URL:  ${env.BUILD_URL}\n\n Design by Harry Le", teamDomain: 'levinci', tokenCredentialId: 'slack'
			}
		}
		aborted {
			script {
				slackSend channel: 'hsp-homepage', color: '#000000', message: "Hi\n Jenkins Notification\n\n Manually deploy by:  ${BUILD_TRIGGER_BY}\n Status Deploy Job:  ${currentBuild.result}\n\n Project Name:  ${env.JOB_NAME.replaceFirst('/.*', '')}              Build Number:  #${env.BUILD_NUMBER}                Branch Name:  ${env.BRANCH_NAME}\n Comitted by:  ${env.GIT_AUTHOR}\n Last commit message:  ${env.GIT_COMMIT_MSG}\n\n Commit Code: ${GIT_COMMIT}\n Commit URL: https://github.com/Levinci-Harmony/${env.JOB_NAME.replaceFirst('/.*', '')}/commit/${GIT_COMMIT}\n\n Deploy URL:  ${env.BUILD_URL}\n\n Design by Harry Le", teamDomain: 'levinci', tokenCredentialId: 'slack'
			}
		}
		unstable {
			script {
				slackSend channel: 'hsp-homepage', color: '#FFFF33', message: "Hi\n Jenkins Notification\n\n Manually deploy by:  ${BUILD_TRIGGER_BY}\n Status Deploy Job:  ${currentBuild.result}\n\n Project Name:  ${env.JOB_NAME.replaceFirst('/.*', '')}              Build Number:  #${env.BUILD_NUMBER}                Branch Name:  ${env.BRANCH_NAME}\n Comitted by:  ${env.GIT_AUTHOR}\n Last commit message:  ${env.GIT_COMMIT_MSG}\n\n Commit Code: ${GIT_COMMIT}\n Commit URL: https://github.com/Levinci-Harmony/${env.JOB_NAME.replaceFirst('/.*', '')}/commit/${GIT_COMMIT}\n\n Deploy URL:  ${env.BUILD_URL}\n\n Design by Harry Le", teamDomain: 'levinci', tokenCredentialId: 'slack'
			}
		}
        always {
            emailext (
                to: 'nam.phan@harmonypayment.com',
                subject: "${currentBuild.result} CI/CD: Project name -> ${env.JOB_NAME}",
                body: """<p>Hi Team,</p>
                    <p><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL to build: ${env.BUILD_URL}</p>
                    <p><br>Jenkins has <b>${currentBuild.result}</b> deployed on <b>${env.BRANCH_NAME}</b> branch.<br>please check back on your website.</p>
                    <p><br>Thanks and Best Regards!!!<br>LEVINCI Co.,Ltd - www.levincigroup.com"</p>""",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
            )
        }
    }
}
