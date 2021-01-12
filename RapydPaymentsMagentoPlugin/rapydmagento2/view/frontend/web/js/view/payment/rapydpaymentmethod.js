/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'rapyd_bank',
                component: 'rapyd_rapydmagento2/js/view/payment/method-renderer/rapydpaymentmethod-bank'
            },
            {
                type: 'rapyd_cash',
                component: 'rapyd_rapydmagento2/js/view/payment/method-renderer/rapydpaymentmethod-cash'
            },
            {
                type: 'rapyd_card',
                component: 'rapyd_rapydmagento2/js/view/payment/method-renderer/rapydpaymentmethod-card'
            },
            {
                type: 'rapyd_ewallet',
                component: 'rapyd_rapydmagento2/js/view/payment/method-renderer/rapydpaymentmethod-ewallet'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
