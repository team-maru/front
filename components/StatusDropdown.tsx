import { useMemo } from "react";
import { ViewStyle } from "react-native";
import Dropdown from "./Dropdown";

const STATUS_OPTIONS = [
  { label: "Korean Student", value: "Korean Student" },
  { label: "Korean Worker", value: "Korean Worker" },
  { label: "Exchange Student", value: "Exchange Student" },
  { label: "International Student", value: "International Student" },
  { label: "Language School Student", value: "Language School Student" },
  { label: "Tourist", value: "Tourist" },
  { label: "Foreign Resident", value: "Foreign Resident" },
  { label: "Other", value: "Other" },
];

interface StatusDropdownProps {
  selectedValue?: string;
  onSelect: (status: string) => void;
  containerStyle?: ViewStyle;
}

function StatusDropdown({
  selectedValue,
  onSelect,
  containerStyle,
}: StatusDropdownProps) {
  const statusList = useMemo(() => {
    return STATUS_OPTIONS;
  }, []);

  const handleSelect = (item: { label: string; value: string }) => {
    onSelect(item.value);
  };

  return (
    <Dropdown
      label="Status"
      placeholder=""
      items={statusList}
      selectedValue={selectedValue}
      onSelect={handleSelect}
      containerStyle={containerStyle}
      searchable={false}
      maxVisibleItems={8}
    />
  );
}

export default StatusDropdown;
