module.exports = function(RED) {
  function SalesforceMarketingCloudConfig(n){
    RED.nodes.createNode(this,n)
    this.name = n.name
    this.clientId = n.clientId
    this.clientSecret = n.clientSecret
    this.authenticationBaseURI = n.authenticationBaseURI
    this.RESTBaseURI = n.RESTBaseURI
    this.SOAPBaseURI = n.SOAPBaseURI
  }
  RED.nodes.registerType(
    "salesforcemarketingcloud", 
    SalesforceMarketingCloudConfig,
    {
      credentials: {
        clientId: {type: "text"},
        clientSecret: {type: "password"},
        authenticationBaseURI: {type: "text"},
        RESTBaseURI: {type: "text"},
        SOAPBaseURI: {type: "text"}
      }
    }
  )
}
