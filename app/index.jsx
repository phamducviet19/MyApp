// rnfe
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper';
import Loading from '../components/Loading';

const index = () => {
  const router = useRouter();
  return (
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
      <Loading />
    </View>
  )
}

export default index