const fs = require('fs');
try {
    console.log("Require pdf-parse...");
    const pdf = require('pdf-parse');
    console.log("pdf-parse required successfully");
} catch (e) {
    console.error("Failed to require pdf-parse:", e);
}
