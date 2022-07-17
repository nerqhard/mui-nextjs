import { format } from 'date-fns';

export const formatDate = (date: string, customFormat = 'dd MMM yyyy') => {
    return format(new Date(date), customFormat);
}