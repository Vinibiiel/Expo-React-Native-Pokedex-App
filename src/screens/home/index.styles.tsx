import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#910202'
    },
    textInput: {
        height: 40,
        margin: 12,
        borderBottomWidth: 2,
        borderColor: '#333',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
    },
    textInputModal: {
        width: '95%',
        height: 50,
        margin: 12,
        borderColor: '#333',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    modalStyle: {
        margin: 0, alignItems: 'center', justifyContent: 'center'
    }
});