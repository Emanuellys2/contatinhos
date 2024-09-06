import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 18,
        gap: 7,

    },
    input:{
        flex: 1,
        color: theme.colors.black,
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,

    }
})