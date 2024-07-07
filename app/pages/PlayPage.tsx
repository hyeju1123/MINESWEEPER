import { SafeAreaView, ScrollView } from "react-native";
import Board from "@/components/Board";
import { styles } from "@/style/StartPageStyle";
import GameHeader from "@/components/GameHeader";

export default function PlayPage() {
  return (
    <SafeAreaView style={styles.container}>
      <GameHeader />
      <ScrollView bounces={false}>
        <Board />
      </ScrollView>
    </SafeAreaView>
  );
}
