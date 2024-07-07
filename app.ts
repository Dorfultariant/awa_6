import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

type Vehicle = {
    "model": string;
    "color": string;
    "year": number;
    "power": number;
};

// Init empty list of vehicles
let vehicle_list: Vehicle[] = [];


// Route to add vehicles
app.post("/vehicle/add", (req, res) => {
    try {
        // console.log(req.body);

        const new_vehi: Vehicle = {
            model: req.body.model,
            color: req.body.color,
            year: req.body.year,
            power: req.body.power
        };

        vehicle_list.push(new_vehi);

        res.status(201).send("Vehicle added");
        console.log(vehicle_list);

    } catch (err) {
        console.error("Error while adding vehicle: ", err);
        res.status(500).send("Error");
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

