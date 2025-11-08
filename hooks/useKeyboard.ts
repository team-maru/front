import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export default function useKeyboard() {
  const [isKeyboardVisible, setIskeyboard] = useState(false);

  useEffect(() => {
    const onShow = () => {
      setIskeyboard(true);
    };
    const onHide = () => {
      setIskeyboard(false);
    };
    const showListener = Keyboard.addListener("keyboardDidShow", onShow);
    const hideListener = Keyboard.addListener("keyboardDidHide", onHide);
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return { isKeyboardVisible };
}
