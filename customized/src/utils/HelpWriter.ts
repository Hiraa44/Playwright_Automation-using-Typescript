import { promises as fs } from "fs";

export async function dumpDataToHtml(filteredrows1: any[], filteredrows2: any[], outputPath: string): Promise<void> {
    let htmlS = `
    <html>
    <head>
        <title>AEG Fuel Analysis</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                border: 1px solid #219a16ff;
                padding: 8px;
                text-align: left;
            }
            th {
                background: #e91e1eff;
                color: white;
            }
            .progress-container {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 10px;
    height: 50px;
    overflow: hidden;
    
}

.progress-bar {
    height: 100%;
    background-color: #939894ff;
    text-align: center;
    line-height: 25px;
    color:black;
    font-weight: bold;
    border-radius: 10px;
    transition: width 0.5s ease;
}
        </style>
    </head>
    <body>
        <h2>AEG Fuel Data – Prices under 2.5$</h2>
        <div class="progress-container">
        <p class="progress-bar">Total Rows Found: ${filteredrows1.length}</p>
        </div>
        <table>
            <thead>
                <tr>
                    ${Object.keys(filteredrows1[0] || {}).map(col => `<th>${col}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${filteredrows1
                    .map(
                        row =>
                            `<tr>${Object.values(row)
                                .map(value => `<td>${value}</td>`)
                                .join("")}</tr>`
                    )
                    .join("")}
            </tbody>
        </table>
        <h2>AEG Fuel Data – Prices above 17$ are</h2>
        <p>Total Rows Found: ${filteredrows2.length}</p>
        <table>
            <thead>
                <tr>
                    ${Object.keys(filteredrows2[0] || {}).map(col => `<th>${col}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${filteredrows2
                    .map(
                        row =>
                            `<tr>${Object.values(row)
                                .map(value => `<td>${value}</td>`)
                                .join("")}</tr>`
                    )
                    .join("")}
            </tbody>
        </table>
    </body>
    </html>
    `;
// Making another table for prices above 17 dollars.

    await fs.writeFile(outputPath, htmlS);


}
