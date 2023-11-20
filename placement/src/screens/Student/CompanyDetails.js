import React, { useContext,useEffect, useState } from 'react'
import { Button } from 'react-native-elements'
import { View , StyleSheet,Text,Linking,ImageBackground,Image, Dimensions  } from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext'
import { Context as AuthContext } from '../../context/AuthContext'
import { Text as TEXT } from 'react-native-elements'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function CompanyDetails({navigation}) {

    const _id = navigation.getParam('_id');
    const { state, putApplicant} = useContext(CompanyContext);
    const{getUserDetails} = useContext(AuthContext);
    const [eligibilty, setEligibility] = useState('');
    const [activeLink, setActiveLink] = useState(true);
    const company = state.find( comp => comp._id ===_id );
    const URL = company.companyDetails.link;
    //console.log({userId})
    const checkEligibility = async() => {

        const res = await getUserDetails({hsc : company.criteria.hsc, ssc: company.criteria.ssc, graduation: company.criteria.graduation, postGraduation: company.criteria.postGraduation});
        if(res == 'eligible'){
            setEligibility('Eligible');
            setActiveLink(false);
        }else{
            setEligibility('Not Eligible');
            setActiveLink(true);
        }
    }
    const openLink = () => {

        Linking.openURL(URL).catch(err => console.error('An error occurred', err));
    }

    useEffect(() => {

        checkEligibility();
    },[])
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
        <Text style={styles.detailsHeader}>Eligibilty : {eligibilty=='Eligible' ? <Text style={{color:'green'}}>Eligible</Text>:<Text style={{color:'red'}}>Not Eligible</Text>}</Text>
        <Button 
            title='Apply'
            buttonStyle={{ backgroundColor: 'orange' }}
              containerStyle={{
                width: 150,
                marginHorizontal: 85,
                marginVertical: 45,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            onPress={openLink}
              disabled = {activeLink}
        />
       {!activeLink? <View style={styles.bottomContainer}>
    
    <View style={{display:'flex',alignItems:'center',marginTop:80,justifyContent:'center'}}>
    <Text style={styles.detailsHeader}>Have you applied for this job?</Text>
       
        <Button 
        title='Yes'
        buttonStyle={{ backgroundColor: 'green' }}
          containerStyle={{
            width: 100,
            marginVertical: 10,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
         onPress={()=>putApplicant({jobTitle: company.companyDetails.title, company :company.companyDetails.company })}
          disabled = {activeLink}
        />
        </View>
    </View>: null}
    </View>
    </ImageBackground>
    </View>
  )
}

CompanyDetails.navigationOptions = () => {
    return {
        headerShown: false,
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