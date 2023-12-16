import { Component } from 'react';
import MonacoEditor, {
  EditorDidMount,
  ChangeHandler,
} from 'react-monaco-editor';

interface ICodeEditorState {
  code: string;
}
import { RunPlugin } from './PluginEnvironment';

class CodeEditor extends Component<{}, ICodeEditorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      code: '// type your Plugin code here\n',
    };
  }

  onChange: ChangeHandler = (newValue, e) => {
    this.setState({ code: newValue });
  };

  editorDidMount: EditorDidMount = (editor) => {
    console.log('editorDidMount', editor);
    editor.focus();
  };

  handleButtonClick = () => {
    // const worker = new Worker('/worker.js');
    const { code } = this.state;
    RunPlugin(code);
    // worker.postMessage(code);
  };

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
      automaticLayout: true,
      minimap: { enabled: false },
      language: 'javascript',
    };

    return (
      <div>
        <MonacoEditor
          height='600px'
          language='javascript'
          theme='vs-dark'
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <button onClick={this.handleButtonClick}>Run</button>
      </div>
    );
  }
}

export default CodeEditor;
