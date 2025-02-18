import { Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {Stack} from "expo-router";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Stack.Screen options={{
          title: "Home",
          headerRight: () => (
            <Pressable 
              style={[styles.headerButton, { zIndex: 1 }]}
              onPress={() => setCount((count) => count + 1)}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.headerText}>Increment</Text>
            </Pressable>
        ),
        }}/>

        <Pressable 
              style={styles.headerButton}
              onPress={() => setCount((count) => count + 1)}
              activeOpacity={0.7}
            >
              <Text style={styles.headerText}>Increment</Text>
          </Pressable>
        <Text>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  headerButton: {
    padding: 12,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 16,
    color: '#007AFF',
  },
});
