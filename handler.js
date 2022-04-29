'use strict';


exports.hello = async (event) => {
    return "success";
};


exports.a_function = async (event) => {
    return {
        statusCode: 201,
        body: JSON.stringify(
            {a_message: "Success from a function"},
            null,
            2
        ),
    };
};


exports.another_function = async (event) => {
    return {
        statusCode: 204,
        body: JSON.stringify(
            {another_message: "Another function called"},
            null,
            2
        ),
    };
};
