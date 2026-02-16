export const formatFeature = (key: string, value: any): string => {
  if (typeof value === "boolean") {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  }

  if (key === "maxUsers") {
    return value === null ? "Usuarios ilimitados" : `Hasta ${value} usuarios`;
  }

  if (key === "maxWorkplaces") {
    return value === null ? "Sedes ilimitadas" : `Hasta ${value} sedes`;
  }

  return `${key}: ${value}`;
};
