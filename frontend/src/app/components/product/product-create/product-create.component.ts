import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router} from'@angular/router';
import { Product } from '../product.model';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name:'',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe( () => {
      console.log("chegou aqui 1")
      this.productService.showMessage('Produto criado!')
      console.log("chegou aqui 2")
      this.router.navigate(['/products'])
      console.log("chegou aqui 3")
    })    
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
