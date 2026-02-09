
import { Injectable , signal ,computed } from '@angular/core';



export interface CartItem {
  product: any;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserCartService {

  

    private _items = signal<CartItem[]>([]);

  // Expose readonly items
  get items() {
    return this._items;
  }

  // Total number of items in cart
  totalItems = computed(() =>
    this._items().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice =computed(()=>{
     return this._items().reduce((sum,item)=>sum+( item.product.price * item.quantity),0)
  })

  addProduct(product: any) {
    const current = this._items();
    const existingIndex = current.findIndex(i => i.product.product_id === product.product_id);
    if (existingIndex !== -1) {
      // Update quantity
      this._items.update(items => {
        const copy = [...items];
        copy[existingIndex] = { ...copy[existingIndex], quantity: copy[existingIndex].quantity + 1 };
        return copy;
      });
    } else {
      this._items.update(items => [...items, { product, quantity: 1  }]);
    }

    console.log("fromm user cartlsit add procut : " , this._items());
    
  }

  removeProduct(product: any) {
    this._items.update(items =>
      items.filter(i => i.product.product_id !== product.product_id)
    );
  }

  increment(product: any) {
    const current = this._items();
    const index = current.findIndex(i => i.product.product_id === product.product_id);
    if (index !== -1) {
      this._items.update(items => {
        const copy = [...items];
        copy[index] = { ...copy[index], quantity: copy[index].quantity + 1 };
        return copy;
      });
    }
  }

  decrement(product: any) {
    const current = this._items();
    const index = current.findIndex(i => i.product.product_id === product.product_id);
    if (index !== -1) {
      const item = current[index];
      if (item.quantity > 1) {
        this._items.update(items => {
          const copy = [...items];
          copy[index] = { ...copy[index], quantity: copy[index].quantity - 1 };
          return copy;
        });
      } else {
        this.removeProduct(product);
      }
    }
  }
}
