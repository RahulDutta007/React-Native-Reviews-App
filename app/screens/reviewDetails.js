import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images }  from '../styles/global';
import Card from '../shared/card';

const ReviewDetails = ({ route, navigation }) => {    
    
    const rating = navigation.getParam('rating')
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>
                    {navigation.getParam('title')}
                </Text>
                <Text>
                    {navigation.getParam('body')}
                </Text>
                <View style={styles.rating}>
                    <Text>
                        GameZone rating:
                    </Text>
                    <Image 
                        style={styles.image} 
                        source={images.ratings[rating]}
                    />
                </View>
            </Card>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    image: {
        height: 20,
        width: 30
    },  
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})
