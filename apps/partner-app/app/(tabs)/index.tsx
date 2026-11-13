import { View, Text, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';

export default function PartnerDashboardScreen() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partner Dashboard</Text>
      <View style={styles.toggleRow}>
        <Text style={styles.toggleLabel}>{isOnline ? '🟢 Online — Ready for orders' : '🔴 Offline'}</Text>
        <Switch
          value={isOnline}
          onValueChange={setIsOnline}
          trackColor={{ false: '#94a3b8', true: '#059669' }}
          thumbColor="#ffffff"
        />
      </View>
      <Text style={styles.note}>Delivery requests and earnings summary will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: 24 },
  title: { fontSize: 28, fontWeight: '900', color: '#1e293b' },
  toggleRow: { flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 24, padding: 16, backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: '#e2e8f0' },
  toggleLabel: { fontSize: 14, fontWeight: '600', color: '#1e293b' },
  note: { marginTop: 20, textAlign: 'center', fontSize: 13, color: '#64748b' },
});

