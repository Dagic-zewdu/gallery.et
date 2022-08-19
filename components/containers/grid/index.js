import { View, Dimensions, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../globalstyles';

export const Container = ({ size, children }) => (
    <View style={{
        flex: size, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        width: Dimensions.get('window').width,

    }}>
        {children}
    </View>
)

export const Row = ({ children }) =>
    (<View style={{ flexDirection: "row" }}> {children}</View>)

export const Col = ({ numRows, children, item, onPress = () => { } }) => (
    <TouchableOpacity style={{
        borderWidth: 0.1,
        flex: numRows,
        maxWidth: `${100 / numRows}%`
    }}
        delayPressIn={1000}
        onPress={() => onPress(item)}
    >

        {children}
    </TouchableOpacity>
)

export const FlatCol = ({ item, children, onPress }) => (
    <TouchableOpacity style={{
        flex: 1,
        maxWidth: "100%", // 100% devided by the number of rows you want
        alignItems: "center",
        padding: 2,
        borderWidth: 0.1,
        borderColor: "#fff"
    }}
        delayPressIn={1000}
        onPress={() => onPress(item)}

    >
        {children}
    </TouchableOpacity>
)