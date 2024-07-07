"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
class Vehicle {
}
class Car extends Vehicle {
}
class Boat extends Vehicle {
}
class Plane extends Vehicle {
}
// Init empty list of vehicles
let vehicle_list = [];
/*
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
});*/
app.post("/vehicle/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { model, color, year, power, wheelCount, bodyType, draft, wingspan } = req.body;
        console.log(req.body);
        if (wheelCount !== undefined && bodyType !== undefined) {
            const new_car = {
                model,
                color,
                year,
                power,
                wheelCount,
                bodyType
            };
            vehicle_list.push(new_car);
        }
        else if (draft !== undefined) {
            const new_boat = {
                model,
                color,
                year,
                power,
                draft
            };
            vehicle_list.push(new_boat);
        }
        else if (wingspan !== undefined) {
            const new_plane = {
                model,
                color,
                year,
                power,
                wingspan
            };
            vehicle_list.push(new_plane);
        }
        else {
            const new_vehi = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power
            };
            vehicle_list.push(new_vehi);
        }
        console.log(vehicle_list);
        res.status(201).send("Vehicle added");
    }
    catch (err) {
        console.error("Error while adding vehicle: ", err);
        res.status(500).send("Error");
    }
}));
// Route to find vehicle with specific model
app.get("/vehicle/search/:model", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const found = vehicle_list.find((vehi) => vehi.model === req.params.model);
        if (found) {
            res.status(200).json(found);
        }
        else {
            res.status(404).send("Vehicle not found");
        }
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal server error while finding vehicle");
    }
}));
app.get("/hello", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello world");
}));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello There");
}));
app.listen(port, () => {
    console.log("Express server listening:", port);
});
//# sourceMappingURL=app.js.map