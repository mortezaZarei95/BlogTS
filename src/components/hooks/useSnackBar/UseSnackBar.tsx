import { PropsWithChildren, createContext, useState, useContext } from 'react';
import SnackBar from '../../common/snackBar/SnackBar';

interface SnackBarContextType {
  openSnackBar: (text: string, duration?: number) => void;
}

export const SnackBarContext = createContext<SnackBarContextType>({
  openSnackBar: (text: string, duration?: number) => {},
});

const SnackBarProvider = (props: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [duration, setDuration] = useState<number>(2000);

  const openSnackBar = (text: string, _duration?: number) => {
    setOpen(true);
    _duration && setDuration(_duration);
    setText(text);
    setTimeout(() => {
      setOpen(false);
    }, _duration ?? duration);
  };
  return (
    <SnackBarContext.Provider value={{ openSnackBar }}>
      <div className=" relative">
        {props.children}
        {open ? <SnackBar title={text} /> : <></>}
      </div>
    </SnackBarContext.Provider>
  );
};

export const useSnackBar = () => {
  const { openSnackBar } = useContext(SnackBarContext);

  return {openSnackBar};
};

export default SnackBarProvider;
