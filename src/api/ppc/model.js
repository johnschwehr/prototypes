import mongoose, { Schema } from 'mongoose'

const ppcSchema = new Schema({
  date: {
    type: Date
  },
  portfolio: {
    type: String
  },
  currency: {
    type: String
  },
  campaign: {
    type: String
  },
  adGroup: {
    type: String
  },
  targeting: {
    type: String
  },
  matchType: {
    type: String
  },
  impressions: {
    type: Number
  },
  clicks: {
    type: Number
  },
  ctr: {
    type: Number
  },
  cpc: {
    type: Number
  },
  spend: {
    type: Number
  },
  tacos: {
    type: Number
  },
  troas: {
    type: Number
  },
  d7TotalSales: {
    type: Number
  },
  d7TotalOrders: {
    type: Number
  },
  d7TotalUnits: {
    type: Number
  },
  d7Conversion: {
    type: Number
  },
  d7AdvertisedSkuUnits: {
    type: Number
  },
  d7OtherSkuUnits: {
    type: Number
  },
  d7AdvertisedSkuSales: {
    type: Number
  },
  d7OtherSkuSales: {
    type: Number
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

ppcSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      date: this.date,
      portfolio: this.portfolio,
      currency: this.currency,
      campaign: this.campaign,
      adGroup: this.adGroup,
      targeting: this.targeting,
      matchType: this.matchType,
      impressions: this.impressions,
      clicks: this.clicks,
      ctr: this.ctr,
      cpc: this.cpc,
      spend: this.spend,
      tacos: this.tacos,
      troas: this.troas,
      d7TotalSales: this.d7TotalSales,
      d7TotalOrders: this.d7TotalOrders,
      d7TotalUnits: this.d7TotalUnits,
      d7Conversion: this.d7Conversion,
      d7AdvertisedSkuUnits: this.d7AdvertisedSkuUnits,
      d7OtherSkuUnits: this.d7OtherSkuUnits,
      d7AdvertisedSkuSales: this.d7AdvertisedSkuSales,
      d7OtherSkuSales: this.d7OtherSkuSales,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Ppc', ppcSchema)

export const schema = model.schema
export default model
