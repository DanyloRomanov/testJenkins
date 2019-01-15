let request = require('request-promise');

class RequestBuilder {
    constructor() {
        this.requestOptions = {
            uri: '',
            method: ''
        };
    }

    executeRequest() {
        return request(this.requestOptions).then(function (result) {
            return result;
        })
            .catch(function (error) {
                return error;
            });
    }

    setRequestType(type) {
        this.requestOptions.method = type;
        return this;
    }

    resolveWithFullResponse(isTrue) {
        this.requestOptions.resolveWithFullResponse = (isTrue === true) ? true : false;
        return this;
    }

    setUri(uri) {
        this.requestOptions.uri = uri;
        return this;
    }
};

 module.exports = RequestBuilder;