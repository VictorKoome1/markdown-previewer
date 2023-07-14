import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {

  const [text, setText] = useState(`
  # markdown previewer

 ## This is it Tour

 [Michael_Jackson Wikipedia](https://en.wikipedia.org/wiki/Michael_Jackson)

 \`“In a world filled with hate, we must still dare to hope. In a world filled with anger, we must still dare to comfort. In a world filled with despair, we must still dare to dream. And in a world filled with distrust, we must still dare to believe.”\`

 \`\`\`
{
  "firstName": "Michael",
  "lastName": "Jackson",
  "age": 50
}
\`\`\`

## Top Albums
- Thriller
- Smooth Criminal
- Billie Jean

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfc3cZzoFWGZvp2G5hOEJLOg8TVdw7cA_KIxzagLdwvr5G29CwgYxrLtvFwuoYQxgBFY&usqp=CAU)

> King of Pop

**2009**
  `)

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea
      id='editor'
      value={text}
      onChange={(e) => setText(e.target.value)}>
      </textarea>

      <div id='preview'
      dangerouslySetInnerHTML={{__html: marked(text)}}
      >
      </div>
    </div>
  );
}

export default App;
