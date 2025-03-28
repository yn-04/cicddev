pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'caaecc4d-9158-42c5-8e94-609a10f489b3'  // Replace with your Netlify Site ID
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')  // Replace with your Jenkins credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your repository
                checkout scm
            }
        }

        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🔧 Checking required files..."
                sh '''
                    test -f public/index.html || (echo "❌ Missing index.html" && exit 1)
                    test -f functions/script.js || (echo "❌ Missing script function" && exit 1)
                    echo "✅ Build check passed."
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🧪 Testing Random Question Generator load..."
                sh '''
                    npm install uuid
                    node -e "require('./functions/script.js'); console.log('✅ Script function loaded successfully')"
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🚀 Deploying to Netlify..."
                // Install Netlify CLI and deploy the project
                sh '''
                    npm install netlify-cli
                    npx netlify deploy \
                      --auth=$NETLIFY_AUTH_TOKEN \
                      --site=$NETLIFY_SITE_ID \
                      --dir=public \
                      --prod
                '''
            }
        }

        stage('Post Deploy') {
            steps {
                echo "✅ Deployment complete! Random Question Generator."
            }
        }
    }

    post {
        success {
            echo "🎉 CI/CD pipeline finished successfully."
        }
        failure {
            echo "❌ Pipeline failed. Check logs for details."
        }
    }
}
