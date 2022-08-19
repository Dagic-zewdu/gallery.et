import { StyleSheet, Dimensions } from 'react-native';

export const globalStyles = StyleSheet.create({
    app: {
        flex: 4, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        width: Dimensions,
    },
    row: {
        flexDirection: "row"
    },
    "1col": {
        borderWidth: 0.1,
        flex: 1,
    },
    "2col": {
        borderWidth: 0.1,
        flex: 2
    },
    "3col": {
        borderWidth: 0.1,
        flex: 3
    },
    "4col": {
        flex: 4
    }
})
