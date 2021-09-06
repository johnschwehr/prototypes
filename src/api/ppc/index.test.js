import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Ppc } from '.'

const app = () => express(apiRoot, routes)

let ppc

beforeEach(async () => {
  ppc = await Ppc.create({})
})

test('POST /ppcs 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ date: 'test', portfolio: 'test', currency: 'test', campaign: 'test', adGroup: 'test', targeting: 'test', matchType: 'test', impressions: 'test', clicks: 'test', ctr: 'test', cpc: 'test', spend: 'test', tacos: 'test', troas: 'test', 7dTotalSales: 'test', 7dTotalOrders: 'test', 7dTotalUnits: 'test', 7dConversion: 'test', 7dAdvertisedSkuUnits: 'test', 7dOtherSkuUnits: 'test', 7dAdvertisedSkuSales: 'test', 7dOtherSkuSales: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.date).toEqual('test')
  expect(body.portfolio).toEqual('test')
  expect(body.currency).toEqual('test')
  expect(body.campaign).toEqual('test')
  expect(body.adGroup).toEqual('test')
  expect(body.targeting).toEqual('test')
  expect(body.matchType).toEqual('test')
  expect(body.impressions).toEqual('test')
  expect(body.clicks).toEqual('test')
  expect(body.ctr).toEqual('test')
  expect(body.cpc).toEqual('test')
  expect(body.spend).toEqual('test')
  expect(body.tacos).toEqual('test')
  expect(body.troas).toEqual('test')
  expect(body.7dTotalSales).toEqual('test')
  expect(body.7dTotalOrders).toEqual('test')
  expect(body.7dTotalUnits).toEqual('test')
  expect(body.7dConversion).toEqual('test')
  expect(body.7dAdvertisedSkuUnits).toEqual('test')
  expect(body.7dOtherSkuUnits).toEqual('test')
  expect(body.7dAdvertisedSkuSales).toEqual('test')
  expect(body.7dOtherSkuSales).toEqual('test')
})

test('GET /ppcs 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /ppcs/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${ppc.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ppc.id)
})

test('GET /ppcs/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ppcs/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${ppc.id}`)
    .send({ date: 'test', portfolio: 'test', currency: 'test', campaign: 'test', adGroup: 'test', targeting: 'test', matchType: 'test', impressions: 'test', clicks: 'test', ctr: 'test', cpc: 'test', spend: 'test', tacos: 'test', troas: 'test', 7dTotalSales: 'test', 7dTotalOrders: 'test', 7dTotalUnits: 'test', 7dConversion: 'test', 7dAdvertisedSkuUnits: 'test', 7dOtherSkuUnits: 'test', 7dAdvertisedSkuSales: 'test', 7dOtherSkuSales: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ppc.id)
  expect(body.date).toEqual('test')
  expect(body.portfolio).toEqual('test')
  expect(body.currency).toEqual('test')
  expect(body.campaign).toEqual('test')
  expect(body.adGroup).toEqual('test')
  expect(body.targeting).toEqual('test')
  expect(body.matchType).toEqual('test')
  expect(body.impressions).toEqual('test')
  expect(body.clicks).toEqual('test')
  expect(body.ctr).toEqual('test')
  expect(body.cpc).toEqual('test')
  expect(body.spend).toEqual('test')
  expect(body.tacos).toEqual('test')
  expect(body.troas).toEqual('test')
  expect(body.7dTotalSales).toEqual('test')
  expect(body.7dTotalOrders).toEqual('test')
  expect(body.7dTotalUnits).toEqual('test')
  expect(body.7dConversion).toEqual('test')
  expect(body.7dAdvertisedSkuUnits).toEqual('test')
  expect(body.7dOtherSkuUnits).toEqual('test')
  expect(body.7dAdvertisedSkuSales).toEqual('test')
  expect(body.7dOtherSkuSales).toEqual('test')
})

test('PUT /ppcs/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ date: 'test', portfolio: 'test', currency: 'test', campaign: 'test', adGroup: 'test', targeting: 'test', matchType: 'test', impressions: 'test', clicks: 'test', ctr: 'test', cpc: 'test', spend: 'test', tacos: 'test', troas: 'test', 7dTotalSales: 'test', 7dTotalOrders: 'test', 7dTotalUnits: 'test', 7dConversion: 'test', 7dAdvertisedSkuUnits: 'test', 7dOtherSkuUnits: 'test', 7dAdvertisedSkuSales: 'test', 7dOtherSkuSales: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ppcs/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${ppc.id}`)
  expect(status).toBe(204)
})

test('DELETE /ppcs/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
