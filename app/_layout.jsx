import { Tabs } from 'expo-router';
import { AppProvider } from './AppContext';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tabs>
          <Tabs.Screen name="index" options={{ title: 'Top 3 List' }} />
          <Tabs.Screen name="edit" options={{ title: 'Edit List' }} />
        </Tabs>
      </SafeAreaView>
    </AppProvider>
  );
}