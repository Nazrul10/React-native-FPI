import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
}
