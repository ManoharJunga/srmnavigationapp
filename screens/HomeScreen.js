import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const user = {
    name: 'John Doe',
    profileImage: require('../assets/user-profile.jpeg'),
  };

  const ads = [
    { image: require('../assets/ab1.png') },
    { image: require('../assets/ab2.png') },
    { image: require('../assets/ab3.png') },
  ];

  const categories = [
    { name: 'Clubs', color: '#565F24', icon: '🎉' },
    { name: 'Events', color: '#565F24', icon: '🎫' },
    { name: 'Sports', color: '#565F24', icon: '⚽' },
  ];

  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userDesc}>
            {user.branch}, {user.Section}
          </Text>
        </View>
      </View>

      <View style={styles.advertisingBanner}>
        <Swiper
          style={styles.swiper}
          showsButtons={false}
          autoplay={true}
          paginationStyle={styles.pagination}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          {ads.map((ad, index) => (
            <View style={styles.adContainer} key={index}>
              <Image source={ad.image} style={styles.adImage} />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.categoriesHeading}>
        <Text style={styles.categoriesHeadingText}>Categories</Text>
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.categoryBox, { backgroundColor: category.color }]}
            onPress={() => {
              // Handle category selection
              if (category.name === 'Clubs') {
                navigation.navigate('Clubs');
              } else if (category.name === 'Events') {
                navigation.navigate('Events');
              } else if (category.name === 'Sports') {
                navigation.navigate('Sports');
              }
            }}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.upcomingEventsButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpcomingEvents')}
          style={styles.upcomingEventsButtonStyle}
        >
          <Text style={styles.upcomingEventsButtonText}>Upcoming Events</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation bar at the bottom */}
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.navButton}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Location')} style={styles.navButton}>
          <Text>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')} style={styles.navButton}>
          <Text>History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navButton}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userContainer: {
    backgroundColor: '#565F24',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  advertisingBanner: {
    height: 200,
  },
  swiper: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#565F24',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  adContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adImage: {
    width: '100%',
    height: '100%',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  categoryBox: {
    flex: 1,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 20,
  },
  categoryIcon: {
    fontSize: 36,
    color: 'white',
  },
  categoryName: {
    fontSize: 16,
    color: 'white',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  navButton: {
    padding: 10,
  },
  userDesc: {
    fontSize: 13,
    color: '#C5C5C5',
    fontWeight: '700',
  },
  categoriesHeading: {
    alignItems: 'left',
  },
  categoriesHeadingText: {
    margin: 25,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#565F24',
  },
  upcomingEventsButton: {
    alignItems: 'center',
  },
  upcomingEventsButtonStyle: {
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#565F24',
    padding: 10,
    borderRadius: 10,
  },
  upcomingEventsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
