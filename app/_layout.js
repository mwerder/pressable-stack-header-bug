import {Slot, Stack} from "expo-router";


export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#fff8ad" },
                headerTintColor:  "#5a005a",
                headerTitleStyle: {fontWeight: "bold"},
            }}
        />
    )
}