// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

interface RuleSetting {
  language: string;
  increaseIndentationPattern: string;
  decreaseIndentationPattern: string;
}

function updateLanguageConfigurations() {
  const configuration = vscode.workspace.getConfiguration('customizeIndentationRules');
  const rules = configuration.get<Array<RuleSetting>>('rules');
  if (!rules) {
    return;
  }
  for (const rule of rules) {
		const increaseIndentationPattern = new RegExp(rule.increaseIndentationPattern);
		const decreaseIndentationPattern = new RegExp(rule.decreaseIndentationPattern);
		 vscode.languages.setLanguageConfiguration(rule.language, {
			 indentationRules: {
				 increaseIndentPattern: increaseIndentationPattern,
				 decreaseIndentPattern: decreaseIndentationPattern
			 }
		 });
  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  updateLanguageConfigurations();
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'customize-indentation-rules.updateIndentationRules',
    () => {
      // The code you place here will be executed every time your command is executed
      updateLanguageConfigurations();
      // Display a message box to the user
      vscode.window.showInformationMessage('Updated IndentationRules');
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
