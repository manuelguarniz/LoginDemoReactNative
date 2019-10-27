import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import bgImg from './assets/images/circles-background-colour-1080x1920.jpg';
import imgLogo from './assets/images/logo-react.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get('window');
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    }
  }

  showPassword() {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  }

  render() {
    return (
      <ImageBackground
        source={bgImg}
        style={styles.backGroundContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={imgLogo}
            style={styles.logo}/>
            <Text style={styles.logoText}>React Native</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name='user'
            size={28}
            color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(225, 225, 225, 0.7)'}
            underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name='lock'
            size={28}
            color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(225, 225, 225, 0.7)'}
            underlineColorAndroid='transparent'/>
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPassword.bind(this)}>
            <Icon
              name={this.state.press == false ? 'eye' : 'eye-slash'}
              size={26}
              color={'rgba(225, 225, 225, 0.7)'}/>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
  logo: {
    width: 135,
    height: 120,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center'
  },
});
