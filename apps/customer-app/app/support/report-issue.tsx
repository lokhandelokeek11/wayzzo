import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoInput } from '@/components/ui/WayzzoInput';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function ReportIssueScreen() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState('WAY-98412');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      router.back();
    }, 1200);
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Report an Issue" />

      <View style={styles.content}>
        <Text style={styles.title}>Submit an Incident Ticket</Text>
        <Text style={styles.subtitle}>
          Our support lead will investigate GPS telemetry and contact you within 15 minutes.
        </Text>

        <View style={styles.form}>
          <WayzzoInput
            label="Order Reference"
            value={orderNumber}
            onChangeText={setOrderNumber}
          />

          <WayzzoInput
            label="Describe What Happened"
            placeholder="e.g. Rider arrived late, fragile box showed signs of handling, or incorrect route taken."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={5}
          />
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title={submitted ? 'Ticket Submitted ✓' : 'Submit Ticket'}
            onPress={handleSubmit}
            size="lg"
            disabled={submitted}
          />
        </View>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: spacing.base,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.foreground,
  },
  subtitle: {
    fontSize: 13,
    color: colors.secondaryText,
    marginTop: 4,
    lineHeight: 18,
  },
  form: {
    marginTop: spacing.xl,
    flex: 1,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

