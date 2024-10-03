import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Dashboard = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('1W');

  const timeframeOptions = [
    { label: '7D', color: '#64748B' }, 
    { label: '1W', color: '#5563f5' }, 
    { label: '1M', color: '#94A3B8' }, 
  ];

  return (
    <View style={styles.container}>
      {/* Card section */}
      <View style={styles.card}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>$25,327</Text>
        <Text style={styles.cardNumber}>.... 3587</Text>
        <View style={styles.visaSection}>
          <View style={styles.squareDiv} /> 
          <Text style={styles.visaText}>VISA</Text>
        </View>
      </View>

      {/* Add income and expense buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.squareDiv} /> 
          <Text style={styles.buttonText}>Add income</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.squareDiv} /> 
          <Text style={styles.buttonText}>Add expense</Text>
        </TouchableOpacity>
      </View>

      {/* History Section */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyLabel}>History</Text>
        <View style={styles.historyHeader}>
          <Text style={styles.historyAmount}>$636,856</Text>
          <View style={styles.historyTimeframe}>
            {timeframeOptions.map((option) => (
              <TouchableOpacity 
                key={option.label} 
                onPress={() => setActiveTimeframe(option.label)}
                style={[
                  styles.timeframeButton, 
                  activeTimeframe === option.label && { 
                    backgroundColor: option.color, 
                    shadowColor: option.color, 
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 3, 
                  }
                ]}
              >
                <Text style={styles.timeframeButtonText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Placeholder for the line graph */}
        <View style={styles.graphPlaceholder}>
          <Text style={styles.graphAmount}>$636,856</Text>
        </View>

        {/* Scrollable months display */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.monthsContainer}>
            <Text style={styles.monthLabel}>Jan</Text>
            <Text style={styles.monthLabel}>Feb</Text>
            <Text style={styles.monthLabel}>Mar</Text>
            <Text style={styles.monthLabel}>Apr</Text>
            <Text style={styles.monthLabel}>May</Text>
            <Text style={styles.monthLabel}>Jun</Text>
            <Text style={styles.monthLabel}>Jul</Text>
            <Text style={styles.monthLabel}>Aug</Text>
            <Text style={styles.monthLabel}>Sep</Text>
            <Text style={styles.monthLabelActive}>Oct</Text>
            <Text style={styles.monthLabel}>Nov</Text>
            <Text style={styles.monthLabel}>Dec</Text>
          </View>
        </ScrollView>
      </View>

      {/* Scrollable list of expenses */}
      <ScrollView>
        <Text style={styles.expenseTitle}>October</Text>

        {/* Expense items */}
        <View style={styles.expenseItem}>
          <View style={styles.squareDiv} /> 
          <View style={styles.expenseDetails}>
            <Text style={styles.expenseName}>Electricity bill</Text>
            <Text style={styles.expenseDate}>12 Oct 2021, 12:16</Text>
          </View>
          <Text style={styles.expenseAmount}>- $100.00</Text> 
        </View>

        <View style={styles.expenseItem}>
          <View style={styles.squareDiv} /> 
          <View style={styles.expenseDetails}>
            <Text style={styles.expenseName}>iCloud</Text>
            <Text style={styles.expenseDate}>19 Oct 2021, 06:52</Text>
          </View>
          <Text style={styles.expenseAmount}>- $49.90</Text> 
        </View>

        <View style={styles.expenseItem}>
          <View style={styles.squareDiv} /> 
          <View style={styles.expenseDetails}>
            <Text style={styles.expenseName}>Walmart</Text>
            <Text style={styles.expenseDate}>18 Oct 2021, 20:56</Text>
          </View>
          <Text style={styles.expenseAmount}>- $49.90</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.7,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#fff',
    marginTop: 5,
    fontSize: 16,
    opacity: 0.6,
  },
  visaSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  visaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  // History Section Styles
  historyContainer: {
    marginBottom: 20,
  },
  historyLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  historyAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  historyTimeframe: {
    flexDirection: 'row',
    borderRadius: 20,
  },
  timeframeButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20, 
    marginHorizontal: 2, 
  },
  timeframeButtonText: { 
    color: '#fff',
    fontWeight: 'bold',
  },
  graphPlaceholder: {
    backgroundColor: '#333', 
    height: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  graphAmount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  monthsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthLabel: {
    color: '#aaa',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  monthLabelActive: {
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  expenseTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expenseItem: {
    flexDirection: 'row',
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  expenseDetails: {
    flex: 1,
    marginLeft: 10,
  },
  expenseName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expenseDate: {
    color: '#aaa',
    fontSize: 12,
  },
  expenseAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  squareDiv: {
    width: 24,
    height: 24,
    backgroundColor: '#848884',
    borderRadius: 5,
  },
});

export default Dashboard;