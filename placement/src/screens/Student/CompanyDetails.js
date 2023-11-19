import React, { useContext,useEffect, useState } from 'react'
import { Button } from 'react-native-elements'
import { View , StyleSheet,Text,Linking} from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext'
import { Context as AuthContext } from '../../context/AuthContext'
export default function CompanyDetails({navigation}) {

    const _id = navigation.getParam('_id');
    const { state, putApplicant} = useContext(CompanyContext);
    const{getUserDetails} = useContext(AuthContext);
    const [eligibilty, setEligibility] = useState('');
    const [activeLink, setActiveLink] = useState(true);
    const company = state.find( comp => comp._id ===_id );
    const URL = company.companyDetails.link;

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
        <Text></Text>
        <Text>JOb Title : {company.companyDetails.title}</Text>
        <Text>Company Name : {company.companyDetails.company}</Text>
        <Text>CTC Offered : {company.companyDetails.salary}</Text>
        <Text>Criteria:</Text>
        <Text>HSC : {company.criteria.hsc}</Text>
        <Text>SSC : {company.criteria.ssc}</Text>
        <Text>Graduation : {company.criteria.graduation}</Text>
        <Text>Post Graduation : {company.criteria.postGraduation}</Text>
        <Text>Last date to apply : {company.companyDetails.dateToApply}</Text>
        <Text>Eligibilty : {eligibilty}</Text>
        <Button 
            title='Apply'
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 75,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            onPress={openLink}
              disabled = {activeLink}
        />
       {!activeLink? <View style={styles.bottomContainer}>
    
    <View style={{display:'flex',flexDirection:'row'}}>
    <Text>Have you applied for this job?</Text>
       
        <Button 
        title='Yes'
        buttonStyle={{ backgroundColor: 'green' }}
          containerStyle={{
            width: 100,
            marginHorizontal: 75,
            marginVertical: 10,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
         onPress={()=>putApplicant({userId : _id,jobTitle: company.companyDetails.title, company :company.companyDetails.company })}
          disabled = {activeLink}
        />
        </View>
    </View>: null}
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
    bottomContainer:{

        
        marginTop: 270,
    }
})