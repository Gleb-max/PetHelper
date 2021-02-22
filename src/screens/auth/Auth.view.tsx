import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  BackHandler,
} from 'react-native';

//other deps
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

//components
import {
  AuthButton,
  AuthImage,
  AuthForm,
  AuthQuestionNav,
  AuthTitle,
  CustomTextInput,
  MontserratText,
  AppFeatureImage,
  AppFeatureText,
} from 'library/components';

//styles
import styles from './Auth.styles';

//types
type AuthViewProps = {
  authScreens: AuthItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

//values
let firstIndex = -1;
let lastIndex = -1;
let deque: number[] = [];

export type AuthItem = {
  type: 'welcome' | 'login' | 'register' | 'restore';
  image: NodeModule;
};

export const AuthView: React.FC<AuthViewProps> = ({
  authScreens,
  activeIndex,
  setActiveIndex,
}) => {
  //state
  const [viewportWidth, setViewportWidth] = React.useState(
    Dimensions.get('window').width,
  );

  //refs
  var refCarousel = React.createRef<any>();

  //callbacks
  const _onLayout = () => {
    setViewportWidth(Dimensions.get('window').width);
  };

  const _goTo = (index: number) => {
    if (firstIndex === -1) {
      firstIndex = index;
    } else if (lastIndex !== -1) {
      deque.push(lastIndex);
    }
    lastIndex = index;
    refCarousel.current.snapToItem(index, false);
  };

  //effects
  React.useEffect(() => {
    const backAction = () => {
      if (firstIndex === -1) {
        BackHandler.exitApp();
      } else if (activeIndex === firstIndex) {
        deque = [];
        BackHandler.exitApp();
      } else {
        let last = deque.pop();
        if (last === undefined) {
          BackHandler.exitApp();
        } else {
          refCarousel.current.snapToItem(last, false);
          lastIndex = last;
        }
      }
      return true;
    };
    console.log(deque);
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [activeIndex, refCarousel]);

  //renders
  const _renderItem = ({item, index}: any) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {_renderScreen(item, index)}
      </ScrollView>
    );
  };

  const _renderScreen = (item: AuthItem, index: number) => {
    switch (index) {
      case 0:
        return renderWelcome(item);
      case 1:
        return renderLogin(item);
      case 2:
        return renderRegister(item);
      case 3:
        return renderRestore(item);
      default:
        return renderWelcome(item);
    }
  };

  const renderWelcome = (item: AuthItem) => {
    return (
      <View style={[styles.authScreen, styles.welcomeScreen]}>
        <AppFeatureImage logo={item.image} style={styles.imageWelcome} />
        <View style={styles.contentContainer}>
          <AppFeatureText
            text={'Что то написано какая то фраза лалала'}
            textStyle={styles.text}
          />
          <View style={styles.authButtonsContainer}>
            <AuthButton
              text={'Зарегистрироваться'}
              style={styles.authButton}
              onPress={() => _goTo(2)}
              reverse={true}
            />
            <AuthQuestionNav
              question={'Есть аккаунт?'}
              link={'Войдите'}
              style={styles.welcomeQuestion}
              questionStyle={styles.welcomeQuestionText}
              onPress={() => _goTo(1)}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderLogin = (item: AuthItem) => {
    return (
      <View style={styles.authScreen}>
        <View style={styles.authFormContainer}>
          <View style={styles.titleGroup}>
            <AuthTitle text={'Вход'} style={styles.title} />
            <AuthImage logo={item.image} style={styles.imageLogin} />
          </View>
          <AuthForm style={styles.authForm}>
            <CustomTextInput
              value=""
              onChange={() => {}}
              style={styles.authField}
              placeholder="Ваш никнейм или почта"
            />
            <CustomTextInput
              value=""
              autoCapitalize={'sentences'}
              onChange={() => {}}
              style={styles.authField}
              isPassword={true}
              placeholder="Пароль"
            />
          </AuthForm>
        </View>
        <View style={styles.authButtonsContainer}>
          <AuthButton
            text="Войти"
            style={styles.authButton}
            onPress={() => console.log('login')}
          />
          <TouchableOpacity onPress={() => _goTo(3)} style={styles.restoreLink}>
            <MontserratText style={styles.linkText} size={'m2'} type={'Medium'}>
              Забыли пароль?
            </MontserratText>
          </TouchableOpacity>
        </View>
        <AuthQuestionNav
          question={'Нет аккаунта?'}
          link={'Зарегистрируйтесь'}
          style={styles.loginQuestion}
          onPress={() => _goTo(2)}
        />
      </View>
    );
  };

  const renderRegister = (item: AuthItem) => {
    return (
      <View style={styles.authScreen}>
        <View style={styles.authFormContainer}>
          <View style={styles.titleGroup}>
            <AuthTitle text={'Регистрация'} style={styles.title} />
            <AuthImage logo={item.image} style={styles.imageRegister} />
          </View>
          <AuthForm style={styles.authForm}>
            <CustomTextInput
              value=""
              autoCapitalize={'sentences'}
              onChange={() => {}}
              style={styles.authField}
              placeholder="Ваше имя"
            />
            <CustomTextInput
              value=""
              autoCapitalize={'sentences'}
              onChange={() => {}}
              style={styles.authField}
              placeholder="Ваш никнейм"
            />
            <CustomTextInput
              value=""
              autoCapitalize={'sentences'}
              onChange={() => {}}
              style={styles.authField}
              keyboardType={'email-address'}
              placeholder="Ваша почта"
            />
            <CustomTextInput
              value=""
              autoCapitalize={'sentences'}
              onChange={() => {}}
              style={styles.authField}
              keyboardType={'numeric'}
              isPassword={true}
              placeholder="Пароль"
            />
          </AuthForm>
        </View>
        <View style={styles.authButtonsContainer}>
          <AuthButton
            text="Зарегистрироваться"
            style={styles.authButton}
            onPress={() => console.log('register')}
          />
          <AuthQuestionNav
            question={'Есть аккаунт?'}
            link={'Войдите'}
            onPress={() => _goTo(1)}
          />
        </View>
      </View>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderRestore = (item: AuthItem) => {
    return (
      <View style={styles.authScreen}>
        <View style={styles.authFormContainer}>
          <AuthTitle
            text={'Восстановление'}
            style={[styles.title, styles.restoreTitle]}
          />
          <AuthForm style={styles.authForm}>
            <CustomTextInput
              value=""
              autoCapitalize={'sentences'}
              onChange={() => {}}
              style={styles.authField}
              keyboardType={'email-address'}
              placeholder="Ваша почта"
            />
          </AuthForm>
        </View>
        <View style={styles.authButtonsContainer}>
          <AuthButton
            text="Отправить ссылку"
            style={styles.authButton}
            onPress={() => console.log('restore')}
          />
          <MontserratText
            size={'m2'}
            type={'Medium'}
            styleText={styles.restoreText}>
            На указанную почту придет ссылка для получения нового пароля
          </MontserratText>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#FFCFB4', '#8D5B94']}
      style={styles.container}
      start={{x: 0, y: 0}}
      onLayout={_onLayout}
      end={{x: 1, y: 1}}>
      <Carousel
        ref={refCarousel}
        data={authScreens}
        firstItem={activeIndex}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        style={styles.container}
        slideStyle={{width: viewportWidth}}
        inactiveSlideOpacity={1}
        scrollEnabled={false}
        inactiveSlideScale={1}
        onSnapToItem={(slideIndex: number) => setActiveIndex(slideIndex)}
      />
    </LinearGradient>
  );
};
