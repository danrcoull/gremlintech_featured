<?php
class Gremlintech_Featured_Block_Featured extends Mage_Core_Block_Template{

    public function getProductCollection($catid)
    {

        $collection = Mage::getModel('catalog/product')->getCollection()
            ->addAttributeToFilter('featured',1);

        //check if we have any featured
        if(!$collection)
        {
            $collection = Mage::getModel('catalog/product')->getCollection();
        }

        //get the gump for all the prices
        $collection
            ->addAttributeToSelect('*')
            ->addMinimalPrice()
            ->addFinalPrice()
            ->addTaxPercents();


        $category = Mage::getModel('catalog/category')->load($catid);
        $collection->addCategoryFilter($category);

        //cjeck they can be seen
        Mage::getSingleton('catalog/product_status')->addVisibleFilterToCollection($collection);
        Mage::getSingleton('catalog/product_visibility')->addVisibleInCatalogFilterToCollection($collection);

        //lets get the number
        $collection->getSelect()->order(new Zend_Db_Expr('RAND()'));
        $collection->setPageSize(12) ->setCurPage(1);

        $collection->getSelect()
            ->group('e.entity_id');

        return $collection;
    }




}