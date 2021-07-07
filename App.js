import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import BookContent from './src/book';

export default function App() {
  const [bookContent, setBookContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const RNFS = require('react-native-fs');

  const getFile = title => {
    if (Platform.OS == 'android') {
      RNFS.readFileAssets(`${title}.txt`)
        .then(res => {
          setBookContent(res);
        })
        .catch(err => {
          console.log(err.message);
        });
    } else if (Platform.OS == 'ios') {
      RNFS.readFile(`${RNFS.MainBundlePath}/assets/${title}.txt`)
        .then(res => {
          setBookContent(res);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{width: '100%'}}>
        <Text style={styles.header}>Books</Text>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              getFile('sample_book 1');
            }}
            style={styles.container}>
            <View style={styles.boxStyle}>
              <Text style={{fontSize: 18}}>1</Text>
            </View>
            <Text style={styles.bookNum}>Book 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              getFile('sample_book 2');
            }}
            style={styles.container}>
            <View style={styles.boxStyle}>
              <Text style={{fontSize: 18}}>2</Text>
            </View>
            <Text style={styles.bookNum}>Book 2</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BookContent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        bookContent={bookContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 120,
    height: 170,
    backgroundColor: 'white',
    elevation: 3,
  },
  container: {
    alignItems: 'center',
    width: '32%',
    marginRight: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'lightgray',
  },
  bookNum: {
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
