import { Feature } from "../types";
import { Clock, FileCheck, FileSpreadsheet, RotateCw, MonitorSmartphone, Users } from 'lucide-react'


export const features: Feature[] = [
  {
    id: 1,
    icon: Clock,
    title: "Control de Asistencias",
    description:
      "Registro automático de entradas y salidas en tiempo real con marcación desde cualquier dispositivo.",
  },
  {
    id: 2,
    icon: FileCheck,
    title: "Gestión de Permisos",
    description:
      "Solicitudes y aprobaciones de permisos y vacaciones simplificadas en un solo lugar.",
  },
  {
    id: 3,
    icon: FileSpreadsheet,
    title: "Reportes",
    description:
      "Exporta reportes detallados en Excel con un clic, listos para análisis y presentaciones.",
  },
  {
    id: 4,
    icon: RotateCw,
    title: "Horarios Flexibles",
    description:
      "Configura turnos rotativos, horarios personalizados y tolerancias según tu empresa.",
  },
  {
    id: 5,
    icon: MonitorSmartphone,
    title: "Dashboard en Tiempo Real",
    description:
      "Visualiza quién está presente, ausente o llegó tarde al instante desde cualquier lugar.",
  },
  {
    id: 6,
    icon: Users,
    title: "Multi-usuario",
    description:
      "Gestiona equipos completos con roles, permisos y accesos personalizados por área.",
  },
];
