
import { Component } from '@angular/core';
import { IProduct } from './product';
import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';
import { error } from 'util';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    // event binding
    showImage: boolean = false;
    errorMessage: string;
    // use get-set for filtering
    _listFilter: string;
    // when the data binding needs the value, it will call the getter and get the value
    get listFilter(){
        return this._listFilter;
    }
    // everytime the user modifies the value, the data binding calls the setter, passing in the changed value
    // if we wanna perform some logic everytime the value is changed, we can add it here in the setter
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }

    // 7.filtering a list
    filteredProducts: IProduct[];
    products: IProduct[] = [];
    // the best place to set default values for more complex properties is in the class constructor.
    // Class constructor is a function executed when the component is first initialized.
    constructor(private _productService: ProductService){
        // this.filteredProducts = this.products;
        // this.listFilter = 'cart';

    }

    onRatingClicked(message: string): void{
            this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        // Let's look closer at the filter method call. We are using the array filter method filter method to create
        // a new array with elements that pass the test defined in the provided function.
        // use the ES 2015 arrow syntax to define that filter function. For each product in the list,
        // the product name is converted to lowercase and index OF is used to determine if
        // the filter text is found in the product name- If so, the element is added to the filtered list.
        // check filter and IndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filternpm st
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // showImage button is actived to hide images
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    // this provides a place to perform any component initialization and a greeat place to retrieve data the template
    // cuz the connstructor will be first initialized, we have to move
    // this.filteredProducts = this.products; to ngInit()
    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe (products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
          error => this.errorMessage = <any>error);
        // this.filteredProducts = this.products;
    }
}
