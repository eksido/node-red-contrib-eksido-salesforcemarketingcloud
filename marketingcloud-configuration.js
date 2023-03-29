module.exports = function(RED) {
    function MarketingcloudConfigurationNode(n) {
        RED.nodes.createNode(this, n);

        this.clientid = n.clientid || process.env.MARKETINGCLOUD_CLIENT_ID;
        this.clientsecret = n.clientsecret || process.env.MARKETINGCLOUD_CLIENT_SECRET;
        this.authenticationurl = n.authenticationurl || process.env.MARKETINGCLOUD_AUTHENTICATION_URL;
        this.restbaseurl = n.restbaseurl || process.env.MARKETINGCLOUD_RESTBASE_URL;
        this.soapbaseurl = n.soapbaseurl || process.env.MARKETINGCLOUD_SOAPBASE_URL;
    }
    RED.nodes.registerType("marketingcloud-configuration", MarketingcloudConfigurationNode);
}