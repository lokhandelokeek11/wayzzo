'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generalContactSchema, type GeneralContactInput } from '@/schemas/forms';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function GeneralContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<GeneralContactInput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<GeneralContactInput>({
    resolver: zodResolver(generalContactSchema),
  });

  const onSubmit = async (data: GeneralContactInput) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmissionData(data);
    setSubmitted(true);
    reset();
  };

  if (submitted && submissionData) {
    return (
      <div className="bg-surface-container-low border border-surface-container-high rounded-2xl p-8 text-center animate-fade-in">
        <CheckCircle2 className="w-10 h-10 text-secondary mx-auto mb-3" />
        <h3 className="text-lg font-medium text-primary mb-2 font-sans">Message Dispatched</h3>
        <p className="text-on-surface-variant max-w-md mx-auto text-xs leading-relaxed mb-4">
          Thank you, <span className="font-semibold text-primary">{submissionData.name}</span>. Your inquiry ({submissionData.inquiryType.replace(/_/g, ' ')}) has been routed to our operations desk. We will respond to <span className="font-semibold text-primary">{submissionData.email}</span> within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs font-medium text-primary hover:text-secondary underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Your Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Ankit Sharma"
            className="w-full px-3.5 py-2 text-xs rounded border border-surface-container-high bg-surface focus:outline-none focus:border-primary text-primary"
          />
          {errors.name && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="ankit@example.com"
            className="w-full px-3.5 py-2 text-xs rounded border border-surface-container-high bg-surface focus:outline-none focus:border-primary text-primary font-mono"
          />
          {errors.email && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Mobile Number (10 digits) *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-xs text-on-surface-variant font-mono">+91</span>
            <input
              {...register('phone')}
              type="tel"
              maxLength={10}
              placeholder="9876543210"
              className="w-full pl-11 pr-3.5 py-2 text-xs rounded border border-surface-container-high bg-surface focus:outline-none focus:border-primary text-primary font-mono"
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Subject / Inquiry Category *
          </label>
          <select
            {...register('inquiryType')}
            className="w-full px-3 py-2 text-xs rounded border border-surface-container-high bg-surface focus:outline-none focus:border-primary text-primary"
          >
            <option value="">Select category</option>
            <option value="GENERAL">General Inquiry / Feedback</option>
            <option value="MERCHANT_PARTNERSHIP">Merchant Partnership</option>
            <option value="DELIVERY_PARTNER">Delivery Partner Question</option>
            <option value="INVESTOR_COLLABORATION">Investment / Collaboration</option>
          </select>
          {errors.inquiryType && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.inquiryType.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="How can we assist you or your business?"
          className="w-full px-3.5 py-2 text-xs rounded border border-surface-container-high bg-surface focus:outline-none focus:border-primary text-primary resize-none"
        />
        {errors.message && (
          <p className="text-[11px] text-error mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2.5 px-6 rounded-full bg-primary text-on-primary font-medium text-xs hover:bg-inverse-surface transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" /> Transmitting Message...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
