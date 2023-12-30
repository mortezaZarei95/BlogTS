import { forwardRef, useRef, useState } from 'react';

interface Prop {
  valueLabel: string;
  minValue: number;
}
const Input = forwardRef<HTMLInputElement, Prop>(
  ({ valueLabel, minValue }, ref) => {
    const [isValid, setIsValid] = useState<boolean>(false);

    const inputOnChange = (
      e: React.ChangeEvent<HTMLInputElement>,
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
        <input
          type="text"
          ref={ref}
          onChange={(e) => inputOnChange(e, minValue)}
          className={`p-1 outline-0 border-[1px] border-solid ${
            isValid ? '!border-red-400' : 'border-gray-600'
          } `}
        />
      </>
    );
  }
);

export default Input;
