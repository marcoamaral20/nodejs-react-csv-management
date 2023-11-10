import csvParser from 'csv-parser';
import { csvType } from '../interface/csv.interface';

export const processCSV = (fileContent: string, csvData: csvType[]): void => {
    let isFirstRow = true;

    csvParser({ headers: true })
        .on('data', (row: { [key: string]: string }) => {
            if (isFirstRow) {
                isFirstRow = false;
                return;
            }

            const rowData: csvType = {
                name: Object.values(row)[0],
                city: Object.values(row)[1],
                country: Object.values(row)[2],
                favorite_sport: Object.values(row)[3],
            };

            csvData.push(rowData);
        })
        .on('end', () => {
            console.log('CSV processing complete');
        })
        .on('error', (error) => {
            console.error('Error processing CSV:', error);
            throw error;
        })
        .write(fileContent);
};
