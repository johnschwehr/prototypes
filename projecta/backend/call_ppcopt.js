const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000

app.get('/', (req, res) => {

    filename = "";
    
    var dataToSend;
    // spawn new child process to call ppcopt.py
    const ppcopt = spawn('python', ['../scripts/ppcopt.py',filename]);
    // collect data from script
    ppcopt.stdout.on('data', function(data) {
        console.log('Pipe data from ppcopt.py...');
        dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    ppcopt.on('close', (code) => {
        console.log('child process closed all stdio with code ${code}');
        // send data to browser
        res.send(dataToSend)
    });
})

app.listen(port, () => console.log('Example app listening on port ${port}!'))