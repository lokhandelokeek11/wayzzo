import { View, Text, StyleSheet } from 'react-native';
export default function PartnerProfileScreen() {
  return (
    <View style={styles.c}>
      <Text style={styles.t}>My Profile</Text>
      <Text style={styles.n}>KYC status, documents, and account settings will appear here.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  c: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: 24 },
  t: { fontSize: 24, fontWeight: '800', color: '#1e293b' },
  n: { marginTop: 8, textAlign: 'center', fontSize: 13, color: '#64748b' },
});

