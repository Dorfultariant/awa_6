import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

class Vehicle {
    "model": string;
    "color": string;
    "year": number;
    "power": number;
}

class Car extends Vehicle {
    "bodyType": string;
    "wheelCount": number;
}

class Boat extends Vehicle {
    "draft": number;
}

class Plane extends Vehicle {
    "wingspan": number;
}


// Init empty list of vehicles

let vehicle_list: Array<Vehicle | Car | Boat | Plane> = [];


app.post("/vehicle/add", async (req, res) => {
    try {
        // Yes this is horrible looking:
        console.log("Request body contents: ", req.body);

        if (req.body.wheelCount !== undefined && req.body.bodyType !== undefined) {

            const new_car: Car = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power,
                wheelCount: req.body.wheelCount,
                bodyType: req.body.bodyType
            };
            vehicle_list.push(new_car);


        } else if (req.body.draft !== undefined) {

            const new_boat: Boat = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power,
                draft: req.body.draft
            };
            vehicle_list.push(new_boat);


        } else if (req.body.wingspan !== undefined) {

            const new_plane: Plane = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power,
                wingspan: req.body.wingspan
            };
            vehicle_list.push(new_plane);


        } else {

            const new_vehi: Vehicle = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power
            };

            vehicle_list.push(new_vehi);
        }

        console.log(vehicle_list);
        res.status(201).send(`Vehicle added ${req.body.model}`);

    } catch (err) {
        console.error("Error while adding vehicle: ", err);
        res.status(500).send("Error");
    }
});


// Route to find vehicle with specific model
app.get("/vehicle/search/:model", async (req, res) => {

    try {
        const found = vehicle_list.find((vehi) => vehi.model === req.params.model);

        if (found) {
            console.log("Found vehicle:", found);
            res.status(200).json(found);
        }
        else {
            res.status(404).send("Vehicle not found");
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal server error while finding vehicle");
    }

});


app.get("/hello", async (req, res) => {
    res.send("Hello world");
});


app.get("/", async (req, res) => {
    res.send("Hello There");
});


app.listen(port, () => {
    console.log("Express server listening:", port);
});

