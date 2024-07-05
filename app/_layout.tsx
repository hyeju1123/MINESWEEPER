import { RecoilRoot } from "recoil";
import App from "./App";

export default function RootLayout() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
