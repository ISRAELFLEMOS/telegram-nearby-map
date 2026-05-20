const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("project structure exists", () => {
  const root = path.resolve(__dirname, "..");
  assert.equal(fs.existsSync(path.join(root, "server.js")), true);
  assert.equal(fs.existsSync(path.join(root, "lib", "telegram-nearby.js")), true);
});
