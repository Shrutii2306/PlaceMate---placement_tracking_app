
import React, { useContext,useEffect, useState } from 'react'
import { Button } from 'react-native-elements'
import { Context as CompanyContext } from '../../context/CompanyContext'
import { Context as AuthContext } from '../../context/AuthContext'
import { Text as TEXT } from 'react-native-elements'
import {  StyleSheet, Text, View,ImageBackground,Image, Dimensions } from 'react-native'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function AdminCompaniesDetails({navigation}) {

    const _id = navigation.getParam('_id');
    const { state, putApplicant} = useContext(CompanyContext);
    const company = state.find( comp => comp._id ===_id );
    const URL = company.companyDetails.link;

    const openLink = () => {

        Linking.openURL(URL).catch(err => console.error('An error occurred', err));
    }

  return (
    <View style={styles.container}>
        <ImageBackground 
        source={require('../../images/Background3.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><TEXT h3 style={{color:"white"}}>DETAILS</TEXT></View>
        <View style={styles.subContainer}>
        <Text style={styles.detailsHeader}>JOb Title : {company.companyDetails.title}</Text>
        <Text style={styles.detailsHeader}>Company Name : {company.companyDetails.company}</Text>
        <Text style={styles.detailsHeader}>CTC Offered : {company.companyDetails.salary}</Text>
        <Text style={styles.detailsHeader}>Criteria:</Text>
        <Text style={styles.detailsHeader}>HSC : {company.criteria.hsc}</Text>
        <Text style={styles.detailsHeader}>SSC : {company.criteria.ssc}</Text>
        <Text style={styles.detailsHeader}>Graduation : {company.criteria.graduation}</Text>
        <Text style={styles.detailsHeader}>Post Graduation : {company.criteria.postGraduation}</Text>
        <Text style={styles.detailsHeader}>Last date to apply : {company.companyDetails.dateToApply}</Text>
        
        <Button 
            title='Apply Link'
            buttonStyle={{ backgroundColor: 'orange' }}
              containerStyle={{
                width: 150,
                marginHorizontal: 85,
                marginVertical: 45,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            onPress={openLink}
        />
      
    </View>
    </ImageBackground>
    </View>
  )
}

AdminCompaniesDetails.navigationOptions = () => {
  return {
      headerShown : false,
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',
        marginTop:50
    },
    headtitle:{
        fontSize:15,
        textAlign: 'center'
    },
    eligible:{
        color: 'green'

    },
    img: { 
        height: screenHeight, 
        width: screenWidth, 
        flex: 1,
        
        // justifyContent: 'center', 
        // alignItems: 'center', 
      }, 
    container : {
        flex: 1,
        
    },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:60,
    marginBottom:60},
    list:{
        backgroundColor:'grey'
    },
    detailsHeader:{
        color:'white',
        fontWeight: "bold"
    },
    details:{
        color:'white',
    },
    subContainer:{
        marginHorizontal:15,
        marginTop:0
    }
})