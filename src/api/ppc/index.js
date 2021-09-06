import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Ppc, { schema } from './model'

const router = new Router()
const { date, portfolio, currency, campaign, adGroup, targeting, matchType, impressions, clicks, ctr, cpc, spend, tacos, troas, 7dTotalSales, 7dTotalOrders, 7dTotalUnits, 7dConversion, 7dAdvertisedSkuUnits, 7dOtherSkuUnits, 7dAdvertisedSkuSales, 7dOtherSkuSales } = schema.tree

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
 * @apiParam 7dTotalSales Ppc's 7dTotalSales.
 * @apiParam 7dTotalOrders Ppc's 7dTotalOrders.
 * @apiParam 7dTotalUnits Ppc's 7dTotalUnits.
 * @apiParam 7dConversion Ppc's 7dConversion.
 * @apiParam 7dAdvertisedSkuUnits Ppc's 7dAdvertisedSkuUnits.
 * @apiParam 7dOtherSkuUnits Ppc's 7dOtherSkuUnits.
 * @apiParam 7dAdvertisedSkuSales Ppc's 7dAdvertisedSkuSales.
 * @apiParam 7dOtherSkuSales Ppc's 7dOtherSkuSales.
 * @apiSuccess {Object} ppc Ppc's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ppc not found.
 */
router.post('/',
  body({ date, portfolio, currency, campaign, adGroup, targeting, matchType, impressions, clicks, ctr, cpc, spend, tacos, troas, 7dTotalSales, 7dTotalOrders, 7dTotalUnits, 7dConversion, 7dAdvertisedSkuUnits, 7dOtherSkuUnits, 7dAdvertisedSkuSales, 7dOtherSkuSales }),
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
 * @apiParam 7dTotalSales Ppc's 7dTotalSales.
 * @apiParam 7dTotalOrders Ppc's 7dTotalOrders.
 * @apiParam 7dTotalUnits Ppc's 7dTotalUnits.
 * @apiParam 7dConversion Ppc's 7dConversion.
 * @apiParam 7dAdvertisedSkuUnits Ppc's 7dAdvertisedSkuUnits.
 * @apiParam 7dOtherSkuUnits Ppc's 7dOtherSkuUnits.
 * @apiParam 7dAdvertisedSkuSales Ppc's 7dAdvertisedSkuSales.
 * @apiParam 7dOtherSkuSales Ppc's 7dOtherSkuSales.
 * @apiSuccess {Object} ppc Ppc's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ppc not found.
 */
router.put('/:id',
  body({ date, portfolio, currency, campaign, adGroup, targeting, matchType, impressions, clicks, ctr, cpc, spend, tacos, troas, 7dTotalSales, 7dTotalOrders, 7dTotalUnits, 7dConversion, 7dAdvertisedSkuUnits, 7dOtherSkuUnits, 7dAdvertisedSkuSales, 7dOtherSkuSales }),
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
