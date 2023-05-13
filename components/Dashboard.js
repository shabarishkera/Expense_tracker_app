import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  {
    name: 'Total Sales',
    value: 10000,
    color: '#007bff',
  },
  {
    name: 'New Customers',
    value: 50,
    color: '#28a745',
  },
  {
    name: 'Orders',
    value: 100,
    color: '#dc3545',
  },
];

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          width={200}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Sales</Text>
        <Text style={styles.cardValue}>$10,000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Customers</Text>
        <Text style={styles.cardValue}>50</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Orders</Text>
        <Text style={styles.cardValue}>100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    flex: 1,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default Dashboard;