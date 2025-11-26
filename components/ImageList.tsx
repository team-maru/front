import { Image, Pressable, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface ImageItemProps {
  id: number;
  url: string | "";
}

export interface ImageListProps {
  imageList: ImageItemProps[];
}

function ImageList({ imageList }: ImageListProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.imagesContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {imageList.map((item) => (
        <Pressable key={item.id} onPress={(e) => e.stopPropagation()}>
          <Image
            source={
              item.url === "" || !item.url
                ? require("@/assets/images/Earth.png")
                : { uri: item.url }
            }
            style={styles.imageStyle}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    gap: 16,
  },
  imageStyle: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});

export default ImageList;
