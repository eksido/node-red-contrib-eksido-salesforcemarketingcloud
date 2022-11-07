module.exports = function(RED) {
    function MarketingcloudConfigurationNode(n) {
        RED.nodes.createNode(this,n);
        this.clientid = n.clientid;
        this.clientsecret = n.clientsecret;
        this.authenticationurl = n.authenticationurl;
        this.restbaseurl = n.restbaseurl;
        this.soapbaseurl = n.soapbaseurl;
        
    }
    RED.nodes.registerType("marketingcloud-configuration",MarketingcloudConfigurationNode);
}