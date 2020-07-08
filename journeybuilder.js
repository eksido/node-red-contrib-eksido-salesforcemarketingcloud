module.exports = function(RED) {
    const FuelRest = require('fuel-rest')
    const RestClient = new FuelRest(options);

    function JourneyBuilder(config) {
        RED.nodes.createNode(this,config)
        var sfmcConfig = RED.nodes.getNode(config.etConfig);
        var node = this;
        this.on('input', function(msg) {
            const authOptions = {
                auth: {
                    clientId: sfmcConfig.clientId,
                    clientSecret: sfmcConfig.clientSecret
                },
                origin: sfmcConfig.authenticationBaseURI
            }
            const RestClient = new FuelRest(authOptions)

            const options = {
                uri: '/interaction/v1/events',
                headers: {},
                body: {
                    APIEvent-8335bcde-189f-6b6f-b67f-1dcd4de80fbf


                }
            }
            RestClient.post(options,)
            .then(
              function(response) {
                node.send({
                  payload: response.body
                });
              }.bind(this)
            )
            .catch(
              function(err) {
                node.error(err, {
                  payload: JSON.parse(JSON.stringify(err))
                });
              }.bind(this)
            )
        })


        /*
        {
            "ContactKey": "APIEvent",
            "EventDefinitionKey":"APIEvent-d7bc15ca-ab20-0edc-bfcf-db8f4426b7d4",
            "Data": {
                "EmailAddress":"franz@buemann.dk"
            }
        }
        */

    } // function JourneyBuilder

    RED.nodes.registerType("Journey Builder", JourneyBuilder)
}