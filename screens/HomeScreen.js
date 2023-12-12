import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [rideFound, setRideFound] = useState(false);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropLocation, setDropLocation] = useState(null);

  const getRandomLocation = () => {
    const latitude = 37.7749 + (Math.random() - 0.5) * 0.1; // Random latitude around San Francisco
    const longitude = -122.4194 + (Math.random() - 0.5) * 0.1; // Random longitude around San Francisco

    return {
      latitude,
      longitude,
    };
  };

  const handleFindRide = () => {
    // Simulate generating random pickup and drop locations
    const pickup = getRandomLocation();
    const drop = getRandomLocation();

    // Set the pickup and drop locations
    setPickupLocation(pickup);
    setDropLocation(drop);

    // Set rideFound to true after successfully finding a ride
    setRideFound(true);
  };

  const handleBookRide = () => {
    // Simulate booking logic
    // In a real-world scenario, you would make a request to a server to book the ride

    // After booking, navigate to the RideDetails screen
    navigation.navigate('RideDetails', {
      pickupLocation,
      dropLocation,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {pickupLocation && (
          <Marker coordinate={pickupLocation} title="Pickup Location" />
        )}
        {dropLocation && (
          <Marker coordinate={dropLocation} title="Drop Location" />
        )}
      </MapView>
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>{rideFound ? 'Ride Found!' : 'Find a Ride'}</Text>
        {rideFound ? (
          <Button
            title="Book Ride"
            onPress={handleBookRide}
          />
        ) : (
          <Button
            title="Find a Ride"
            onPress={handleFindRide}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  overlayText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeScreen;
