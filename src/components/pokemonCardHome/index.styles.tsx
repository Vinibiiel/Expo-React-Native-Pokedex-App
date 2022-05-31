import { StyleSheet, } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,

    },
    cardContainer: {
        backgroundColor: "white",
        flexDirection: 'row',
        height: 200,
        width: '100%',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 20,
        overflow: "hidden",
        padding: 10,
        margin: 0,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    cardView: {
        flex: 1,
        flexDirection: 'column'
    },
    cardText: {
        color: "black",
        fontSize: 18,
    }
});