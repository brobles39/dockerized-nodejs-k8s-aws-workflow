# Demo Devops NodeJs

The application is already deployed in EKS using github actions as CI/CD tool, this is the endpoint:

```bash
http://a3b7299ce12b045fca33e0a5159db376-181428005.us-east-1.elb.amazonaws.com/devops/
```
## Test the application

```bash
curl -X POST -H "X-Parse-REST-API-Key: 2f5ae96c-b558-4c7b-a590-a501ae1c3f6c" -H "Authorization: Bearer ec8529cd20aa5e02a6ed3daf9ed6fc3c3b1651fcc9d700491c914dea134e6169" -H "Content-Type: application/json" -d "{\"message\": \"This is a test\", \"to\": \"Juan Perez\", \"from\": \"Rita Asturia\", \"timeToLifeSec\": 45}" http://a3b7299ce12b045fca33e0a5159db376-181428005.us-east-1.elb.amazonaws.com/DevOps
```

## Created resources

In the following image, one can see the two pods running, along with the LoadBalancer service, deployment and replicaset. The replicaset displays both the desired and current size of the pods.
<img src="./inform/resourcescreated.png" alt="Alt text" title="Optional title">

## Ci/CD Process

Github actions was used as a CI/CD tool, basically it installs the project dependencies, logs into my personal dockerhub account, builds the application and uploads it to my dockerhub account.

As variables it has configured a dockerhub token to access the account, as well as the credentials of my personal aws account and the KUBECONFIG_FILE in base64 to point to my EKS cluster.

## Issues

Unit tests and static code analysis have not been completed.