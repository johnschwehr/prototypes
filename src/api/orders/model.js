import mongoose, { Schema } from 'mongoose'

const ordersSchema = new Schema({
  orderId: {
    type: String
  },
  merchantOrderId: {
    type: String
  },
  shipmentId: {
    type: String
  },
  shipmentItemId: {
    type: String
  },
  orderItemId: {
    type: String
  },
  merchantOrderItemId: {
    type: String
  },
  purchaseDate: {
    type: Date
  },
  paymentsDate: {
    type: Date
  },
  shipmentDate: {
    type: Date
  },
  sku: {
    type: String
  },
  title: {
    type: String
  },
  shippedQuantity: {
    type: Number
  },
  currency: {
    type: String
  },
  itemPrice: {
    type: Number
  },
  itemTax: {
    type: Number
  },
  shippingPrice: {
    type: Number
  },
  shippingTax: {
    type: Number
  },
  giftWrapPrice: {
    type: Number
  },
  giftWrapTax: {
    type: Number
  },
  shipServiceLevel: {
    type: String
  },
  shippingCity: {
    type: String
  },
  shippingState: {
    type: String
  },
  shippingPostalCode: {
    type: String
  },
  shippingCountryCode: {
    type: String
  },
  itemPromoDiscount: {
    type: Number
  },
  shipmentPromoDiscount: {
    type: Number
  },
  carrier: {
    type: String
  },
  trackingNumber: {
    type: String
  },
  estArrivalDate: {
    type: Date
  },
  fc: {
    type: String
  },
  fulfillmentChannel: {
    type: String
  },
  salesChannel: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

ordersSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      orderId: this.orderId,
      merchantOrderId: this.merchantOrderId,
      shipmentId: this.shipmentId,
      shipmentItemId: this.shipmentItemId,
      orderItemId: this.orderItemId,
      merchantOrderItemId: this.merchantOrderItemId,
      purchaseDate: this.purchaseDate,
      paymentsDate: this.paymentsDate,
      shipmentDate: this.shipmentDate,
      sku: this.sku,
      title: this.title,
      shippedQuantity: this.shippedQuantity,
      currency: this.currency,
      itemPrice: this.itemPrice,
      itemTax: this.itemTax,
      shippingPrice: this.shippingPrice,
      shippingTax: this.shippingTax,
      giftWrapPrice: this.giftWrapPrice,
      giftWrapTax: this.giftWrapTax,
      shipServiceLevel: this.shipServiceLevel,
      shippingCity: this.shippingCity,
      shippingState: this.shippingState,
      shippingPostalCode: this.shippingPostalCode,
      shippingCountryCode: this.shippingCountryCode,
      itemPromoDiscount: this.itemPromoDiscount,
      shipmentPromoDiscount: this.shipmentPromoDiscount,
      carrier: this.carrier,
      trackingNumber: this.trackingNumber,
      estArrivalDate: this.estArrivalDate,
      fc: this.fc,
      fulfillmentChannel: this.fulfillmentChannel,
      salesChannel: this.salesChannel,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Orders', ordersSchema)

export const schema = model.schema
export default model
