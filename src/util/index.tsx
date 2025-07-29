// @flow
import {Platform, Alert, Linking, PermissionsAndroid} from 'react-native';
import moment from 'moment';
import {MessageBarManager} from 'react-native-message-bar';
import DataHandler from '../services/DataHandler';
var passwordValidator = require('password-validator');

import {MESSAGE_TYPES, DISCARD_WARNING} from '../constants';

var schema = new passwordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .has()
  .symbols();
class Util {
  keyExtractor = (item: Object, index: number) => index.toString();
  isPlatformAndroid() {
    return Platform.OS === 'android';
  }
  isValidURL(url: 'string') {
    const re =
      /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }
  isEmailValid(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  isPasswordValid(password: string) {
    return schema.validate(password);
  }
  isValidName(name: string) {
    return /^[a-zA-Z '.-]*$/.test(name);
  }
  getValidImage(image: string) {
    if (typeof image === 'string' && this.isValidURL(image)) {
      return {uri: image};
    }
    // if (typeof image === "string" && !this.isValidURL(image)) {
    //   return require(image);
    // }
    return image;
  }

  topAlert(message: string, alertType = 'success') {
    MessageBarManager.showAlert({
      message,
      alertType,
    });
  }

  topAlertError(message: any, alertType = MESSAGE_TYPES.ERROR) {
    MessageBarManager.showAlert({
      message,
      alertType,
    });
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  isRequiredMessage(field: string) {
    return `${this.capitalizeFirstLetter(field)} is required`;
  }

  isInvalidMessage(field: string) {
    return `Invalid ${this.capitalizeFirstLetter(field)}`;
  }

  getFormattedDateTime = (
    date: moment.MomentInput,
    format: string | undefined,
  ) => {
    if (date) return moment(date).format(format);
    return '';
  };

  getDateObjectFromString = (
    date: moment.MomentInput,
    format: boolean | undefined,
  ) => {
    if (date) return moment(date, format).toDate();
    return '';
  };

  showLoader = (
    instance: {
      state: {loading: any};
      setState: (arg0: {loading: boolean; loadingFor: string}) => void;
    },
    loadingFor = '',
  ) => {
    if (!instance.state.loading) {
      instance.setState({
        loading: true,
        loadingFor,
      });
    }
  };

  hideLoader = (instance: any, callback: any) => {
    if (instance.state.loading) {
      instance.setState(
        {
          loading: false,
          loadingFor: '',
        },
        callback,
      );
    }
  };

  getCurrentUserAccessToken() {
    return DataHandler.getStore().getState().user.data.access_token;
  }

  userIsServiceProvider() {
    return (
      DataHandler.getStore().getState().user.data.user_type ===
      'service provider'
    );
  }

  getErrorText(error: string | any[]) {
    if (error instanceof Array) {
      if (error.length > 0) return error[0];
    } else {
      return error;
    }
    return '';
  }

  discardAlert(onYesPress: any) {
    Alert.alert(
      'Discard?',
      DISCARD_WARNING,
      [
        {text: 'Yes', onPress: onYesPress},
        {text: 'No', style: 'cancel'},
      ],

      {cancelable: true},
    );
  }

  isNumber(val: string) {
    return /^\d+$/.test(val);
  }

  workInProgress() {
    MessageBarManager.showAlert({
      message: 'Work in progress',
      alertType: 'info',
    });
  }

  commingSoon() {
    MessageBarManager.showAlert({
      message: 'Coming soon',
      alertType: 'info',
    });
  }

  openLinkInBrowser(url: string) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }

  generateGetParameter(obj: {[x: string]: any}) {
    let final = '?';
    for (const key in obj) {
      final = `${final}${key}=${obj[key]}&`;
    }
    final = final.slice(0, -1);
    return final;
  }
}

export default new Util();
