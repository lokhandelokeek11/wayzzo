'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { businessInquirySchema, type BusinessInquiryInput } from '@/schemas/forms';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function BusinessInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<BusinessInquiryInput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BusinessInquiryInput>({
    resolver: zodResolver(businessInquirySchema),
  });

  const onSubmit = async (data: BusinessInquiryInput) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmissionData(data);
    setSubmitted(true);
    reset();
  };

  if (submitted && submissionData) {
    return (
      <div className="glass-panel rounded-3xl p-8 text-center animate-fade-in">
        <CheckCircle2 className="w-10 h-10 text-secondary mx-auto mb-3" />
        <h3 className="text-lg font-medium text-primary mb-2 font-sans">Inquiry Ingested</h3>
        <p className="text-on-surface-variant max-w-md mx-auto text-xs leading-relaxed mb-4">
          Thank you, <span className="font-semibold text-primary">{submissionData.contactPerson}</span> from <span className="font-semibold text-primary">{submissionData.businessName}</span>. Our merchant solutions desk will follow up at <span className="font-semibold text-primary">{submissionData.mobileNumber}</span> within 1 business day.
        </p>
        <div className="glass-pill p-3 max-w-sm mx-auto text-xs text-on-surface-variant font-mono">
          <p>REFERENCE: INQ-BIZ-{Math.floor(100000 + Math.random() * 900000)}</p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs font-medium text-primary hover:text-secondary underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 glass-panel p-6 sm:p-8 rounded-3xl">
      <div className="border-b border-white/60 pb-4 mb-2">
        <h3 className="text-lg font-medium text-primary font-sans">Partner With wayzzo</h3>
        <p className="text-xs text-on-surface-variant mt-1">
          Tell us about your business delivery requirements. No long-term commitments required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Business Name *
          </label>
          <input
            {...register('businessName')}
            type="text"
            placeholder="e.g. Fresh Bakes Café"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl glass-input text-primary"
          />
          {errors.businessName && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.businessName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Contact Person *
          </label>
          <input
            {...register('contactPerson')}
            type="text"
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl glass-input text-primary"
          />
          {errors.contactPerson && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.contactPerson.message}
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
            <span className="absolute left-3.5 top-2.5 text-xs text-on-surface-variant font-mono">+91</span>
            <input
              {...register('mobileNumber')}
              type="tel"
              maxLength={10}
              placeholder="9876543210"
              className="w-full pl-11 pr-3.5 py-2.5 text-xs rounded-xl glass-input text-primary font-mono"
            />
          </div>
          {errors.mobileNumber && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.mobileNumber.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Business Email *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="contact@business.com"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl glass-input text-primary font-mono"
          />
          {errors.email && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Business Category *
          </label>
          <select
            {...register('businessCategory')}
            className="w-full px-3 py-2.5 text-xs rounded-xl glass-input text-primary"
          >
            <option value="">Select category</option>
            <option value="RETAIL">Retail / Boutique</option>
            <option value="RESTAURANT_FOOD">Restaurant / Bakery / Food</option>
            <option value="PHARMACY_HEALTHCARE">Pharmacy / Diagnostic</option>
            <option value="GROCERY_SUPERMARKET">Grocery / Daily Needs</option>
            <option value="E_COMMERCE_D2C">E-Commerce / D2C Brand</option>
            <option value="FLORIST_GIFT">Florist & Gift Shop</option>
            <option value="OTHER">Other Enterprise</option>
          </select>
          {errors.businessCategory && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.businessCategory.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            City *
          </label>
          <input
            {...register('city')}
            type="text"
            placeholder="Pune"
            defaultValue="Pune"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl glass-input text-primary"
          />
          {errors.city && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Daily Volume *
          </label>
          <select
            {...register('estimatedDailyDeliveries')}
            className="w-full px-3 py-2.5 text-xs rounded-xl glass-input text-primary"
          >
            <option value="">Select volume</option>
            <option value="1_TO_10">1 – 10 / day</option>
            <option value="11_TO_30">11 – 30 / day</option>
            <option value="31_TO_100">31 – 100 / day</option>
            <option value="100_PLUS">100+ / day</option>
          </select>
          {errors.estimatedDailyDeliveries && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.estimatedDailyDeliveries.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
          Additional Notes (Optional)
        </label>
        <textarea
          {...register('additionalMessage')}
          rows={3}
          placeholder="Special handling, package dimensions, or operating hours..."
          className="w-full px-3.5 py-2.5 text-xs rounded-xl glass-input text-primary resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-full bg-primary text-on-primary font-medium text-xs hover:bg-inverse-surface transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-md"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" /> Ingesting Request...
          </>
        ) : (
          'Request Business Access'
        )}
      </button>
    </form>
  );
}
