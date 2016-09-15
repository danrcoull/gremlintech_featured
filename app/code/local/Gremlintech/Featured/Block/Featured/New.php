<?php
class Gremlintech_Featured_Block_Featured_New extends Mage_Core_Block_Template{


    public function getProductCollection($gender=null)
    {
        $todayDate  = Mage::app()->getLocale()->date()->toString(Varien_Date::DATETIME_INTERNAL_FORMAT);
        $collection = Mage::getModel('catalog/product')->getCollection()
            ->addStoreFilter()
            ->addAttributeToFilter('news_from_date', array('date' => true, 'to' => $todayDate))
            ->addAttributeToFilter('news_to_date', array('or'=> array(
                0 => array('date' => true, 'from' => $todayDate),
                1 => array('is' => new Zend_Db_Expr('null')))
            ), 'left');

        //check if we have any featured
        if(!$collection->count() > 0)
        {
            $collection = Mage::getModel('catalog/product')->getCollection();
        }


        //get the gump for all the prices
        $collection
            ->addAttributeToSelect('*')
            ->addMinimalPrice()
            ->addFinalPrice()
            ->addTaxPercents();

        if($gender)
        {
            $id = Mage::getResourceModel('catalog/product')
                ->getAttribute('gender')
                ->getSource()
                ->getOptionId($gender);
            $collection->addAttributeToFilter('gender',array('eq' => $id));
        }


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