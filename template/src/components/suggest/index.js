import { h } from 'preact';
import style from './style';

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';


/**
 * props should contain:
 *  - text
 *  - onUpdate
 *  - suggests
 *  - label (optional)
 */
const Suggest = (props) => {
  const handleChange = event => {
    const text = event.target.value;
    props.onUpdate(text);
  };
  const isHighlighted = false;
  const isSelected = false;
  return (
    <>
      <TextField
        outlined
        onInput={handleChange}
        label={props.label || 'keyword'}
        value={props.text}
        outerStyle={{width: '100%'}}
      />
      {props.suggests && props.suggests.length > 0 ? (
        <List class={style.suggests}>
          {props.suggests.slice(0, 15).map((suggest, idx) => {
            return (
              <List.Item
                selected={isHighlighted}
              >
                {suggest}
              </List.Item>
            )
          })}
        </List>
      ) : null}
    </>
  );
};

export default Suggest;
