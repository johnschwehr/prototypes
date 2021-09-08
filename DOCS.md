# brickmakr v0.0.0



- [Orders](#orders)
	- [Create orders](#create-orders)
	- [Delete orders](#delete-orders)
	- [Retrieve orders](#retrieve-orders)
	- [Update orders](#update-orders)
	


# Orders

## Create orders



	POST /orders


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| orderId			| 			|  <p>Orders's orderId.</p>							|
| purchaseDate			| 			|  <p>Orders's purchaseDate.</p>							|
| paymentsDate			| 			|  <p>Orders's paymentsDate.</p>							|
| shipmentDate			| 			|  <p>Orders's shipmentDate.</p>							|
| sku			| 			|  <p>Orders's sku.</p>							|
| title			| 			|  <p>Orders's title.</p>							|
| shippedQuantity			| 			|  <p>Orders's shippedQuantity.</p>							|
| currency			| 			|  <p>Orders's currency.</p>							|
| itemPrice			| 			|  <p>Orders's itemPrice.</p>							|
| shippingPrice			| 			|  <p>Orders's shippingPrice.</p>							|
| shippingTax			| 			|  <p>Orders's shippingTax.</p>							|
| giftWrapPrice			| 			|  <p>Orders's giftWrapPrice.</p>							|
| giftWrapTax			| 			|  <p>Orders's giftWrapTax.</p>							|
| shipServiceLevel			| 			|  <p>Orders's shipServiceLevel.</p>							|
| shippingCity			| 			|  <p>Orders's shippingCity.</p>							|
| shippingState			| 			|  <p>Orders's shippingState.</p>							|
| shippingPostalCode			| 			|  <p>Orders's shippingPostalCode.</p>							|
| shippingCountryCode			| 			|  <p>Orders's shippingCountryCode.</p>							|
| itemPromoDiscount			| 			|  <p>Orders's itemPromoDiscount.</p>							|
| shipmentPromoDiscount			| 			|  <p>Orders's shipmentPromoDiscount.</p>							|
| carrier			| 			|  <p>Orders's carrier.</p>							|
| trackingNumber			| 			|  <p>Orders's trackingNumber.</p>							|
| estArrivalDate			| 			|  <p>Orders's estArrivalDate.</p>							|
| fc			| 			|  <p>Orders's fc.</p>							|
| fulfillmentChannel			| 			|  <p>Orders's fulfillmentChannel.</p>							|
| salesChannel			| 			|  <p>Orders's salesChannel.</p>							|

## Delete orders



	DELETE /orders/:id


## Retrieve orders



	GET /orders


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update orders



	PUT /orders/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| orderId			| 			|  <p>Orders's orderId.</p>							|
| purchaseDate			| 			|  <p>Orders's purchaseDate.</p>							|
| paymentsDate			| 			|  <p>Orders's paymentsDate.</p>							|
| shipmentDate			| 			|  <p>Orders's shipmentDate.</p>							|
| sku			| 			|  <p>Orders's sku.</p>							|
| title			| 			|  <p>Orders's title.</p>							|
| shippedQuantity			| 			|  <p>Orders's shippedQuantity.</p>							|
| currency			| 			|  <p>Orders's currency.</p>							|
| itemPrice			| 			|  <p>Orders's itemPrice.</p>							|
| shippingPrice			| 			|  <p>Orders's shippingPrice.</p>							|
| shippingTax			| 			|  <p>Orders's shippingTax.</p>							|
| giftWrapPrice			| 			|  <p>Orders's giftWrapPrice.</p>							|
| giftWrapTax			| 			|  <p>Orders's giftWrapTax.</p>							|
| shipServiceLevel			| 			|  <p>Orders's shipServiceLevel.</p>							|
| shippingCity			| 			|  <p>Orders's shippingCity.</p>							|
| shippingState			| 			|  <p>Orders's shippingState.</p>							|
| shippingPostalCode			| 			|  <p>Orders's shippingPostalCode.</p>							|
| shippingCountryCode			| 			|  <p>Orders's shippingCountryCode.</p>							|
| itemPromoDiscount			| 			|  <p>Orders's itemPromoDiscount.</p>							|
| shipmentPromoDiscount			| 			|  <p>Orders's shipmentPromoDiscount.</p>							|
| carrier			| 			|  <p>Orders's carrier.</p>							|
| trackingNumber			| 			|  <p>Orders's trackingNumber.</p>							|
| estArrivalDate			| 			|  <p>Orders's estArrivalDate.</p>							|
| fc			| 			|  <p>Orders's fc.</p>							|
| fulfillmentChannel			| 			|  <p>Orders's fulfillmentChannel.</p>							|
| salesChannel			| 			|  <p>Orders's salesChannel.</p>							|


