const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  fs.appendFile(fileName, fileContent);
};

module.exports = updateFile;
