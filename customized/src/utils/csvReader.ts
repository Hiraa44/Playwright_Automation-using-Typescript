import * as fs from "fs";
import { parse } from "csv-parse";

export async function readCSV(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const records: any[] = [];

        fs.createReadStream(filePath)
            .pipe(parse({ columns: true, trim: true, skip_empty_lines: true,relax_quotes: true }))
            .on("data", (row) => records.push(row))
            .on("end", () => resolve(records))
            .on("error", (err) => reject(err));

        
    });
    
   
}
