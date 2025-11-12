import { colors } from "@/constants";
import { fonts } from "@/constants/fonts";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import CustomText from "./ui/CustomText";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  placeholder?: string;
  items: DropdownItem[];
  selectedValue?: string;
  onSelect: (item: DropdownItem) => void;
  containerStyle?: ViewStyle;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: string;
}

function Dropdown({
  label,
  placeholder = "선택해주세요",
  items,
  selectedValue,
  onSelect,
  containerStyle,
  searchable = false,
  searchPlaceholder = "검색",
  emptyMessage = "항목이 없습니다",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const selectedItem = items.find((item) => item.value === selectedValue);

  // 검색 필터링
  const filteredItems = useMemo(() => {
    if (!searchText.trim() || !searchable) return items;
    return items.filter((item) =>
      item.label.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [items, searchText, searchable]);

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setIsOpen(false);
    setSearchText("");
  };

  return (
    <View style={styles.wrapper}>
      {label && (
        <CustomText fontWeight="regular" style={styles.label}>
          {label}
        </CustomText>
      )}

      <View>
        <Pressable
          style={[styles.container, containerStyle]}
          onPress={() => setIsOpen(!isOpen)}
        >
          <CustomText
            style={[
              styles.selectedText,
              !selectedItem && styles.placeholderText,
            ]}
          >
            {selectedItem?.label || placeholder}
          </CustomText>
          <View style={[styles.arrow, isOpen && styles.arrowRotated]}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={colors.GRAY_600}
            />
          </View>
        </Pressable>

        {isOpen && (
          <View style={styles.dropdown}>
            {/* 검색 입력 필드 */}
            {searchable && (
              <View style={styles.searchContainer}>
                <Ionicons name="search" size={18} color={colors.GRAY_900} />
                <TextInput
                  style={styles.searchInput}
                  placeholder={searchPlaceholder}
                  placeholderTextColor={colors.GRAY_900}
                  value={searchText}
                  onChangeText={setSearchText}
                />
              </View>
            )}

            <FlatList
              data={filteredItems}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}
                >
                  <CustomText
                    style={[
                      styles.dropdownItemText,
                      item.value === selectedValue && styles.selectedItemText,
                    ]}
                  >
                    {item.label}
                  </CustomText>
                </Pressable>
              )}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              ListEmptyComponent={
                searchText.trim() ? (
                  <View style={styles.emptyContainer}>
                    <CustomText style={styles.emptyText}>
                      {emptyMessage}
                    </CustomText>
                  </View>
                ) : null
              }
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
  },

  container: {
    height: 40,
    width: 355,
    backgroundColor: colors.GRAY_100,
    borderWidth: 1,
    borderColor: colors.GRAY_500,
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 10,
    color: colors.GRAY_600,
    marginBottom: 5,
  },
  selectedText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.BLACK,
  },
  placeholderText: {
    color: colors.GRAY_600,
  },
  arrow: {
    transform: [{ rotate: "0deg" }],
  },
  arrowRotated: {
    transform: [{ rotate: "180deg" }],
  },
  dropdown: {
    backgroundColor: colors.GRAY_100,
    borderRadius: 12,
    marginTop: 1,
    padding: 12,
    maxHeight: 280,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    gap: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_500,
    gap: 7,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.BLACK,
  },
  dropdownItem: {
    paddingVertical: 6,
  },
  dropdownItemText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.BLACK,
  },
  selectedItemText: {
    color: colors.ORANGE_600,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 14,
    color: colors.GRAY_600,
    fontFamily: fonts.regular,
  },
});

export default Dropdown;
