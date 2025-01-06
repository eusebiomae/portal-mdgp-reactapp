import { format } from 'date-fns';

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy') 
};

export default formatDate;