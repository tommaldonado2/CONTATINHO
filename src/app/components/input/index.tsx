import { View, TextInput } from 'react-native'


function Input({ children }: ViewProps){
    return
    <View style={styles.container}>{children}</View>
}
function Field(){
    <TextInput></TextInput>
}

Input.Field = Field 

export { Input }