import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style';

import Suggest from '../suggest';

const Main = () => {
  const [query, setQuery] = useState('');
  const [suggests, setSuggests] = useState([]);
  const onUpdateQuery = (text) => {
    setQuery(text);
    const nextSuggests = [];
    if (text) {
      nextSuggests.push(text);
      for (let i = 1; i < 10; i++) {
        nextSuggests.push(nextSuggests[i - 1] + text);
      }
    }
    setSuggests(nextSuggests)
  };
  return (
    <div class={style.main}>
      <h1>Single Page Sample</h1>
      <p>This is the real-time suggest component.</p>
      <Suggest
        onUpdate={onUpdateQuery}
        label="Real-time Suggest"
        text={query}
        suggests={suggests}
      />
    </div>
  );
};

export default Main;
