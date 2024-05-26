
type Size = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductRedy(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }
        return true;
    }

    toString() {
        //No Dry
        // if (this.name.length <= 0) throw Error('name is empaty');
        // if (this.price <= 0) throw Error('name is zero');
        // if (this.size.length <= 0) throw Error('size is empaty');
        if ( !this.isProductRedy ) return;


        return `${this.name}(${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue Pants', 10, 'S');
    console.log(bluePants.toString());
})();