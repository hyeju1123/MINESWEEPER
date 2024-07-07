import { Text, TouchableOpacity, View } from "react-native";
import { styles as cellStyle } from "@/style/CellStyle";
import { styles } from "@/style/SmileButtonStyle";

import useActionSheet from "@/hooks/ActionSheet";

export default function SmileButton() {
  const { handleShowSheet } = useActionSheet();
  return (
    <TouchableOpacity
      onPress={() => handleShowSheet(prev => !prev)}
      style={styles.container}
    >
      <View style={[cellStyle.container, { flexGrow: 1 }]}>
        <Text>🙂</Text>
      </View>
    </TouchableOpacity>
  );
}
