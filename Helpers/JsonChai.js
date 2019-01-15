module.exports = JsonChai;

function JsonChai() {
    const chai = require('chai');

    chai.use(require('chai-json'));
    return chai;
}