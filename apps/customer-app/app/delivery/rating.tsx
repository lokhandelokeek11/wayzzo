import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Star } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { WayzzoInput } from '@/components/ui/WayzzoInput';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function RatingScreen() {
  const router = useRouter();
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    router.replace('/(tabs)');
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Feedback" showBack={false} />

      <View style={styles.content}>
        <View style={styles.top}>
          <Text style={styles.title}>How was your delivery?</Text>
          <Text style={styles.subtitle}>Rate Ramesh Kadam's precision and timeliness</Text>

          {/* Star selector */}
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                activeOpacity={0.7}
                style={styles.starTouch}
              >
                <Star
                  size={36}
                  color={star <= rating ? '#F59E0B' : colors.border}
                  fill={star <= rating ? '#F59E0B' : 'transparent'}
                />
              </TouchableOpacity>
            ))}
          </View>

          <WayzzoInput
            label="Optional comments"
            placeholder="Help us improve rider incentives and dispatch algorithms..."
            value={feedback}
            onChangeText={setFeedback}
            multiline
            numberOfLines={4}
            containerStyle={{ marginTop: spacing.xl }}
          />
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Submit Feedback & Back to Home"
            onPress={handleSubmit}
            size="lg"
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
  top: {
    marginTop: spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: -0.4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.secondaryText,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginVertical: spacing.xl,
  },
  starTouch: {
    padding: 4,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

