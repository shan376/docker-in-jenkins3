pipeline {
  agent any

  stages {
    stage('Run Ansible Playbook') {
      steps {
        sh 'ansible-playbook -i inventory.ini deploy.yml'
      }
    }
  }
}
