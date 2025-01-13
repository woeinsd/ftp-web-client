const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const scriptPath = path.resolve(__dirname, 'apply_patches.sh');

// 设置 apply_patches.sh 的权限
fs.chmod(scriptPath, '755', (err) => {
    if (err) {
        console.error(`Error setting permissions: ${err.message}`);
        process.exit(1);
    } else {
        console.log('Permissions set successfully.');
        exec(scriptPath, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error applying patch: ${stderr}`);
                process.exit(1);
            } else {
                console.log(`Patch applied successfully: ${stdout}`);
            }
        });
    }
});
