class Function {
    /**
   * Check whether user is on main page of website
   * @method isOnMainPage
   * @return boolean
   */
    isMainPage () {
        return document.querySelectorAll('body.home').length > 0;
    }

    /**
   * Check whether user is on product detail page of website
   * @method isOnProductPage
   * @return boolean
   */
    isProductPage () {
        return document.querySelectorAll('body.product').length > 0;
    }

    /**
   * Check whether user is on any category page of website (excluding search pages)
   * @method isOnCategoryPage
   * @return LogicalExpression
   */
    isCategoryPage () {
        return document.querySelectorAll('body.category').length > 0;
    }

    /**
   * Check whether user is on "successfully registered" page.
   * @method isOnRegSuccessPage
   * @return boolean
   */
    isRegSuccessPage () {
        return false;
    }

    /**
   * Check whether user is logged or not
   * @method isUserLoggedIn
   * @return boolean
   */
    isUserLogged () {
        return false;
    }

    /**
   * Check whether user is on cart page of website
   * @method isOnCartPage
   * @return boolean
   */
    isCartPage () {
        return document.querySelectorAll('body.cart').length > 0;
    }

    /**
   * Check whether user is on coupon page of website
   * @method isOnCouponPage
   * @return boolean
   */
    isCouponPage () {
        return document.querySelectorAll('body.coupon').length > 0;
    }

    /**
   * useCouponButton
   * @method useCouponButton
   * @return Object
   */
    couponCode () {
        const couponButton = {};

        couponButton.button = '';
        couponButton.couponInput = '';
        couponButton.couponInputText = '';
        couponButton.buttonClick = '';

        return couponButton;
    }

    /**
   * @method isCouponCodeApplied
   * @returns boolean
   */
    isCouponCodeApplied () {
        return true;
    }

    /**
   * Check whether user is on after payment page of website
   * @method isOnAfterPaymentPage
   * @returns boolean
   */
    isAfterPaymentPage () {
        return document.querySelectorAll('body.success-page').length > 0;
    }

    /**
   * Get language of the website
   * @method getLang
   * @return string
   */
    getLang () {
        return 'tr_TR';
    }

    /**
   * Get currency of the website
   * @method getCurrency
   * @return string
   */
    getCurrency () {
        return 'TRY';
    }

    /**
   * Get Order ID
   * @method getOrderId
   * @return string
   */
    getOrderId () {
        return '';
    }

    /**
   * Get search keyword if users is on search page
   * @method getSearchKeyWords
   * @return string
   */
    getSearchText () {
        return false;
    }

    /**
   * Get sub-categories of active category
   * @method getCategories
   * @returns {Array}
   */
    getCategories () {
        return [];
    }

    /**
   * Get product object
   * Returns false if user not on the product page
   * @method getProductCategories
   * @return array[string]
   */
    getProductCategories () {
        return [];
    }

    /**
   * Get product object
   * Returns false if user not on the product page
   *
   * @method getCurrentProduct
   * @return Object|false
   */
    getCurrentProduct () {
        return {
            id: '',
            name: '',
            img: '',
            url: window.location.href,
            cats: '',
            quantity: 1
        };
    }

    /**
   * @method getCartCount
   * @returns int
   */
    getCartCount () {
        return 1;
    }

    /**
   * Get total cart amount
   * @method getTotalCartAmount
   * @return number|float
   */
    getTotalCartAmount () {
        return 0;
    }

    /**
   * Get paid product(s) lists
   * Returns empty array if user not on the cart page
   * @method getPaidProducts
   * @return array[Object]
   */
    getPaidProducts () {
        return [];
    }

    /**
   * Slider Settings Handler
   * @method sliderSettings
   */
    sliderSettings () {
    /** Geliştirici Notu: Extra system rules taskında geliştirilecek. */
        return {
            /**
       * isElementInSlider
       * @method isElementInSlider
       * @return boolean
       */
            isElementInSlider: function () {
                return false;
            },

            /**
       * getImageList
       * @method getImageList
       * @return array[Object]
       */
            getImageList: function () {
                return [];
            },

            /**
       * triggerClick
       * @method triggerClick
       * @return boolean
       */
            triggerClick: function () {
            },

            /**
       * changeSlider
       * @method changeSlider
       */
            changeSlider: function () {}
        };
    }

    categorySettings () {
        return {
            getCategoryList: function () {
                return [];
            },

            triggerClick: function () {
            },

            changeCategory: function () {},

            getElementCategoryText: function () {
                return false;
            }
        };
    }

    /**
   * Invokes lister for triggerCartButtons.
   * Intercepts (or listens) all network requests, searches for pattern and console.logs result
   * @method triggerCartButton
   */
    triggerCartButton () {

    }

    /**
   * Creates listener for add to cart button
   * @method spAddToCartHandler
   */
    whenAddToCart () {

    }
}

export default new Function;
