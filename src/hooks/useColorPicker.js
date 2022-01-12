import { useState } from 'react';
export default function useColorPicker() {
  const [colorData, setColorData] = useState({
    didChangeColor: false,
    fgColor: '#ffcc00',
    bgColor: '#212121',
    content: 'Hello World!',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setColorData((prevState) => {
          return {
            ...prevState,
            [name]: value,
            didChangeColor: true,
          };
        });

        break;
      case 'bgColor':
        setColorData((prevState) => {
          return {
            ...prevState,
            [name]: value,
            didChangeColor: true,
          };
        });
        break;
      case 'content':
        setColorData((prevState) => {
          return {
            ...prevState,
            [name]: value,
            didChangeColor: false,
          };
        });
        break;
      default:
        break;
    }
  };
  return [colorData, handleChange];
}
