import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Text, Icon } from 'react-native-elements';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const cars = [
  { id: 1, name: 'Car A', driver: 'John Doe', time: '8:00 AM' },
  { id: 2, name: 'Car B', driver: 'Jane Smith', time: '8:30 AM' },
  { id: 3, name: 'Car C', driver: 'Bob Johnson', time: '9:00 AM' },
  { id: 4, name: 'Car D', driver: 'Alice Williams', time: '9:30 AM' },
];

const RideDetailsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cars.map((car) => (
        <Card key={car.id} containerStyle={styles.card}>
          <Card.Title style={styles.cardTitle}>{car.name}</Card.Title>
          <Card.Divider />
          <Text style={styles.cardText}>Driver: {car.driver}</Text>
          <Text style={styles.cardText}>Time: {car.time}</Text>
          <IconFontAwesome name="car" size={50} style={styles.carIcon} />
          <Button
            icon={<Icon name='arrow-right' type='font-awesome' color='white' />}
            buttonStyle={styles.joinButton}
            title='Join this Ride'
          />
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardText: {
    textAlign: 'center',
    marginVertical: 8,
  },
  carIcon: {
    alignSelf: 'center',
    marginVertical: 16,
    color: '#3498db',
  },
  joinButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
  },
});

export default RideDetailsScreen;
