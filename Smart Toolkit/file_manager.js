
const fs = require('fs');
const path = require('path');

const [, , command, fileName, ...contentParts] = process.argv;
const dataDirectory = path.join(__dirname, 'data');

function usage(message) {
  if (message) console.error(`Error: ${message}`);
  console.log('Usage: node file_manager.js <create|read|update|delete> <fileName> [content]');
  process.exitCode = 1;
}

function getSafeFilePath(name) {
  if (!name || path.basename(name) !== name) return null;
  return path.join(dataDirectory, name);
}

const filePath = getSafeFilePath(fileName);
const content = contentParts.join(' ');

if (!command || !filePath) {
  usage('Provide a file name without folder paths.');
} else {
  console.log(`Starting ${command} operation for: ${fileName}`);

  fs.mkdir(dataDirectory, { recursive: true }, (directoryError) => {
    if (directoryError) {
      console.error(`Could not prepare data directory: ${directoryError.message}`);
      process.exitCode = 1;
      return;
    }

    switch (command.toLowerCase()) {
      case 'create':
        if (!content) return usage('Content is required when creating a file.');
        fs.writeFile(filePath, content, 'utf8', (error) => {
          if (error) console.error(`Create failed: ${error.message}`);
          else console.log(`File created successfully: data/${fileName}`);
        });
        break;
      case 'read':
        fs.readFile(filePath, 'utf8', (error, data) => {
          if (error) console.error(`Read failed: ${error.code === 'ENOENT' ? 'File does not exist.' : error.message}`);
          else console.log(`File content:\n${data}`);
        });
        break;
      case 'update':
        if (!content) return usage('Content is required when updating a file.');
        fs.appendFile(filePath, content, 'utf8', (error) => {
          if (error) console.error(`Update failed: ${error.message}`);
          else console.log(`File updated successfully: data/${fileName}`);
        });
        break;
      case 'delete':
        fs.unlink(filePath, (error) => {
          if (error) console.error(`Delete failed: ${error.code === 'ENOENT' ? 'File does not exist.' : error.message}`);
          else console.log(`File deleted successfully: data/${fileName}`);
        });
        break;
      default:
        usage(`Unsupported command "${command}".`);
    }
  });
}
