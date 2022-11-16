import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#97D2EC'
  },
  sectionHeader: {
    padding:5,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  item: {
    marginHorizontal: 10,
    fontSize: 15,
    padding: 5,
    fontSize: 18,
    backgroundColor:'yellow'
  },
})

const mtTeachers = () => {
    return (
      <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>
                Mechanical technology teachers
            </Text>
        <SectionList
          sections={[
            {title: 'Name:	Mohammad Aktarojjaman', data: ['Title: Instructor (Tech) & Head of the Department.', 'Number: 01710882453']},

            {title: 'Name: MD. MAFIJUL HOQUE', data: ['Title: Instructor (Tech).', 'Number: 01830584563']},

            {title: 'Name: Md. Abdullah Al Yousuf', data: ['Title: Workshop Super MT', 'Number: 01721596412']},

            {title: 'Name: MD. HAZRAT ALI', data: ['Title: Junior Instructor (Tech).', 'Number: 01737456639']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default mtTeachers;