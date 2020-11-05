import Api from "./request";
const AddBuild = function () {
    Api.post("/build/add", {
        landlordId: "5fa2d2e25fcdd836d87ede77",
        buildInfo: {
            name: "爱情公寓",
            layer: 10,
            count: 10,
            net: 5,
            electricity: 5,
            water: 5
        },
        houseType: [
            {
                unitType: 1,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 2,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 3,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 4,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 5,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 6,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 7,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 8,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 9,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
            {
                unitType: 10,
                bathroom: 0,
                air_condition: 0,
                geyser: 0,
                gas: 0,
                broadband: 0,
                clear: 1000,
                rent: 200
            },
        ]
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })



}
module.exports = { AddBuild };


