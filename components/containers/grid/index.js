import { globalStyles } from '../../../globalstyles'
import { View } from 'react-native'

export const Col = ({ numRows, children }) => {
    return (
        <View style={globalStyles[`${numRows}col`]}>{children}</View>
    )
}

export const Row = ({ children }) => (
    <View style={globalStyles.row}>{children}</View>
)

export const Container = ({ children }) => (
    <View style={globalStyles.app}>{children}</View>
) 
