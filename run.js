const { exec } = require('child_process');
const path = require('path');

const backendDirectory = path.join(__dirname, 'backend');
const frontendDirectory = path.join(__dirname, 'frontend');

// Start backend process
const backendProcess = exec('node app.js', { cwd: backendDirectory });

backendProcess.stdout.on('data', (data) => {
  console.log(`Backend: ${data}`);
});

backendProcess.stderr.on('data', (data) => {
  console.error(`Backend Error: ${data}`);
});

backendProcess.on('close', (code) => {
  console.log(`Backend process exited with code ${code}`);
});

// Start frontend process
const frontendProcess = exec('node compiled/server.js', { cwd: frontendDirectory });

frontendProcess.stdout.on('data', (data) => {
  console.log(`Frontend: ${data}`);
});

frontendProcess.stderr.on('data', (data) => {
  console.error(`Frontend Error: ${data}`);
});

frontendProcess.on('close', (code) => {
  console.log(`Frontend process exited with code ${code}`);
});
