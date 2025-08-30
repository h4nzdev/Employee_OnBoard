import type { Requirement } from "../types/client";

export const calculateRequirementProgress = (requirements: Requirement[]) => {
  if (!requirements || requirements.length === 0) return 0;
  const submittedCount = requirements.filter(
    (r) => r.status === "Submitted"
  ).length;
  return Math.round((submittedCount / requirements.length) * 100);
};
