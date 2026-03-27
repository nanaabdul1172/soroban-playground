import express from "express";
import { sendSuccess, sendError } from "../utils/response.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { contractId, functionName, args } = req.body;

  if (!contractId || !functionName) {
    return sendError(res, { statusCode: 400, message: "contractId and functionName are required" });
  }

  // Real implementation:
  // `soroban contract invoke --id {contractId} --source alice --network testnet -- {functionName} --name {args.name}`
  
  console.log(`Invoking ${contractId} -> ${functionName} with args:`, args);

  setTimeout(() => {
    return sendSuccess(res, {
      message: "Function invoked successfully",
      data: {
        output: args && args.name ? args.name : "Success"
      }
    });
  }, 1000);
});

export default router;
