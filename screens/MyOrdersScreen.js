import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { userApi } from '../api';
import OrderItem from '../components/PendingOrdersScreen/OrderItem';

function MyOrdersScreen() {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        userApi.getConfirmedOrders().then((res) => {
            if (res.type == 'Valid') {
                setMyOrders(res.data);
            }
        });
    }, []);

    const renderItem = ({ item }) => {
        return <OrderItem order={item} />;
    };

    return (
        <View>
            <FlatList
                data={myOrders}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
}

export default MyOrdersScreen;
