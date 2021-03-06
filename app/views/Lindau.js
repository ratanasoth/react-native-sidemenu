import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import { lighthouses } from '../data.service';
import lighthouseStyles from './lighthouse.styles';

const title = lighthouses[0].title;
const content = lighthouses[0].content;
const image = lighthouses[0].image;
const photo = lighthouses[0].photo;
const photoUrl = lighthouses[0].url;

const Lindau = () => (
  <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.figure}>
        <Image source={require('../img/lighthouse_lindau.jpg')} style={styles.img}/>
        <View style={styles.credits}>
          <Text style={styles.labelCredits}>Photo: </Text>
          <Text
            style={[styles.linkCredits, styles.labelCredits]}
            onPress={() => Linking.openURL(photoUrl)}
          >
            {photo}
          </Text>
        </View>
      </View>
      <Text style={styles.p}>{content}</Text>
  </ScrollView>
);

Lindau.navigationOptions = ({ navigation }) => ({
  title: 'Lindau',
});

const styles = StyleSheet.create(lighthouseStyles);

export default Lindau;
