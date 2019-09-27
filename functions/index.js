"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = (req, res) => {
    const { name } = req.query;
    res.send(`Hello ${name || 'World'}`);
};
