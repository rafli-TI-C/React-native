import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Contact from './Contact';

const DaftarTeman = ({ navigation }) => {
  return (
    <ScrollView>
      <Contact
        gambar={require('../assets/alwi.jpeg')}
        judul="M.Alwi Sihab"
        nim="2230511128"
        deskripsi="Sebagai Mahasiswa Universitas Muhammadiyah Sukabumi"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/snack-icon.png')}
        judul="Rafli Zacky A"
        nim="2230511108"
        deskripsi="Sebagai Mahasiswa Universitas Muhammadiyah Sukabumi"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/naufal.jpeg')}
        judul="Naufal Zacky A"
        nim="2230511107"
        deskripsi="Sebagai Mahasiswa Universitas Muhammadiyah Sukabumi"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/fajar.jpeg')}
        judul="Fajar Pasca Gumilang"
        nim="2230511124"
        deskripsi="Sebagai Mahasiswa Universitas Muhammadiyah Sukabumi"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/snack-icon.png')}
        judul="Ubang"
        nim="2230511133"
        deskripsi="Sebagai Mahasiswa Universitas Muhammadiyah Sukabumi"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/ilham.jpeg')}
        judul="ilham Mukjizat"
        nim="2230511113"
        deskripsi="Sebagai Mahasiswa Universitas Muhammadiyah Sukabumi"
        navigation={navigation}
      />

    </ScrollView>
  );
};

export default DaftarTeman;
