import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';


import t from 'tcomb-form-native';

const Form = t.form.Form;


const Input = t.struct({
  filename: t.String
})

const speech = require('@google-cloud/speech');


export default class SecondPage extends Component {

  export = () => {
    const inputPath = this._form.getValue();
    console.log('name: ', inputPath.filename);
  }

  render() {
      const { audioFilePath } = this.props.navigation.state.params;

      return (
          <View style={styles.container}>
            <Form 
              ref={c => this._form = c}
              type={Input} 
            /> 
            <Button
              title="Save and Export"
              onPress={this.export}
            />
          </View>        
      );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('SecondPage', () => SecondPage);