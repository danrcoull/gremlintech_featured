Gremlin Tech Solutions - Magento Featured Products
============================

Description
------------------------------

This module was built for a personal theme, but have extended this to allow easy intergation into almost any theme,
though it will need to be configured manually for now, you will need to change the attribute used and the relivant
calls. Though the css and javascript used are now directly included in the module and been removed from the theme the
 code was being used on.

I have also rectified the use of the product block abstract to minimise the calls required within the block
templates, and updated the html structure to match most other grid modules including rwd.

For those using foundation 6 the equaliser plugin data elements are already in place. The sliders use slick.

Will so extend further for :

1. attribute configuration for new products via admin
2. automatic install of the featured product attribute
3. add other admin config for product collection sizes



Install
-----------------------------

To install using modman run the following commands in your magento root

modman clone https://github.com/danrcoull/gremlintech_featured.git

Or simply download and extract all files over your current magento root.


Demo
----------------

See this working on one of my sites at :

[fashion threads boutique](https://www.fashionthreadsboutique.co.uk)