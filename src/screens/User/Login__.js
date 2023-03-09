import { useConnection } from '@sendbird/uikit-react-native';
import React, { useReducer } from 'react';
import {
    ActivityIndicator,
    Image,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Animated,
    Keyboard,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { loginReducer } from '../../reducer/login';

const Login = props => {
    const { sendbird, onLogin } = props;
    const [state, dispatch] = useReducer(loginReducer, {
        userId: '',
        nickname: '',
        error: '',
        connecting: false,
    });

    const showErrorFadeDuration = 200;
    const showErrorDuration = 3500;

    const fade = new Animated.Value(0);
    const showError = message => {
        dispatch({ type: 'error', payload: { error: message } });
        Animated.sequence([
            Animated.timing(fade, {
                toValue: 1,
                duration: showErrorFadeDuration,
                useNativeDriver: true,
            }),
            Animated.timing(fade, {
                toValue: 0,
                delay: showErrorDuration,
                duration: showErrorFadeDuration,
                useNativeDriver: true,
            }),
        ]).start();
    };
    const connect = () => {
        if (!state.connecting) {
            if (state.userId && state.nickname) {
                dispatch({ type: 'start-connection' });
                Keyboard.dismiss();
                const { connect } = useConnection();
                if (auth.loggedIn) {
                    connect('USER_ID', { nickname: 'NICKNAME' });
                }
                // sendbird.connect(state.userId, (user, err) => {
                //     if (!err) {
                //         if (user.nickname !== state.nickname) {
                //             sendbird.updateCurrentUserInfo(state.nickname, '', (user, err) => {
                //                 dispatch({ type: 'end-connection' });
                //                 if (!err) {
                //                     start(user);
                //                 } else {
                //                     showError(err.message);
                //                 }
                //             });
                //         } else {
                //             dispatch({ type: 'end-connection' });
                //             start(user);
                //         }
                //     } else {
                //         dispatch({ type: 'end-connection' });
                //         showError(err.message);
                //     }
                // });
            } else {
                showError('Please put your user ID and nickname.');
            }
        }
    };
    const start = user => {
        if (onLogin) {
            onLogin(user);
        }
    };
    return (
        <>
            <StatusBar backgroundColor="#742ddd" barStyle="light-content" />
            <SafeAreaView style={style.container}>
                <View style={style.logoContainer}>
                    <Image source={require('../../assets/icon.png')} style={style.logo} />
                    <Text style={style.subtitle}>Powered by React Native</Text>
                    <ActivityIndicator animating={state.connecting} size="large" color="#6e5baa" />
                </View>
                <View style={[style.loginForm]}>
                    <Animated.View style={{ opacity: fade }}>
                        <Text style={style.loginError}>{state.error}</Text>
                    </Animated.View>
                    <TextInput
                        placeholder={'User ID'}
                        editable={!state.connecting}
                        onChangeText={content => dispatch({ type: 'edit-userId', payload: { content } })}
                        style={style.loginInput}
                    />
                    <TextInput
                        placeholder={'Nickname'}
                        editable={!state.connecting}
                        onChangeText={content => dispatch({ type: 'edit-nickname', payload: { content } })}
                        style={style.loginInput}
                    />
                    <TouchableOpacity
                        disabled={state.connecting}
                        activeOpacity={0.85}
                        style={[style.loginButton, { backgroundColor: state.connecting ? '#dbcfff' : '#742ddd' }]}
                        onPress={connect}
                    >
                        <Text style={style.loginButtonLabel}>Connect</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

const style = {
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    logo: {
        width: 300,
        height: 51,
        marginTop: 200,
        resizeMode: 'stretch',
    },
    subtitle: {
        color: '#999',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 30,
    },
    loginForm: {
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        paddingLeft: 48,
        paddingRight: 48,
        paddingBottom: 36,
    },
    loginInput: {
        height: 48,
        fontSize: 16,
        padding: 12,
        borderColor: '#777',
        borderWidth: 0.2,
        borderRadius: 5,
        marginBottom: 8,
        alignSelf: 'stretch',
    },
    loginError: {
        fontSize: 18,
        color: '#d44',
        textAlign: 'center',
        alignSelf: 'stretch',
        marginBottom: 10,
    },
    loginButton: {
        height: 48,
        padding: 12,
        backgroundColor: '#742ddd',
        borderWidth: 0,
        borderRadius: 5,
        marginBottom: 8,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    loginButtonLabel: {
        color: '#fff',
        fontSize: 18,
    },
};

export default Login;