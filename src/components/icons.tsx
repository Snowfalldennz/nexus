import { Bandage, ClipboardCheck, HeartPulse, Hospital, House, Pill } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ServiceId } from '../data/site'

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  'house-calls': House,
  'chronic-care': HeartPulse,
  'transitional-care': Hospital,
  'wound-care': Bandage,
  'home-health-orders': ClipboardCheck,
  'medication-management': Pill,
}
