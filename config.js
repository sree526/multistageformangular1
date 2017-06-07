const SonarWebReporters = require('sonar-web-frontend-reporters').Reporters;
let sonarWebReporters = new SonarWebReporters('Sonar Web Front-End Reporters', {
  
  "eslintangular": {
    "src": "app/js/*.js",
    "report": "reports/sonar/eslint-angular.json",
    "rulesFile": ".eslintrc.yml"
  }
});

sonarWebReporters.launchReporters(() => {
  console.log('All reporters have been processed');
});