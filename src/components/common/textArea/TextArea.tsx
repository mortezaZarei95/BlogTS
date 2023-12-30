import { ChangeEvent, forwardRef, useState } from 'react';

interface Prop {
  valueLabel: string;
  minValue: number;
}
const TextArea = forwardRef<HTMLTextAreaElement, Prop>(
  ({ valueLabel, minValue }, ref) => {
    const [isValid, setIsValid] = useState<boolean>(false);

    const textAreaOnChange = (
      e: ChangeEvent<HTMLTextAreaElement>,
      minValue: number
    ) => {
      e.preventDefault();
      if (e.target.value.length <= minValue) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };

    return (
      <>
        {valueLabel.length > 0 ? <label>{valueLabel}:</label> : ''}
        <textarea
          ref={ref}
          onChange={(e) => textAreaOnChange(e, minValue)}
          className={`p-1 outline-0 border-[1px] border-solid ${
            isValid ? '!border-red-400' : 'border-gray-600'
          } `}
        />
      </>
    );
  }
);

export default TextArea;
