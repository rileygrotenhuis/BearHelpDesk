// Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
    console.log(`Bear Help Desk is running at ${PORT}`);
});