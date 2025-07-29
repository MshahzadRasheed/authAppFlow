import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { AppButton, Text } from '../../components/';
import { Colors } from '../../theme';

const Home: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text
          type="bold"
          size="large"
          color={Colors.text.black}
          style={styles.welcomeText}>
          Welcome!
        </Text>
        
        <View style={styles.userInfo}>
          <Text
            type="medium"
            size="normal"
            color={Colors.text.black}
            style={styles.label}>
            Name:
          </Text>
          <Text
            type="regular"
            size="normal"
            color={Colors.text.gray}
            style={styles.value}>
            {user?.name}
          </Text>
        </View>
        
        <View style={styles.userInfo}>
          <Text
            type="medium"
            size="normal"
            color={Colors.text.black}
            style={styles.label}>
            Email:
          </Text>
          <Text
            type="regular"
            size="normal"
            color={Colors.text.gray}
            style={styles.value}>
            {user?.email}
          </Text>
        </View>
        
        <AppButton
          text="Logout"
          onPress={handleLogout}
          textColor={Colors.text.white}
          style={styles.logoutButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    marginBottom: 40,
    textAlign: 'center',
  },
  userInfo: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    backgroundColor: Colors.background.lightGray,
    borderRadius: 8,
  },
  label: {
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 40,
    width: '100%',
  },
});

export default Home;