import { Link, Tabs } from 'expo-router';
import { Text } from 'react-native';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          headerRight: () => (
            <Link href="/">
              <Text>pulsar</Text>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
        }}
      />
    </Tabs>
  );
}
