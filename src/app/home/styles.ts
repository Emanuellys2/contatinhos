import { theme } from "@/theme"
import { StyleSheet } from "react-native"
import { Input } from "../components/input"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
        paddingHorizontal: 24,

    },
    Input: {
        marginBottom: -27,
    },
})