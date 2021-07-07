import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function book({modalVisible, setModalVisible, bookContent}) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Icon
            type="font-awesome-5"
            name="angle-left"
            size={20}
            color="black"
            style={{paddingHorizontal: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.nowReading}>Now Reading...</Text>
      </View>
      <ScrollView
        style={{}}
        horizontal={false}
        showsVerticalScrollIndicator={true}>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <Text style={{fontSize: 20, margin: 20}}>{bookContent}</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  content: {
    textAlign: 'justify',
    paddingTop: 15,
    fontSize: 15,
  },
  nowReading: {
    paddingRight: 20,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
