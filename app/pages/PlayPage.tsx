import { SafeAreaView } from "react-native";
import Board from "@/components/Board";
import { styles } from "@/style/StartPageStyle";

export default function PlayPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Board />
    </SafeAreaView>
  );
}
