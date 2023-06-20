import express from "express";

const router = express.Router();

router.get("/status", function (req, res) {
  let responseObject = {};
  responseObject.status = "OK";
  responseObject.statusCode = 200;
  res.json(responseObject);
});

export default router;
