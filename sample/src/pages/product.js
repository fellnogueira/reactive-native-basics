import React from 'react';
import {WebView} from 'react-native-webview';
import {Text} from 'react-native';
    //<Webview source={{uri: navigation.state.params.product.url}}/>

const Product = ({navigation}) => (
    //<WebView source={{uri: 'www.google.com'}}/>
    <Text>www.google.com</Text>
)

Product.navigationOptions = ({navigation}) => ({});

export default Product;