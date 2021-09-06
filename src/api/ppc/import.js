const path = require("path");
const exceljs = require("exceljs");

import { Ppc } from ".";

export async function importPpc(filePath) {
  const workbook = new exceljs.Workbook();
  try {
    path.extname(filePath) === ".csv"
      ? await workbook.csv.readFile(filePath)
      : await workbook.xlsx.readFile(newFilePath);

    const worksheet = workbook.worksheets[0];

    var bulkPpc = [];

    worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
      if (rowNumber != 1) {
        var ppc = {
          date: row.getCell('A'),
          portfolio: row.getCell('B'),
          currency: row.getCell('C'),
          campaign: row.getCell('D'),
          adGroup: row.getCell('E'),
          targeting: row.getCell('F'),
          matchType: row.getCell('G'),
          impressions: row.getCell('H'),
          clicks: row.getCell('I'),
          ctr: row.getCell('J'),
          cpc: row.getCell('K'),
          spend: row.getCell('L'),
          tacos: row.getCell('M'),
          troas: row.getCell('N'),
          d7TotalSales: row.getCell('O'),
          d7TotalOrders: row.getCell('P'),
          d7TotalUnits: row.getCell('Q'),
          d7Conversion: row.getCell('R'),
          d7AdvertisedSkuUnits: row.getCell('S'),
          d7OtherSkuUnits: row.getCell('T'),
          d7AdvertisedSkuSales: row.getCell('U'),
          d7OtherSkuSale: row.getCell('V'),
        };

        bulkPpc.push(ppc);
      }
    });

    Ppc.insertMany(bulkPpc);
  } catch (err) {
    console.log("importPpc: " + err.toString());
  }
}
