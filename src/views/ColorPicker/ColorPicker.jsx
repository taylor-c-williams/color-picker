import useColorPicker from '../../hooks/useColorPicker';
import useAffirmation from '../../hooks/useAffirmation';
import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';

export default function ColorPicker() {
  const [colorData, handleChange] = useColorPicker();
  const affirmation = useAffirmation({ ...colorData });

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {colorData.didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={colorData.fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={colorData.bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={colorData.content}
          onChange={handleChange}
        />
      </fieldset>
      <Display
        content={colorData.content}
        bgColor={colorData.bgColor}
        fgColor={colorData.fgColor}
      />
    </>
  );
}
