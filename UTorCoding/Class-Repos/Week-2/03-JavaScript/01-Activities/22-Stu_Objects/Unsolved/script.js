// add function to log customer name and number of sugars to console.

function isReady(obj, value) {
    let customerOrder = {
        drink: "Name",
        sugars: 0,
        ready: value,
    };
    if (customerOrder.ready !== true) {
        console.log("Still in order queue");
    } else {
        console.log("Ready for pick-up");
    }
    return;
};

let daniOrder = {
    drink: "Latte",
    sugars: 2,
};

let dillanOrder = {
    drink: "Large Red-eye",
    sugars:0,
};

let bobOrder = {
    drink: "Earl-grey tea",
    sugars: 2,
    ready: true,
}

isReady(daniOrder,false);
isReady(dillanOrder,"pizza");
isReady(bobOrder, bobOrder.ready);

/*
For...in statement is a loop that iterates over all object properties.
*/

