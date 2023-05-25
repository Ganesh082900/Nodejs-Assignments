const fs = require('fs/promises')

// Function for the creation of file .
const myFileWriter = async (fileName, fileContent) => {

	try {
		await fs.writeFile(fileName, fileContent);
		console.log("File Created")
	} catch (error) {
		console.log(error)
	}
}

// Function for the Reading of file .
const myFileReader = async (fileName) => {

	try {
		const data = await fs.readFile(fileName, "utf-8")
		console.log(data)
	}
	catch (err) {
		console.log(err)
	}
}

// Function for the Update the file .
const myFileUpdater = async (fileName, fileContent) => {

	try {
		await fs.appendFile(fileName, fileContent)
		console.log("File updated")
	}
	catch (err) {
		console.log(err)
	}
}

// Function for the Delete of file .
const myFileDeleter = async (fileName) => {

	try {
		await fs.unlink(fileName)
		console.log("Deleted")
	}
	catch (err) {
		console.log(err)
	}
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }