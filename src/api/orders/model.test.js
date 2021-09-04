import { Orders } from ".";

let orders;

beforeEach(async () => {
  orders = await Orders.create({
    orderId: "test",
    purchaseDate: "test",
    paymentsDate: "test",
    shipmentDate: "test",
    sku: "test",
    title: "test",
    shippedQuantity: "test",
    currency: "test",
    itemPrice: "test",
    itemTax: "test",
    shippingPrice: "test",
    shippingTax: "test",
    giftWrapPrice: "test",
    giftWrapTax: "test",
    shipServiceLevel: "test",
    shippingCity: "test",
    shippingState: "test",
    shippingPostalCode: "test",
    shippingCountryCode: "test",
    itemPromoDiscount: "test",
    shipmentPromoDiscount: "test",
    carrier: "test",
    trackingNumber: "test",
    estArrivalDate: "test",
    fc: "test",
    fulfillmentChannel: "test",
    salesChannel: "test",
  });
});

describe("view", () => {
  it("returns simple view", () => {
    const view = orders.view();
    expect(typeof view).toBe("object");
    expect(view.id).toBe(orders.id);
    expect(view.orderId).toBe(orders.orderId);
    expect(view.purchaseDate).toBe(orders.purchaseDate);
    expect(view.paymentsDate).toBe(orders.paymentsDate);
    expect(view.shipmentDate).toBe(orders.shipmentDate);
    expect(view.sku).toBe(orders.sku);
    expect(view.title).toBe(orders.title);
    expect(view.shippedQuantity).toBe(orders.shippedQuantity);
    expect(view.currency).toBe(orders.currency);
    expect(view.itemPrice).toBe(orders.itemPrice);
    expect(view.itemTax).toBe(orders.itemTax);
    expect(view.shippingPrice).toBe(orders.shippingPrice);
    expect(view.shippingTax).toBe(orders.shippingTax);
    expect(view.giftWrapPrice).toBe(orders.giftWrapPrice);
    expect(view.giftWrapTax).toBe(orders.giftWrapTax);
    expect(view.shipServiceLevel).toBe(orders.shipServiceLevel);
    expect(view.shippingCity).toBe(orders.shippingCity);
    expect(view.shippingState).toBe(orders.shippingState);
    expect(view.shippingPostalCode).toBe(orders.shippingPostalCode);
    expect(view.shippingCountryCode).toBe(orders.shippingCountryCode);
    expect(view.itemPromoDiscount).toBe(orders.itemPromoDiscount);
    expect(view.shipmentPromoDiscount).toBe(orders.shipmentPromoDiscount);
    expect(view.carrier).toBe(orders.carrier);
    expect(view.trackingNumber).toBe(orders.trackingNumber);
    expect(view.estArrivalDate).toBe(orders.estArrivalDate);
    expect(view.fc).toBe(orders.fc);
    expect(view.fulfillmentChannel).toBe(orders.fulfillmentChannel);
    expect(view.salesChannel).toBe(orders.salesChannel);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });

  it("returns full view", () => {
    const view = orders.view(true);
    expect(typeof view).toBe("object");
    expect(view.id).toBe(orders.id);
    expect(view.orderId).toBe(orders.orderId);
    expect(view.purchaseDate).toBe(orders.purchaseDate);
    expect(view.paymentsDate).toBe(orders.paymentsDate);
    expect(view.shipmentDate).toBe(orders.shipmentDate);
    expect(view.sku).toBe(orders.sku);
    expect(view.title).toBe(orders.title);
    expect(view.shippedQuantity).toBe(orders.shippedQuantity);
    expect(view.currency).toBe(orders.currency);
    expect(view.itemPrice).toBe(orders.itemPrice);
    expect(view.itemTax).toBe(orders.itemTax);
    expect(view.shippingPrice).toBe(orders.shippingPrice);
    expect(view.shippingTax).toBe(orders.shippingTax);
    expect(view.giftWrapPrice).toBe(orders.giftWrapPrice);
    expect(view.giftWrapTax).toBe(orders.giftWrapTax);
    expect(view.shipServiceLevel).toBe(orders.shipServiceLevel);
    expect(view.shippingCity).toBe(orders.shippingCity);
    expect(view.shippingState).toBe(orders.shippingState);
    expect(view.shippingPostalCode).toBe(orders.shippingPostalCode);
    expect(view.shippingCountryCode).toBe(orders.shippingCountryCode);
    expect(view.itemPromoDiscount).toBe(orders.itemPromoDiscount);
    expect(view.shipmentPromoDiscount).toBe(orders.shipmentPromoDiscount);
    expect(view.carrier).toBe(orders.carrier);
    expect(view.trackingNumber).toBe(orders.trackingNumber);
    expect(view.estArrivalDate).toBe(orders.estArrivalDate);
    expect(view.fc).toBe(orders.fc);
    expect(view.fulfillmentChannel).toBe(orders.fulfillmentChannel);
    expect(view.salesChannel).toBe(orders.salesChannel);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });
});
