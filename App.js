import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const ChatScreen = () => (
  <View style={styles.container}>
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>WhatsApp</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="qrcode-scan" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.searchContainer}>
      <Icon name="robot" size={20} color="#075E54" />
      <Text style={styles.searchText}>Ask Meta AI or Search</Text>
    </View>
    <View style={styles.archiveRow}>
      <Icon name="archive" size={20} color="#075E54" />
      <Text style={styles.archiveText}>Archived</Text>
    </View>
    {/* Profile list */}
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://images.deccanherald.com/deccanherald%2F2024-03%2F7f5ff263-3aef-4464-be84-9f77df1460c6%2FVirat_Kohli.jpg?rect=406%2C0%2C540%2C720' }} 
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>King Kholi</Text>
        <Text style={styles.chattingText}>Hello Sainath. How are you?</Text>
      </View>
      <Text style={styles.days}>9:30Am</Text>
    </View>
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg' }} 
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>Arijith Singh</Text>
        <Text style={styles.chattingText}>Hii Sainath !!</Text>
      </View>
      <Text style={styles.days}>10:39Am</Text>
    </View>
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://assets.gqindia.com/photos/5d67bccd92463800081c1bb4/4:3/w_1440,h_1080,c_limit/Prabhas%20movies%20.jpg' }} 
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>Prabhas</Text>
        <Text style={styles.chattingText}>Hii darling</Text>
      </View>
      <Text style={styles.days}>12:00Pm</Text>
    </View>
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://wallpapers.com/images/hd/whatsapp-dp-grey-boy-nvp3qotosjhloril.jpg' }} 
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>PathiSainath(You)</Text>
        <Text style={styles.chattingText}>😎</Text>
      </View>
      <Text style={styles.days}>3:30Pm</Text>
    </View>
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://wallpapers.com/images/hd/whatsapp-dp-3d-boy-66v967jzb6i2jck1.jpg' }} 
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>Joy Varma</Text>
        <Text style={styles.chattingText}>Hello Buddy</Text>
      </View>
      <Text style={styles.days}>5:30Pm</Text>
    </View>
  </View>
);

const StatusScreen = () => (
  <View style={styles.container}>
    <Text>Status Screen</Text>
  </View>
);

const CallsScreen = () => (
  <View style={styles.container}>
    <Text>Calls Screen</Text>
  </View>
);

const CommunitiesScreen = () => (
  <View style={styles.container}>
    <Text>Communities Screen</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Chat':
              iconName = 'chat';
              break;
            case 'Status':
              iconName = 'camera-party-mode';
              break;
            case 'Communities':
              iconName = 'account-group';
              break;
            case 'Calls':
              iconName = 'phone';
              break;
            default:
              iconName = 'home';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Communities" component={CommunitiesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#075E54',
    height: 60,
    paddingHorizontal: 10,
  },
  navbarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchText: {
    color: '#075E54',
    marginLeft: 5,
    fontSize: 16,
  },
  archiveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  archiveText: {
    color: '#075E54',
    marginLeft: 5,
    fontSize: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'black'
  },
  chattingText: {
    color: 'black',
  },
  days: {
    color: 'black',
    fontSize: 14,
  },
});

export default App;
