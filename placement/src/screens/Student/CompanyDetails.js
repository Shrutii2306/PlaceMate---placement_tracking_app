import React, { useContext,useEffect } from 'react'
import { Button } from 'react-native-elements'
import { View , StyleSheet,Text,Linking} from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext'
import { Context as AuthContext } from '../../context/AuthContext'
export default function CompanyDetails({navigation}) {

    const _id = navigation.getParam('_id');
    const { state} = useContext(CompanyContext);
    const{getUserDetails} = useContext(AuthContext);
    
    const company = state.find( comp => comp._id ===_id );
    const URL = company.companyDetails.link;

    const checkEligibility = async() => {

        const res = await getUserDetails();
        console.log("response ::: ",res)
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
        <Text>Eligibilty : </Text>
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
        />

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

    }
})