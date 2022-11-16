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

const EtTeachers = () => {
    return (
      <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>
                Electrical technology teachers
            </Text>
        <SectionList
          sections={[
            {title: 'Name: 	Engr, Md. Abdul Hye', data: ['Title: Chief Instructor & Head of The Department.', 'Number: 01716080164']},

            {title: 'Name: 	Muhammed Mohi Uddin', data: ['Title: Instructor (Tech).', 'Number: 01814766252']},

            {title: 'Name: 	Atuar Rahman', data: ['Title: Instructor (Tech)', 'Number: 01813823718']},
            {title: 'Name: Md. Shakawat Hossain', data: ['Title: Instructor (Tech)', 'Number: 01720585390']},
            {title: 'Name: Shamiul Alam Toshon', data: ['Title: Instructor (Tech)', 'Number: 01720280527']},

            {title: 'Name: Md. Azad Ali', data: ['Title: Junior Instructor (Tech).', 'Number: 01722809010']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default EtTeachers;