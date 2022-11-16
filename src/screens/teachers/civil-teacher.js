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

const CivilTeachers = () => {
    return (
      <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>
                Civil technology teachers
            </Text>
        <SectionList
          sections={[
            {title: 'Name: Md. Aminul Islam Bhuiyan', data: ['Title: Chief Instructor & Head of The Department.', 'Number: 01911306930']},

            {title: 'Name: Md. Rezaul Bahar', data: ['Title: Work Super and HOD CT ( First Shift).', 'Number: 01712623049']},

            {title: 'Name: Md. Tauhidul Hoque', data: ['Title: Instructor (Tech)', 'Number: 01721326303']},

            {title: 'Name: 	Forhad Hossain', data: ['Title: Instructor (Tech).', 'Number: 01913445518']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default CivilTeachers;