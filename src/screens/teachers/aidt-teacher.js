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

const AidtTeachers = () => {
    return (
      <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>
                AIDT technology teachers
            </Text>
        <SectionList
          sections={[
            {title: 'Name: Engr. Md. Ikhlas Uddin', data: ['Title: Chief Instructor (Tech) & Head of The Department (AIDT)', 'Number: 01712551323']},

            {title: 'Name: Mst. Asma Khatun', data: ['Title: Instructor (Tech).', 'Number: 01683942540']},

            {title: 'Name: Md. Sanaul Haque', data: ['Title: Junior Instructor (Tech)', 'Number: 01962705667']},

            {title: 'Name: Md. Mizanur Rahman', data: ['Title: Junior Instructor (Tech).', 'Number: 01728911440']},

            {title: 'Name: Nasrin Akter', data: ['Title: Junior Instructor (Tech).', 'Number: 01831119328']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default AidtTeachers;