# CI/CD notes

## Postman integration testing
Using  newman image to reduce the build time, had to override the entry point to get access to bash though

## Code quality/Linting
I commented out the manual linting job as .eslintrc.yml messes up with the built-in code quality job

## jUnit tests
- Make sure your reports are in jUnit format:
`mocha tests/*.js --reporter mocha-junit-reporter`
- See jUnit report artifact configuration in the *Run_Unit_Tests* job

## Metrics
For Docker metrics can use the following tutorials:  
https://docs.docker.com/config/daemon/prometheus/  
https://prometheus.io/docs/prometheus/latest/querying/basics/
