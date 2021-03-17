import { assertions } from "./assertions";

export function getAssertFunction(assertionName) {
    var assert = assertions.find(function (eachAssertion) {
        return eachAssertion.name == assertionName
    });
    if (assert) {
        return assert.function;
    }
    return null;
}

export function getAssertMessage(assertionName) {
    var assert = assertions.filter(function (eachAssertion) {
        return eachAssertion.name == assertionName
    });

    if (assert && assert.length > 0) {
        return assert[0].message;
    }
    return null;
}
