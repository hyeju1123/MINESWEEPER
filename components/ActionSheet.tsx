import { TouchableWithoutFeedback, View } from "react-native";
import { styles } from "@/style/ModalStyle";
import Modal from "./Modal";
import useActionSheet from "@/hooks/ActionSheet";

export default function ActionSheet() {
  const { showSheet, handleShowSheet } = useActionSheet();
  return (
    <TouchableWithoutFeedback onPress={() => handleShowSheet(false)}>
      <View
        style={[styles.container, { display: showSheet ? "flex" : "none" }]}
      >
        <Modal />
      </View>
    </TouchableWithoutFeedback>
  );
}
