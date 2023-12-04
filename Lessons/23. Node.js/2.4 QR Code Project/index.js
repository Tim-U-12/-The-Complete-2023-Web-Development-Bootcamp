import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Please input a url'
        }
    ])
    .then((answers) => {
        // Create qr code
        var qr_png = qr.image(answers.url, {type:"png"});
        qr_png.pipe(fs.createWriteStream(answers.url + ".png"))

        // Save user's input
        fs.appendFile("user-input.txt", "\n" + answers.url, 'utf-8', (err) => {
            if (err) throw (err);
            console.log("File written successfully.")
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("Prompt couldn't be rendered in the current environment")
          } else {
            // Something else went wrong
            console.log("Something else went wrong")
          }
    })
