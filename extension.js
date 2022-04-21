// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */


function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "break-timer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('break-timer.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Break Timer extension is active ');
	});
	vscode.commands.registerCommand('break-timer.set', function () {
		setTimer();
	})
	//make an input, act upon the value after input
	setTimer();


	context.subscriptions.push(disposable);
}

function setTimer() {
	let input = vscode.window.showInputBox({title: 'How many minutes you want to spend time to code in a single session?'});
	input.then(
		function(result) {
			let minutes = parseInt(result);
			//convert to milisec
			let milisec = toMilisec(minutes);
			//set timeout for a notif
			setTimeout(remind, milisec);
		},
		function(err) {
			console.log('error: ' + err);
		}
	)
}
function remind(){
	vscode.window.showWarningMessage('Hands Up! stop coding!');
}

//convert to miliseconds
function toMilisec(minutes) {
	return minutes * 60 * 1000;
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
