import { SafeAreaView, View } from "react-native";
import Board from "@/components/Board";
import GameHeader from "@/components/GameHeader";
import ActionSheet from "@/components/ActionSheet";
import { styles } from "@/style/PlayPageStyle";

export default function PlayPage() {
  return (
    <SafeAreaView style={styles.container}>
      <GameHeader />
      <View style={styles.boardWrapper}>
        <Board />
      </View>
      <ActionSheet />
    </SafeAreaView>
  );
}
