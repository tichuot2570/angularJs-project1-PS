
import { Component } from '@angular/core';
import { IProduct } from './product';
import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    //event binding
    showImage: boolean = false;
    //use get-set for filtering
    _listFilter: string;
    //when the data binding needs the value, it will call the getter and get the value
    get listFilter(){
        return this._listFilter;
    }
    //everytime the user modifies the value, the data binding calls the setter, passing in the changed value
    //if we wanna perform some logic everytime the value is changed, we can add it here in the setter
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }

    //7.filtering a list
    filteredProducts: IProduct[];
    products: IProduct[] = [{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }];
    //the best place to set default values for more complex properties is in the class constructor.
    //Class constructor is a function executed when the component is first initialized.
    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        //Let's look closer at the filter method call. We are using the array filter method filter method to create
        //a new array with elements that pass the test defined in the provided function. 
        // use the ES 2015 arrow syntax to define that filter function. For each product in the list, 
        //the product name is converted to lowercase and index OF is used to determine if 
        //the filter text is found in the product name- If so, the element is added to the filtered list.
        //check filter and IndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        return this.products.filter((product:IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    //showImage button is actived to hide images
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In OnInit');
    }
}