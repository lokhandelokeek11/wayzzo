'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { partnerApplicationSchema, type PartnerApplicationInput } from '@/schemas/forms';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function PartnerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<PartnerApplicationInput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnerApplicationInput>({
    resolver: zodResolver(partnerApplicationSchema),
    defaultValues: {
      consentToContact: true,
    },
  });

  const onSubmit = async (data: PartnerApplicationInput) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmissionData(data);
    setSubmitted(true);
    reset();
  };

  if (submitted && submissionData) {
    return (
      <div className="glass-panel rounded-3xl p-8 text-center animate-fade-in">
        <CheckCircle2 className="w-10 h-10 text-secondary mx-auto mb-3" />
        <h3 className="text-lg font-medium text-primary mb-2 font-sans">Application Ingested</h3>
        <p className="text-on-surface-variant max-w-md mx-auto text-xs leading-relaxed mb-4">
          Welcome, <span className="font-semibold text-primary">{submissionData.fullName}</span>! Our partner compliance desk will reach out at <span className="font-semibold text-primary">{submissionData.mobileNumber}</span> to assist with document upload (DL, RC, Aadhaar).
        </p>
        <div className="glass-pill p-3 max-w-sm mx-auto text-xs text-on-surface-variant font-mono">
          <p>APPLICATION ID: WY-PTR-{Math.floor(100000 + Math.random() * 900000)}</p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs font-medium text-primary hover:text-secondary underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 glass-panel p-6 sm:p-8 rounded-3xl">
      <div className="border-b border-white/60 pb-4 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-secondary px-2.5 py-0.5 rounded-full glass-pill">
          ADMISSIONS PROTOCOL
        </span>
        <h3 className="text-lg font-medium text-primary mt-2 font-sans">Delivery Partner Application</h3>
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
          Full Legal Name (as on Driving Licence) *
        </label>
        <input
          {...register('fullName')}
          type="text"
          placeholder="e.g. Suresh Kumar"
          className="w-full px-3.5 py-2.5 text-xs rounded-xl glass-input text-primary"
        />
        {errors.fullName && (
          <p className="text-[11px] text-error mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Mobile Number *
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
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="suresh@gmail.com"
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
            Operating City *
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
            Vehicle Type *
          </label>
          <select
            {...register('vehicleType')}
            className="w-full px-3 py-2.5 text-xs rounded-xl glass-input text-primary"
          >
            <option value="">Select vehicle</option>
            <option value="MOTORCYCLE">Motorcycle / Bike</option>
            <option value="SCOOTER">Scooter / Moped</option>
            <option value="EV_TWO_WHEELER">Electric Two-Wheeler (EV)</option>
            <option value="BICYCLE">Bicycle (Eco delivery)</option>
          </select>
          {errors.vehicleType && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.vehicleType.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-1">
            Availability *
          </label>
          <select
            {...register('availability')}
            className="w-full px-3 py-2.5 text-xs rounded-xl glass-input text-primary"
          >
            <option value="">Select availability</option>
            <option value="FULL_TIME">Full Time (8+ hrs)</option>
            <option value="PART_TIME_WEEKDAYS">Part Time (Weekdays)</option>
            <option value="PART_TIME_WEEKENDS">Weekends Only</option>
            <option value="FLEXIBLE_HOURS">Flexible / On-Demand</option>
          </select>
          {errors.availability && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.availability.message}
            </p>
          )}
        </div>
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            {...register('consentToContact')}
            type="checkbox"
            className="mt-0.5 h-3.5 w-3.5 rounded border-white/60 text-primary focus:ring-0"
          />
          <span className="text-[11px] text-on-surface-variant leading-normal">
            I confirm that I hold a valid Driving Licence (or use an eligible cycle), possess necessary registration/insurance for my vehicle, and consent to being contacted by wayzzo for verification.
          </span>
        </label>
        {errors.consentToContact && (
          <p className="text-[11px] text-error mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.consentToContact.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-full bg-primary text-on-primary font-medium text-xs hover:bg-inverse-surface transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-md"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" /> Ingesting Application...
          </>
        ) : (
          'Apply as Delivery Partner'
        )}
      </button>

      <p className="text-[10px] text-on-surface-variant text-center font-mono">
        * Admissions are strictly subject to document verification and vehicle roadworthiness checks.
      </p>
    </form>
  );
}
