# Smart Utility Toolkit

This lab solution uses **only Node.js core modules**. No installation or external packages are required.

Run all commands from this folder with Node.js installed.

## 1. CLI calculator (`process.argv`)

```powershell
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

Invalid operations, non-numeric values, division by zero, and missing arguments print a helpful error and usage message.

## 2. Reusable custom module

`isEven.js` exports a reusable `isEven` function with `module.exports`. `module_demo.js` imports it with `require()`.

```powershell
node module_demo.js 8
node module_demo.js 7
```

## 3. HTTP server (`http`)

```powershell
node server.js
```

Open these routes in a browser or test them with a terminal:

```powershell
curl http://localhost:3000/
curl http://localhost:3000/about
curl http://localhost:3000/contact
curl http://localhost:3000/unknown
```

The server writes every request to the console and returns a `404` response for unknown routes. To choose another port, use `PORT=4000 node server.js` (PowerShell: `$env:PORT=4000; node server.js`).

## 4. File manager (`fs`)

Files are stored in the local `data` folder. All operations use asynchronous `fs` callbacks so the console logs show the order of execution.

```powershell
node file_manager.js create notes.txt "First line"
node file_manager.js read notes.txt
node file_manager.js update notes.txt " Second line"
node file_manager.js delete notes.txt
node file_manager.js read missing.txt
```

## 5. Secure dice generator (`crypto`)

```powershell
node dice.js
node dice.js 5
```

`crypto.randomInt(1, 7)` produces a secure random integer from 1 through 6. The optional count is limited to 1–100.

## Files

- `calculator.js` — command-line arithmetic
- `isEven.js` and `module_demo.js` — custom-module export and reuse
- `server.js` — basic routed HTTP server
- `file_manager.js` — create, read, append, and delete files
- `dice.js` — secure random dice rolls
