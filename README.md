# Demo Devops NodeJs

The application is already deployed in EKS using github actions as CI/CD tool, this is the endpoint:

```bash
http://a3b7299ce12b045fca33e0a5159db376-181428005.us-east-1.elb.amazonaws.com/devops/
```

## Created resources

In the following image, one can see the two pods running, along with the LoadBalancer service, deployment, replicaset, and HPA for horizontal scaling. The replicaset displays both the desired and current size of the pods.
<img src="./inform/resourcescreated.png" alt="Alt text" title="Optional title">