import { View, Dimensions } from 'react-native';
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

export const Col = ({ numRows, children }) => (
    <View style={{
        borderWidth: 0.1,
        flex: numRows,
        maxWidth: `${100 / numRows}%`
    }}>
        {children}
    </View>
)

export const FlatCol = ({ numRows, children }) => (
    <View>
        {children}
    </View>
)