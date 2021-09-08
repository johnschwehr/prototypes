const path = require("path");
const exceljs = require("exceljs");

import { Orders } from ".";

export async function importOrders(filePath) {
  const workbook = new exceljs.Workbook();
  try {
    path.extname(filePath) === ".csv"
      ? await workbook.csv.readFile(filePath)
      : await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.worksheets[0];

    var bulkOrders = [];

    worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
      if (rowNumber != 1) {
        var order = {
          orderId: row.getCell("A").value,
          merchantOrderId: row.getCell("B").value,
          shipmentId: row.getCell("C").value,
          shipmentItemId: row.getCell("D").value,
          orderItemId: row.getCell("E").value,
          merchantOrderItemId: row.getCell("F").value,
          purchaseDate: row.getCell("G").value,
          paymentsDate: row.getCell("H").value,
          shipmentDate: row.getCell("I").value,
          sku: row.getCell("N").value,
          title: row.getCell("O").value,
          shippedQuantity: row.getCell("P").value,
          currency: row.getCell("Q").value,
          itemPrice: row.getCell("R").value,
          itemTax: row.getCell("S").value,
          shippingPrice: row.getCell("T").value,
          shippingTax: row.getCell("U").value,
          giftWrapPrice: row.getCell("V").value,
          giftWrapTax: row.getCell("W").value,
          shipServiceLevel: row.getCell("X").value,
          shippingCity: row.getCell("AC").value,
          shippingState: row.getCell("AD").value,
          shippingPostalCode: row.getCell("AE").value,
          shippingCountryCode: row.getCell("AF").value,
          itemPromoDiscount: row.getCell("AO").value,
          shipmentPromoDiscount: row.getCell("AP").value,
          carrier: row.getCell("AQ").value,
          trackingNumber: row.getCell("AR").value,
          estArrivalDate: row.getCell("AS").value,
          fc: row.getCell("AT").value,
          fulfillmentChannel: row.getCell("AU").value,
          salesChannel: row.getCell("AV").value,
        };

        bulkOrders.push(order);
      }
    });

    Orders.insertMany(bulkOrders);
  } catch (err) {
    console.log("importOrders: " + err.toString());
  }
}
