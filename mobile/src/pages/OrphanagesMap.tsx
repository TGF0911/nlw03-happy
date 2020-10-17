import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import mapMarker from './src/images/map-marker.png'
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap(){
  const navigation = useNavigation()
  
  function handleNavigateToOrphanageDetails(){
    navigation.navigate('OrphanageDatails')
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.5746574,
          longitude: -46.5633117,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }} >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -23.5746574,
            longitude: -46.5633117,
          }}
        >
          <Callout
            tooltip
            onPress={() => { }}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText} >2 orfanatos encotrados</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={handleNavigateToOrphanageDetails}>
          <Feather name="plus" size={20} color='#fff' />
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 140,
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,

    justifyContent: 'center',
    elevation: 3,
  },
  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 26,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b5'
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15e3d5',

    justifyContent: 'center',
    alignItems: 'center'
  }

});