import { A11yError } from './A11yError';

export interface ReportData {
    pageKey: string;
    accessibilityScore: number;
    video: string;
    errors: A11yError[];
}