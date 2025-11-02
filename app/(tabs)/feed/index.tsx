import BoardTabs from "@/components/BoardTabs";
import CategoryButtons from "@/components/CategoryButtons";
import NotificationButton from "@/components/NotificationButton";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedScreen() {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <NotificationButton />
      <View style={{ flex: 1 }}>
        <BoardTabs />
        <CategoryButtons />
        <InputField
          value={searchText}
          // onSubmitEditing={}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Search Keywords"
          leftChild={
            <Fontisto name="search" size={16} color={colors.GRAY_600} />
          }
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
});
