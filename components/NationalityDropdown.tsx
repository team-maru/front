import countries from "i18n-iso-countries";
import { useMemo } from "react";
import { ViewStyle } from "react-native";
import Dropdown from "./Dropdown";

// 영어 로케일 등록
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// 우선순위 국가 코드 (ISO 2자리 코드)
const PRIORITY_COUNTRIES = ["KR", "JP", "CN", "US", "FR", "DE", "MX"];

interface NationalityDropdownProps {
  selectedValue?: string;
  onSelect: (countryCode: string) => void;
  containerStyle?: ViewStyle;
}

function NationalityDropdown({
  selectedValue,
  onSelect,
  containerStyle,
}: NationalityDropdownProps) {
  // 국가 리스트 생성
  const countryList = useMemo(() => {
    const countryObj = countries.getNames("en", { select: "official" });
    const allCountries = Object.entries(countryObj).map(([code, name]) => ({
      label: name,
      value: code,
    }));

    // 우선순위 국가들을 먼저 추출
    const priorityItems = PRIORITY_COUNTRIES.map((code) =>
      allCountries.find((country) => country.value === code)
    ).filter(Boolean) as { label: string; value: string }[];

    // 나머지 국가들을 알파벳 순으로 정렬
    const otherItems = allCountries
      .filter((country) => !PRIORITY_COUNTRIES.includes(country.value))
      .sort((a, b) => a.label.localeCompare(b.label));

    // 우선순위 국가 + 나머지 국가 순서로 합치기
    return [...priorityItems, ...otherItems];
  }, []);

  const handleSelect = (item: { label: string; value: string }) => {
    onSelect(item.value);
  };

  return (
    <Dropdown
      label="Nationality"
      placeholder=""
      items={countryList}
      selectedValue={selectedValue}
      onSelect={handleSelect}
      containerStyle={containerStyle}
      searchable={true}
      searchPlaceholder="Search countries"
      emptyMessage="No countries found"
      maxVisibleItems={7}
    />
  );
}

export default NationalityDropdown;
