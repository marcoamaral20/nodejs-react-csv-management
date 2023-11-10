import { Request, Response, Router } from 'express';
import { processCSV } from '../csvProcessor/csvProcessor';
import { csvType } from '../interface/csv.interface';
import multer from 'multer';

const multerConfig = multer()
const router = Router();

const csvData: csvType[] = [];

router.post('/api/files', multerConfig.single('file'), async (request: Request, response: Response) => {
    try {
        const { file } = request

        if (!file) {
            return response.status(400).json({ message: 'No file provided.' });
        }

        if (file.mimetype !== 'text/csv') {
            return response.status(400).json({ message: 'Invalid file format. Please upload a CSV file.' });
        }

        const fileContent = file.buffer.toString('utf8');
        await processCSV(fileContent, csvData);

        return response.status(200).json({ message: 'The file was uploaded successfully.' });
    } catch (error) {
        console.error('Error processing CSV:', error);
        return response.status(500).json({ message: 'Internal Server Error.' });
    }
})

router.get('/api/users', (req: Request, res: Response) => {
    try {
        const query = req.query.q as string;

        if (csvData.length === 0) {
            return res.status(200).json({ message: 'No users found' });
        }

        if (!query) {
            return res.status(200).json({ data: csvData });
        }

        if (query === 'all') {
            return res.status(200).json({ data: csvData });
        }

        const lowercaseQuery = query.toLowerCase();

        const searchResults = csvData.filter((row) => {
            return Object.values(row).some((value) =>
                value.toString().toLowerCase().includes(lowercaseQuery)
            );
        });

        return res.status(200).json({ data: searchResults });
    } catch (error) {
        console.error('Error searching users:', error);
        return res.status(500).json({ message: 'Internal Server Error.' });
    }
});

export { router };