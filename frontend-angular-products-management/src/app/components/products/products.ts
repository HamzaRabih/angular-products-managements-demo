import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProductService} from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products  implements OnInit{

  products : any ;


  constructor(private prodService:ProductService) {
  }

  ngOnInit(): void {
   this.getAllProducts()
  }

  handelDelete(product: any) {
    let v=confirm('êtes vous sûre ?')
    if (v){
      this.prodService.deleteProduct(product).subscribe(
        {
          next:value => {
            this.getAllProducts();
          },error: err => {
            console.log(err)
          }
        }
      );
    }
  }

  private getAllProducts() {
    this.prodService.getAllProducts().subscribe({
      next: resp => {
        this.products=resp;
      },error : err => {
        console.log(err);
      }
    })
  }
}
