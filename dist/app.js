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
// Init empty list of vehicles
let vehicle_list = [];
// Route to add vehicles
app.post("/vehicle/add", (req, res) => {
    try {
        console.log(req.body);
        const new_vehi = {
            model: req.body.model,
            color: req.body.color,
            year: req.body.year,
            power: req.body.power
        };
        vehicle_list.push(new_vehi);
        res.status(201).send("Vehicle added");
        console.log(vehicle_list);
    }
    catch (err) {
        console.error("Error while adding vehicle: ", err);
        res.status(500).send("Error");
    }
});
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