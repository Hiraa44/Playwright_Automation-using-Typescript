import { Given , When , Then} from "@cucumber/cucumber";
import path from "path"; 
import { readCSV } from "../../src/utils/csvReader";

import { expect } from "@playwright/test";
import { dumpDataToHtml } from "../../src/utils/HelpWriter";
import { promises as fs } from "fs";


    let csvData: any[] = [];
    const totalPrice = 0;
Given("Upload AEG Fuel Sheet", async function () {
    const filePath = path.join(__dirname, "../../testData/AEG.csv");
    csvData = await readCSV(filePath)
    //console.log(csvData);
    console.log("AEG Fuel CSV Loaded. Rows:", csvData.length);
});

When("Parse the AEG Fuel sheet", async function () {
   const totalPrice = csvData.map(row=>row["TOTAL PRICE"]); 
   // console.log("Total Price is" , totalPrice);
    // parsing already done in Given step
    console.log("Parsing complete.");
});

Then("Check fuel sheet for AEG price", async function() {
    const filteredrows1 = csvData.filter(row=> {
    const price = parseFloat(row["TOTAL PRICE"]);
    return price < 2.5;
      })
   
     const filteredrows2 = csvData.filter(row=>{
      const value = parseFloat(row["TOTAL PRICE"]);
    return value > 17 ;
    })
  
    console.log("Rows with values less then 2.5 are", filteredrows1.length);
    console.log("Rows with value less greator than 17 are" ,filteredrows2.length)
    const message = `Number of rows found with less than 2.5 are' ${filteredrows1.length}`
   // console.log(filteredrows1);
   // console.log(filteredrows2);  // fails if < limit found
    const outputPath = path.join(__dirname, "../../reports/AEG_filtered_report.html");

    await dumpDataToHtml(filteredrows1, filteredrows2, outputPath);

    console.log("HTML report created at:", outputPath);

    this.attach(`HTML report generated: ${outputPath}`, "text/plain");
});
    
