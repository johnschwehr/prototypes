import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Orders } from '.'

const app = () => express(apiRoot, routes)

let orders

beforeEach(async () => {
  orders = await Orders.create({})
})

test('POST /orders 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ orderId: 'test', purchaseDate: 'test', paymentsDate: 'test', shipmentDate: 'test', sku: 'test', title: 'test', shippedQuantity: 'test', currency: 'test', itemPrice: 'test', shippingPrice: 'test', shippingTax: 'test', giftWrapPrice: 'test', giftWrapTax: 'test', shipServiceLevel: 'test', shippingCity: 'test', shippingState: 'test', shippingPostalCode: 'test', shippingCountryCode: 'test', itemPromoDiscount: 'test', shipmentPromoDiscount: 'test', carrier: 'test', trackingNumber: 'test', estArrivalDate: 'test', fc: 'test', fulfillmentChannel: 'test', salesChannel: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.orderId).toEqual('test')
  expect(body.purchaseDate).toEqual('test')
  expect(body.paymentsDate).toEqual('test')
  expect(body.shipmentDate).toEqual('test')
  expect(body.sku).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.shippedQuantity).toEqual('test')
  expect(body.currency).toEqual('test')
  expect(body.itemPrice).toEqual('test')
  expect(body.shippingPrice).toEqual('test')
  expect(body.shippingTax).toEqual('test')
  expect(body.giftWrapPrice).toEqual('test')
  expect(body.giftWrapTax).toEqual('test')
  expect(body.shipServiceLevel).toEqual('test')
  expect(body.shippingCity).toEqual('test')
  expect(body.shippingState).toEqual('test')
  expect(body.shippingPostalCode).toEqual('test')
  expect(body.shippingCountryCode).toEqual('test')
  expect(body.itemPromoDiscount).toEqual('test')
  expect(body.shipmentPromoDiscount).toEqual('test')
  expect(body.carrier).toEqual('test')
  expect(body.trackingNumber).toEqual('test')
  expect(body.estArrivalDate).toEqual('test')
  expect(body.fc).toEqual('test')
  expect(body.fulfillmentChannel).toEqual('test')
  expect(body.salesChannel).toEqual('test')
})

test('GET /orders 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /orders/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${orders.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orders.id)
})

test('GET /orders/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /orders/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${orders.id}`)
    .send({ orderId: 'test', purchaseDate: 'test', paymentsDate: 'test', shipmentDate: 'test', sku: 'test', title: 'test', shippedQuantity: 'test', currency: 'test', itemPrice: 'test', shippingPrice: 'test', shippingTax: 'test', giftWrapPrice: 'test', giftWrapTax: 'test', shipServiceLevel: 'test', shippingCity: 'test', shippingState: 'test', shippingPostalCode: 'test', shippingCountryCode: 'test', itemPromoDiscount: 'test', shipmentPromoDiscount: 'test', carrier: 'test', trackingNumber: 'test', estArrivalDate: 'test', fc: 'test', fulfillmentChannel: 'test', salesChannel: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orders.id)
  expect(body.orderId).toEqual('test')
  expect(body.purchaseDate).toEqual('test')
  expect(body.paymentsDate).toEqual('test')
  expect(body.shipmentDate).toEqual('test')
  expect(body.sku).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.shippedQuantity).toEqual('test')
  expect(body.currency).toEqual('test')
  expect(body.itemPrice).toEqual('test')
  expect(body.shippingPrice).toEqual('test')
  expect(body.shippingTax).toEqual('test')
  expect(body.giftWrapPrice).toEqual('test')
  expect(body.giftWrapTax).toEqual('test')
  expect(body.shipServiceLevel).toEqual('test')
  expect(body.shippingCity).toEqual('test')
  expect(body.shippingState).toEqual('test')
  expect(body.shippingPostalCode).toEqual('test')
  expect(body.shippingCountryCode).toEqual('test')
  expect(body.itemPromoDiscount).toEqual('test')
  expect(body.shipmentPromoDiscount).toEqual('test')
  expect(body.carrier).toEqual('test')
  expect(body.trackingNumber).toEqual('test')
  expect(body.estArrivalDate).toEqual('test')
  expect(body.fc).toEqual('test')
  expect(body.fulfillmentChannel).toEqual('test')
  expect(body.salesChannel).toEqual('test')
})

test('PUT /orders/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ orderId: 'test', purchaseDate: 'test', paymentsDate: 'test', shipmentDate: 'test', sku: 'test', title: 'test', shippedQuantity: 'test', currency: 'test', itemPrice: 'test', shippingPrice: 'test', shippingTax: 'test', giftWrapPrice: 'test', giftWrapTax: 'test', shipServiceLevel: 'test', shippingCity: 'test', shippingState: 'test', shippingPostalCode: 'test', shippingCountryCode: 'test', itemPromoDiscount: 'test', shipmentPromoDiscount: 'test', carrier: 'test', trackingNumber: 'test', estArrivalDate: 'test', fc: 'test', fulfillmentChannel: 'test', salesChannel: 'test' })
  expect(status).toBe(404)
})

test('DELETE /orders/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${orders.id}`)
  expect(status).toBe(204)
})

test('DELETE /orders/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
