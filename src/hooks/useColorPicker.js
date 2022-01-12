import { useState } from 'react';
export default function useColorPicker() {
  const [didChangeColor, setDidChangeColor] = useState(false);
  const [fgColor, setFgColor] = useState('#ffcc00');
  const [bgColor, setBgColor] = useState('#212121');
  const [content, setContent] = useState('Hello, world!');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        setDidChangeColor(true);
        break;
      case 'bgColor':
        setBgColor(value);
        setDidChangeColor(true);
        break;
      case 'content':
        setDidChangeColor(false);
        setContent(value);
        break;
      default:
        break;
    }
  };
  return [didChangeColor, bgColor, fgColor, content, handleChange];
}
