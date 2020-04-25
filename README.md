# customize-indentation-rules README
This extension can overwrite indentation rules of programming languages.

## Extension Settings
Write indentation rules for increasing and decreasing indent for each programming language you want
to change in settings.json.

```
    "customizeIndentationRules.rules": [
        {
            "language": "cpp",
            "increaseIndentationPattern": "^.*\\{[^}\"\\']*$|^.*\\([^\\)\"\\']*$|^\\s*(public|private|protected):\\s*$|^\\s*@(public|private|protected)\\s*$|^\\s*\\{\\}$",
            "decreaseIndentationPattern": "^\\s*(\\s*/[*].*[*]/\\s*)*\\}|^\\s*(\\s*/[*].*[*]/\\s*)*\\)|^\\s*(public|private|protected):\\s*$|^\\s*@(public|private|protected)\\s*$"
        },
        {
            "language": "c",
            "increaseIndentationPattern": "^.*\\{[^}\"\\']*$|^.*\\([^\\)\"\\']*$|^\\s*(public|private|protected):\\s*$|^\\s*@(public|private|protected)\\s*$|^\\s*\\{\\}$",
            "decreaseIndentationPattern": "^\\s*(\\s*/[*].*[*]/\\s*)*\\}|^\\s*(\\s*/[*].*[*]/\\s*)*\\)|^\\s*(public|private|protected):\\s*$|^\\s*@(public|private|protected)\\s*$"
        },
    ]
```
