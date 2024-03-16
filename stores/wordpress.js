import axios from 'axios';
import { defineStore } from 'pinia'

export const useWordpressStore = defineStore('wordpress', {
    state: () => ({
        productCases: [],
        // productsIphone14: [],
        // productsIphone15pro: [],
        // productsIphone14pro: [],
        // productsIphone15: [],
        // productsIphone15fw: [],
        // phone15SiliconeCases:[], 
        // productSubscription: [],
        productBg: [],
        productDetails: [],
        selectedProduct: "",
        consumerKey : 'ck_dedb163e9f588c6e180da3d571ca6d2da207f420',
        consumerSecret : 'cs_673d249f681f18ada1abef173441c45ef78c74c0',
        
    }),
    // mounted() {
    //     this.fetchProducts();
    // },
    actions: {
    //     addToCart() {
    //           const consumerKey = 'ck_dedb163e9f588c6e180da3d571ca6d2da207f420';
    //         const consumerSecret = 'cs_673d249f681f18ada1abef173441c45ef78c74c0';
    //            const authString = 'Basic ' + btoa(consumerKey + ':' + consumerSecret);

    //   const itemToAdd = {
    //     product_id: 8192, // Replace with actual product ID
    //     quantity: 1,
    //   };

    //   axios.post('https://importedproducts.in/wp-json/wc/v3/cart/add', itemToAdd,{headers:{'Authorization':authString}})
    //     .then(response => {
    //       console.log('Item added to cart:', response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error adding item to cart:', error);
    //     });
    // },
       async addToCart(productId = '7456', quantity = 1) {
        const url = `https://importedproducts.in/wp-json/wc/v3/cart/add`;
            const consumerKey = this.$state.consumerKey;
            
        const consumerSecret = this.$state.consumerSecret;
            try {
                const response = await axios.post(
                url,
                {
                    product_id: productId,
                    quantity: quantity,
                },
                {
                    auth: {
                    username: consumerKey,
                    password: consumerSecret,
                    },
                }
                );
                console.log('Product added to cart:', response.data);
            } catch (error) {
                console.error('Error adding product to cart:', error);
            }
            },
        async fetchProducts() {
            console.log(this.$state.consumerKey,'consumer key')
            const authString = 'Basic ' + btoa(this.$state.consumerKey + ':' + this.$state.consumerSecret);

            // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const apiUrl = 'https://importedproducts.in/wp-json/wc/v3/products/8192';
            axios
                .get(apiUrl, {
                    headers: {
                        'Authorization': authString
                    }
                })
                .then(dataProducts => {
                    console.log('data in s', dataProducts);
                    let productName = dataProducts.data.attributes[0].options
                    this.$state.productBg = dataProducts.data.attributes[1].options
                    for (let i = 0; i < this.$state.productBg.length; i++) {
                        this.$state.productBg[i] = JSON.parse(this.$state.productBg[i]);
                    }
                    this.$state.productSubscription = dataProducts.data.attributes[0].options
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        async iphoneProducts() {
            const authString = 'Basic ' + btoa(this.$state.consumerKey + ':' + this.$state.consumerSecret);
            const apiUrl = 'https://importedproducts.in/wp-json/wc/v3/products/7050';
            axios
                .get(apiUrl, {
                    headers: {
                        'Authorization': authString
                    }
                })
                .then(dataProducts => {
                    console.log('data in s', dataProducts.data.attributes[0].options);
                    this.$state.productCases = dataProducts.data.attributes[0].options
                    for (let i = 0; i < this.$state.productCases.length; i++) {
                        this.$state.productCases[i] = JSON.parse(this.$state.productCases[i]);
                    }
                    console.log(this.$state.productCases, 'iphone');
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
    async fetchIphoneCases() {
            const authString = 'Basic ' + btoa(this.$state.consumerKey + ':' + this.$state.consumerSecret);
            const apiUrl = 'https://importedproducts.in/wp-json/wc/v3/products/7050';
            axios
                .get(apiUrl, {
                    headers: {
                        'Authorization': authString
                    }
                })
                .then(dataProducts => {
                    console.log('data in s', dataProducts.data.attributes[2].options);
                    this.$state.productsIphone14 = dataProducts.data.attributes[2].options
                    for (let i = 0; i < this.$state.productsIphone14.length; i++) {
                        this.$state.productsIphone14[i] = JSON.parse(this.$state.productsIphone14[i]);
                    }
                    console.log(this.$state.productsIphone14, 'iphone');
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
            // async fetch15Sillicone() {
            //     const authString = 'Basic' + btoa(this.$state.consumerKey + ':' + this.$state.consumerSecret);
            //     const apiUrl = 'https://importedproducts.in/wp-json/wc/v3/products/7456';
            //     axios
            //         .get(apiUrl, {
            //             headers: {
            //                 'Authorization': authString
            //             }
            //         })
            //         .then(dataProducts1 => {
            //             console.log('data in IPHONE 15  ', dataProducts1.data.attributes[0]);
            //             this.$state.Cases = dataProducts1.data.attributes[0]    
            //             for (let i = 0; i < this.$state.productsIphone15.length; i++) {
            //                 this.$state.productsIphone15[i] = JSON.parse(this.$state.productsIphone15[i]);
            //             }   
            //             console.log(this.$state.productsIphone15,'IPHONE15 sillicone');
            //         })
            //         .catch(error => {
            //             console.error('Error fetching cases:', error);
            //         });
            // },
        async fetchDetails(id,id2) {
            
            const authString = 'Basic ' + btoa(this.$state.consumerKey + ':' + this.$state.consumerSecret);

            const apiUrl = 'https://importedproducts.in/wp-json/wc/v3/products/' + id;
            
            axios
                .get(apiUrl, {
                    headers: {
                        'Authorization': authString
                    }
                })
                .then(dataProducts => {
                    console.log('data in id1', dataProducts.data.attributes[2].options);
                    this.$state.productDetails = dataProducts.data.attributes[2].options
                    for (let i = 0; i < this.$state.productDetails.length; i++) {
                        this.$state.productDetails[i] = JSON.parse(this.$state.productDetails[i]);
                    }
                    if (id2) {
                        this.id2(id2);
                    }
                    console.log(this.$state.productDetails,'details in store')
                })
                .catch(error => {
                    
                    console.error('Error fetching products:', error);
                });
        },
        async id2(id) {
            const authString = 'Basic ' + btoa(this.$state.consumerKey + ':' + this.$state.consumerSecret);

             const apiUrl = 'https://importedproducts.in/wp-json/wc/v3/products/' + id;
            
            axios
                .get(apiUrl, {
                    headers: {
                        'Authorization': authString
                    }
                })
                .then(dataProducts => {
                    console.log('data in id2', dataProducts.data.attributes[2].options);
                    this.$state.productDetails = dataProducts.data.attributes[2].options
                    for (let i = 0; i < this.$state.productDetails.length; i++) {
                        this.$state.productDetails[i] = JSON.parse(this.$state.productDetails[i]);
                    }
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        
    }
});