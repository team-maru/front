import { colors } from "@/constants";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import BoardTabs from "../BoardTabs";
import CategoryButtons from "../CategoryButtons";
import NotificationButton from "../NotificationButton";
import InputField from "./InputField";

interface FeedHeaderProps {
  feedtype: "free" | "buddy";
}

function FeedHeader({ feedtype }: FeedHeaderProps) {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.headerContentContainer}>
      <NotificationButton />
      <BoardTabs feedtype={feedtype} />
      {feedtype === "free" && <CategoryButtons />}
      <View style={styles.inputFieldContainer}>
        <InputField
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search Keywords"
          leftChild={
            <Fontisto name="search" size={16} color={colors.GRAY_600} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContentContainer: {
    backgroundColor: colors.WHITE,
    paddingBottom: 16,
  },
  inputFieldContainer: {
    paddingHorizontal: 16,
  },
});

export default FeedHeader;
