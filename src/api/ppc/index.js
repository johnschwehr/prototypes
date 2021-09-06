import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import { importPpc } from "./import";
export Ppc, { schema } from './model'

const router = new Router()
const { date, portfolio, currency, campaign, adGroup, targeting, matchType, impressions, clicks, ctr, cpc, spend, tacos, troas, d7TotalSales, d7TotalOrders, d7TotalUnits, d7Conversion, d7AdvertisedSkuUnits, d7OtherSkuUnits, d7AdvertisedSkuSales, d7OtherSkuSales } = schema.tree

/** 
 * @api {post} /ppcs/import Import ppc using uploaded file
 * @apiName ImportPpc
 * @apiGroup Ppc
 * @apiParam fileName Uploaded file name.
 * @apiSuccess {Object} ppc Ppc's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ppc not found.
 * 
 */
 router.post("/upload", (req, res) => {
  importPpc(`${__dirname}/uploads/${req.body.fileName}`);
  res.json({})
});

/**
 * @api {post} /ppcs Create ppc
 * @apiName CreatePpc
 * @apiGroup Ppc
 * @apiParam date Ppc's date.
 * @apiParam portfolio Ppc's portfolio.
 * @apiParam currency Ppc's currency.
 * @apiParam campaign Ppc's campaign.
 * @apiParam adGroup Ppc's adGroup.
 * @apiParam targeting Ppc's targeting.
 * @apiParam matchType Ppc's matchType.
 * @apiParam impressions Ppc's impressions.
 * @apiParam clicks Ppc's clicks.
 * @apiParam ctr Ppc's ctr.
 * @apiParam cpc Ppc's cpc.
 * @apiParam spend Ppc's spend.
 * @apiParam tacos Ppc's tacos.
 * @apiParam troas Ppc's troas.
 * @apiParam d7TotalSales Ppc's d7TotalSales.
 * @apiParam d7TotalOrders Ppc's d7TotalOrders.
 * @apiParam d7TotalUnits Ppc's d7TotalUnits.
 * @apiParam d7Conversion Ppc's d7Conversion.
 * @apiParam d7AdvertisedSkuUnits Ppc's d7AdvertisedSkuUnits.
 * @apiParam d7OtherSkuUnits Ppc's d7OtherSkuUnits.
 * @apiParam d7AdvertisedSkuSales Ppc's d7AdvertisedSkuSales.
 * @apiParam d7OtherSkuSales Ppc's d7OtherSkuSales.
 * @apiSuccess {Object} ppc Ppc's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ppc not found.
 */
router.post('/',
  body({ date, portfolio, currency, campaign, adGroup, targeting, matchType, impressions, clicks, ctr, cpc, spend, tacos, troas, d7TotalSales, d7TotalOrders, d7TotalUnits, d7Conversion, d7AdvertisedSkuUnits, d7OtherSkuUnits, d7AdvertisedSkuSales, d7OtherSkuSales }),
  create)

/**
 * @api {get} /ppcs Retrieve ppcs
 * @apiName RetrievePpcs
 * @apiGroup Ppc
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of ppcs.
 * @apiSuccess {Object[]} rows List of ppcs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ppcs/:id Retrieve ppc
 * @apiName RetrievePpc
 * @apiGroup Ppc
 * @apiSuccess {Object} ppc Ppc's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ppc not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ppcs/:id Update ppc
 * @apiName UpdatePpc
 * @apiGroup Ppc
 * @apiParam date Ppc's date.
 * @apiParam portfolio Ppc's portfolio.
 * @apiParam currency Ppc's currency.
 * @apiParam campaign Ppc's campaign.
 * @apiParam adGroup Ppc's adGroup.
 * @apiParam targeting Ppc's targeting.
 * @apiParam matchType Ppc's matchType.
 * @apiParam impressions Ppc's impressions.
 * @apiParam clicks Ppc's clicks.
 * @apiParam ctr Ppc's ctr.
 * @apiParam cpc Ppc's cpc.
 * @apiParam spend Ppc's spend.
 * @apiParam tacos Ppc's tacos.
 * @apiParam troas Ppc's troas.
 * @apiParam d7TotalSales Ppc's d7TotalSales.
 * @apiParam d7TotalOrders Ppc's d7TotalOrders.
 * @apiParam d7TotalUnits Ppc's d7TotalUnits.
 * @apiParam d7Conversion Ppc's d7Conversion.
 * @apiParam d7AdvertisedSkuUnits Ppc's d7AdvertisedSkuUnits.
 * @apiParam d7OtherSkuUnits Ppc's d7OtherSkuUnits.
 * @apiParam d7AdvertisedSkuSales Ppc's d7AdvertisedSkuSales.
 * @apiParam d7OtherSkuSales Ppc's d7OtherSkuSales.
 * @apiSuccess {Object} ppc Ppc's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ppc not found.
 */
router.put('/:id',
  body({ date, portfolio, currency, campaign, adGroup, targeting, matchType, impressions, clicks, ctr, cpc, spend, tacos, troas, d7TotalSales, d7TotalOrders, d7TotalUnits, d7Conversion, d7AdvertisedSkuUnits, d7OtherSkuUnits, d7AdvertisedSkuSales, d7OtherSkuSales }),
  update)

/**
 * @api {delete} /ppcs/:id Delete ppc
 * @apiName DeletePpc
 * @apiGroup Ppc
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ppc not found.
 */
router.delete('/:id',
  destroy)

export default router
