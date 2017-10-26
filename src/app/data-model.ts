export type Response<T> = {
    data: {
        count?: number,
        dataList?: T[],
        values?: T[]
    },
    status?: number,
    message?: string
};

export type  Params = {
    classification_name: string;
    classification_number: string;
    classification_type: string;
    product_manufacturer: string;
    product_brand: string;
    cnf_code: number;
    cluster_number: number;
    product_description: string;
    product_comment: string;
    restaurant_type?:string;
    type?:string;
    product_id?: number;
    offset?: number;
    flag?: boolean;
    orderby?: string;
    classification_list: ClassificationList[];

};


export type  productParams = {
    classificationName: string;
    classificationNumber: string;
    classificationType: string;
    productManufacturer: string;
    productBrand: string;
    cnfCode: number;
    clusterNumber: number;
    productDescription: string;
    productComment: string;
    productId?: number;
    classification_list: ClassificationList[];

};


export class addClass  {
    classificationName= '';    
    classificationNumber= '';
    classificationType= '';
    classificationId?:number;
    productId?: number; 
}

export class classificationList  {
    classification_name= '';    
    classification_number= '';
    classification_type= '';
    classificationId?:number;
    productId?: number; 
}

export class salesYearList  {
    salesYear= '';    
 
}

export const Classification_name = ['First classification', 'Second Classification',''];
export const Classification_number = ['1.0121', '1.0122', '1.0123', ''];

export class ClassificationList{
    classification_name= '';    
    classification_number= ''; 
    classification_type= '';  


}



export type SalesInputFields = {
    salesUpc: string,
    salesDescription: string,
    salesSource: string,
    salesYear: number,
    nielsenCategory: string, 
    salesComment: string,
    collectionDateFrom: string,
    collectionDateTo: string,
    productId: number,
    offset: number,
    flag: boolean,
    orderBy: string
};

export type SalesData = {
    salesUpc: string,
    salesDescription: string,
    salesSource: string,
    salesYear: number,
    nielsenCategory: string, 
    dollarVolume: number,
    kiloVolume: number,
    productId: number
};

export type LabelInputFields ={
    labelUpc: string,
    labelDescription: string,
    labelSource: string, 
    labelIngredients: string,
    collectionDateFrom: string,
    collectionDateTo: string,
    productId: number,
    offset: number,
    flag: boolean,
    orderBy: string
};

export type LabelData = {
    labelUpc: string,
    labelDescription: string,
    labelSource: string,
    labelCollectionDate: string,
    labelLastEditDate: string,
    labelLastEditedDate: string,
    labelLastEditedBy: string, 
    productId: number

}

export type InsertDataMessage = {
    
    status: number,
    message: string
}

export type  SearchAllInputFields = {
 //Produt Fields    
    product_description: string,
    product_manufacturer: string,
    product_brand: string,
    classification_name: string,
    classification_number: string,
    classification_type: string,
    cnf_code: number,
    cluster_number: number,
    product_comment: string,

    restaurant_type?:string,
    type?:string,
 //Market Share Fields

    sales_upc: string,
    sales_description: string,
    sales_year: number,
    nielsen_category: string, 
    sales_source: string,
    sales_collection_date_from: string,
    sales_collection_date_to: string,
    dollar_rank_from:number,
    dollar_rank_to:number,
    sales_comment: string,

//Labels Fields


    label_upc: string,
    label_description: string,
    label_source: string, 
    label_ingredients: string,
    label_collection_date_from: string,
    label_collection_date_to: string,
    label_comment:string,


    product_id?: number,
    offset?: number,
    flag?: boolean,
    orderby?: string,


};



export type  productAllFields = {
    classification_name: string;
    classification_number: string;
    classification_type: string;
    cluster_number: string;
    cnf_code: number;
    creation_date: string;
    edited_by: string;
    product_comment: string;
    product_brand?:string;
    last_edit_date: string;
    product_description: string;
    product_id: number;
    product_manufacturer:string;
    restaurant_type:string;
    type: string;

};



export type  salesFieldsView = {
    sales_id: number,
    dollar_volume: string;
    nielsen_category: string;
    sales_source: string;
    sales_upc: string;
    sales_year: number;
};

export type  labelFieldsView = {
    label_id: number;
    label_upc: string;
    label_description: string;
    label_collection_date: string;
    label_source: string;
    label_creation_date: string;
    label_last_edited_by: string;
    label_last_edit_date: string;
};




    export type  salesFieldsCreate = {
    product_id:number,    
    sales_description:string,
    sales_upc:string,
    sales_brand:string,
    sales_manufacturer:string,
    dollar_rank:number,
    dollar_volume:number,
    dollar_share:number,
    dollar_volume_percentage_change:number,
    kilo_volume:number,
    kilo_share:number,
    kilo_rank:number,
    kilo_volume_percentage_change:number,
    average_ac_dist:number,
    average_retail_price:number,
    sales_source:string,
    nielsen_category:string,
    sales_year:number,
    control_label_flag: boolean,
    kilo_volume_total:number,
    kilo_volume_rank:number,
    dollar_volume_total:number,
    cluster_number:number,
    product_grouping:number,
    sales_product_description:string,
    classification_number:number,
    classification_type:string,
    sales_comment:string,
    sales_collection_date:string,
    number_of_units:number,
    edited_by:string

    }