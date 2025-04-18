import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import {useAuth} from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router'
import Avatar from '../../components/avatar'

const Home = () => {

    const {user, setAuth} = useAuth();

    console.log('user: ',user);

    // const onLogout = async ()=>{
    //     // setAuth(null);
    //     const {error} = await supabase.auth.signOut();
    //     if(error){
    //         Alert.alert('Sign Out','Error signing out!')
    //     }
    // }
    const router = useRouter();
  return (
    <ScreenWrapper bg={'white'}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Group 7</Text>
          <View style = {styles.icons}>
              <Pressable onPress={()=>router.push('notifications')}>
                <AntDesign name="hearto" size={24} color="black" />
              </Pressable>
              <Pressable onPress={()=>router.push('newPost')}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </Pressable>
              <Pressable onPress={()=>router.push('profile')}>
                <Avatar 
                  uri={user?.image}
                  size={hp(4.3)}
                  rounded={theme.radius.md}
                  style={{borderWidth:2}}
                />
              </Pressable>
          </View>
        </View>
      </View>
      {/* <Button title='logout' onPress={onLogout}/> */}
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  header : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom:10,
    marginHorizontal: wp(4)
  },
  title:{
    color:theme.colors.text,
    fontSize:hp(3.2),
    fontWeight:theme.fonts.bold
  },
  avatarImage:{
    height:hp(4.3),
    width:wp(4.3),
    borderRadius:theme.radius.sm,
    borderCurve:'continuous',
    borderColor:theme.colors.gray,
    borderWidth:3
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap: 18
  },
  listStyle:{
    paddingTop:20,
    paddingHorizontal:wp(4)
  },
  noPosts:{
    fontSize:hp(2),
    textAlign:'center',
    color:theme.colors.text
  },
  pill:{
    position: 'absolute',
    right:-10,
    top:-4,
  }
})