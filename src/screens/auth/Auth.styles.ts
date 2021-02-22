import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authScreen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 37,
    paddingHorizontal: 21,
    justifyContent: 'space-around',
  },
  nextButton: {},
  text: {
    marginBottom: 17,
    textAlign: 'center',
  },
  imageWelcome: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  imageLogin: {
    marginLeft: 'auto',
    marginRight: 3,
  },
  imageRegister: {
    marginLeft: 'auto',
    marginBottom: -43.5,
    zIndex: 1,
  },
  contentContainer: {
    alignSelf: 'stretch',
    marginBottom: 0,
    alignItems: 'center',
  },
  linkText: {
    fontWeight: '500',
    lineHeight: 16,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  authForm: {
    paddingHorizontal: 19,
    paddingTop: 30,
    paddingBottom: 59,
  },
  title: {
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  welcomeScreen: {
    paddingTop: 0,
    backgroundColor: '#FFFFFF',
  },
  welcomeQuestionText: {
    color: '#7B7B7B',
  },
  welcomeQuestion: {
    marginTop: 19,
  },
  titleGroup: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  authButton: {
    marginTop: 27,
    marginBottom: 16,
    marginHorizontal: 18,
  },
  restoreText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  authField: {
    marginBottom: 35,
  },
  restoreLink: {
    marginBottom: 16,
  },
  loginQuestion: {},
  authFormContainer: {
    alignSelf: 'stretch',
  },
  authButtonsContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  restoreTitle: {
    alignSelf: 'flex-start',
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default styles;
