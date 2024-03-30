import { Stack } from 'expo-router';

function RootLayoutNav() {

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}

export default RootLayoutNav;
