module.exports = function(RED) {

  function SalesforceMarketingCloudConfig(n) {
    RED.nodes.createNode(this,n);
    this.name = n.name;
    this.clientId = n.clientId;
    this.clientSecret = n.clientSecret;
    this.stack = n.stack;
  }

  RED.nodes.registerType(
    "salesforcemarketingcloud", 
    SalesforceMarketingCloudConfig,
    {
      credentials: {
        clientId: {type: "text"},
        clientSecret: {type: "password"},
        stack: {type: "text"}
      }
    }
  )
}
