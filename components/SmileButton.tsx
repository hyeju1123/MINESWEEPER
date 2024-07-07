import { Text, TouchableOpacity, View } from "react-native";
import { styles as cellStyle } from "@/style/CellStyle";
import { styles } from "@/style/SmileButtonStyle";

export default function SmileButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[cellStyle.container, { flexGrow: 1 }]}>
        <Text>🙂</Text>
      </View>
    </TouchableOpacity>
  );
}
