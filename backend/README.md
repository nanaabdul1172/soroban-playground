# Soroban Playground Backend API

This backend provides REST API endpoints for compiling, deploying, and invoking Soroban smart contracts.

## Endpoints

### POST /api/compile

Compiles Rust code into a Soroban WASM contract.

**Request Body:**
```json
{
  "code": "string"  // The Rust contract source code
}
```

**Success Response (200):**
```json
{
  "success": true,
  "status": "success",
  "message": "Contract compiled successfully",
  "logs": ["array of log lines"],
  "artifact": {
    "name": "soroban_contract.wasm",
    "sizeBytes": 12345,
    "createdAt": "2023-..."
  }
}
```

**Error Responses:**

- **400 Bad Request** (User code errors):
  ```json
  {
    "error": "Compilation failed: error[E0425]: cannot find value `x` in this scope",
    "status": "error",
    "details": "full compilation output",
    "logs": ["array of stderr lines"]
  }
  ```

- **500 Internal Server Error** (System errors):
  ```json
  {
    "error": "Compilation timed out. Please check your code for infinite loops or complex operations.",
    "status": "error",
    "details": "full output",
    "logs": []
  }
  ```

**Error Classification:**
- **400**: Syntax errors, type errors, and other compilation issues in user code
- **500**: System issues like missing tools, timeouts, or server errors

### POST /api/deploy

Deploys a compiled contract to the Stellar Testnet.

### POST /api/invoke

Invokes functions on a deployed contract.

## Development

```bash
cd backend
npm install
npm run dev  # with nodemon
```

## Dependencies

- Express.js for the web server
- Child process execution for Soroban CLI
- File system operations for temporary builds