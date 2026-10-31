import { Text, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { multiply } from '@jellyfin/sdk-react';

const result = multiply(3, 7);

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode ? styles.darkBackground : styles.lightBackground,
      ]}
    >
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        Result: {result}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
  darkBackground: {
    backgroundColor: 'black',
  },
  lightBackground: {
    backgroundColor: 'white',
  },
});
