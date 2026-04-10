import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// 1. Komponen Anak menerima Props
const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Project: {props.title}</Text>
  </View>
);

export default function App() {
  // 2. Definisi State
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('#000'); // State untuk Side Quest: Toggle Color

  // 3. Intro useEffect
  useEffect(() => {
    console.log('App Mounted / Rendered');
  }, []);

  // Fungsi untuk Side Quest: Toggle Color (Random)
  const changeColor = () => {
    const colors = ['#000', '#1a1a2e', '#16213e', '#0f3460', '#2d3436', '#2c3e50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Header title="Counter Interactive" />

      {/* Main Quest 2: Greeting Form */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama lo..."
        placeholderTextColor="#666"
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.result}>Halo, {name || 'Bro'}!</Text>

      {/* Main Quest 1: Counter System */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterNumber}>{count}</Text>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.btnSmall} 
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnSmall} 
            // Side Quest: Validasi tidak boleh minus (< 0)
            onPress={() => count > 0 && setCount(count - 1)}
          >
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Side Quest: Toggle Color */}
      <TouchableOpacity 
        style={styles.btnToggle} 
        onPress={changeColor}
      >
        <Text style={styles.btnTextDark}>Ganti Warna</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { marginBottom: 40, borderBottomWidth: 1, borderColor: '#ffff99' },
  headerText: { color: '#ffff99', fontSize: 18, fontWeight: 'bold' },
  input: { backgroundColor: '#111', color: '#fff', padding: 15, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: '#333' },
  result: { color: '#fff', fontSize: 22, textAlign: 'center', marginBottom: 30 },
  
  // Styling Counter
  counterContainer: { alignItems: 'center', marginBottom: 40 },
  counterNumber: { color: '#fff', fontSize: 80, fontWeight: 'bold' },
  row: { flexDirection: 'row', gap: 20 },
  btnSmall: { backgroundColor: '#ffff99', width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#000', fontSize: 24, fontWeight: 'bold' },
  
  // Styling Side Quest Button
  btnToggle: { backgroundColor: '#fff', padding: 15, borderRadius: 15, alignItems: 'center', marginTop: 20 },
  btnTextDark: { color: '#000', fontWeight: 'bold' }
});