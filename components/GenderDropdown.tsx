import { useMemo } from "react";
import { ViewStyle } from "react-native";
import Dropdown from "./Dropdown";

const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

interface GenderDropdownProps {
  selectedValue?: string;
  onSelect: (gender: string) => void;
  containerStyle?: ViewStyle;
}

function GenderDropdown({
  selectedValue,
  onSelect,
  containerStyle,
}: GenderDropdownProps) {
  // 성별 리스트 생성
  const genderList = useMemo(() => {
    return GENDER_OPTIONS;
  }, []);

  const handleSelect = (item: { label: string; value: string }) => {
    onSelect(item.value);
  };

  return (
    <Dropdown
      label="Gender"
      placeholder=""
      items={genderList}
      selectedValue={selectedValue}
      onSelect={handleSelect}
      containerStyle={containerStyle}
      searchable={false}
      maxVisibleItems={3}
    />
  );
}

export default GenderDropdown;
