import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

interface DropdownContextType {
  openDropdownId: string | null;
  setOpenDropdownId: (id: string | null) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export function DropdownProvider({ children }: { children: ReactNode }) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  // 키보드 올라올 때 드랍다운 닫기 (인풋필드 포커스 시 드랍다운 닫게 하기 위해)
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        if (openDropdownId) {
          setOpenDropdownId(null);
        }
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, [openDropdownId]);

  // 드랍다운 열릴 때 키보드 닫기(인풋필드 포커스 해제)
  useEffect(() => {
    if (openDropdownId) {
      Keyboard.dismiss();
    }
  }, [openDropdownId]);

  const handleOutsidePress = () => {
    if (openDropdownId) {
      setOpenDropdownId(null);
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <DropdownContext.Provider value={{ openDropdownId, setOpenDropdownId }}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={{ flex: 1 }}>{children}</View>
      </TouchableWithoutFeedback>
    </DropdownContext.Provider>
  );
}

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider"
    );
  }
  return context;
}
