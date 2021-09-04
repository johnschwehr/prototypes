import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Orders, { schema } from "./model";

const router = new Router();
const {
  orderId,
  purchaseDate,
  paymentsDate,
  shipmentDate,
  sku,
  title,
  shippedQuantity,
  currency,
  itemPrice,
  itemTax,
  shippingPrice,
  shippingTax,
  giftWrapPrice,
  giftWrapTax,
  shipServiceLevel,
  shippingCity,
  shippingState,
  shippingPostalCode,
  shippingCountryCode,
  itemPromoDiscount,
  shipmentPromoDiscount,
  carrier,
  trackingNumber,
  estArrivalDate,
  fc,
  fulfillmentChannel,
  salesChannel,
} = schema.tree;

/**
 * @api {post} /orders Create orders
 * @apiName CreateOrders
 * @apiGroup Orders
 * @apiParam orderId Orders's orderId.
 * @apiParam purchaseDate Orders's purchaseDate.
 * @apiParam paymentsDate Orders's paymentsDate.
 * @apiParam shipmentDate Orders's shipmentDate.
 * @apiParam sku Orders's sku.
 * @apiParam title Orders's title.
 * @apiParam shippedQuantity Orders's shippedQuantity.
 * @apiParam currency Orders's currency.
 * @apiParam itemPrice Orders's itemPrice.
 * @apiParam itemTax Orders's itemTax.
 * @apiParam shippingPrice Orders's shippingPrice.
 * @apiParam shippingTax Orders's shippingTax.
 * @apiParam giftWrapPrice Orders's giftWrapPrice.
 * @apiParam giftWrapTax Orders's giftWrapTax.
 * @apiParam shipServiceLevel Orders's shipServiceLevel.
 * @apiParam shippingCity Orders's shippingCity.
 * @apiParam shippingState Orders's shippingState.
 * @apiParam shippingPostalCode Orders's shippingPostalCode.
 * @apiParam shippingCountryCode Orders's shippingCountryCode.
 * @apiParam itemPromoDiscount Orders's itemPromoDiscount.
 * @apiParam shipmentPromoDiscount Orders's shipmentPromoDiscount.
 * @apiParam carrier Orders's carrier.
 * @apiParam trackingNumber Orders's trackingNumber.
 * @apiParam estArrivalDate Orders's estArrivalDate.
 * @apiParam fc Orders's fc.
 * @apiParam fulfillmentChannel Orders's fulfillmentChannel.
 * @apiParam salesChannel Orders's salesChannel.
 * @apiSuccess {Object} orders Orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Orders not found.
 */
router.post(
  "/",
  body({
    orderId,
    purchaseDate,
    paymentsDate,
    shipmentDate,
    sku,
    title,
    shippedQuantity,
    currency,
    itemPrice,
    itemTax,
    shippingPrice,
    shippingTax,
    giftWrapPrice,
    giftWrapTax,
    shipServiceLevel,
    shippingCity,
    shippingState,
    shippingPostalCode,
    shippingCountryCode,
    itemPromoDiscount,
    shipmentPromoDiscount,
    carrier,
    trackingNumber,
    estArrivalDate,
    fc,
    fulfillmentChannel,
    salesChannel,
  }),
  create
);

/**
 * @api {get} /orders Retrieve orders
 * @apiName RetrieveOrders
 * @apiGroup Orders
 * @apiUse listParams
 * @apiSuccess {Object[]} orders List of orders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /orders/:id Retrieve orders
 * @apiName RetrieveOrders
 * @apiGroup Orders
 * @apiSuccess {Object} orders Orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Orders not found.
 */
router.get("/:id", show);

/**
 * @api {put} /orders/:id Update orders
 * @apiName UpdateOrders
 * @apiGroup Orders
 * @apiParam orderId Orders's orderId.
 * @apiParam purchaseDate Orders's purchaseDate.
 * @apiParam paymentsDate Orders's paymentsDate.
 * @apiParam shipmentDate Orders's shipmentDate.
 * @apiParam sku Orders's sku.
 * @apiParam title Orders's title.
 * @apiParam shippedQuantity Orders's shippedQuantity.
 * @apiParam currency Orders's currency.
 * @apiParam itemPrice Orders's itemPrice.
 * @apiParam itemTax Orders's itemTax.
 * @apiParam shippingPrice Orders's shippingPrice.
 * @apiParam shippingTax Orders's shippingTax.
 * @apiParam giftWrapPrice Orders's giftWrapPrice.
 * @apiParam giftWrapTax Orders's giftWrapTax.
 * @apiParam shipServiceLevel Orders's shipServiceLevel.
 * @apiParam shippingCity Orders's shippingCity.
 * @apiParam shippingState Orders's shippingState.
 * @apiParam shippingPostalCode Orders's shippingPostalCode.
 * @apiParam shippingCountryCode Orders's shippingCountryCode.
 * @apiParam itemPromoDiscount Orders's itemPromoDiscount.
 * @apiParam shipmentPromoDiscount Orders's shipmentPromoDiscount.
 * @apiParam carrier Orders's carrier.
 * @apiParam trackingNumber Orders's trackingNumber.
 * @apiParam estArrivalDate Orders's estArrivalDate.
 * @apiParam fc Orders's fc.
 * @apiParam fulfillmentChannel Orders's fulfillmentChannel.
 * @apiParam salesChannel Orders's salesChannel.
 * @apiSuccess {Object} orders Orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Orders not found.
 */
router.put(
  "/:id",
  body({
    orderId,
    purchaseDate,
    paymentsDate,
    shipmentDate,
    sku,
    title,
    shippedQuantity,
    currency,
    itemPrice,
    itemTax,
    shippingPrice,
    shippingTax,
    giftWrapPrice,
    giftWrapTax,
    shipServiceLevel,
    shippingCity,
    shippingState,
    shippingPostalCode,
    shippingCountryCode,
    itemPromoDiscount,
    shipmentPromoDiscount,
    carrier,
    trackingNumber,
    estArrivalDate,
    fc,
    fulfillmentChannel,
    salesChannel,
  }),
  update
);

/**
 * @api {delete} /orders/:id Delete orders
 * @apiName DeleteOrders
 * @apiGroup Orders
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Orders not found.
 */
router.delete("/:id", destroy);

export default router;
