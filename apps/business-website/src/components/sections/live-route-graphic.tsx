'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bike,
  Navigation,
  Store,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';

export function LiveRouteGraphic() {
  const [activeZone, setActiveZone] = useState('Kothrud');
  const [tickerIndex, setTickerIndex] = useState(0);

  const puneZones = ['Kothrud', 'Baner & Aundh', 'Koregaon Park', 'Viman Nagar', 'Hinjewadi'];

  const liveOrders = [
    {
      id: 'WY-7741',
      from: 'Boutique Atelier, Koregaon Park',
      to: 'Kalyani Nagar, Lane 7',
      status: 'Rider on the way',
      eta: '4 mins away',
      icon: '🛍️',
      color: '#ffb584',
    },
    {
      id: 'WY-8920',
      from: 'Artisan Bakery, FC Road',
      to: 'Kothrud, Ideal Colony',
      status: 'Approaching Doorstep',
      eta: '2 mins away',
      icon: '🥐',
      color: '#34d399',
    },
    {
      id: 'WY-9104',
      from: 'Wellness Chemist, Baner',
      to: 'Aundh, Customer Home',
      status: '4-Digit PIN Handover',
      eta: 'At Location',
      icon: '💊',
      color: '#60a5fa',
    },
  ];

  // Rotate ticker every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveOrders.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [liveOrders.length]);

  const currentOrder = liveOrders[tickerIndex];

  return (
    <div className="relative w-full h-[520px] sm:h-[560px] lg:h-[600px] bg-[#0c0e12]/90 backdrop-blur-3xl rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between p-4 sm:p-6 lg:p-8 select-none">
      
      {/* ========================================================= */}
      {/* BACKGROUND: CRISP VECTOR CITY GRID & GLOWING ROADS        */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Dark Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(144,76,33,0.18),rgba(12,14,18,0.98))]" />

        {/* Crisp High-Res Vector Road Grid */}
        <svg
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-60"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="cityGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>

            {/* Glowing Main Arterial Gradient */}
            <linearGradient id="mainRouteGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffb584" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff7828" stopOpacity="1" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="secondaryRouteGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Background Micro Grid */}
          <rect width="1200" height="600" fill="url(#cityGrid)" />

          {/* City Arterial Streets (Crisp Stylized Street Layout) */}
          <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" strokeLinecap="round">
            {/* Horizontal Avenues */}
            <line x1="0" y1="140" x2="1200" y2="140" strokeWidth="2.5" />
            <line x1="0" y1="300" x2="1200" y2="300" strokeWidth="3" stroke="rgba(255,255,255,0.12)" />
            <line x1="0" y1="460" x2="1200" y2="460" strokeWidth="2" />

            {/* Diagonal Arterials */}
            <line x1="100" y1="0" x2="400" y2="600" strokeWidth="2.5" />
            <line x1="550" y1="0" x2="850" y2="600" strokeWidth="3" stroke="rgba(255,255,255,0.12)" />
            <line x1="950" y1="0" x2="1200" y2="400" strokeWidth="2" />

            {/* Cross Connectors */}
            <line x1="200" y1="200" x2="500" y2="200" strokeWidth="1.5" />
            <line x1="700" y1="400" x2="1100" y2="400" strokeWidth="1.5" />
          </g>

          {/* ========================================================= */}
          {/* ACTIVE PRIMARY TRANSIT ROUTE (MAIN DELIVERY IN MOTION)   */}
          {/* ========================================================= */}
          {/* Soft Blur Underglow */}
          <path
            d="M 160,340 C 320,300 400,180 620,240 S 840,360 1020,220"
            stroke="url(#mainRouteGlow)"
            strokeWidth="10"
            strokeLinecap="round"
            className="filter blur-md opacity-40"
          />

          {/* High-Contrast Base Road Line */}
          <path
            d="M 160,340 C 320,300 400,180 620,240 S 840,360 1020,220"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Flowing Laser Dashes */}
          <path
            d="M 160,340 C 320,300 400,180 620,240 S 840,360 1020,220"
            stroke="url(#mainRouteGlow)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="12 16"
          >
            <animate attributeName="stroke-dashoffset" from="112" to="0" dur="2.2s" repeatCount="indefinite" />
          </path>

          {/* Secondary Feeder Route in background */}
          <path
            d="M 380,480 C 480,420 540,360 620,240"
            stroke="url(#secondaryRouteGlow)"
            strokeWidth="2"
            strokeDasharray="6 10"
          >
            <animate attributeName="stroke-dashoffset" from="64" to="0" dur="3s" repeatCount="indefinite" />
          </path>

          {/* ========================================================= */}
          {/* ORIGIN PIN: Neighborhood Store in Pune                    */}
          {/* ========================================================= */}
          <g transform="translate(160, 340)">
            <circle r="12" fill="none" stroke="#ffb584" strokeWidth="2">
              <animate attributeName="r" values="8;36" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle r="8" fill="#ffb584" />
            <circle r="4" fill="#0c0e12" />
          </g>

          {/* ========================================================= */}
          {/* DESTINATION PIN: Customer Doorstep                        */}
          {/* ========================================================= */}
          <g transform="translate(1020, 220)">
            <circle r="12" fill="none" stroke="#34d399" strokeWidth="2">
              <animate attributeName="r" values="8;32" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle r="8" fill="#34d399" />
            <circle r="4" fill="#0c0e12" />
          </g>

          {/* ========================================================= */}
          {/* MOVING RIDER BEACON (GLIDING CONTINUOUSLY ALONG ROUTE)    */}
          {/* ========================================================= */}
          <g>
            <animateMotion
              path="M 160,340 C 320,300 400,180 620,240 S 840,360 1020,220"
              dur="7.5s"
              repeatCount="indefinite"
              rotate="auto"
            />

            {/* Glowing Beacon Pulse */}
            <circle r="22" fill="#ff7828" opacity="0.35" className="filter blur-sm" />
            <circle r="10" fill="none" stroke="#ffffff" strokeWidth="2">
              <animate attributeName="r" values="8;24" dur="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="1.2s" repeatCount="indefinite" />
            </circle>

            {/* Vehicle Beacon Core */}
            <circle r="9" fill="#ff7828" stroke="#ffffff" strokeWidth="2" />
            <circle r="3.5" fill="#ffffff" />
          </g>

          {/* Follower Light Particle 1 */}
          <g>
            <animateMotion
              path="M 160,340 C 320,300 400,180 620,240 S 840,360 1020,220"
              dur="7.5s"
              begin="-1.2s"
              repeatCount="indefinite"
              rotate="auto"
            />
            <circle r="4" fill="#ffb584" opacity="0.8" />
          </g>

          {/* Follower Light Particle 2 */}
          <g>
            <animateMotion
              path="M 160,340 C 320,300 400,180 620,240 S 840,360 1020,220"
              dur="7.5s"
              begin="-2.4s"
              repeatCount="indefinite"
              rotate="auto"
            />
            <circle r="3" fill="#ffb584" opacity="0.5" />
          </g>
        </svg>

        {/* Ambient Corner Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12]/90 via-transparent to-[#0c0e12]/60 pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* TOP BAR: PUNE TELEMETRY & ZONE SELECTOR                   */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
        {/* Live Network Pill */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-white shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs uppercase font-medium tracking-wider">
            OPERATIONAL IN PUNE • 100% DOOR-TO-DOOR
          </span>
        </div>

        {/* Pune Zone Filter Tabs */}
        <div className="hidden sm:flex items-center p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-mono">
          {puneZones.map((zone) => (
            <button
              key={zone}
              type="button"
              onClick={() => setActiveZone(zone)}
              className={`px-3 py-1 rounded-full transition-all ${
                activeZone === zone
                  ? 'bg-white/20 text-white font-medium shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING HUD CARDS (PUNE LOCALITIES)                      */}
      {/* ========================================================= */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* LEFT FLOATING CARD: ACTIVE TRIP TRACKER IN PUNE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/15 text-white shadow-2xl space-y-3.5"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                WY
              </span>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">ORDER IN TRANSIT</p>
                <p className="font-mono text-[10px] text-white/60">TRIP ID: #WY-9842-PUN</p>
              </div>
            </div>
            <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
              PUNE LIVE ⚡
            </span>
          </div>

          {/* Stepper Timeline */}
          <div className="space-y-2 text-xs">
            {/* Origin */}
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white/90">Fresh Bakes Café • FC Road, Pune</p>
                <p className="text-[10px] text-white/50 font-mono">Picked up • Cake &amp; Confectionery (1.2 kg)</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="ml-1 h-3 border-l-2 border-dashed border-white/20" />

            {/* Destination */}
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white/90">Customer Doorstep • Kothrud, Pune</p>
                <p className="text-[10px] text-white/50 font-mono">Handover PIN: 4-digit code ready</p>
              </div>
            </div>
          </div>

          {/* Progress Bar with Moving Status */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 mb-1.5">
              <span>Rider En Route in Pune</span>
              <span className="text-orange-400 font-medium">ETA 4 Mins</span>
            </div>
            <div className="relative w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400"
                initial={{ width: '25%' }}
                animate={{ width: ['35%', '85%', '35%'] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>

        {/* CENTER / RIGHT: DYNAMIC LIVE DISPATCH TICKER (PUNE ORDERS) */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col md:items-end gap-3">
          
          {/* Active Live Event Bubble */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentOrder.id}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.08] backdrop-blur-2xl border border-white/15 text-white shadow-xl flex items-center gap-3.5 max-w-md w-full"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
                {currentOrder.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase text-white/50 font-medium tracking-wider">
                    {currentOrder.id} • Pune Network
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                    {currentOrder.eta}
                  </span>
                </div>
                <p className="text-xs font-semibold text-white truncate mt-0.5">
                  {currentOrder.from} → {currentOrder.to}
                </p>
                <div className="flex items-center gap-1.5 mt-1 font-mono text-[10px] text-orange-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span>{currentOrder.status}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Specs HUD Pill */}
          <div className="hidden sm:flex items-center gap-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 font-mono text-xs">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>4-Digit PIN Security</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Doorstep in Pune</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>No Sorting Hubs</span>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* BOTTOM FOOTER BAR: PUNE HYPERLOCAL COMMITMENT             */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-orange-300 font-semibold">
            OPERATIONAL CITY • PUNE
          </span>
          <p className="text-sm sm:text-base text-white font-medium font-sans">
            Delivering across Pune neighborhoods without central warehouse delays.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-emerald-300 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Serving All Pune Zones</span>
          </div>
        </div>
      </div>

    </div>
  );
}
