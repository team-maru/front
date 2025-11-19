import { colors } from "@/constants";
import { formatAbsoluteDate, formatRelativeDate } from "@/utils/dayjsConfig";
import { StyleSheet } from "react-native";
import CustomText from "./ui/CustomText";

interface CreatedAtProps {
  createdAt?: string | Date;
  isDetail?: boolean;
}

function CreatedAt({ createdAt = "", isDetail = false }: CreatedAtProps) {
  const date = isDetail
    ? formatAbsoluteDate(createdAt)
    : formatRelativeDate(createdAt);

  return (
    <CustomText fontWeight="medium" style={styles.createdAt}>
      {date}
    </CustomText>
  );
}

const styles = StyleSheet.create({
  createdAt: {
    fontSize: 8,
    color: colors.GRAY_600,
    paddingHorizontal: 16,
  },
});

export default CreatedAt;
