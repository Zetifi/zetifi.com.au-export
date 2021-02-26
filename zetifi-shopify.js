window.shopifyClient = window.ShopifyBuy.buildClient({
    domain: 'agrinet-com-au.myshopify.com',
    storefrontAccessToken: '518069861ac1d9415dadb00b056e411b', // previously apiKey, now deprecated
});
window.shopifyUI = window.ShopifyBuy.UI.init(window.shopifyClient);
window.shopifyUI.createComponent('cart', {
    options: {
      "cart": {
        "styles": {
          "button": {
            "font-family": "Montserrat, sans-serif",
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#243082"
            },
            "background-color": "#283590",
            ":focus": {
              "background-color": "#243082"
            }
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        },
        "popup": false,
        "googleFonts": [
          "Montserrat"
        ]
      },
      "toggle": {
        "styles": {
          "toggle": {
            "font-family": "Montserrat, sans-serif",
            "background-color": "#283590",
            ":hover": {
              "background-color": "#243082"
            },
            ":focus": {
              "background-color": "#243082"
            }
          },
          "count": {
            "font-size": "16px"
          }
        },
        "googleFonts": [
          "Montserrat"
        ]
      }
      },
  })