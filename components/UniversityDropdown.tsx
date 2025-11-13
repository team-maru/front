import { UNIVERSITIES } from "@/constants/universities";
import { useMemo } from "react";
import { ViewStyle } from "react-native";
import Dropdown from "./Dropdown";

// value 기준으로 우선순위 정의
const PRIORITY_UNIVERSITY_VALUES = ["Hanyang University"];

interface UniversityDropdownProps {
  selectedValue?: string;
  onSelect: (university: string) => void;
  containerStyle?: ViewStyle;
}

function UniversityDropdown({
  selectedValue,
  onSelect,
  containerStyle,
}: UniversityDropdownProps) {
  // 대학 리스트 생성 및 정렬
  const universityList = useMemo(() => {
    // 우선순위 대학(한양대) 추출
    const priorityItems = UNIVERSITIES.filter((university) =>
      PRIORITY_UNIVERSITY_VALUES.includes(university.value)
    );

    // 나머지 대학들 오름차순 정렬
    const otherItems = UNIVERSITIES.filter(
      (university) => !PRIORITY_UNIVERSITY_VALUES.includes(university.value)
    ).sort((a, b) => a.label.localeCompare(b.label));

    return [...priorityItems, ...otherItems];
  }, []);

  const handleSelect = (item: { label: string; value: string }) => {
    onSelect(item.value);
  };

  return (
    <Dropdown
      label="University"
      placeholder=""
      items={universityList}
      selectedValue={selectedValue}
      onSelect={handleSelect}
      containerStyle={containerStyle}
      searchable={true}
      searchPlaceholder="Search university"
      emptyMessage="No universities found"
      maxVisibleItems={7}
    />
  );
}

export default UniversityDropdown;
