import React from 'react';
import { 
    KeyboardAvoidingView, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Platform, 
    StyleSheet 
} from 'react-native';
import { verticalScale } from '../assets/utils/respSizes';

import { colors } from '../assets/utils/colorTheme';

const Layout = ({ children }) => {


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    scrollView: {
      flexGrow: 1,
      padding: verticalScale(16),
      marginTop: verticalScale(40)
    },
  });
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};



export default Layout;
